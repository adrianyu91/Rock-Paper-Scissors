var playerScore=0, computerScore=0;
//assigns the button with the value of its id in the html file which can determine which button is pressed during each click
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerChoice=getComputerChoice();
        console.log(playerSelection);
        displayPlayerChoice(button, computerChoice);
        playRound(playerSelection,computerChoice);
        replaceScore();
        game();
    });
});

//game loop that runs the games a certain number of times
function game(){
    if(playerScore===5 || computerScore===5){
        document.querySelector('#🗿').disabled = true;
        document.querySelector('#📄').disabled = true;
        document.querySelector('#✂').disabled = true;
    }
}


//generating Computer choice
function getComputerChoice() {
    let computerRandom = Math.floor(Math.random()*3+1);
    let computerChoice;
    switch(computerRandom){
        case 1:
            computerChoice="🗿"
            break;
        case 2:
            computerChoice=" ✂"
            break;
        case 3:
            computerChoice="📄"
            break;
        default:
            console.log("error");
    }
    console.log("computer's Choice: " + computerChoice);
    return computerChoice;
}

//adds the players choice on the website
const container = document.createElement('div');
function displayPlayerChoice(button, computerChoice){
    const roundChoice = document.querySelector('#game');
    const container = document.createElement('div');
    
    //player
    const yourChoice = document.createElement('span');
    yourChoice.setAttribute('style', 'margin-right: 100px; font-size:80px; position: sticky;');

    yourChoice.classList.add('yourChoice');
    yourChoice.textContent=button.id;
    container.appendChild(yourChoice)
    roundChoice.appendChild(container);

    
    //computer
    const computerChoice2 = document.createElement('span');
    computerChoice2.setAttribute('style', 'font-size:80px; position: sticky;');

    computerChoice2.classList.add('computerChoice');
    computerChoice2.textContent=computerChoice;
    container.appendChild(computerChoice2)
    roundChoice.appendChild(container);
}
//Function of the game where it decides which player wins
function playRound(playerSelection, computerSelection){
    if(playerSelection===computerSelection){
        console.log("draw");
    }
    else if(playerSelection==="🗿"){
        if(computerSelection==="📄"){
            console.log("Computer Wins");
            computerScore++;
        }
        else{
            console.log("Player Wins");
            playerScore++;
        }
    }
    else if(playerSelection==="📄"){
        if(computerSelection==="✂"){
            console.log("Computer Wins");
            computerScore++;
        }
        else{
            console.log("Player Wins");
            playerScore++;
        }
    }
    else if(playerSelection==="✂"){
        if(computerSelection==="🗿"){
            console.log("Computer Wins");
            computerScore++;
        }
        else{
            console.log("Player Wins");
            playerScore++;
        }
    }
}

//Changes the scores to determine who wins the game
function replaceScore(){
    const scores = document.querySelector('#scores')
    const playerCurrentScore = document.querySelector('#yourScore');
    const computerCurrentScore = document.querySelector('#computerScore');
    const tempScores =[];
    tempScores[0]= playerCurrentScore.textContent;
    tempScores[1]=computerCurrentScore.textContent;
    //replace
    playerCurrentScore.textContent=playerCurrentScore.textContent.replace(tempScores[0],playerScore);
    computerCurrentScore.textContent=computerCurrentScore.textContent.replace(tempScores[1],computerScore);
}

//function to correct the captalization on user input
//useless in v2 of the game
function capitalize(word){
    let firstletter = word.slice(0,1);
    firstletter = firstletter.toUpperCase();
    let restWord = word.slice(1);
    restWord = restWord.toLowerCase();
    word = firstletter + restWord;
    return word;
}