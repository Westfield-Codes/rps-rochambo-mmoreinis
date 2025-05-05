/* Steps 
*  0. Refer to https://lucid.app/lucidchart/3da5e3b5-33fe-4823-875c-81fb61c9d84c/view
*  1. Create Documentation and stubs for each function. //
*  2. Unit Test each function:
*     a. Add pseudocode based on flowchart, picking version
*     b. Test with console.log using stubs
*     c. Commit when it works.
*     d. Move to next function
*  3. System Test finished version (does it work right in all conditions?)
*/

/* Function Main plays a round of RPS and finds and shows the winner. 
 * @param: none
 * @return: none
 */
function main(){
    let u = "";
    let c = "";
    while (u == c){
        u = userTurn();
        c = cpuTurn();
        if (u == c) alert("We both chose " + c);
    }
    let winner = findWinner(u,c);
    alert("You chose " + u + " and I chose "+ c + " so " + winner + " won.");
}

function userTurn(){
    return "r";
}

function cpuTurn(){
    return "p"
}

function findWinner(){
    return "I";
}