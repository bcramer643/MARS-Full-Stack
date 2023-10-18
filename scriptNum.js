const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkButton = document.querySelector("button"),
    remainChances = document.querySelector(".chances");

input.focus();
let randomNum = Math.floor(Math.random() * 10 + 1);
chance = 3;

checkButton.addEventListener("click", () => {

    chance--;

    let inputValue = input.value;

    if (inputValue == randomNum) {
        guess.textContent  = "Congratulations! You chose the correct number!";
        checkButton.textContent = "Replay";

    } else if (inputValue > randomNum && inputValue < 10) {
        [guess.textContent, remainChances.textContent] = ["Your guess is too high", chance];

    } else if (inputValue < randomNum && inputValue > 0) {

        [guess.textContent, remainChances.textContent] = ["Your guess is too low", chance];

    } else {

        [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
    }

    if (chance == 0) {


        [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
        guess.textContent = "You lost. Game Over.";
    }
    if (chance < 0) {
        window.location.reload();
    }
});