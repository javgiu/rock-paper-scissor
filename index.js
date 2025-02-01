console.log("Hello World!")

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
    }
}

function getHumanChoice () {

    let choice;

    do {
        choice = prompt("Select:\n   1 for rock.\n   2 for paper.\n   3 for scissors");
    

        switch (choice) {
            case "1":
                return "rock";
                break;
            case "2":
                return "paper";
                break;
            case "3":
                return "scissors";
                break;
            default:
                alert("Wrong choice!");
                choice = false;
                break;
        }
    }
    while (!choice);
}

function playGame () {

    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        console.log(`You: ${humanChoice.toUpperCase()}`);
        console.log(`Computer: ${computerChoice.toUpperCase()}`);
    
        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You Win! Rock beats Scissors");
            humanScore++;
        } 
        if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You Win! Paper beats Rock");
            humanScore++;
        } 
        if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You Win! Scissors beats Paper");
            humanScore++;
        } 
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You Lose! Paper beats Rock");
            computerScore++;
        } 
        if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You Lose! Scissors beats Paper");
            computerScore++;
        } 
        if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
        } 
        if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("Draw! Rock and Rock");
        } 
        if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("Draw! Paper and Paper");
        } 
        if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("Draw! Scissors and Scissors");
        } 
    
    }

    while ( humanScore < 3 && computerScore < 3 ) {

        playRound (getHumanChoice(), getComputerChoice());

    }

    if ( humanScore == 3 ) {
        console.log(`You Win The Game!\nYou: ${humanScore}\nComputer: ${computerScore}`);
    } else if ( computerScore == 3 ) {
        console.log(`You Lose The Game!\nYou: ${humanScore}\nComputer: ${computerScore}`);
    }

}

playGame();
