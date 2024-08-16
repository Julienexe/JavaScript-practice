//roCK PAPER SCISSORS GAME, ROCK IS 1, SCISSORS 3, PAPER 2, THE RULES ARE USE IRL
userPoints = 0
computerPoints = 0
score = document.getElementById("score")
function main(choice) {
    gameLoop(choice)

}

function gameLoop(choice) {
    //for (i = 1; i <= 5; i++) {
        let user = choice
        computer = getComputerChoice()
        console.log(user)
        console.log(computer)
        result = compareResults(user, computer)
        console.log(result)
        if (user == computer) {
            alert("draw")
        } else {
            handleResults()
        }

        // if (i==5) {
        //     if (userPoints < computerPoints) {
        //         alert("You will get em next time")
        //     }else{
        //         alert("You won bro")
        //     }
        // }
    //}
}


//new game methods


function handleResults() {
    switch (result) {
        case 1:
            computerPoints++
            updateDisplay(userPoints, computerPoints)
            //alert("You lost")
            break
        case 0:
            userPoints++
            updateDisplay(userPoints, computerPoints)
            //alert("You win")

    }
}

function updateDisplay(userScore,computerScore){
    let userTags = document.getElementById("user")
    let computerTags = document.getElementById("computer")

   
        userTags.textContent = userScore
    
    computerTags.textContent = computerScore
    
}

function getComputerChoice() {
    let choice = getRndInteger(1, 4)
    switch (choice) {
        case 1:
            return "ROCK"
        case 2:
            return "PAPER"
        case 3:
            return "SCISSORS"
        default:
            return 0
    }
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function compareResults(user, computer) {
    //returns false if user wins, true if computer wins, otherwise, it is a draw, return 0
    switch (user) {
        case "ROCK":
            if (computer == "PAPER") {
                return 1
            }
            return 0
        case "PAPER":
            if (computer == "SCISSORS") {
                return 1
            }
            return 0
        case "SCISSORS":
            if (computer == "ROCK") {
                return 1
            }
            return 0
        default:
            return 0
    }



}

