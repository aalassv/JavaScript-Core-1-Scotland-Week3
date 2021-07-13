
// In this exercise we want to print ONLY the numbers greater than 12

let numbersList = [5, 3, 15, 8, 24, 31, 12];

// Write a "for" loop to ITERATE through the numbersList array
for (let i = 0; i < numbersList.length; i++){
    if (numbersList[i] > 12){
      console.log(numbersList[i]);
    }
}
// Inside the "for" loop, write an "if" statement to 
// print the number only if it is greater than 12