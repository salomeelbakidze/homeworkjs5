'use strict'

// Task1 
let array2 = [14, 150, 'css', null, 'javascript', 25];

// ეს ვერ გავაკეთე :(







// Task2

// ესეც ვერ გავიგე :(




// Task3

let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let newarray5 = array5.map(item => item / 3);

console.log(newarray5);




// Task4

let array1 = ['hello1', 14, 24, 'hello2'];

let newarray1 = array1.filter(item => typeof item === 'number');

console.log(newarray1);




// Task5

let languages = ['html', 'css', 'javascript', 'python', 'php'];

let newLanguages = languages.filter((item) => item.length > 3) ;

console.log(newLanguages);



// Task6

let words = ['Madrid', 'rome', 'Milan', 'berlin'];

let resultwords = words.filter 

//  ვერ ვწერ ამასაც :(((





// Task7
let link = 'https://google.com' ;

let result = link.includes('https://');

if (link.includes('https://')) {
    console.log('includes');
} else {
    console.log('does not include');
}
 console.log(result);

// Task8 

let array6 = [-1, -2, -3, 4];

let positiveNumber = array6.some(item) => item > 0; 

console.log(positiveNumber);


// Task9

// ეს ვერ გავაკეთე...


// Task10

let numbers = [3, 5, 7, 9, 4, 6];

let initialValue = 0;

let sumWithInitial = numbers.reduce((accumulator, currentValue) => 
    accumulator + currentValue, initialValue,);

console.log(sumWithInitial);




// Task11

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let arr4 = arr1.concat(arr2,arr3);

console.log(arr4);


