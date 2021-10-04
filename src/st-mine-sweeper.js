import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (object) {
  if(object === undefined){return "object inccorect"}
  let answer = [];

  for(let line = 0; line  < object.length; line++) {
    answer[line] = [];

    for(let row = 0; row < object[line].length; row++) {
      let tmp = 0;
      if(object[line-1] && object[line-1][row-1])tmp++;
      if(object[line-1] && object[line-1][row]) tmp++;
      if(object[line-1] && object[line-1][row+1]) tmp++;
      if(object[line+1]&&object[line+1][row-1]) tmp++;
      if(object[line+1] && object[line+1][row]) tmp++;
      if(object[line+1] && object[line+1][row+1]) tmp++;
      if(object[line][row+1]) tmp++;
      if(object[line][row-1]) tmp++;
      answer[line][row] =tmp;
    }
  }
  return answer;
}
