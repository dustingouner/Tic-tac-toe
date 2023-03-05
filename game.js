class Game {
  constructor() {
    this.player1 = new Player(1, 'X')
    this.player2= new Player(2, 'O')
    this.playerTurn = 'X'
    this.firstPlayer = 'X'
    this.turns = 0
    this.activeGame = true
    this.draw = false
    this.winner = null
    
  } 
  takeTurn() {
    if (this.playerTurn === 'X') {
      this.playerTurn = 'O'
      topMessage.innerText = `It's Player ${thisGame.playerTurn}\'s turn!`
    } else {
      this.playerTurn = 'X'
      topMessage.innerText = `It's Player ${thisGame.playerTurn}\'s turn!`
    }
  }
  checkForWinner() {
    console.log('is this working')
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
        this.winner = true
        this.activeGame = false
        topMessage.innerText = 'Kanye Won!'
       } else if (
        this.player2.boardSpot.includes(waysToWin[i][0]) &&
        this.player2.boardSpot.includes(waysToWin[i][1]) &&
        this.player2.boardSpot.includes(waysToWin[i][2])
       ) {
         this.player2.wins += 1
         this.winner = true
         this.activeGame = false
         topMessage.innerText = 'Pete Won!'
       }
    }
    this.checkForDraw()
  }
  updateGameBoard(id) {
    this.gameBoard[id] = this.playerTurn
  }
  checkForDraw() {
    if (this.turns === 9 && this.winner === false) {
      this.draw = true
      this.activeGame = false
    }
  }
  resetGameBoard() {
    if (this.firstPlayer === 'X') {
      this.firstPlayer = '0'
      this.playerTurn = '0'
    } else if (this.firstPlayer === 'O') {
      this.firstPlayer = 'X'
      this.playerTurn = 'X'
    }
    this.activeGame = true
    this.draw = false
    this.turns = 0
    this.winner = false
    this.player1.boardSpot = []
    this.player2.boardSpot = []
  }
}