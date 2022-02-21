module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const pairBrackets = {};
  let equalsKeys = [];
  let equals = {};
    for (let i = 0; i < bracketsConfig.length; i++){
      openBrackets.push(bracketsConfig[i][0]);
      pairBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
      if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
        equalsKeys.push(bracketsConfig[i][0]);
        equals[bracketsConfig[i][0]] = 0;
      }
  }
  // console.log('str=', str);
  if (equalsKeys.length!= 0) {
    for (let i = 0; i < str.length; i++) {
      // console.log(`str[${i}] --  "${str[i]}"`);
      for (let key in equals) {
        // console.log(`if ${str[i]}===${key}`);
        if (str[i] === key) {
          // console.log(`equals[key]=${equals[key]}=+1`);
          equals[key] = equals[key]+1;
          // console.log(`equals[${key}]=${equals[key]}`);
        }
      } 
    } 
  }
 
  if ((str.length == (equalsKeys.length*2)) && (equalsKeys != 0)) {
    if (str.length % 2 == 0) {
      return true;
    } else return false
    } 
  // console.log('bracketsConfig=', bracketsConfig);
  // console.log('openBrackets=', openBrackets);
  // console.log(' equalsKeys', equalsKeys);
  // console.log('equals',equals);
 
  let stack = [];
  let count = 0;

  if (str.length % 2 == 0) {

  for (let i = 0; i < str.length; i++) {
    let curentSimbol = str[i];
    // console.log('curentSimbol', curentSimbol);
    if (openBrackets.includes(curentSimbol)) {
      stack.push(curentSimbol);
      // console.log(`if openBrackets.includes(${curentSimbol}) stack push, stack= ${stack}`);
      if (equalsKeys.includes(curentSimbol)) {
        // console.log(`if equalsKeys.includes => equals[curentSimbol] = ${equals[curentSimbol]} - 1`);
        equals[curentSimbol] = equals[curentSimbol] - 1;
        // console.log(`equals[curentSimbol] = ${equals[curentSimbol]}`);
        // console.log(`count++ = ${count} + 1`);
        count++;
        // console.log(`count = ${count}`);
        // console.log(`stack= ${stack}, stack.length= ${stack.length}`);
        if (stack.length >= 2) { 
          // console.log(`if stack.length= ${stack.length} >=2`);
          //  console.log(`stack[length - 1]= ${stack[stack.length - 1]}; stack[length - 2]= ${stack[stack.length - 2]}`);
          if ((stack[stack.length - 1] == stack[stack.length - 2])) {
            // console.log(`if "${stack[stack.length - 1]}" (stack[stack.length - 1]) == "${stack[stack.length - 2]}"(stack[stack.length - 2]),  stack.pop()`);
            // console.log(`equals[&{curentSimbol}] = ${equals[curentSimbol]}-2`);
            equals[curentSimbol] = equals[curentSimbol] - 2;
            // console.log(`equals[&{curentSimbol}] = ${equals[curentSimbol]}`);
            // console.log(`stack= ${stack} => stack.pop(); stack.pop();` );
            stack.pop();
            stack.pop();
            // console.log(`stack= ${stack}`);
          }
        }
      }
    }  else {  
      if (stack.length == 0) {
        // console.log('not open, stack.length===0, return false');
        return false;
        }
        let topElement = stack[stack.length - 1];
        // console.log('not open, topElement', topElement);
        if (pairBrackets[curentSimbol] === topElement) {
          // console.log(`if pairBrackets[curentSimbol] === "${topElement}" stack pop`);
          stack.pop();
          
        } else {
          // console.log(`(${pairBrackets[curentSimbol]} != ${topElement} return false`);
          return false
        }
      }
    
    }
     } else return false
  return stack.length===0;
}
