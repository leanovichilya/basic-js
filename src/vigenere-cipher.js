const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabet = [];

  constructor(bool) {
    this.bool = bool !== false ? true : false;
  }

  encrypt(input, keyword) {
    this.checkValues(input, keyword);

    this.fillAlphabet(this.alphabet);

    input = input.toUpperCase();
    keyword = keyword.toUpperCase();

    let indexKeyword = 0;
    let encryptWords = '';
    const length = input.length;

    for (let i = 0; i < length; i += 1) {
      if (!this.alphabet.includes(input[i])) {
        encryptWords += input[i];
      } else {
        let index =
          (this.alphabet.indexOf(input[i]) +
            this.alphabet.indexOf(keyword[indexKeyword])) % 26;
        encryptWords += this.alphabet[index];
        indexKeyword += 1;

        indexKeyword = this.checkIndex(indexKeyword, keyword);
      }
    }

    encryptWords = this.reverseWords(encryptWords);

    return encryptWords;
  }

  decrypt(input, keyword) {
    this.checkValues(input, keyword);

    this.fillAlphabet(this.alphabet);

    input = input.toUpperCase();
    keyword = keyword.toUpperCase();

    let decryptWords = '';
    const length = input.length;
    let indexKeyword = 0;

    for (let i = 0; i < length; i += 1) {
      if (!this.alphabet.includes(input[i])) {
        decryptWords += input[i];
      } else {
        let index = Math.abs(
          (this.alphabet.indexOf(input[i]) -
            this.alphabet.indexOf(keyword[indexKeyword]) + 26) % 26
        );
        decryptWords += this.alphabet[index];
        indexKeyword += 1;

        indexKeyword = this.checkIndex(indexKeyword, keyword);
      }
    }

    decryptWords = this.reverseWords(decryptWords);

    return decryptWords;
  }

  checkValues(input, keyword) {
    if (input === undefined || keyword === undefined) {
      throw new Error();
    }
  }

  fillAlphabet(alphabet) {
    let j = 0;

    for (let i = 65; i <= 90; i += 1) {
      alphabet[j] = String.fromCodePoint(i);
      j += 1;
    }

    return alphabet;
  }

  reverseWords(words) {
    if (!this.bool) {
      words = words.split('').reverse().join('');
    }
    return words;
  }

  checkIndex(indexKeyword, keyword) {
    if (indexKeyword === keyword.length) {
      indexKeyword = 0;
    }
    return indexKeyword;
  }
}

module.exports = VigenereCipheringMachine;
