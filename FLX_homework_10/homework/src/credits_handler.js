// Task 1
function userCard(index) {
    let card = function getCardOptions() {
        return {
            balance: 100,
            transactionLimit: 100,
            hisroryLogs: [],
            key: index
        }
    }
    function putCredits (credits) {
        card.balance = card.balance + credits;
    }
    function takeCredits (credits) {
        if(card.balance > credits && card.transactionLimit > credits) {
            card.balance = card.balance - credits;
        } else {
            console.error('card balance or transactionLimit are less then credits you want to take');
        }
    }
    function setTransactionLimit(credits) {
        card.transactionLimit = credits;
    }
}

// Task 2
function UserAccount() {
    this.name = name;
    this.cards = [];

    this.card = function userCard() {
        return;
    }
}