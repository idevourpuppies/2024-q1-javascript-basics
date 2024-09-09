//@ts-check

let playerControls = document.getElementById("player-controls");

    let weapons = [
        {
            type: "Rock",
            beats: "Scissors"
        },
        {
            type: "Paper",
            beats: "Rock"
        },
        {
            type: "Scissors",
            beats: "Paper"
        }
    ];

    function pickRandomWeapon(weapons) {
        let Randy = Math.floor(Math.random() * weapons.length);
        return weapons[Randy];
    }


function playerControlHandler(e) {
    let weaponName = e.target.innerText;
    console.log(weaponName, "was chosen")
}

playerControls?.addEventListener("click", playerControlHandler);