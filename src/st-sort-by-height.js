import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(array) {
  let answer = []
  let tmp = 0;
  for(let i = 0;i< array.length;i++){
    if(array[i] === -1){
      answer.push(array[i]);
    }
    if(array[i] > -1){
      answer.push(0)
    }
  }
  array = array.filter(item => item > -1).sort(function(a,b) { return  a-b })
  for(let j=0; j<answer.length; j++){
    if(answer[j] === -1){
      continue
    }
    answer[j] = array[tmp]
    tmp++
  }
  return answer;
}
