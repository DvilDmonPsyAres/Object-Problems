/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of
objects as the first parameter and a string as the second. The `keyInObjectArray`
will return `true` if any of the objects contains the `keyString` as a key within them, and
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  // Your code here
  for(let i = 0; i < objArray.length; i++) {
    let objects = objArray[i];
    let keys = Object.keys(objects);
    for(let j = 0; j < keys.length; j++) {
      let key = keys[j];
      if(key === keyString) {
        return true;
      }
    }
  }
  return false;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
