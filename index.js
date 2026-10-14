let player_score = 0;
let computer_score = 0;

function playGame(player_choice) {
    const computer_choice = getComputerChoice()
    let results = playRound(player_choice, computer_choice)
    if (player_score === 5 || computer_score === 5) {
        gameOver()
    } else {
        document.getElementById('status').innerHTML = results
    }
}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(player_choice, computer_choice) {
    let result;

    if (player_choice === computer_choice) {
        result = 'tie'
    }  

    // Paper vs Rock

    else if (player_choice === 'paper' && computer_choice === 'rock') {
        result = "Player's paper defeats computer's rock."
        player_score++
        document.getElementById('player-score').innerHTML = player_score
        console.log(result)
    }
    else if (computer_choice === 'paper' && player_choice === 'rock') {
        result = "Computer's paper defeats player's rock."
        computer_score++
        document.getElementById('computer-score').innerHTML = computer_score
        console.log(result)
    }

    // Scissors vs Paper

    else if (player_choice === 'scissors' && computer_choice === 'paper') {
        result = "Player's scissors defeats computer's paper."
        player_score++
        document.getElementById('player-score').innerHTML = player_score
        console.log(result)
    }
    else if (computer_choice === 'scissors' && player_choice === 'paper') {
        result = "Computer's scissors defeats player's paper."
        computer_score++
        document.getElementById('computer-score').innerHTML = computer_score
        console.log(result)
    }

    // Rock vs Scissors

    else if (player_choice === 'rock' && computer_choice === 'scissors') {
        result = "Player's rock defeats computer's scissors."
        player_score++
        document.getElementById('player-score').innerHTML = player_score
        console.log(result)
    }
    else if (computer_choice === 'rock' && player_choice === 'scissors') {
        result = "Computer's rock defeats player's scissors."
        computer_score++
        document.getElementById('computer-score').innerHTML = computer_score
        console.log(result)
    }

    return result
}

function gameOver() {
    let final_result
    if (player_score === 5) {
        final_result = 'Player Win!'
    } else if (computer_score === 5) {
        final_result = 'Computer win!'
    }
    document.getElementById('status').innerHTML = final_result

    player_score = 0
    computer_score = 0

    document.getElementById('rock-button').disabled = true
    document.getElementById('paper-button').disabled = true
    document.getElementById('scissors-button').disabled = true
    document.getElementById('replay-button').disabled = false
}

function replay() {
    document.getElementById('status').innerHTML = "Let's replay!"

    document.getElementById('player-score').innerHTML = player_score
    document.getElementById('computer-score').innerHTML = computer_score

    document.getElementById('rock-button').disabled = false
    document.getElementById('paper-button').disabled = false
    document.getElementById('scissors-button').disabled = false
    document.getElementById('replay-button').disabled = true
}