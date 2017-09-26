// Max and Min Redo
'use strict';

function max(numbers) {
  let largest = numbers[0];
  if (numbers === []) {
    return null;
  }
  else {
    let i = 0;
    while (i < numbers.length) {
      if (numbers[i] >= largest) {
        largest = numbers[i];
      }
      i++;
    }
    
  }
  return largest;
}

function min(numbers) {
  let smallest = numbers[0];
  if (numbers === []) {
    return null;
  }
  else {
    let i = 0;
    while (i < numbers.length) {
      if (numbers[i] <= smallest) {
        smallest = numbers[i];
      }
      i++;
    }
      
  }
  return smallest;
}