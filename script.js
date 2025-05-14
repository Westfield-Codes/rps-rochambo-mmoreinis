/* Global Variables */
let score = [0,0];

function main(){
  let winner = "";
  let rounds = setRounds();
  for (let round = 1; round <= rounds; round++){
    winner = rpsRound();
    score[winner]++;
  }
  alert("You have "+score[0]+" and I have "+ score[1]);
}


function setRounds() {
   let rounds = prompt("Number of rounds?");
   if (rounds % 2 == 0) {
    alert("must be odd, try again");
    return setRounds();
   }
   return rounds;
}

/* RPS Round
 * Plays a round of RPS and tells the winner ("I" or "You") won.
 * Returns the index (0,1) in score for the winner.
 * @param: none
 * @return: winner (0 or 1)
 */
function rpsRound() {
    let u = "";
    let c ="";
    while (u == c) {
        u = userTurn();
        c = cpuTurn();
        if (u ==c) {
            alert("We both chose "  + c);
        }
  }
  winner = findWinner(u,c);
  let winValues = ["You", "I"];
  winnerWord = winValues[winner];
  alert("You chose " + u + " and I chose "+ c  +  " so " + winnerWord  +  " won!"); 
  return winner; 
}

/* userturn
 * user can choose r, p, or s.
 * if bad Input, give new choice
 * @param:none
 * @return:choice
 */
function userTurn() {
    let choice = prompt("enter r, p, or s");
    const turn = ["r","p","s"];
    if (!turn.includes(choice)) {
        alert("Invalid Input");
        return userTurn();
    }
    return choice;
}

/* cpuTurn
 * computer choose between r, p, or s
 * @param:none
 * @return: choice
 */
function cpuTurn() {
    let choice = Math.floor(Math.random()*3);
    let moves = ["r","p","s"];
    return moves[choice];
}

/* findWinner
 * takes user and computer turn
 * decides who the winner is
 * returns winner
 * @param:u,c
 * @return: winner
 */
function findWinner(u,c) {
  let combo = u + c;
  let match = "";
  let winner = "";
  let winArray = [["r","p",0],["r","s",1],["s","r",0],["s","p",1],["p","s",0],["p","r",1]];
  for (let i =0;i < winArray.length;i++) {
    match = winArray[i][0]+winArray[i][1];
    if (match == combo) {
      winner = winArray[i][2];
      break;
    }
  }
  return winner;
}