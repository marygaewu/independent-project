import React from "react";

const exports = {};
const CAPITAL = ["ACCRA", "LOME", "TEXAS", "LONDON", "Kinshasa"];
const COUNTRY = ["Ghana", "Togo", "USA", "UK","Congo"];
exports.GetGuess = class extends React.Component {
  state = { guess: 0 };
  render() {
    const { parent, playable, guess } = this.props;
    return (
      <div>
        {guess ? "It was a Draw, Pick again." : ""}
        <br />
        {!playable ? "Please wait..." : ""}
        <div className="players">
          <h1>Capital Cities: </h1>{" "}
          <ol start= "0">
            <li>ACCRA</li>
            <li>LOME</li>
            <li> TEXAS</li>
            <li>LONDON</li>
            <li>Kinshasa</li>
          </ol>
          <br /> Enter number to guess Country
          <input
            className="input"
            type="number"
            min={0}
            max={5}
            value={this.state.guess}
            onChange={(e) => {
              this.setState({ guess: e.target.value });
            }}
          />
          <button
            className="submit-btn"
            onClick={() => parent.playGuess(this.state.guess)}
          >
            Submit Guess
          </button>
        </div>
      </div>
    );
  }
};

exports.WaitingForResults = class extends React.Component {
  render() {
    return <div>Waiting for results...</div>;
  }
};

exports.Done = class extends React.Component {
  render() {
    const { outcome, num } = this.props;
    return (
      <div>
        The County was : {COUNTRY[num] || "Unknown"}
        <br></br>
        Congratulations
        <br></br>
        The result of the game is:
        <br />
        {outcome || "Unknown"}
      </div>
    );
  }
};

exports.Timeout = class extends React.Component {
  render() {
    return <div>There's been a timeout. (Someone took too long.)</div>;
  }
};

export default exports;
