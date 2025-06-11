let btns = document.querySelectorAll(".btn")
let resetBtn = document.querySelector("#reset")
let turn = true
let playerTurn = document.querySelector(".playerTurn")
let btnIndex = 0

let gameBoard = []

const Player = {
    player1: "X",
    player2: "O"
}

const winConditions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



function initGame() {
    gameBoard = [
        "", "", "",
        "", "", "",
        "", "", ""
    ]
    turn = true
    playerTurn.textContent = Player.player1 + "'s Turn"
    
    btns.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            
            index = parseInt(e.target.getAttribute("data-index"))
            if(turn) {
                btn.textContent = "X"
                gameBoard.splice(index, 1, "X")
            }
            else {
                btn.textContent = "O"
                gameBoard.splice(index, 1, "O")
            }
            handlePlayerMove()
            btn.disabled = true;
            
        })
        
    })
    
    resetBtn.addEventListener('click', function () {
        btns.forEach((btn) => {
            btn.textContent = ""
            btn.disabled = false
        })
        gameBoard = [
            "", "", "",
            "", "", "",
            "", "", ""
        ]
        turn = true
        playerTurn.textContent = Player.player1 + "'s Turn"
    }) 

}

function handlePlayerMove() {
    if(checkWin(gameBoard, 'X')) {
        playerTurn.textContent = Player.player1 + " Wins"
        btns.forEach((btn) => {
            btn.disabled = true
        })
        return
    }
    if(checkWin(gameBoard, 'O')) {
        playerTurn.textContent = Player.player2 + " Wins"
        btns.forEach((btn) => {
            btn.disabled = true
        })
        return
    }
    if(!turn) {
        playerTurn.textContent = Player.player1 + "'s Turn"
    }
    else {
        playerTurn.textContent = Player.player2 + "'s Turn"
    }
    turn = !turn
}

function checkWin(gameBoard, player) {
    return winConditions.some(condition => 
        condition.every(index => gameBoard[index] === player)
    )
    
}

initGame()

