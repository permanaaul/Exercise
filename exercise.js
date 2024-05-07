// lowest, highest and average
function getStats(arr) {
    let min = arr[0]; 
    let max = arr[0]; 
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    let average = sum / arr.length;

    console.log("Lowest:", min);
    console.log("Highest:", max);
    console.log("Average:", average);
}
let arr = [12, 5, 23, 18, 4, 45, 32];
getStats(arr);

// concatenating the word in the array
function concatenateWords(arr2) {
    let result = "";
    for (let i = 0; i < arr2.length - 1; i++) {
        result += arr2[i] + ", ";
    }
    if (arr2.length === 0) {
        return "";
    } else if (arr2.length === 1) {
        return arr2[0]; 
    } else {
        result += "and " + arr2[arr2.length - 1]; 
        return result;
    }
}

let arr2 = ["apple", "banana", "cherry", "date"];
let concatenatedString = concatenateWords(arr2);
console.log(concatenatedString);



// split a string and convert it into an array of words 
function splitStringIntoWords(str) {
    var words = str.split(" ");
    return words;
}
var inputString = "Hello World";
var result = splitStringIntoWords(inputString);
console.log(result); 

// calculate each element in the same position from two arrays of integer
function calculateElements(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        var sum = arr1[i] + arr2[i];
        result.push(sum);
    }
    return result;
}
var array1 = [1, 2, 3];
var array2 = [3, 2, 1];
var resultArray = calculateElements(array1, array2);
console.log(resultArray);

// adds an element to the end of an array
function addUniqueElement(arr, newElement) {
    if (arr.indexOf(newElement) === -1) {
        arr.push(newElement);
    }
    return arr;
}
var array1 = [1, 2, 3, 4];
var newElement1 = 4;
var resultArray1 = addUniqueElement(array1, newElement1);
console.log(resultArray1); 

var array2 = [1, 2, 3, 4];
var newElement2 = 7;
var resultArray2 = addUniqueElement(array2, newElement2);
console.log(resultArray2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// remove all odd numbers in an array and return a new array
function removeOddNumbers(numbers) {
    var evenNumbers = numbers.filter(function(num) {
        return num % 2 === 0; 
    });
    return evenNumbers;
}
var numbers = [1, 2, 3, 4, 5, 6];
var result = removeOddNumbers(numbers);
console.log(result); 

// insert multiple given integer
function insertIntegers(maxSize, ...integers) {
    let output = [];
    
    for (let i = 0; i < integers.length; i++) {
        if (output.length === maxSize) {
            break;
        }
        
        output.push(integers[i]);
    }
    
    return output;
}

let maxSize = 5;
let integers = [5, 10, 24, 3, 6, 7, 8];
let resultArray3 = insertIntegers(maxSize, ...integers);
console.log(resultArray3);

// combine 2 given array into one array
function combineArrays(arrr1, arrr2) {
    return arrr1.concat(arrr2);
}
let arrr1 = [1, 2, 3];
let arrr2 = [4, 5, 6];
let combinedArray = combineArrays(arrr1, arrr2);
console.log(combinedArray); 

// duplicate values in an array
function findDuplicates(input) {
    let dupes = [];
    let unique = {};

    for (let i = 0; i < input.length; i++) {
        let val = input[i];

        if (unique[val]) {
            if (!dupes.includes(val)) {
                dupes.push(val);
            }
        } else {
            unique[val] = true;
        }
    }

    return dupes;
}
let arr5 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
let duplicates = findDuplicates(arr5);
console.log(duplicates); 

// find the difference in 2 given array
function findDifference(arrayA, arrayB) {
    let result = [];

    for (let i = 0; i < arrayA.length; i++) {
        let found = false;
        for (let j = 0; j < arrayB.length; j++) {
            if (arrayA[i] === arrayB[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(arrayA[i]);
        }
    }
    for (let i = 0; i < arrayB.length; i++) {
        let found = false;
        for (let j = 0; j < arrayA.length; j++) {
            if (arrayB[i] === arrayA[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(arrayB[i]);
        }
    }
    return result;
}
let inputArray1 = [1, 2, 3, 4, 5];
let inputArray2 = [3, 4, 5, 6, 7];
let differenceArray = findDifference(inputArray1, inputArray2);
console.log(differenceArray); 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// write a function that will return primitive data types only
function filterPrimitives(arr6) {
    return arr6.filter(item => {
        return typeof item !== 'object' && !Array.isArray(item);
    });
}
let arr6 = [1, [], undefined, {}, "string", {}, []];
let primitiveValues = filterPrimitives(arr6);
console.log(primitiveValues); 

// a given array of numbers and return the second smallest number
function findSecondSmallest(numbers3) {
    numbers3.sort((a, b) => a - b);
    return numbers[1];
}
let numbers3 = [5, 3, 1, 7, 2, 6];
let secondSmallest = findSecondSmallest(numbers3);
console.log(secondSmallest);

// given array of mixed data types and return the sum of all the number
function sumOfNumbers(mixedArray) {
    let sum = 0;
    
    mixedArray.forEach(item => {
        if (!isNaN(parseFloat(item)) && isFinite(item)) {
            sum += parseFloat(item);
        }
    });
    return sum;
}
let mixedArray = ["3", 1, "string", null, false, undefined, 2];
let sum = sumOfNumbers(mixedArray);
console.log(sum); 

// return sum of duplicate values.
function sumOfDuplicates(arr7) {
    let count = {};
    let sum7 = 0;
    
    // Count occurrences of each number in the array
    arr.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });
    
    // Sum the values with occurrences greater than 1
    for (let num in count) {
        if (count[num] > 1) {
            sum7 += parseInt(num);
        }
    }
    
    return sum7;
}

let arr7 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
let sum7 = sumOfDuplicates(arr7);
console.log(sum);

// return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor
function rockPaperScissors(playerChoice) {
    const computerChoiceIndex = Math.floor(Math.random() * 3);

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[computerChoiceIndex];

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'Win';
    } else if (playerChoice === computerChoice) {
        return 'Draw';
    } else {
        return 'Lose';
    }
}
let playerChoice = 'rock';
let outcome = rockPaperScissors(playerChoice);
console.log(outcome); 

