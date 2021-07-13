
let scoresList = [45, 83, 15, 8, 62, 60, 79];

// 1. Write a function called hasPassed 
function hasPassed (score){
    if(score >= 60){
        return true;
    }else{
        return false;
    }
}
// It should have one input parameter called score
// It should return true if the score is 60 or above
// otherwise return false
// 2. Use array.filter to create a new array with only the values in scoresList which have passed

let scoreAbove60 = scoresList.filter(hasPassed);

// 3. Print the new array to the screen

console.log(scoreAbove60);