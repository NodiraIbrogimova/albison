function main() {
    let checkButton = document.getElementById('checkButton');
    let choices = 5;
    compareRandomGuess(checkButton, choices);
}

function compareRandomGuess(checkButton, choices) {
    checkButton.addEventListener('click', () => {
        const userGuess = parseInt(document.getElementById('userGuess').value);
        const randomNumber = Math.floor(Math.random() * 11);
        let content;
        if (userGuess >= 0 && userGuess <= 10) {
            if (userGuess === randomNumber) {
                content = 'Congratulations! You guessed the correct number.';
                choices = 5;
            } else {
                content = `Oops! Wrong guess. The correct number was ${randomNumber}.`;
                choices -= 1;
                if (choices == 0) {
                    content = "You loose. The maximum number of trials is 5";
                    document.getElementById('userGuess').style.display = "none";
                    document.getElementById('checkButton').style.display = "none";
                }
            }
        } else {
            content = `Please enter a number between 0 and 10. You have ${choices} trials`;
        }
        document.getElementById('result').textContent = content;
    });
}

main();