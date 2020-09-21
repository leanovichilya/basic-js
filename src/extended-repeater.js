const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = str + '';
  let convertStr = '';

  if (options.separator === undefined || typeof options.separator !== 'string') {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined || typeof options.additionSeparator !== 'string') {
    options.additionSeparator = '|';
  }
  if (typeof options.repeatTimes !== 'number') {
    options.repeatTimes = 0;
    options.separator = '';
    convertStr += str + options.addition;
  }

  if (typeof options.additionRepeatTimes !== 'number') {
    options.additionRepeatTimes = 0;
    options.additionSeparator = '';
  }

  for (let i = 0; i < options.additionRepeatTimes; i += 1) {
    str += options.addition;
    if (i !== options.additionRepeatTimes - 1) {
      str += options.additionSeparator;
    }
  }

  for (let i = 0; i < options.repeatTimes; i += 1) {
    convertStr += str;
    if (i !== options.repeatTimes - 1) {
      convertStr += options.separator;
    }
  }

  return convertStr;
};

