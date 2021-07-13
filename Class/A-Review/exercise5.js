
// This function has two INPUT PARAMETERS, called x and y
function calculateArea(x, y){
    return x * y; // It RETURNS a number
}

let answer1 = calculateArea(3, 5);
console.log(answer1);

// Write your own function called calculateVolume
// It should take three INPUT PARAMETERS, called x, y and z
// It should RETURN a number (the three input parameters multiplied together)

function calculateVolume (x, y , z){
    return x * y * z;
}

let answer2 = calculateVolume(4, 2, 5);
console.log("Answer should be 40: " + answer2);