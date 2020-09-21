const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  try{
    return array
      .reduce((team, item) => typeof item === 'string' ? team += item.trim()[0].toUpperCase() : team, '')
      .split('')
      .sort()
      .join('');
  } catch (e) {
    return false;
  }
};
