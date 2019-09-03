var rock = document.getElementById("rock");
var scissors = document.getElementById("scissor");
var paper = document.getElementById("paper");
var userChoice;
var compChoice = ["rock", "paper", "scissor"];
var rand = compChoice[Math.floor(Math.random() * compChoice.length)];


rock.addEventListener( "click", function() {
  userChoice = this.id
  console.log(userChoice)
  //get comp choice
  console.log(rand)
  //display choices
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