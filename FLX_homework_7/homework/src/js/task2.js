// Your code goes here
let playGame = confirm("Do you want to play a game?");
let prize = 0;
let prizeOnCurentAttempt = 0;
let maxPrizeCurentAttempt = 10;
let counter = 0
let randomNumber;
let range = 5;
let previousprize;

console.log(parseInt(prizeOnCurentAttempt / 4));

do {
    if (!playGame) {
        alert("You did not become a millionare, but can.");
    } else {
        if (counter > 0) {
            range = range * 2;
            maxPrizeCurentAttempt = maxPrizeCurentAttempt * 3;
            previousprize = prize;
        }
        randomNumber = Math.floor(Math.random() * range);
        console.log(randomNumber);
        for (let i = 3; i > 0; i--) {
            if (i === 3) {
                prizeOnCurentAttempt = maxPrizeCurentAttempt;
            } else if (i === 2) {
                prizeOnCurentAttempt = maxPrizeCurentAttempt / 2;
            } else if (i === 1) {
                prizeOnCurentAttempt = parseInt(maxPrizeCurentAttempt / 4);
            }

            let userNumber = +prompt(`
                Enter a number from 0 to ${range}
                Attempts left: ${i}
                Total prize: ${prize}
                Possible prize on current attempt: ${prizeOnCurentAttempt}
                Please enter your number
                `, "");

            if (userNumber === randomNumber) {
                switch (i) {
                    case 3:
                        prize += prizeOnCurentAttempt;
                        break;
                    case 2:
                        prize += prizeOnCurentAttempt;
                        break;
                    default:
                        prize += prizeOnCurentAttempt;
                        break;
                }
                break;
            }
        }
        counter++;
        console.log(prize);
        if (prize === previousprize) {
            alert("Thank you for a game. Your prize is: " + prize);
            playGame = confirm("Do you want to play again?")
        } else {
            alert("Congratulation! Your prize is " + prize);
            playGame = confirm("Do you want to continue?");

            if (!playGame) {
                alert("Thank you for a game. Your prize is: " + prize);
                playGame = confirm("Do you want to play again?")
            }
        }
    }
} while (playGame)