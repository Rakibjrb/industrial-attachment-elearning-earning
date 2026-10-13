// DOM elements collections
const rollDiceBtn = document.getElementById("btn-roll-dice");
const dicePips = document.querySelectorAll(".pip");
const tokenRed = document.querySelectorAll(".token-red");
const tokenGreen = document.querySelectorAll(".token-green");
const tokenBlue = document.querySelectorAll(".token-blue");
const tokenYellow = document.querySelectorAll(".token-yellow");
const boardCells = document.querySelectorAll(".board-cell");

// get 1 to 6 random values
const getRandomPoint = () => Math.floor(Math.random() * 6) + 1;

// show pips by pip number
const showPips = (pipNumber) => {
    dicePips[pipNumber - 1].classList.remove("hide-pip");
};

// handlePips function for dice face display
const handlePips = (value) => {
    dicePips.forEach((pips) => pips.classList.add("hide-pip"));
    switch (value) {
        case 1:
            showPips(5);
            break;
        case 2:
            showPips(1);
            showPips(9);
            break;
        case 3:
            showPips(2);
            showPips(5);
            showPips(8);
            break;
        case 4:
            showPips(1);
            showPips(3);
            showPips(7);
            showPips(9);
            break;
        case 5:
            showPips(1);
            showPips(3);
            showPips(5);
            showPips(7);
            showPips(9);
            break;
        case 6:
            showPips(1);
            showPips(3);
            showPips(4);
            showPips(6);
            showPips(7);
            showPips(9);
            break;
    }
}

// handleAnimatePips function for dice roll animation
const handleAnimatePips = () => {
    for (let i = 1; i < 10; i++) {
        setTimeout(() => {
            handlePips(getRandomPoint());
        }, 150 * i);
    }
};

// roll dice handler function
const handleRollDice = () => {
    handleAnimatePips();
    const randomValue = getRandomPoint();
    handlePips(randomValue);
};

// all event listeners
rollDiceBtn.addEventListener("click", handleRollDice);

// initial pips
showPips(1);
showPips(3);
showPips(4);
showPips(6);
showPips(7);
showPips(9);