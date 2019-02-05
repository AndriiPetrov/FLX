// Your code goes here
let playGame = confirm("Do you want to play a game?");
let prize = 0;
let prizeOnCurentAttempt = 0;
let counter = 0
let randomNumber;
let range = 5;

do {
    if (!playGame) {
        alert("You did not become a millionare, but can.");
    } else {
        if (counter === 0) {
            randomNumber = Math.floor(Math.random() * range);
            console.log(randomNumber);
            for (let i = 3; i > 0; i--) {
                if (i === 3) {
                    prizeOnCurentAttempt = 10;
                } else if (i === 2) {
                    prizeOnCurentAttempt = 5;
                } else if (i === 1) {
                    prizeOnCurentAttempt = 2;
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
                            prize += 10;
                            break;
                        case 2:
                            prize += 5;
                            break;
                        default:
                            prize += 2;
                            break;
                    }
                    break;
                }
            }
            counter++;
            console.log(prize);
            if (prize === 0) {
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
        } else {
            randomNumber = Math.floor(Math.random() * (range * 2));
            for (let i = 3; i > 0; i--) {
                if (i === 3) {
                    prizeOnCurentAttempt = 10 * 3;
                } else if (i === 2) {
                    prizeOnCurentAttempt = 5 * 3;
                } else if (i === 1) {
                    prizeOnCurentAttempt = 2 * 3;
                }

                let userNumber = +prompt(`
                Enter a number from 0 to 10
                Attempts left: ${i}
                Total prize: ${prize}
                Possible prize on current attempt: ${prizeOnCurentAttempt}
                Please enter your number
                `, "");

                if (userNumber === randomNumber) {
                    switch (i) {
                        case 3:
                            prize += 10 * 3;
                            break;
                        case 2:
                            prize += 5 * 3;
                            break;
                        default:
                            prize += 2 * 3;
                            break;
                    }
                    break;
                }
            }
            counter++;
            console.log(prize);
            if (prize === 0) {
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
    }
} while (playGame)