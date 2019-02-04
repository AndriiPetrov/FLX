// Your code goes here

let amountOfMoney = parseFloat(prompt("Insert amount of money between 0 and 9999999", "0"));
let discount = parseInt(prompt("Insert discount between 0 and 99", "0"));

if ( isNaN(amountOfMoney) || amountOfMoney < 0 || amountOfMoney > 9999999
|| isNaN(discount) || discount < 0 || discount > 9999999 ) {
    alert("Invalid input data");
    } else {
    let saved = amountOfMoney / 100 * discount;
    let priceWithDiscount = amountOfMoney - saved;

    alert(`
        Price without discount: ${+amountOfMoney.toFixed(2)}
        Discount: ${+discount.toFixed(2)}
        Price with discount: ${+priceWithDiscount.toFixed(2)}
        Saved: ${+saved.toFixed(2)}
    `);
}