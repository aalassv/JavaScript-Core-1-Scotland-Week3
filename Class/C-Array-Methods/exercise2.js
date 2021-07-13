
let mentorsList = ["Sundar", "Reshma", "Shantanu", "Arvind"];

function isTrainee(personName){
    if(mentorsList.includes(personName)){
        return false;
    }else{
        return true;
    }
}

let namesList = ["Aria", "Shantanu", "Brian", "Arvind", "Reshma", "Candice", "Sundar", "Sunesh"];

let newArray = [];

// JavaScript gives us a shortcut to solve the previous exercise!
newArray = namesList.filter(isTrainee); //Awesome!!!
// Look at the teaching document slide 39 to see how to use array.filter

// You should be able to solve the exercise with one line of code



console.log("Answer should be Aria, Brian, Candice, Sunesh");
console.log(newArray);