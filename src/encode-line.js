const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine(str) {
    let arr = [];
    let counter = 1;
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[(i + 1)]){
            counter = counter + 1;
        } else {
            arr.push([counter, str[i]]);
            counter = 1;
        }
    }

    let newStr = '';
    for (let i = 0; i < arr.join().length; i++) {
      if (arr.join()[i] !== ',' && arr.join()[i] !== '1') {
        newStr = `${newStr}${arr.join()[i]}`;
      }
    }

    return newStr;
}

module.exports = {
  encodeLine
};
