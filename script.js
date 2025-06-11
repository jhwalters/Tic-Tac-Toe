let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let turn = true;
let playerTurn = document.querySelector(".playerTurn")
let btnIndex = 0

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

    })
    
})

resetBtn.addEventListener('click', function () {
    btns.forEach((btn) => {
        btn.textContent = ""
    })
    playerTurn.textContent = Player.player1 + "'s Turn"
    initGame()
}) 

let gameBoard = []

const Player = {
    player1: "X",
    player2: "O"
}

function initGame() {
    gameBoard = [
        "", "", "",
        "", "", "",
        "", "", ""
    ]
    turn = true
    console.log(gameBoard)

}

function handlePlayerMove() {
    turn = !turn
    if(turn) {
        playerTurn.textContent = Player.player1 + "'s Turn"
    }
    else {
        playerTurn.textContent = Player.player2 + "'s Turn"
    }
    handlePlayerWin()
}

function handlePlayerWin() {
    console.log(gameBoard)
    
}

function updateGame() {

}

initGame()

