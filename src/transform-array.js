import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 *
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(array) {
  if (array instanceof Array === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  };

  let answer = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] === "--discard-prev") {
    answer.pop();
    } else if (array[i] === "--discard-next") {
      i = i+2;
    } else if (array[i] === "--double-prev") {
      if (i !== 0) {
      answer.push(answer[i-1]);
      }
    } else if (array[i] === "--double-next") {
      if (i !== array.length - 1) {
      answer.push(array[i+1]);
      }
    } else {
      answer.push(array[i]);
    }
  }
  return answer;
}
