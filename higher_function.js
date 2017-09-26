'use strict';
//   //Functions as arguments
// function repeat(fn, n) {
//   for (let i = 0; i < n; i++) {
//     fn();
//   }
    
// }


// function hello() {
//   console.log('Hello world');
// }

// function goodbye() {
//   console.log('Goodbye world');
// }


// repeat(hello, 5);
// repeat(goodbye, 5);

//Functions as arguments (2)

// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
  // This is a "predicate function" - it's a function that only returns a boolean
  
  return name[0] === 'R';
  
});

console.log(filteredNames); // => ['Rich', 'Ray']

// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length ; i++) {
    let currentItem = arr[i];
    // if the predicate function returns true
    //when called on the current item
    if (fn(currentItem)) {
      // we want this item for our new array
      newArray.push(currentItem);
    }
  }
  return newArray;
}


// Fuctions as return values;

function hazardWarningCreater(typeOfWarning) {
  let warningCounter = 0;

  return function(location) {
    warningCounter ++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
    
            
}


const rocksWarning = hazardWarningCreater('Rocks on the road');
console.log(rocksWarning('Main St and Pacific Ave'));
console.log(rocksWarning('Main St and Pacific Ave'));
console.log(rocksWarning('Main St and Pacific Ave'));



let moves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const filtered = moves.filter(value => value[0] >= 0 && value[1] >=  0);
console.log(filtered);

const array = moves.map(value => value[0] + value[1]);
console.log(array);

const step = array.forEach(value => console.log(value));
console.log(step);