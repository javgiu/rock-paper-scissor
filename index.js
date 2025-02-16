function getComputerChoice () {
    let choice = Math.floor ( Math.random () * 3 ) + 1;

    switch (choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    };
};

function playGame() {

    function playRound (humanChoice, computerChoice) {

        if (humanChoice == "rock" && computerChoice == "scissors") {
            
            messagePara.textContent = "You Win! Rock beats Scissors";
            message.appendChild(messagePara);
            humanScore++;
            playerScoreSpan.textContent = humanScore;
        } 
        if (humanChoice == "paper" && computerChoice == "rock") {
            
            messagePara.textContent = "You Win! Paper beats Rock";
            message.appendChild(messagePara);
            humanScore++;
            playerScoreSpan.textContent = humanScore;
        } 
        if (humanChoice == "scissors" && computerChoice == "paper") {
            
            messagePara.textContent = "You Win! Scissors beats Paper";
            message.appendChild(messagePara);
            humanScore++;
            playerScoreSpan.textContent = humanScore;
        } 
        if (humanChoice == "rock" && computerChoice == "paper") {
            
            messagePara.textContent = "You Lose! Paper beats Rock";
            message.appendChild(messagePara);
            computerScore++;
            computerScoreSpan.textContent = computerScore;
        } 
        if (humanChoice == "paper" && computerChoice == "scissors") {
            
            messagePara.textContent = "You Lose! Scissors beats Paper";
            message.appendChild(messagePara);
            computerScore++;
            computerScoreSpan.textContent = computerScore;
        } 
        if (humanChoice == "scissors" && computerChoice == "rock") {
            
            messagePara.textContent = "You Lose! Rock beats Scissors";
            message.appendChild(messagePara);
            computerScore++;
            computerScoreSpan.textContent = computerScore;
        } 
        if (humanChoice == "rock" && computerChoice == "rock") {
            
            messagePara.textContent = "Draw! Rock and Rock";
            message.appendChild(messagePara);
        } 
    
        if (humanChoice == "paper" && computerChoice == "paper") {
            
            messagePara.textContent = "Draw! Paper and Paper";
            message.appendChild(messagePara);
        } 
    
        if (humanChoice == "scissors" && computerChoice == "scissors") {
            
            messagePara.textContent = "Draw! Scissors and Scissors";
            message.appendChild(messagePara);
        } 
    
    
    };

    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;
    let computerChoice;


    

    buttons.forEach( (button) => {

            
        button.addEventListener("click", (e) => {
                
            if (humanScore < 5 && computerScore < 5) {

                humanChoice = e.target.textContent.toLowerCase();
                computerChoice = getComputerChoice();
            
                playRound(humanChoice, computerChoice);
            };
            

            if ( humanScore == 5 ) {
                resultsPara.textContent = `You Win The Game!`;
                results.appendChild(resultsPara);

            } else if ( computerScore == 5 ) {
                resultsPara.textContent = `You Lose The Game!`;
                results.appendChild(resultsPara);

            }

            
        });
            
    });
  
};

const buttons = document.querySelectorAll("button");

const playerScoreSpan = document.querySelector("#playerScore");
const computerScoreSpan = document.querySelector("#computerScore");

const message = document.querySelector(".message");
const messagePara = document.createElement("p");

const results = document.querySelector(".results");
const resultsPara = document.createElement("p");

playGame();









