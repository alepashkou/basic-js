import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 
 * @example
 
 * getSeason(newDate(2022, 01, 30)) => 'spring'
 * 
 */
export default function getSeason(dates) {

  if (dates === undefined) return "Unable to determine the time of year!";

  try {dates.toISOString();
  } catch (error) {
    throw new Error('Invalid date!')
  }

  switch (dates.getMonth()) {
    case 0:  return "winter";
    case 1:  return "winter";
    case 2:  return "spring";
    case 3:  return "spring";
    case 4:  return "spring";
    case 5:  return "summer";
    case 6:  return "summer";
    case 7:  return "summer";
    case 8:  return "autumn";
    case 9:  return "autumn";
    case 10: return "autumn";
    case 11: return "winter";
  }

}
