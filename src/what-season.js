const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.getOwnPropertyNames(date).length > 0 || !(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();

  if (month > 1 && month < 5) {
    return 'spring';
  } else if (month > 4 && month < 8) {
    return 'summer';
  } else if (month > 7 && month < 11) {
    return 'autumn';
  } else {
    return 'winter';
  }
}

console.log(new Date(866, 2, 10, 12, 53, 10, 825).getMonth());

module.exports = {
  getSeason
};
