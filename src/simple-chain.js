const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value !== undefined) {
      this.chain.push('( ' + value + ' )');
    } else {
      this.chain.push('( )');
    }

    return this;
  },

  removeLink(position) {
    if (position - 1 < 0 || position > chainMaker.getLength() - 1 || typeof position !== 'number') {
      this.chain = [];
      throw(Error);
    }

    delete this.chain[position - 1];
    this.chain = this.chain.filter(item => item !== undefined);

    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let str = this.chain
      .filter(item => item !== undefined)
      .join('~~');
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
