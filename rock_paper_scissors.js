//roCK PAPER SCISSORS GAME, ROCK IS 1, SCISSORS 3, PAPER 2, THE RULES ARE USE IRL
userPoints = 0
computerPoints = 0
function main() {
    gameLoop()

}

function gameLoop() {
    //for (i = 1; i <= 5; i++) {
        user = getUserChoice(i)
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

        if (i==5) {
            if (userPoints < computerPoints) {
                alert("You will get em next time")
            }else{
                alert("You won bro")
            }
        }
    //}
}

function handleResults() {
    switch (result) {
        case 1:
            computerPoints++
            alert("You lost")
            break
        case 0:
            userPoints++
            alert("You win")

    }
}

function getComputerChoice() {
    return getRndInteger(1, 4)
}

function getUserChoice(i) {
    let choice = prompt(`
         ${i == 5 ? "Final Round" : `Round ${i}` }
        Rock, paper or scissors?`
    );
    switch (choice.toUpperCase()) {
        case "ROCK":
            return 1
        case "PAPER":
            return 2
        case "SCISSORS":
            return 3
        default:
            alert("Invalid choice!")
            break;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function compareResults(user, computer) {
    //returns false if user wins, true if computer wins, otherwise, it is a draw, return 0
    switch (user) {
        case 1:
            if (computer == 2) {
                return 1
            }
            return 0
        case 2:
            if (computer == 3) {
                return 1
            }
            return 0
        case 3:
            if (computer == 1) {
                return 1
            }
            return 0
        default:
            return 0
    }



}

