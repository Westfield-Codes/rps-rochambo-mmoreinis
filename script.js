main();

function main(){
    let score = [0,0]
    let winner = 2;
    let round = 1;
    let rounds = setRounds();
    while (round <= rounds){
        winner = rpsRound(round);
        score[winner]++;
        round++;
    }
    alert("You have " + score[0] + " and I have"+  score[1]);
    if (score[0]>score[1]) alert("You win!");
    else alert("I win!");
}

function setRounds(){
    let rounds = prompt("How many rounds?");
    if (rounds % 2 === 0) {
        alert("must be odd");
        return setRounds();
    }
    else return rounds;
    //working//
}
function rpsRound(round){
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice){
        uChoice= userTurn(round);
        cChoice= cpuTurn();
        if (uChoice == cChoice) {
            alert ("we both choose " + cChoice);
        }
    }
    let winner = findWinner(uChoice,cChoice);
    let players = ["you","I"];
    let win = players.indexOf(winner);
    return win;
}

function userTurn(round){
    moves = ["r","p","s"];
    let choice = prompt("enter r p or s.");
    if (moves.includes(choice)) {
         return choice;
    }
    else {
        alert("choose r p or s it is round " + round);
        return userTurn();
    }
}

function cpuTurn(){
    let moves = ["r","p","s"];
    let choice = Math.floor(Math.random()*3);
    return moves[choice];
    //works//
}

function findWinner(u,c){
    let winner = " ";
    let winArray=[["r","p","I"],["r","s","you"],["p","s","I"],["p","r","you"],["s","r","I"],["s","p","you"]];
        for (let i = 0; i< winArray.length; i++){
            if (winArray[i][0] == u && winArray[i][1]==c){
                winner= winArray[i][2];

            }
        }
    alert("You choose " + u + " and I choose " + c + " " + winner + " win!");
    return winner;
}
