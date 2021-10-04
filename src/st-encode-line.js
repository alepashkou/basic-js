import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(string) {
  if(!typeof string === "string"){
    return "inccorect string"
  }
  let trans = string.split(''), answer = []
  for (let i = 0; i < trans.length; i++) {
    let count = 1
    while (count < trans.length && trans[i + count] === trans[i]) count++
    if (count === 1) answer.push(trans[i])
    else { answer.push(count + trans[i])
      i += count - 1
    }
  }
  let transform = answer.join('')
  return transform
}
