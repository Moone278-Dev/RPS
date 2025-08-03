function getComputerChoice(){

  const choices=[`rock`, `paper`, `scissors`]//the strings are stored here
  const randomindex = Math.floor(Math.random()* choices.length);
  //random index between 0 and 2
  return choices[randomindex];
}
//prompt asks the user to type something
//.toLowerCase() converts the input to lowercase so the check is case-sensitive
function getHumanChoice(){
  //Define an array of valid choices
const validChoices = [`rock`, `paper`, `scissors`];
  let choice = prompt(`Enter your choice: rock, paper, or scissors`).toLowerCase();

  //the [while] loop keeps prompting the user if they input something invalid 
  while (!validChoices.includes(choice))
  choice = prompt(`Invalid choice, please enter rock, paper, or scissors`).toLowerCase();

  return choice //must return a string
}
//once valid input is received,the function returns it. 
//var humanScore=0;
//var computerScore=0;

function playGame(){
//initalize scores to zero for this game
let humanScore=0;
  let computerScore=0;
  
  //this function plays ONE round of the game comparing choices
  //it returns the result of the round as a string: 'human','computer','tie'
  function playRound(humanChoice, computerChoice){
//convert input to lowercase
  const choice=humanChoice.toLowerCase();

  //const compchoice=computerChoice.tolowercase(); isnt necessary since the array for the computer too choose from only has lowercase strings
    console.log (`you chose ${choice}`);
    console.log(`Computer chose ${computerChoice}`);


 if (choice === computerChoice){
console.log(`it's a tie, this round!`)// no one get a point

} else if (

(choice === `rock` && computerChoice === `scissors`) ||
(choice === `paper` && computerChoice === `rock`) ||
(choice === `scissors` && computerChoice === `paper`)
  ) {
    console.log(`you win this round!`);
   
       
      return  `human`; //human earns a point
    
} else {
    console.log(`Computer wins this round!`)
  
      return `computer`;//computer earns a point
    }
}

//play 5 rounds in a loop 
  
  for (let round = 1; round <= 5; round++){
console.log(`/nRound ${round} starts`)
  
//get choices (assuming these functions exist)
  const humanSelection = getHumanChoice().toLowerCase();//normalize input
    const computerSelection = getComputerChoice(); //assumed lowercase already

    //play the round and get result
    const winner = playRound(humanSelection, computerSelection)

    //update scores based on winner
    if (winner === `human`){
      humanScore++;
    }else if (winner ===`computer`){
      computerScore++;
  } 
    //ties dont affect score

    console.log(`score is now -you ${humanScore}, Computer: ${computerScore}`);

    //after 5 rounds, decide and announce the overall winner
    
    console.log(`\nGame Over!`)
    // conditional statement if YOU 'human' score higher than the computer
    if (humanScore > computerScore){
      console.log(`You are the overall winner! Final score: ${humanScore} to ${computerScore}`)
    }
// conditional if the computer score is greater than the human score
    else if (computerScore > humanScore){ 
console.log(`Computer wins the game! final score: ${computerScore} to ${humanScore}`)
    } else {
      console.log(`it's a draw overall! Final score: ${humanScore} to ${computerScore}`);
    }
  }
}


//these variables are used so i can easily call these functions with one word
//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();
  //playRound(humanSelection, computerSelection);
  playGame();

