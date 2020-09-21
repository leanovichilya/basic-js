const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  return [].concat(...array).filter((item) => item === '^^').length;
};
