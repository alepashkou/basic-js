import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let  {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
  
  let answer = '';

if(separator === undefined){separator = '+';}
if(addition === undefined){addition = '';}
if(additionSeparator === undefined){additionSeparator = '|';}
if(repeatTimes === undefined){repeatTimes = 1;}
if(additionRepeatTimes === undefined){additionRepeatTimes = 1;}

  for(let i = 1; i <= repeatTimes; i++) {
    answer +=str;
    for(let a = 1; a <= additionRepeatTimes; a++) {
      answer  += a!=additionRepeatTimes ? addition+additionSeparator : addition;
    }
    if(i != repeatTimes) {
      answer +=separator
    }
  }

  return answer 
}
