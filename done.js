 main();
function main(){
    let cChoice = 0;
    let pChoice = 0;
     while (pChoice == cChoice){
        pChoice = userTurn();
        cChoice = cpuTurn();
        if (pChoice == cChoice){
            alert("We both chose chose"+pChoice);
        }
     }
     findWinner(pChoice,cChoice);
}


function userTurn(){
// Prompt user to enter R, P, S
    let userEntry = prompt("What's your play? (r)ock, (p)aper, or (s)cissors?");
    if (userEntry != "r" && userEntry !=  "p" && userEntry != "s") {
    alert("Bad Input");
    userTurn(); 
}
    return userEntry;
}


function cpuTurn(){
    var cpuChoices = ["r", "p", "s"];
    var cpuRandom = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
    alert(cpuRandom);
    return cpuRandom;
    findWinner();
}

function findWinner(pChoice,cChoice) {
    if (cpuChoice == "r" && userEntry == "s") alert("CPU Wins!");
    if (cpuChoice == "s" && userEntry == "r");
    else alert("Testing Code");

} 



