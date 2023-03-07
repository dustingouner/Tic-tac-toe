class Game {
  constructor() {
    this.player1 = null
    this.player2= null
    this.playerTurn = this.player1
    this.firstPlayer = this.player1
    this.turns = 0
    this.activeGame = true
    this.draw = false
    this.winner = null
    
  } 
  takeTurn(boxID) {
    if (this.playerTurn === this.player1) {
      this.playerTurn = this.player2
      this.player1.boardSpot.push(boxID)
      topMessage.innerHTML = ""
      topMessage.innerHTML += `<h2>IT'S<img class="top-token" src="${thisGame.playerTurn.token}" alt="">TURN!</h2>`
      
    } else {
      this.playerTurn = this.player1
      this.player2.boardSpot.push(boxID)
      topMessage.innerHTML = ""
      topMessage.innerHTML += `<h2>IT'S<img class="top-token" src="${thisGame.playerTurn.token}" alt="">TURN!</h2>`
    }
    thisGame.turns += 1
  }
  declareWinner() {
    var waysToWin = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
    ]
    for(var i =0; i < waysToWin.length; i++) {
      if (
        this.player1.boardSpot.includes(waysToWin[i][0]) &&
        this.player1.boardSpot.includes(waysToWin[i][1]) &&
        this.player1.boardSpot.includes(waysToWin[i][2])) 
        {
        this.player1.wins += 1
        this.winner = this.player1
        this.activeGame = false
      } else if (
        this.player2.boardSpot.includes(waysToWin[i][0]) &&
        this.player2.boardSpot.includes(waysToWin[i][1]) &&
        this.player2.boardSpot.includes(waysToWin[i][2])
      ) {
        this.player2.wins += 1
        this.winner = this.player2
        this.activeGame = false
      }
    }
    this.checkForDraw()
  }
  checkForDraw() {
    if (this.turns === 9 && this.winner === null) {
      this.draw = true
    }
  }
  resetGameBoard() {
    if (this.playerTurn === this.player1) {
      this.playerTurn = this.player2
      topMessage.innerHTML = ""
      topMessage.innerHTML += `<h2>IT'S<img class="top-token" src="${thisGame.playerTurn.token}" alt="">TURN!</h2>`
      
    } else {
      this.playerTurn = this.player1
      topMessage.innerHTML = ""
      topMessage.innerHTML += `<h2>IT'S<img class="top-token" src="${thisGame.playerTurn.token}" alt="">TURN!</h2>`

    }
    this.activeGame = true
    this.draw = false
    this.turns = 0
    this.winner = null
    this.player1.boardSpot = []
    this.player2.boardSpot = []
  }
}
  