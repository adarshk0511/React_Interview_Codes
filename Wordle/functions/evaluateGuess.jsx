export const evaluateGuess = (guess, target) => {
  const result = Array(guess.length).fill(null);
  const targetArr = target.split("");

  // PASS 1 — Greens
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === targetArr[i]) {
      result[i] = { letter: guess[i], status: "correct" };
      targetArr[i] = null;
    }
  }

  // PASS 2 — Yellows & Grays
  for (let i = 0; i < guess.length; i++) {
    if (result[i]) continue;

    const index = targetArr.indexOf(guess[i]);
    if (index !== -1) {
      result[i] = { letter: guess[i], status: "present" };
      targetArr[index] = null;
    } else {
      result[i] = { letter: guess[i], status: "absent" };
    }
  }

  return result;
};
