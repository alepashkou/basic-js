import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 * 
 * 
chainMaker.addLink(1).addLink(2).addLink(3).finishChain() => '( 1 )~~( 2 )~~( 3 )'

chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() => '( 2 )~~( 3 )'

chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain() => '( 2 )~~( 1 )~~( 3 )'
 * 
 * 
 */
export default {

  chains: [],
  getLength() {
    return this.chains.length
  },
  addLink(link) {
    this.chains.push(link);
    return this
  },
  removeLink(pos) {
    if (isNaN(+pos) || this.chains[pos] === undefined ||  pos == "") {
      this.chains =[];
      throw Error("You can't remove incorrect link!");
    }
    this.chains.splice(pos - 1, 1)
    return this
  },
  reverseChain() {
    this.chains.reverse()
    return this;
  },

  finishChain() {
    let temp = "";
    this.chains.map((el, i) => {
      temp += i == 0 ? `( ${el} )` : `~~( ${el} )`;
    });
    this.chains = [];
    return temp
  }
};
