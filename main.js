var thisGame = new Game()

var topMessage = document.querySelector('.top-message')
var player1Wins = document.querySelector('.player-1-wins')
var player2Wins = document.querySelector('.player-2-wins')
var gameBoardContainer = document.querySelector('.game-board-container')
var box1 = document.getElementById('1')
var box2 = document.getElementById('2')
var box3 = document.getElementById('3')
var box4 = document.getElementById('4')
var box5 = document.getElementById('5')
var box6 = document.getElementById('6')
var box7 = document.getElementById('7')
var box8 = document.getElementById('8')
var box9 = document.getElementById('9')

var boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
// ----EVENT LISTENERS------

window.addEventListener('load', displayPage)
// gameBoardContainer.addEventListener('click', playGame)
box1.addEventListener('click', playGame)
box2.addEventListener('click', playGame)
box3.addEventListener('click', playGame)
box4.addEventListener('click', playGame)
box5.addEventListener('click', playGame)
box6.addEventListener('click', playGame)
box7.addEventListener('click', playGame)
box8.addEventListener('click', playGame)
box9.addEventListener('click', playGame)


// -----FUNCTIONS------

function displayPage() {
  topMessage.innerText = `It's Player ${thisGame.playerTurn}\'s turn!`
  player1Wins.innerHTML = `Wins: ${thisGame.player1.wins}`
  player2Wins.innerHTML = `Wins: ${thisGame.player2.wins}`
}

// const image = document.createElement("img").src = "/Users/dustingouner/Mod1/Tic-tac-toe/assets/kanye.jpeg";
// box.innerHTML = ""; // remove any text from the box
// box.append(image); // add the image inside of your element  


function playGame(event) {
  if (thisGame.activeGame === true) {
    for (var i = 0; i < boxes.length; i++) {
      if (thisGame.playerTurn === 'X') {
        if (boxes[i].id === event.target.id) {
          boxes[i].innerText = thisGame.player1.token
          //  boxes[i].innerHTML = ''
          //  boxes[i].append(kanye)
           updatePlayerOneStats()
           disableSquare()
           thisGame.declareWinner()
      }
  
      } else if (thisGame.playerTurn === 'O') {
        if (boxes[i].id === event.target.id) {
           boxes[i].innerText = thisGame.player2.token
           updatePlayerTwoStats()
           disableSquare()
           thisGame.declareWinner()
      }
    }

    }
  thisGame.takeTurn()
}
}


function disableSquare() {
  if (event.target.classList.contains('disabled') === false) {
    event.target.classList.add('disabled')
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

