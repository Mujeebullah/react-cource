//Sorting string array
const fruitArray = ['Cherry', 'Apple', 'Banana', 'Mango']
//Sorting number array
const numArray = [10, 6, 11, 14, 3, 5]
numArray.sort((a, b) => a - b);
console.log('sorted numArray: ', numArray);
fruitArray.sort();
console.log('sorted fruiteArray: ', fruitArray)

// Get Max number from array
const maxNumber = Math.max(...numArray)
console.log('maxNumber using javascript provided builtin max method', maxNumber)

// Get Min number from array
console.log(Math.min(...numArray))

// Another way to get max number from array
const numArray2 = [10, 6, 11, 14, 3, 5]
console.log('numArray2', numArray2)
let anotherMaxNumber = numArray2[0];
for (i = 1; i < numArray2.length; i++) {
    console.log('anotherMaxNumber', anotherMaxNumber)
    console.log('numArray2[i]', numArray2[i])
    anotherMaxNumber = numArray2[i] > anotherMaxNumber ? numArray2[i] : anotherMaxNumber;
    console.log('updated anotherMaxNumber ', anotherMaxNumber)
}
console.log('anotherMaxNumber using another technique', anotherMaxNumber);

const text = "I love to work with AngularFramework & Reactjs";
console.log('text', text);

const textArray = text.split(' ');
console.log('textArray', textArray)

//First approach
// Using reducer method
const maxString = textArray.reduce((prevValue, currentValue) => prevValue.length > currentValue.length ? prevValue : currentValue)
console.log('maxString', maxString)

//Second approach
console.log('textArray', textArray)
let maxString2 = textArray[0];
for (i = 1; i < textArray.length; i++) {
    maxString2 = maxString2.length > textArray[i].length ? maxString : textArray[i];
}
console.log('maxString2', maxString2)



const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//create an odd elements array from a given array
//using filter function
const evenArray = exampleArray.filter((value, _) => value % 2 === 0)
console.log(evenArray)
//create an even elements of array from a given array
const oddArray = exampleArray.filter((value, _) => value % 2 !== 0)
console.log(oddArray)

const nestedArrays = [1, [2, 3], [4, 5, 6], [7, 8, 9, 10]]
console.log(nestedArrays)
const flatArray = nestedArrays.flat();
console.log(flatArray)

// what is map
//example value
const values = [1, 2, 3]
const doubleValues = values.map((value, index) => value * 2)
console.log('doubleValues', doubleValues);

const arrayMap = values.map((value, _) => [value, value * 2]).flat();
console.log(arrayMap)




















