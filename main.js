var thisGame = new Game()

var topMessage = document.querySelector('.top-message')
var player1Wins = document.querySelector('.player-1-wins')
var player2Wins = document.querySelector('.player-2-wins')
var gameBoardContainer = document.querySelector('.game-board-container')

// ----EVENT LISTENERS------

// window.addEventListener('load', displayPage)
gameBoardContainer.addEventListener('click', playGame)

// -----FUNCTIONS------

// function displayPage() {
//   topMessage.innerText = `It's Player ${thisGame.playerTurn}\'s turn!`
//   player1Wins.innerHTML = `Wins: ${thisGame.player1.wins}`
//   player2Wins.innerHTML = `Wins: ${thisGame.player2.wins}`
// }

function playGame(event) {
  if (event.target.classList.contains('box') && event.target.innerHTML === "" && thisGame.winner === null) {
    var boxID = parseInt(event.target.dataset.indexNumber)
    event.target.innerHTML += `<img class="box-token" src="${thisGame.playerTurn.token}" alt="">`
    thisGame.takeTurn(boxID)
    thisGame.declareWinner()
  if (thisGame.winner !== null || thisGame.draw) {
    displayResults()
    } 
  }
}

function displayResults() {
  if (thisGame.draw) {
    topMessage.innerHTML = ""
    topMessage.innerHTML += "IT'S A DRAW!"
  } else {
    topMessage.innerHTML = ""
    topMessage.innerHTML += `<h2><img class="top-token" src="${thisGame.winner.token}" alt="">WINS!!</h2>`
    player1Wins.innerText = `WINS: ${thisGame.player1.wins}`
    player2Wins.innerText = `WINS: ${thisGame.player2.wins}`
  }
  setTimeout(newGame, 2500)
}

function newGame() {
  var gameBoxes = document.querySelectorAll('.box')
  gameBoxes.forEach(box => box.innerHTML = '')
  thisGame.resetGameBoard()
}





