import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(array) {

  let answer = {};

  for (let i of array) {
    let tmp = i.split(".").reverse();
    for (let j = 0; j < tmp.length; j++) {
      let domain = tmp.slice(0, j+1);
      domain = "." + domain.join(".")
      if(answer[domain]){answer[domain]++}else{
        answer[domain] = 1
      }
    }
  }

  return answer
}
