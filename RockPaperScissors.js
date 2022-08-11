function game(){
    for(let i=0; i<5;i++){
        playRound(getPlayerChoice(),getComputerChoice());
    }
}


//generating Computer choice
function getComputerChoice() {
    let computerRandom = Math.floor(Math.random()*3+1);
    let computerChoice;
    switch(computerRandom){
        case 1:
            computerChoice="Rock"
            break;
        case 2:
            computerChoice="Scissors"
            break;
        case 3:
            computerChoice="Paper"
            break;
        default:
            console.log("error");
    }
    console.log("computer's Choice: " + computerChoice);
    return computerChoice;
}

//getting user's decision
function getPlayerChoice(){
    let playerChoice=prompt("Choose Rock Paper Scissors","");
    playerChoice=capitalize(playerChoice);
    console.log("Player choice:"+ playerChoice);
    return playerChoice;
}

//function to correct the captalization on user input
function capitalize(word){
    let firstletter = word.slice(0,1);
    firstletter = firstletter.toUpperCase();
    let restWord = word.slice(1);
    restWord = restWord.toLowerCase();
    word = firstletter + restWord;
    return word;
}

function playRound(playerSelection, computerSelection){
    let results;
    if(playerSelection===computerSelection){
        console.log("draw");
        //return results="draw";
    }
    else if(playerSelection==="Rock"){
        if(computerSelection==="Paper"){
            console.log("Computer Wins");
        }
        else{
            console.log("Player Wins");
        }
    }
    else if(playerSelection==="Paper"){
        if(computerSelection==="Scissors"){
            console.log("Computer Wins");
        }
        else{
            console.log("Player Wins");
        }
    }
    else if(playerSelection==="Scissors"){
        if(computerSelection==="Rock"){
            console.log("Computer Wins");
        }
        else{
            console.log("Player Wins");
        }
    }
}

game();