import React from "react";
import AppViews from "./views/AppViews";
import DeployerViews from "./views/DeployerViews";
import AttacherViews from "./views/AttacherViews";
import { renderDOM, renderView } from "./views/render";
import "./index.css";
import * as backend from "./build/index.main.mjs";
import {
  loadStdlib,
  ALGO_MyAlgoConnect as MyAlgoConnect,
} from "@reach-sh/stdlib";
const reach = loadStdlib(process.env);

const intToOutcome = ["Player Two Wins", "Draw", "Player One Wins"];
const { standardUnit } = reach;
const defaults = { defaultFundAmt: "10", defaultWager: "3", standardUnit };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "ConnectAccount", ...defaults };
  }
  async componentDidMount() {
    console.log("component mounted");
    reach.setWalletFallback(
      reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
    );
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({ acc, bal });
    if (await reach.canFundFromFaucet()) {
      this.setState({ view: "FundAccount" });
    } else {
      this.setState({ view: "DeployerOrAttacher" });
    }
  }
  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({ view: "DeployerOrAttacher" });
  }
  async skipFundAccount() {
    this.setState({ view: "DeployerOrAttacher" });
  }
  selectAttacher() {
    this.setState({ view: "Wrapper", ContentView: Attacher });
  }
  selectDeployer() {
    this.setState({ view: "Wrapper", ContentView: Deployer });
  }
  render() {
    return renderView(this, AppViews);
  }
}

class Player extends React.Component {
  random() {
    return reach.hasRandom.random();
  }
  async getRandomCountry() {
    const randomCountry = Math.floor(Math.random() * 6);

    return randomCountry;
  }
  async getGuess() {
    const guess = await new Promise((resolveGuessP) => {
      this.setState({ view: "GetGuess", playable: true, resolveGuessP });
    });
    this.setState({ view: "WaitingForResults", guess });
    return guess;
  }

  seeOutcome(i, num) {
    this.setState({
      view: "Done",
      outcome: intToOutcome[i],
      num: "" + num,
    });
  }
  informTimeout() {
    this.setState({ view: "Timeout" });
  }
  playGuess(guess) {
    this.state.resolveGuessP(guess);
  }
}

class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = { view: "SetWager" };
  }
  setWager(amount) {
    this.setState({ view: "Deploy", amount });
  }
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({ view: "Deploying", ctc });
    this.amount = reach.parseCurrency(this.state.amount);
    this.deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];
    backend.PlayerOne(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({ view: "WaitingForAttacher", ctcInfoStr });
  }
  render() {
    return renderView(this, DeployerViews);
  }
}
class Attacher extends Player {
  constructor(props) {
    super(props);
    this.state = { view: "Attach" };
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({ view: "Attaching" });
    backend.PlayerTwo(ctc, this);
  }
  async acceptWager(wagerAtomic) {
    const amount = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise((resolveAcceptedP) => {
      this.setState({ view: "AcceptTerms", amount, resolveAcceptedP });
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({ view: "WaitingForTurn" });
  }
  render() {
    return renderView(this, AttacherViews);
  }
}

renderDOM(<App />);
