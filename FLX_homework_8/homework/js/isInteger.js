function isInteger(integer) {
    return Number(integer) === integer && integer % 1 === 0;
}

isInteger(5); // true;
isInteger(5.1); // false;