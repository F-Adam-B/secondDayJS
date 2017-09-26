// Max and Min Redo
'use strict';

// function max(numbers) {
//   let largest = numbers[0];
//   if (numbers === []) {
//     return null;
//   }
//   else {
//     let i = 0;
//     while (i < numbers.length) {
//       if (numbers[i] >= largest) {
//         largest = numbers[i];
//       }
//       i++;
//     }
    
//   }
//   return largest;
// }

// function min(numbers) {
//   let smallest = numbers[0];
//   if (numbers === []) {
//     return null;
//   }
//   else {
//     let i = 0;
//     while (i < numbers.length) {
//       if (numbers[i] <= smallest) {
//         smallest = numbers[i];
//       }
//       i++;
//     }
      
//   }
//   return smallest;
// }

// Average redo using while loop
// function average(numbers) {
//   let total = numbers[0];
//   let i = 1;
//   while (i < numbers.length) {
//     total += numbers[i];
//     i++;
//   } 
//   return total/numbers.length;
// } 

//Using forEach method

// function average(numbers) {
//   let sum = 0;
//   numbers.forEach(function(item) {
    
//     sum += item;
//   });
//   return sum/numbers.length;
// }

// average([1,2,3]);

//Fizz Buzz Redo

// function fizzBuzz(countTo) {
//   const result = [];
//   for (let i = 1; i <= countTo; i++) {
//     switch(true) {
//     case i % 15 === 0: 
//       result.push('fizzbuzz');
//       break;
//     case i % 5 === 0:
//       result.push('buzz');
//       break;
//     case i % 3 === 0:
//       result.push('fizz');
//       break;
//     default:
//       result.push(i);
//       break;
//     }
//   } 
//   return result;
// }
 
// console.log(fizzBuzz(15));


  
