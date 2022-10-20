function getComputerChoice(rps)
{
return rps[Math.floor(Math.random()*rps.length)]; 
}
let rps = ['Rock', 'Paper', 'Scissor']
console.log(getComputerChoice(rps));
