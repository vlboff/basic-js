const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  let def = {
    separator: '+',
    additionSeparator: '|',
  };
  let newStr = ``;
  let addStr = ``;
  if ('separator' in options && 'additionSeparator' in options) {
    if ('repeatTimes' in options && 'additionRepeatTimes' in options) {

      for (let j = 0; j < options.additionRepeatTimes; j++) {
        if (j < options.additionRepeatTimes - 1) {
          addStr = `${addStr}${options.addition}${options.additionSeparator}`;
        } else {
          addStr = `${addStr}${options.addition}`;
        }
      }

      for (let i = 0; i < options.repeatTimes; i++) {
        if (i < options.repeatTimes - 1) {
          newStr = `${newStr}${str}${addStr}${options.separator}`;
        } else {
          newStr = `${newStr}${str}${addStr}`;
        }
      }
    } else if ('repeatTimes' in options) {

          addStr = `${addStr}${options.addition}`;

      for (let i = 0; i < options.repeatTimes; i++) {
        if (i < options.repeatTimes - 1) {
          newStr = `${newStr}${str}${addStr}${options.separator}`;
        } else {
          newStr = `${newStr}${str}${addStr}`;
        }
      }
    } else if ('additionRepeatTimes' in options) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        if (j < options.additionRepeatTimes - 1) {
          addStr = `${addStr}${options.addition}${options.additionSeparator}`;
        } else {
          addStr = `${addStr}${options.addition}`;
        }
      }
          newStr = `${newStr}${str}${addStr}`;
    } else {
      addStr = `${addStr}${options.addition}`;
      newStr = `${newStr}${str}${addStr}`;
    }
  } else if ('separator' in options) {
    if ('repeatTimes' in options && 'additionRepeatTimes' in options) {
      if ('addition' in options) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          if (j < options.additionRepeatTimes - 1) {
            addStr = `${addStr}${options.addition}${def.additionSeparator}`;
          } else {
            addStr = `${addStr}${options.addition}`;
          }
        }

        for (let i = 0; i < options.repeatTimes; i++) {
          if (i < options.repeatTimes - 1) {
            newStr = `${newStr}${str}${addStr}${options.separator}`;
          } else {
            newStr = `${newStr}${str}${addStr}`;
          }
        }
      } else {
        for (let i = 0; i < options.repeatTimes; i++) {
          if (i < options.repeatTimes - 1) {
            newStr = `${newStr}${str}${options.separator}`;
          } else {
            newStr = `${newStr}${str}`;
          }
        }
      }
    } else if ('repeatTimes' in options) {
      if ('addition' in options) {
            addStr = `${addStr}${options.addition}`;

        for (let i = 0; i < options.repeatTimes; i++) {
          if (i < options.repeatTimes - 1) {
            newStr = `${newStr}${str}${addStr}${options.separator}`;
          } else {
            newStr = `${newStr}${str}${addStr}`;
          }
        }
      } else {
        for (let i = 0; i < options.repeatTimes; i++) {
          if (i < options.repeatTimes - 1) {
            newStr = `${newStr}${str}${options.separator}`;
          } else {
            newStr = `${newStr}${str}`;
          }
        }
      }
    } else if ('additionRepeatTimes' in options) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        if (j < options.additionRepeatTimes - 1) {
          addStr = `${addStr}${options.addition}${def.additionSeparator}`;
        } else {
          addStr = `${addStr}${options.addition}`;
        }
      }
          newStr = `${newStr}${str}${addStr}`;
    } else {
      addStr = `${addStr}${options.addition}`;
      newStr = `${newStr}${str}${addStr}`;
    }
  } else if ('additionSeparator' in options) {
    if ('repeatTimes' in options && 'additionRepeatTimes' in options) {

      for (let j = 0; j < options.additionRepeatTimes; j++) {
        if (j < options.additionRepeatTimes - 1) {
          addStr = `${addStr}${options.addition}${options.additionSeparator}`;
        } else {
          addStr = `${addStr}${options.addition}`;
        }
      }

      for (let i = 0; i < options.repeatTimes; i++) {
        if (i < options.repeatTimes - 1) {
          newStr = `${newStr}${str}${addStr}${def.separator}`;
        } else {
          newStr = `${newStr}${str}${addStr}`;
        }
      }
    } else if ('repeatTimes' in options) {

          addStr = `${addStr}${options.addition}`;

      for (let i = 0; i < options.repeatTimes; i++) {
        if (i < options.repeatTimes - 1) {
          newStr = `${newStr}${str}${addStr}${def.separator}`;
        } else {
          newStr = `${newStr}${str}${addStr}`;
        }
      }
    } else if ('additionRepeatTimes' in options) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        if (j < options.additionRepeatTimes - 1) {
          addStr = `${addStr}${options.addition}${options.additionSeparator}`;
        } else {
          addStr = `${addStr}${options.addition}`;
        }
      }
          newStr = `${newStr}${str}${addStr}`;
    } else {
      addStr = `${addStr}${options.addition}`;
      newStr = `${newStr}${str}${addStr}`;
    }

    ////////////////////////////////////////////
  } else if (options.separator === undefined && options.additionSeparator === undefined) {
    if ('repeatTimes' in options && 'additionRepeatTimes' in options) {
      if ('addition' in options) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          if (j < options.additionRepeatTimes - 1) {
            addStr = `${addStr}${options.addition}${def.additionSeparator}`;
          } else {
            addStr = `${addStr}${options.addition}`;
          }
        }

        for (let i = 0; i < options.repeatTimes; i++) {
          if (i < options.repeatTimes - 1) {
            newStr = `${newStr}${str}${addStr}${def.separator}`;
          } else {
            newStr = `${newStr}${str}${addStr}`;
          }
        }
      } else {
        for (let i = 0; i < options.repeatTimes; i++) {
          if (i < options.repeatTimes - 1) {
            newStr = `${newStr}${str}${def.separator}`;
          } else {
            newStr = `${newStr}${str}`;
          }
        }
      }
    } else if ('repeatTimes' in options) {
      if ('addition' in options){
            addStr = `${addStr}${options.addition}`;

        for (let i = 0; i < options.repeatTimes; i++) {
          if (i < options.repeatTimes - 1) {
            newStr = `${newStr}${str}${addStr}${def.separator}`;
          } else {
            newStr = `${newStr}${str}${addStr}`;
          }
        }
      } else {
        for (let i = 0; i < options.repeatTimes; i++) {
          if (i < options.repeatTimes - 1) {
            newStr = `${newStr}${str}${def.separator}`;
          } else {
            newStr = `${newStr}${str}`;
          }
        }
      }
    } else if ('additionRepeatTimes' in options) {
      if ('addition' in options){
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          if (j < options.additionRepeatTimes - 1) {
            addStr = `${addStr}${options.addition}${def.additionSeparator}`;
          } else {
            addStr = `${addStr}${options.addition}`;
          }
        }
            newStr = `${newStr}${str}${addStr}`;
      } else {
        newStr = `${newStr}${str}`;
      }
    } else {
      if ('addition' in options) {
        addStr = `${addStr}${options.addition}`;
        newStr = `${newStr}${str}${addStr}`;
      } else {
        newStr = `${newStr}${str}`;
      }
    }
  }

  return newStr;
}
console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));
module.exports = {
  repeater
};
