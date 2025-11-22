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

function setRounds() {
   rounds = parseInt(document.getElementById("roundsBox").value);
   buildScoreBoard();
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
   buildConsole();
}

function buildConsole() { 
   board.innerHTML = "";
   addPlayButton("rock", "r");
   addPlayButton("paper", "p");
   addPlayButton("scissors","s");
}

function addPlayButton(hand, move){
    let playButton = document.createElement("button");
    playButton.id=hand;
    playButton.innerHTML=hand;
    playButton.addEventListener('click', () => {
      cpuTurn(move); 
    });
    playButton.className="move"
    board.appendChild(playButton);
}

function cpuTurn(u) {
   let turn = Math.floor(Math.random() * 3);
   c = moves[turn];
   if(u == c) {
      makePopUp("We both chose " + moveWords[turn]);
    }
    else {
      let combo = u + c;
      console.log("combo " + combo)
      let winner = findWinner(combo);
      let cmove = moveWords[turn];
      let roundWinner = document.createElement("div");
      roundWinner.innerHTML= "You chose " + "(" + u + ")" + " and I chose " + "(" + cmove + ")" + " " + winner + " won!";
      round++;
   }
}

function makePopUp(message){
   let popup = document.createElement("div");
   popup.id="popup";
   popup.addEventListener("click", closePopup);
   let popP = document.createElement("p");
   popP.innerHTML = message;
   popup.appendChild(popP);
   document.body.insertBefore(popup, board);
}

function closePopup(){
   document.getElementById("popup").remove();
   buildConsole();
}

function scoreBoard(winner) {
   if (winner == "I") score[1] += 1;
   else score[0] += 1;
}

function finalWinner() {
   let endWinner = "";
   if (score[0] > score[1]) endWinner = "You";
   else endWinner = "I";
   return endWinner;
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