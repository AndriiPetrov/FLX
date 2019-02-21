// Task 1
function userCard(index) {
  let tax = 0.05;
  let getCardInformation = {
    balance: 100,
    transactionLimit: 100,
    historyLogs: [],
    key: index
  }
  return {
    getCardOptions: function () {
      return getCardInformation;
    },
    putCredits: function (credits) {
      getCardInformation.balance = getCardInformation.balance + credits;
    },
    takeCredits: function (credits) {
      if (getCardInformation.balance > credits && getCardInformation.transactionLimit > credits) {
        getCardInformation.balance = getCardInformation.balance - credits;
      } else {
        console.error('card balance or transactionLimit are less then credits you want to take');
      }
    },
    setTransactionLimit: function (credits) {
      getCardInformation.transactionLimit = credits;
    },
    transferCredits: function (credits, recepientCard) {
      credits = parseInt(credits - credits * tax);
    }
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