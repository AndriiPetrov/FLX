// Task 1
function findTypes() {
    let argumentOfTypes = [];
    for (let i = 0; i < arguments.length; i++) {
        argumentOfTypes[i] = typeof (arguments[i]);
    }
    return argumentOfTypes;
}

findTypes('number');
findTypes(null, 5, "hello");

// Task 2
function executeforEach(someArray, someFunction) {
    // someArray.forEach(element => {
    //     someFunciton(element)
    // });
    let anotherArray = [];
    for (let i = 0; i < someArray.length; i++) {
        anotherArray[i] = someFunction(someArray[i]);
    }
    return anotherArray;
}

executeforEach([1, 2, 3], function (el) {
    console.log(el);
})

// Task 3
function mapArray(someArray, someFunction) {
    let anotherArray = [];
    anotherArray = executeforEach(someArray, someFunction)
    return anotherArray;
}

console.log(mapArray([2, 5, 8], function (el) {
    return el + 3;
}));

// Task 4
function filterArray(someArray, someFunction) {
    let anotherArray = [];
    anotherArray = executeforEach(someArray, someFunction);
    console.log(anotherArray);
    for(let i = 0; i < someArray.length; i++) {
        if(anotherArray[i]){
            someArray[i] = someArray[i];
        } else {
            someArray.splice(i, 1);
        }
    }
    return someArray;
}

console.log(filterArray([2, 5, 8], function(el) {
    return el > 3;
}))

// Data for task5 and task6
let data = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      "age": 39,
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      "age": 38,
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      "age": 2,
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      "age": 19,
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
]
  

// Task 5
function getAmountOfAdultPeople(data) {
    let ageArray = []
    for(let i = 0; i < data.length; i++){
      ageArray[i] = data[i].age;
    }
    ageArray = filterArray(ageArray, function(el) {
      return el > 18;
    })
    return ageArray.length;
  }

console.log(getAmountOfAdultPeople(data));

// Task 6


// Task 7
function keys(object) {
    return Object.keys(object);
  }
  
console.log(keys({keyOne: 1, keyTwo: 2, keyThree:3}));

// Task 8
function values(object) {
    return Object.values(object);
}
  
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));

// Task 9
function showFormattedDate(bigDate) {
    let month_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let date = bigDate.getDate();
    let month = bigDate.getMonth();
    let year = bigDate.getFullYear();
  
    return `Date: ${date} of ${month_short[month]}, ${year}`
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

// Task 10
function isEvenYear(bigDate) {
    let year = bigDate.getFullYear();
    if(year === new Date().getFullYear()) {
      return true;
    } else {
      return false;
    }
}
console.log(isEvenYear(new Date('2019-01-27T01:10:00')));

// Task 11
function isEvenMonth(bigDate) {
    let month = bigDate.getMonth();
    console.log(month);
    if(month === new Date().getMonth()) {
      return true;
    } else {
      return false;
    }
}
  
console.log(isEvenMonth(new Date('2019-02-27T01:10:00')))
