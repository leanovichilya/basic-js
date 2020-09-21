const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let minTurns = 2 ** disksNumber - 1;

  return {
    turns: minTurns,
    seconds: Math.floor(minTurns / (turnsSpeed / 3600)),
  };
};
