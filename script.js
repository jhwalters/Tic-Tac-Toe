let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let turn = true;

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
    btn.addEventListener('click', function () {
        if(turn) {
            btn.textContent = "X"
        }
        else {
            btn.textContent = "O"
        }
    })
})

resetBtn.addEventListener('click', function () {
    
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
}

function handlePlayerMove() {

}

function handlePlayerWin() {

}

function updateGame() {

}

initGame()

console.log(gameBoard)

