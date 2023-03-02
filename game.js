class Game {
  constructor() {
    this.player1 = new Player(1, 'X')
    this.player2= new Player(2, 'O')
    this.winner = false
    this.playerTurn = 'X'
    this.firstPlayer = 'X'
    this.draw = 'false'
    this.turns = 0
    

  }
  takeTurn() {
    console.log('change turns')
    if (this.playerTurn === 'X') {
      this.playerTurn = 'O'
    } else {
      this.playerTurn = 'X'
    }
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
      if(waysToWin === waysToWin[i]) {

      }
    }
  }
  updateGameBoard() {

  }
  checkForDraw() {
    

  }
  resetGameBoard() {

  }
}