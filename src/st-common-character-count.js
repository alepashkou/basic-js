import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(array1, array2) {
  let count = 0
  let array = array2.split("")
  
  for(let i of array1 ) {
      let tmp = array.indexOf(i)
    if (tmp == -1){continue}
        array.splice(tmp, 1)
        count++    
    }
  return count
}
