// function(computerPlay) chooses rock paper or scissors
var rps = ['rock','paper','scissors'];

var compChoice = ''
function computerSelection() {
    const compChoice = rps[Math.floor(Math.random() * 3)]
    return compChoice
}

// fuction(playerSelection) player gets to choose, make it case sensitive

function playerSelection() {
    var playerChoice = ''
    while (playerChoice != 'rock' && playerChoice != 'scissors' && playerChoice != 'paper') {
        var playerChoice = prompt("Choose rock, paper or scissors").toLowerCase()

        if (playerChoice != 'rock' && playerChoice != 'scissors' && playerChoice != 'paper') {
            alert('Choice not valid')
        }
    }
    return playerChoice
}


// function(playRound) takes both functions and declares winner
var compwin = 0
var playerwin = 0

function playRound(player,cpu) {
    if (player == cpu) {
        alert("It's a tie") 
        return
    }
    if (cpu == 'rock' && player == 'scissors' || cpu == 'scissors' && player == 'paper' || cpu == 'paper' && player == 'rock') {
        alert('cpu wins')
        return compwin += 1
        
    }
    else {
        alert('player wins')
        return playerwin += 1
    }
    

}
// function(game)  plays the game 5 times and keeps track of winner




function game(playRound) {
    while  (true) {
        
        const cpu = computerSelection();
        console.log(cpu)
        const player =  playerSelection();
        
        playRound(player,cpu);
        
        console.log(compwin)
        console.log(playerwin)
        if (compwin > 2 ) {
            alert('computer has won')
            break
            
        }
        if (playerwin > 2 ) {
            alert('player has won')
            break
        }
        
        

        
    } 
}

game(playRound)