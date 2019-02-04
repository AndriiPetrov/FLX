// Your code goes here
var a = +prompt("Insert value a", "1");
var b = +prompt("Insert value b", "1");
var c = +prompt("Insert value c", "1");

if(isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("one or more numbers are invalid");
} else {
    var d = b * b - 4 * a * c;

    if(d < 0) {
        alert("equation has no roots - no solution");
    } else if(d === 0) {
        var x = -b / (2 * a);
        alert("it's has one root with value of " + parseFloat(x.toFixed(2)));
    } else if(d > 0) {
        var x1 = (-b + Math.sqrt(d)) / (2 * a);
        var x2 = (-b - Math.sqrt(d)) / (2 * a);
        alert("x1 = " + (+x1.toFixed(2)) + " " + "x2 = " + (+x2.toFixed(2)));
    }
}

