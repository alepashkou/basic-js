import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns nand time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turnour)
 * @return {Object} object with props turns (number of turns)
 * and secons (time n seconds)
 *
 * @example
 * 
 * calculateHanoi(1, 700) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(diskNum, speed) {
  let hour = 3600;

  let object = {
    turns: 0,
    seconds: 0,
  };

  object.turns= 2**diskNum-1;
  object.seconds= Math.floor(object.turns/(speed/hour));

  return object;
}
