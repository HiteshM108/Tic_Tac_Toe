box1 = document.getElementById("box1");
box2 = document.getElementById("box2");
box3 = document.getElementById("box3");
box4 = document.getElementById("box4");
box5 = document.getElementById("box5");
box6 = document.getElementById("box6");
box7 = document.getElementById("box7");
box8 = document.getElementById("box8");
box9 = document.getElementById("box9");
outcome = document.getElementById("outcome");

var boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkIfEmpty(box) {
    if (box.innerText == "X" || box.innerText == "O") {
        return false;
    } else {
        return true;
    }
}

function checkIfUserWon() {
    if (box1.innerText == "X" && box2.innerText == "X" && box3.innerText == "X") {
        outcome.innerText = "You won!"
    } else if (box1.innerText == "X" && box2.innerText == "X" && box3.innerText == "X") {
        outcome.innerText = "You won!"
    }
};

function computerChoice() {
    box1Empty = checkIfEmpty(box1);
    box2Empty = checkIfEmpty(box2);
    box3Empty = checkIfEmpty(box3);
    box4Empty = checkIfEmpty(box4);
    box5Empty = checkIfEmpty(box5);
    box6Empty = checkIfEmpty(box6);
    box7Empty = checkIfEmpty(box7);
    box8Empty = checkIfEmpty(box8);
    box9Empty = checkIfEmpty(box9);

    var checkBoxes = [box1Empty, box2Empty, box3Empty, box4Empty, box5Empty, box6Empty, box7Empty, box8Empty, box9Empty];

    var availableBoxes = [];

    var i;
    for (i = 0; i < 10; i++) {
        if (checkBoxes[i] == true) {
            availableBoxes.push(boxes[i]);
        }
    }

    var randNum = getRndInteger(0, (availableBoxes.length - 1));
    availableBoxes[randNum].innerText = "O";
}

function userChoice() {
    box1Empty = checkIfEmpty(box1);
    box2Empty = checkIfEmpty(box2);
    box3Empty = checkIfEmpty(box3);
    box4Empty = checkIfEmpty(box4);
    box5Empty = checkIfEmpty(box5);
    box6Empty = checkIfEmpty(box6);
    box7Empty = checkIfEmpty(box7);
    box8Empty = checkIfEmpty(box8);
    box9Empty = checkIfEmpty(box9);

    var checkBoxes = [box1Empty, box2Empty, box3Empty, box4Empty, box5Empty, box6Empty, box7Empty, box8Empty, box9Empty];

    var availableBoxes = [];

    var i;
    for (i = 0; i < 10; i++) {
        if (checkBoxes[i] == true) {
            availableBoxes.push(boxes[i]);
        }
    }

    availableBoxes[0].innerText = "X";

    console.log(availableBoxes[0].innerText);

    var j;
    for (j = 0; j < availableBoxes.length; j++) {
        availableBoxes[j].addEventListener("click", function() {
            availableBoxes[j].innerText = "X";
            console.log(availableBoxes[j].innerText);
        })
    }
}

// box1.addEventListener("click", function() {
//     box1.innerText = "X";
// })
// box2.addEventListener("click", function() {
//     box2.innerText = "X";
// })
// box3.addEventListener("click", function() {
//     box3.innerText = "X";
// })
// box4.addEventListener("click", function() {
//     box4.innerText = "X";
// })
// box5.addEventListener("click", function() {
//     box5.innerText = "X";
// })
// box6.addEventListener("click", function() {
//     box6.innerText = "X";
// })
// box7.addEventListener("click", function() {
//     box7.innerText = "X";
// })
// box8.addEventListener("click", function() {
//     box8.innerText = "X";
// })
// box9.addEventListener("click", function() {
//     box9.innerText = "X";
// })

computerChoice();
userChoice();

// var i;
// computerChoice();
// computerChoice();
// computerChoice();
// while (i < 10) {
//     checkIfUserWon();
//     computerChoice();
//     i += 1;
// }