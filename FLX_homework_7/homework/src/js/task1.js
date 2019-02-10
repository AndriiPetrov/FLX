// Your code goes here
let login = prompt("Insert your login", "");

//Step 1
if (login === "" || login === null) {
    alert("Canceled");
} else if (login.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (login !== "User" && login !== "Admin") {
    alert("I don't know you");
} else {
    // Step 2 and Step 3
    let password = prompt("Insert your password", "");
    let hours = new Date().getHours();

    if ((login === "User" && password === "UserPass") ||
        (login === "Admin" && password === "RootPass")) {

        hours < 20 ? alert("Good day, dear " + login + "!") :
            alert("Good evening, dear " + login + "!");

    } else {
        alert("Wrong password");
    }
}