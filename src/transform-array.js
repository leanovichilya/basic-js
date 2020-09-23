const CustomError = require('../extensions/custom-error');

module.exports = function transform(array) {
  if (!Array.isArray(array)) {
    throw Error;
  }

  let double_next = '--double-next';
  let double_prev = '--double-prev';
  let discard_next = '--discard-next';
  let discard_prev = '--discard-prev';
  let transformArray = [...array];
  const length = transformArray.length;

  for (let i = 0; i < length; i += 1) {
    switch (transformArray[i]) {

      case double_prev:
        if (transformArray[i - 1] !== undefined) {
          transformArray[i] = transformArray[i - 1];
        } else {
          transformArray[i] = undefined;
        }
        break;

      case discard_prev:
        if (transformArray[i - 1] !== undefined) {
          transformArray[i - 1] = undefined;
        }
        transformArray[i] = undefined;
        break;

      case double_next:
        if (transformArray[i + 1] !== undefined) {
          transformArray[i] = transformArray[i + 1];
        } else {
          transformArray[i] = undefined;
        }
        break;

      case discard_next:
        if (transformArray[i + 1] !== undefined) {
          transformArray[i + 1] = undefined;
        }
        transformArray[i] = undefined;
        break;
        
    }
  }

  return transformArray.filter((value) => value !== undefined);
};
