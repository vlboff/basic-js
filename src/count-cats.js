const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let arr = matrix.map(arr => arr.filter(cat => cat === '^^'));
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 0) {
      let x = arr[i].filter(cat => cat === '^^').length;
      counter = counter + x;
    }
  }

  return counter;
}

module.exports = {
  countCats
};

