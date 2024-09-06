//@ts-check

let playerControls = document.getElementById("player-controls");
let btnRock = document.getElementById("player-controls");
let btnPaper = document.getElementById("player-controls");
let btnScissors = document.getElementById("player-controls");

function rockClicked() {
    console.log("rock was chosen")
}

function paperClicked() {
    console.log("Paper was chosen")
}

function ScissorsClicked() {
    console.log("Scissors were chosen")
}

//btnRock?.addEventListener("click", rockClicked)
//btnPaper?.addEventListener("click", PaperClicked)
//btnScissors?.addEventListener("click", ScissorsClicked)

function playerControlHandler(e) {
    let weaponName = e.target.innerText;
    console.log(weaponName, "was chosen")
}

playerControls?.addEventListener("click", playerControlHandler);