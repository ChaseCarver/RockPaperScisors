var player = 0
var computer = 0
var outputOutcome = document.getElementById("choiceOutcome")
var outputComputer = document.getElementById("computer");
var outputPlayer = document.getElementById("player");

function rockpaperscisors(rps){
//produce a random number 0, 1 or 2
  var rpsRandom = (Math.floor(Math.random(2) * 3))
//switch into plaintext 0= rock 1= paper 2=scisors
switch (rpsRandom) {
  case 0: rpsRandom = "rock";
   break;
  case 1: rpsRandom = "paper";
   break;
  case 2: rpsRandom = "scisors";
   break;
}
//compare inputs, add winner to scoreboard, update outcome text
if(rps == rpsRandom){
 outputOutcome.textContent = "I also chose " + rpsRandom + ", Tie! Try again!";
}
else if (rpsRandom == "paper" && rps == "rock" || rpsRandom == "rock" && rps == "scisors" || rpsRandom == "scisors" && rps == "paper"){
 computer++
 outputOutcome.textContent = "I choose " + rpsRandom + ", I win!";
 outputComputer.textContent = computer;
}
else if (rpsRandom == "scisors" && rps == "rock" || rpsRandom == "paper" && rps == "scisors" || rpsRandom == "rock" && rps == "paper"){
 console.log("I choose " + rpsRandom + "!")
 console.log("You win!")
 player++
 outputOutcome.textContent = "I choose " + rpsRandom + ", You win!";
 outputPlayer.textContent = player;
}
}
//link button to js
//on button click, run corresponding input through the function
var rockClick = document.getElementById("rockButton")
rockButton.addEventListener("click", function(a){rockpaperscisors("rock")})

var paperClick = document.getElementById("paperButton")
paperButton.addEventListener("click", function(a){rockpaperscisors("paper")})

var scisorsClick = document.getElementById("scisorsButton")
scisorsButton.addEventListener("click", function(a){rockpaperscisors("scisors")})