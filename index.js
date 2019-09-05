var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");
var paper = document.getElementById("paper");
var userChoice;
var compSelection;
var compChoice = ["rock", "paper", "scissors"];
var rand = compChoice[Math.floor(Math.random() * compChoice.length)];
var win_count = 0
var tie_count = 0
var lose_count = 0


rock.addEventListener("click", function () {
  document.getElementById("rps").innerHTML = "You Picked <strong>Rock</strong>"
  userChoice = this.id
  // console.log(userChoice)
  //display choices
  // console.log(rand)
  //decided winner
  winner(userChoice)
});

scissors.addEventListener("click", function () {
  document.getElementById("rps").innerHTML = "You Picked <strong>Scissors</strong>"
  userChoice = this.id
  // console.log(userChoice)
  //get comp choice
  // console.log(rand)
  //display choices
  //decided winner
  winner(userChoice)
});

paper.addEventListener("click", function () {
  document.getElementById("rps").innerHTML = "You Picked <strong>Paper</strong>"
  userChoice = this.id
  // console.log(userChoice)
  //get comp choice
  // console.log(rand)
  //display choices
  //decided winner
  winner(userChoice)
});

// function Rock(){
//   document.getElementById("rps").innerHTML = "You Picked <strong>Rock</strong>"
//   debugger
//   CompPick()
//   Winner()
// };
// function Scissor() {
//   CompPick()
// };
// function Paper() {
//   CompPick()
// };
// function CompPick() {
//   var compNum = Math.random()
//   if (compNum < .33) {
//     compSelection = "Rock"
//   } else if (compNum > .67) {
//     compSelection = "Scissors"
//   } else {
//     compSelection = "Paper"
//   };

//   document.getElementById("compChoice").innerHTML = ("The Comp Picked" + " " + compSelection)
// }


function winner(userChoice) {
  comp = compChoice[Math.floor(Math.random() * compChoice.length)]
  document.getElementById("compChoice").innerHTML = ("The Comp Picked" + " " + comp)
  if (userChoice === comp) {
    document.getElementById("winner").innerHTML = "It's A Tie"
  }
  else if (
    userChoice === "rock" && comp === "scissors" ||
    userChoice === "scissors" && comp === "paper" ||
    userChoice === "paper" && comp === "rock"
  ) {
    win_count += 1
    document.getElementById("winner").innerHTML = (`You've Won ${win_count} times`)
  } else {
    document.getElementById("winner").innerHTML = "You Lose"
  }
}