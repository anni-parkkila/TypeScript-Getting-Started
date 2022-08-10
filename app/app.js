function startGame() {
    // starting a new game
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = "MultiMath Player"; }
    console.log("New game starting for player: ".concat(name));
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = "".concat(score, " - ").concat(playerName);
}
document.getElementById('startGame').addEventListener('click', startGame);
