/* Global Variables */
var score = [0, 0];
var rounds = 5;
var round = 1;
var board = document.getElementById("gameBoard");
var scoreBoard = document.getElementById("scoreBoard");
var moveWords = ["rock", "paper", "scissors"];
var moves = ["r", "p", "s"];

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

function buildScoreBoard(){
   let roundNumber = document.createElement("p");
   roundNumber.id="roundNumber";
   roundNumber.innerHTML="Round " + round + " of " + rounds;
   scoreBoard.appendChild(roundNumber);
   addScoreBox("player", "Player", 0);
   addScoreBox("computer", "Computer", 1);
}

function addScoreBox(entity, entityLabel, index){
   let myDiv = document.createElement("div");
   myDiv.id = entity;
   myDiv.innerHTML = entityLabel + ": " + score[index];
   scoreBoard.appendChild(myDiv);
}

function buildConsole() { 
   board.innerHTML = "";
   addPlayButton("rock", "r");
   addPlayButton("paper", "p");
   addPlayButton("scissors","s");
}

function addPlayButton(hand, move){
    let playButton = document.createElement("div");
    playButton = document.createElement("button");
    playButton.id=hand;
    playButton.innerHTML=hand;
    playButton.addEventListener('click', () => {
      cpuTurn(move); 
    });
    playButton.className="move"
    board.appendChild(playButton);
}

function setRounds() {
  rounds = parseInt(document.getElementById("roundsBox").value);
  buildConsole();
  buildScoreBoard();
}

function cpuTurn(move) {
   console.log("Move: " + move);
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
   } 
   else {
      return choice;
   }
}

function clearConsole(){
   board.innerHTML="";
   board.innerHTML="We both chose the same thing";
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