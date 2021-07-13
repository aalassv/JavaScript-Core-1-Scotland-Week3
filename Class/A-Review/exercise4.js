
// The voting age for Scottish-only elections is 16+
// The voting age for UK elections is 18+

// In the function below, electionType can be either "Scotland" or "UK"

function canVote(electionType, voterAge){
  if (electionType === "Scotland" && voterAge >= 16){
    return true;
  }else if (electionType === "UK" && voterAge >= 18) {
      return true;
  }else {
      return false;
  }
}

let answer1 = canVote("Scotland", 16);
console.log("Answer 1 should be true, answer: " + answer1);

let answer2 = canVote("UK", 17);
console.log("Answer 2 should be false, answer: " + answer2);

let answer3 = canVote("Scotland", 15);
console.log("Answer 3 should be false, answer: " + answer3);

let answer4 = canVote("UK", 21);
console.log("Answer 4 should be true, answer: " + answer4);