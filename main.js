var thisGame = new Game()

var topMessage = document.querySelector('.top-message')
var player1Wins = document.querySelector('.player-1-wins')
var player2Wins = document.querySelector('.player-2-wins')
var gameBoardContainer = document.querySelector('.box')
var box1 = document.getElementById('1')
var box2 = document.getElementById('2')
var box3 = document.getElementById('3')
var box4 = document.getElementById('4')
var box5 = document.getElementById('5')
var box6 = document.getElementById('6')
var box7 = document.getElementById('7')
var box8 = document.getElementById('8')
var box9 = document.getElementById('9')
var box =  document.querySelectorAll('.box')
var image = document.querySelectorAll('.box-token')



var boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
// ----EVENT LISTENERS------

window.addEventListener('load', displayPage)
gameBoardContainer.addEventListener('click', playGame)
box1.addEventListener('click', playGame)
box2.addEventListener('click', playGame)
box3.addEventListener('click', playGame)
box4.addEventListener('click', playGame)
box5.addEventListener('click', playGame)
box6.addEventListener('click', playGame)
box7.addEventListener('click', playGame)
box8.addEventListener('click', playGame)
box9.addEventListener('click', playGame)
// box.addEventListener('click', play)


// -----FUNCTIONS------

function displayPage() {
  topMessage.innerText = `It's Player ${thisGame.playerTurn}\'s turn!`
  player1Wins.innerHTML = `Wins: ${thisGame.player1.wins}`
  player2Wins.innerHTML = `Wins: ${thisGame.player2.wins}`
}


function playGame(event) {
  if (thisGame.activeGame) {
    for (var i = 0; i < boxes.length; i++) {
      if (thisGame.playerTurn === 'X') {
        if (boxes[i].id === event.target.id) {
          boxes[i].innerHTML = ''
          boxes[i].innerHTML += `<img class="box-token" src="assets/kanye.jpeg" alt="">`
          updatePlayerOneStats()
          thisGame.checkForWinner()
      }
    } else if (thisGame.playerTurn === 'O') {
        if (boxes[i].id === event.target.id) {
        boxes[i].innerHTML = ''
        boxes[i].innerHTML += `<img class="box-token" src="assets/pete.jpeg" alt="">`
        updatePlayerTwoStats()
        thisGame.checkForWinner()
    }
  }
}
if (thisGame.winner) {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = ''
  }
  topMessage.innerText = `${thisGame.playerTurn} wins!`
  player1Wins.innerText = `Wins: ${thisGame.player1.wins}`
  player2Wins.innerText = `Wins: ${thisGame.player2.wins}`
  thisGame.resetGameBoard()
} else {
  thisGame.takeTurn()

    }
  }
}




function updatePlayerOneStats() {
  thisGame.player1.boardSpot.push(parseInt(event.target.id))
  thisGame.turns += 1
}

function updatePlayerTwoStats() {
  thisGame.player2.boardSpot.push(parseInt(event.target.id))
  thisGame.turns += 1
}

// function displayGameResult() {
//   if ()
// }

// function clearBoard() {

// }


// var image = document.getElementById(box-token)
// image.src = "assets/kanye.jpeg"
