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






