/* Global Variables */
var score = [0, 0];
var rounds = 5;
var round = 1;
var board = document.getElementById("gameBoard");
var move = "rock";
var scoreBoard = document.getElementById("scoreBoard");

function main() {
   
   document.getElementById("playButton"). style.display = "none";
   let instructions = document.createElement("p");
   instructions.innerHTML = "How many rounds would you like to play? (1-10)";
   board.appendChild(instructions);
   let roundsBox = document.createElement("input");
   roundsBox.id = "roundsBox";
   board.appendChild(roundsBox);
   let roundsButton = document.createElement("button");
   roundsButton.innerHTML = "Start Game";
   roundsButton.addEventListener("click", setRounds);
   board.appendChild(roundsButton);
}
function buildConsole() { 
   board.innerHTML = "";
   let playRock = document.createElement("div");
   playRock = document.createElement("BUTTON");
   playRock.id="rock";
   playRock.innerHTML="rock";
   playRock.className="move";
   playRock.addEventListener("click",playingRock);
   board.appendChild(playRock);
   let playScissors = document.createElement("div");
   playScissors = document.createElement("BUTTON");
   playScissors.id="scissors";
   playScissors.innerHTML="scissors";
   playScissors.addEventListener("click",playingScissors);
   playScissors.className="move"
   board.appendChild(playScissors);
   let playPaper = document.createElement("div");
   playPaper = document.createElement("BUTTON");
   playPaper.id="paper";
   playPaper.innerHTML="paper";
   playPaper.addEventListener("click",playingPaper);
   playPaper.className="move"
   board.appendChild(playPaper);
   let lineBreak = document.createElement("br");
   board.appendChild(lineBreak);
}
function buildScoreBoard(){
let roundNumber = document.createElement("p");
   roundNumber.id="roundNumber";
   roundNumber.innerHTML="Round " + round + " of " + rounds;
   scoreBoard.appendChild(roundNumber);
   let player = document.createElement("div");
   player.id = "player";
   player.innerHTML = "Player" + ": " + score[0];
   scoreBoard.appendChild(player);
   let computer = document.createElement("div");
   computer.id = "computer";
   computer.innerHTML = "Computer"+ ": " + score[1];
   scoreBoard.appendChild(computer);

}
function setRounds() {
  rounds = parseInt(document.getElementById("roundsBox").value);
  buildConsole();
  buildScoreBoard();
  
}
function playingPaper(){
   move = "paper";
   cpuTurn();
}
function playingRock(){
   move = "rock";
   cpuTurn();
}
function playingScissors(){
   move = "scissors";
   cpuTurn();
}
function scoreBoard(winner) {
   if (winner == "I") score[1] += 1;
   else score[0] += 1;
}

function FinalWinner() {
   let finalWinner = "";
   if (score[0] > score[1]) finalWinner = "You";
   else finalWinner = "I";
   return finalWinner;
}


function userTurn() {
   let choice = prompt("r, p, s?")
   let moves = ["r", "p", "s"];
   if (!moves.includes(choice)) {
      alert("Invalid Input!")
      return userTurn();
   } else {
      return choice;
   }
}
function clearConsole(){
   board.innerHTML="";
   board.innerHTML="We both chose the same thing";
}

function cpuTurn() {
   
   
   let moveWords = ["rock", "paper", "scissors"];
   let moves = ["r", "p", "s"];
   let u = moves[moveWords.indexOf(move)];
   let turn = Math.floor(Math.random() * 3);
   c = moves[turn];
   if(u == c) {
      console.log("CPUTurn")
      clearConsole();
      buildConsole();
    }
    else{
      let combo = u + c;
      let winner = findWinner(combo);
      let cmove = moveWords[turn];
      let RoundWinner = document.createElement("div");
      RoundWinner.innerHTML= "You chose " + "(" + move + ")" + " and I chose " + "(" + cmove + ")" + " " + winner + " won!";
      round++;
}
}
function findWinner(combo) {
   let match = "";
   let winner = "";
   let winArray = [
      ["r", "p", "I"],
      ["r", "s", "You"],
      ["s", "r", "I"],
      ["s", "p", "You"],
      ["p", "s", "I"],
      ["p", "r", "You"]
   ]
   for (i = 0; i < winArray.length; i++) {
      match = winArray[i][0] + winArray[i][1]
      if (match == combo) {
         winner = winArray[i][2]
      }
   }
   return winner;
}