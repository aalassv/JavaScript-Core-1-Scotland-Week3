
// We want a new array with all the numbers doubled

let numbersList = [5, 3, 15, 8, 24, 31, 12];

function doubleValue(x){
    return x * 2;
}

let doubledNumbers = [];


// JavaScript gives us a shortcut to solve the previous exercise!
doubledNumbers = numbersList.map(doubleValue);
// Look at the teaching document slide 59 to see how to use array.map

// You should be able to solve the exercise with one line of code


console.log(doubledNumbers);
