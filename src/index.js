module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['(', '{', '[', '1', '3', '5', '7', '8', '|'];
  // const bracketsPair = {
  //   [')']: '(',
  //   ['}']: '{',
  //   [']']: '[',
  //   ['|']: '|',
  //   ['2']: '1',
  //   ['4']: '3',
  //   ['6']: '5',
  //   ['7']: '7',
  //   ['8']: '8'
  // };

  const bracketsPair = {};

  for (let j = 0; j < bracketsConfig.length; j++) {
    bracketsPair[bracketsConfig[j][1]] = bracketsConfig[j][0];
  }

  console.log(bracketsPair);

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if(openBrackets.includes(currentSymbol) && currentSymbol !== '|' && currentSymbol !== '7' && currentSymbol !== '8') {
      stack.push(currentSymbol);
      // console.log('добавил в стек');
    } else if(currentSymbol === '|' || currentSymbol === '7' || currentSymbol === '8') {
      
      if(currentSymbol === stack[stack.length - 1]) {
        stack.pop(); 
      } else {
        stack.push(currentSymbol);
      }

    } else {
      if(stack.length === 0) { 
        return false;
        // console.log('закрывающая, в стеке пусто поэтому вернул фолс');
      }

      let topElement = stack[stack.length - 1];

      if(bracketsPair[currentSymbol] === topElement || currentSymbol === '|' || currentSymbol === '7' || currentSymbol === '8') {
        stack.pop();
        // console.log('есть пара, удалил');
      } else {
        return false;
        // console.log('нет пары, вернул фолс');
      }
    }
  }
  return stack.length === 0;
};

console.log(module.exports('||', [['(', ')']]));