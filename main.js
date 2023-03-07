var thisGame = new Game()

var topMessage = document.querySelector('.top-message')
var player1Wins = document.querySelector('.player-1-wins')
var player2Wins = document.querySelector('.player-2-wins')
var gameBoardContainer = document.querySelector('.game-board-container')
var homeGameBoardContainer = document.querySelector('.home-game-board-container')
var playGameButton = document.querySelector('.play-game-button')
var homePage = document.querySelector('.home-page')
var sideBar = document.querySelector('.sideBar')
var centerContainer = document.querySelector('.center-container')
var playerOneSideBar = document.querySelector('.player-1')
var playerTwoSideBar = document.querySelector('.player-2')
var playerOneStats = document.querySelector('.player-one-stats-container')
var playerTwoStats = document.querySelector('.player-two-stats-container')
var homePageAsidePlayerOne = document.querySelector('.home-player-1')
var homePageAsidePlayerTwo = document.querySelector('.home-player-2')
// ----EVENT LISTENERS------

// window.addEventListener('load', displayPage)
gameBoardContainer.addEventListener('click', playGame)
homeGameBoardContainer.addEventListener('click', choosePlayer)
playGameButton.addEventListener('click', letsRumble)

// -----FUNCTIONS------

function choosePlayer(event) {
  if (thisGame.player1 === null) {
    thisGame.player1 = new Player (1, `./assets/${event.target.id}.png`)
    thisGame.playerTurn = thisGame.player1
    thisGame.firstPlayer = thisGame.player1
    homePageAsidePlayerOne.innerHTML = " "
    homePageAsidePlayerOne.innerHTML += `<div>
      <div class="home-player-one-stats-container">
        <h1>PLAYER 1</h1>
        <img class="firstPick" src="./assets/${event.target.id}.png" alt="pete davidson">
      </div>
    </div>`
    } else if (thisGame.player2 === null) {
    thisGame.player2 = new Player (2, `./assets/${event.target.id}.png`)
    homePageAsidePlayerTwo.innerHTML = " "
    homePageAsidePlayerTwo.innerHTML += `<div>
      <div class="home-player-two-stats-container">
        <h1>PLAYER 2</h1>
        <img class="secondPick" src="./assets/${event.target.id}.png" alt="pete davidson">
      </div>
    </div>`
  }
}

function letsRumble() {
  console.log('is this working')
  homePage.classList.add('hidden')
  homePageAsidePlayerOne.classList.add('hidden')
  homePageAsidePlayerTwo.classList.add('hidden')
  sideBar.classList.remove('hidden')
  centerContainer.classList.remove('hidden')
  playerOneSideBar.classList.remove('hidden')
  playerTwoSideBar.classList.remove('hidden')
  topMessage.innerHTML = ""
  topMessage.innerHTML += `<h2>IT'S<img class="top-token" src="${thisGame.playerTurn.token}" alt="">TURN!</h2>`
  playerOneStats.innerHTML = ""
  playerOneStats.innerHTML += `<h1>Player 1</h1>
  <img class="firstPick" src="${thisGame.player1.token}" alt="player 1 token">
  <h1 class="player-1-wins">WINS: 0</h1>`
  playerTwoStats.innerHTML = ""
  playerTwoStats.innerHTML += `<h1>PLAYER 2</h1>
  <img class="firstPick" src="${thisGame.player2.token}" alt="player 2 token">
  <h1 class="player-2-wins">WINS: 0</h1>`
}



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
    var player1Wins = document.querySelector('.player-1-wins')
    var player2Wins = document.querySelector('.player-2-wins')
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





