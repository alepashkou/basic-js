import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
export default class VigenereCipheringMachine {

constructor (type = true) {
    return this.type = type;
}

encrypt(string, key) {

    if (!string || !key) {throw Error("Incorrect arguments!")}

    string = string.toUpperCase().split("");    
    key = key.toUpperCase();
    var sum = 0, answer = "";
  
    string.forEach(el => {
      const index = alpha.indexOf(el);

      if (index == -1) {
        answer += el;
      } else {
        let letter = key[sum % key.length];
        let indexLetter = alpha.indexOf(letter);
        let num;
        if (index + indexLetter >= 26){
          num = index + indexLetter - 26
        }else {
          num = index + indexLetter
        }
        sum += 1;
        answer += alpha[num];
      }
    });
    
    if (!this.type) {
      return answer.split("").reverse().join("")
    } else {
      return answer
    }

}

  decrypt(string, key) {
    if (!string || !key) {throw new Error("Incorrect arguments!")}

    string = string.toUpperCase().split("");    
    key = key.toUpperCase();
    var sum = 0, answer = "";

    string.forEach(el => {
      const index = alpha.indexOf(el);

      if (index == -1) {
        answer += el;
      } else {
        let letter = key[sum % key.length];
        let indexLetter = alpha.indexOf(letter);
        let num;
        if(index < indexLetter ){
          num = 26 - indexLetter + index
        }else{
          num = index - indexLetter
        }
        sum += 1;
        answer += alpha[num];
      }
    });

    if (!this.type) {
      return answer.split("").reverse().join("")
    } else {
      return answer
    }
    
  }
}
