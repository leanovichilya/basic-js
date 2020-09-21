const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let i = 0;

    arr.forEach((item) => {
      if (Array.isArray(item)) {
        i = Math.max(i, this.calculateDepth(item));
      }
    });

    return i += 1;
  };
};
