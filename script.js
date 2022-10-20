
//Return random array item
function getComputerChoice(rps)
{
return rps[Math.floor(Math.random()*rps.length)]; 
}
let rps = ['Rock', 'Paper', 'Scissor']

//console.log(getComputerChoice(rps));

function playRound(playerSelection, computerSelection)
{
if (playerSelection === 'Rock')
{
    return 'Tie game!';
}







}
    let playerSelection = 'Rock';
    let computerSelection = getComputerChoice(rps);
    console.log(playRound(playerSelection, computerSelection));