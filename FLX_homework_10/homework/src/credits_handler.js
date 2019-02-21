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

      getCardInformation.historyLogs[getCardInformation.historyLogs.length] = {
        operationType: 'Received credits',
        credits: credits,
        operationTime: Date.now()
      }
    },

    takeCredits: function (credits) {
      if (getCardInformation.balance >= credits && getCardInformation.transactionLimit >= credits) {
        getCardInformation.balance = getCardInformation.balance - credits;
      } else {
        console.error('card balance or transactionLimit are less then credits you want to take');
      }

      getCardInformation.historyLogs[getCardInformation.historyLogs.length] = {
        operationType: 'Withdrawal of credits',
        credits: credits,
        operationTime: Date.now()
      }
    },

    setTransactionLimit: function (credits) {
      getCardInformation.transactionLimit = credits;

      getCardInformation.historyLogs[getCardInformation.historyLogs.length] = {
        operationType: 'Transaction limit change',
        credits: credits,
        operationTime: Date.now()
      }
    },

    transferCredits: function (credits, recepientCard) {
      credits = parseInt(credits - credits * tax);
      if(this.getCardOptions().balance >= credits && this.getCardOptions().transactionLimit >= credits) {
        recepientCard.getCardOptions().balance += credits; 
      } else {
        console.error('card balance or transactionLimit are less then credits you want to take')
      }
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