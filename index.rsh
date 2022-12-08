"reach 0.1";
const [isOutcome, PlayerOneWins, DRAW, PlayerTwoWins] = makeEnum(3);

const winner = (country, guessPlayerOne, guessPlayerTwo) => {
  if (guessPlayerTwo == guessPlayerOne) {
    return 1;
  } else if (guessPlayerTwo == country) {
    return 0;
  } else if (guessPlayerOne == country) {
    return 2;
  } else {
    return 1;
  }
};

const Player = {
  ...hasRandom,
  getRandomCountry: Fun([], UInt),
  getGuess: Fun([], UInt),
  seeOutcome: Fun([UInt, UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const PlayerOne = Participant("PlayerOne", {
    ...Player,
    amount: UInt,
    deadline: UInt,
  });
  const PlayerTwo = Participant("PlayerTwo", {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();
  const informTimeout = () => {
    each([PlayerOne, PlayerTwo], () => {
      interact.informTimeout();
    });
  };
  PlayerOne.only(() => {
    const amount = declassify(interact.amount);
    const randomPlayerOne = declassify(interact.getRandomCountry());
    const deadline = declassify(interact.deadline);
  });
  PlayerOne.publish(amount, randomPlayerOne, deadline).pay(amount);
  commit();

  PlayerTwo.only(() => {
    interact.acceptWager(amount);
    const randomPlayerTwo = declassify(interact.getRandomCountry());
  });
  PlayerTwo.publish(randomPlayerTwo)
    .pay(amount)
    .timeout(relativeTime(deadline), () => closeTo(PlayerOne, informTimeout));

  const country = (randomPlayerTwo + randomPlayerOne) / 2;
  var outcome = DRAW;
  invariant(balance() == 2 * amount && isOutcome(outcome));

  while (outcome == DRAW) {
    commit();
    PlayerOne.only(() => {
      const _guessPlayerOne = interact.getGuess();
      const [_commitPlayerOne, _saltPlayerOne] = makeCommitment(
        interact,
        _guessPlayerOne
      );
      const commitPlayerOne = declassify(_commitPlayerOne);
    });
    PlayerOne.publish(commitPlayerOne);
    commit();

    unknowable(PlayerTwo, PlayerOne(_guessPlayerOne, _saltPlayerOne));
    PlayerTwo.only(() => {
      const guessPlayerTwo = declassify(interact.getGuess());
    });
    PlayerTwo.publish(guessPlayerTwo).timeout(relativeTime(deadline), () =>
      closeTo(PlayerOne, informTimeout)
    );
    commit();
    PlayerOne.only(() => {
      const saltPlayerOne = declassify(_saltPlayerOne);
      const guessPlayerOne = declassify(_guessPlayerOne);
    });
    PlayerOne.publish(saltPlayerOne, guessPlayerOne).timeout(
      relativeTime(deadline),
      () => closeTo(PlayerTwo, informTimeout)
    );
    checkCommitment(commitPlayerOne, saltPlayerOne, guessPlayerOne);
    outcome = winner(country, guessPlayerOne, guessPlayerTwo);
    continue;
  }

  transfer(2 * amount).to(outcome == 2 ? PlayerOne : PlayerTwo);
  commit();
  each([PlayerOne, PlayerTwo], () => {
    interact.seeOutcome(outcome, country);
  });
});
