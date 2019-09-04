var rock = document.getElementById("rock");
var scissors = document.getElementById("scissor");
var paper = document.getElementById("paper");
var userChoice;
var compChoice = ["rock", "paper", "scissor"];
var rand = compChoice[Math.floor(Math.random() * compChoice.length)];


rock.addEventListener( "click", function() {
  userChoice = this.id
  console.log(userChoice)
  //display choices
  console.log(rand)
  //decided winner
});

scissors.addEventListener( "click", function() {
  userChoice = this.id
  console.log(userChoice)
  //get comp choice
  console.log(rand)
  //display choices
  //decided winner
});

paper.addEventListener( "click", function() {
  userChoice = this.id
  console.log(userChoice)
  //get comp choice
  console.log(rand)
  //display choices
  //decided winner
});

function Rock(){
  document.getElementById("rps").innerHTML = "You Picked <strong>Rock</strong>"
  CompPick()
};
function Scissor(){
  document.getElementById("rps").innerHTML = "You Picked <strong>Scissors</strong>"
  CompPick() 
};
function Paper(){
  document.getElementById("rps").innerHTML = "You Picked <strong>Paper</strong>"
  CompPick()
};
function CompPick(){
  var compNum = Math.random() 
    if (compNum < .33) {
      compSelection = "Rock"
    } else if (compNum > .67) {
      compSelection = "Scissors"
    } else {
      compSelection = "Paper"
    };

  document.getElementById("compChoice").innerHTML = ("The Comp Picked" + " " + compSelection )
}