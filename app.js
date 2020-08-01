/*----- constants -----*/
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
const msgs = document.querySelector('h2');

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('reset-button').addEventListener('click', init);

/*----- functions -----*/
function init() {
    board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];
    render();
}

function render() {
    board.forEach(function(mark, index) {
        squares[index].textContent = mark;
    });
    msgs.textContent = win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
}

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    })
    board[idx] = turn;
    console.log(board);
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
}

function getWinner() {
    let winner = null;
    winCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });

    return winner ? winner : board.includes('') ? null : 'T';
}


init();














// var boxNames = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];

// var boxes = [
//     [box1, box2, box3],
// ];
// for (var i = 0; i < 9; i++) {
//     boxes.push(document.getElementById(boxNames[i]));
// }

// function boxClick(box) {
//     box.innerText = "X";
// }

// function giveUserOption() {
//     for (var i = 0; i < 8; i++) {
//         boxes[i].addEventListener("click", function() {
//             boxes[i].innerText = "X";
//         });
//     }

// boxes[0].addEventListener("click", boxClick(boxes[0]));
// boxes[1].addEventListener("click", function() {
//     boxes[1].innerText = "X";
// });
// boxes[2].addEventListener("click", function() {
//     boxes[2].innerText = "X";
// });
// boxes[3].addEventListener("click", function() {
//     boxes[3].innerText = "X";
// });
// boxes[4].addEventListener("click", function() {
//     boxes[4].innerText = "X";
// });
// boxes[5].addEventListener("click", function() {
//     boxes[5].innerText = "X";
// });
// boxes[6].addEventListener("click", function() {
//     boxes[6].innerText = "X";
// });
// boxes[7].addEventListener("click", function() {
//     boxes[7].innerText = "X";
// });
// boxes[8].addEventListener("click", function() {
//     boxes[8].innerText = "X";
// });
// }

// function checkIfEmpty(box) {
//     if (box.innerText == "X" || box.innerText == "O") {
//         return false;
//     } else {
//         return true;
//     }
// }

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function computerChoice() {
//     var checkBoxes = []
//     for (var i = 0; i < 9; i++) {
//         checkBoxes.push(checkIfEmpty(boxes[i]));
//     }

//     var availableBoxes = [];

//     for (var i = 0; i < 9; i++) {
//         if (checkBoxes[i]) {
//             availableBoxes.push(boxes[i]);
//         }
//     }

//     var randNum = getRndInteger(0, (availableBoxes.length - 1));
//     var chosenBox = availableBoxes[randNum];
//     chosenBox.innerText = "O";
// }

// function userChoice() {
//     var checkBoxes = []
//     for (var i = 0; i < 9; i++) {
//         checkBoxes.push(checkIfEmpty(boxes[i]));
//     }

//     var availableBoxes = [];

//     for (var i = 0; i < 9; i++) {
//         if (checkBoxes[i]) {
//             availableBoxes.push(boxes[i]);
//         }
//     }

// for (var i = 0; i < availableBoxes.length; i++) {
//     console.log(availableBoxes[i]);
//     availableBoxes[i].addEventListener("click", function() {
//         availableBoxes[i].innerText = "X";
//     });
// }

// boxes[0].removeEventListener("click", boxClick(boxes[0]));


// }

// giveUserOption();
// computerChoice();
// userChoice();