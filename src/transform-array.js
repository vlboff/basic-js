const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log(arr);
  let newArr = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        i = i + 2;
      } else if (arr[i] === '--discard-prev') {
        newArr.pop();
      }  else if (arr[i] === '--double-next') {
        if (i == arr.length - 1) {
          newArr.push();
        } else {
        newArr.push(arr[i + 1]);
        }
      } else if (arr[i] === '--double-prev') {
        if (typeof arr[i - 1] === 'number'){
        newArr.push(arr[i - 1]);
        }
      } else {newArr.push(arr[i]);}
    }
    return newArr;
  } else {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
}

module.exports = {
  transform
};
