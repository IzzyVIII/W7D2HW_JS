//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFoods(person) {
    for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`)
    }
}
console.log(favoriteFoods(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

//let Person = (name,age){}

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"*/

    let thePromise = (str)=> {
        return new Promise((resolve, reject) => {
            if (str.length > 10) {
                resolve(str)
            } else {
                reject(str)
            }
        })
    }
    
    thePromise("What will it be?")
        .then((resolve) => {
            console.log(`Big word: ${resolve} `)
        })
        .catch((reject) =>{
            console.log(`Small number: ${reject}`)
        })


//========CODEWARS PROBLEMS=========//

//Is n divisible by x and y?
//def is_divisible(n,x,y):
//    if (n % x == 0) and (n % y == 0):
//        return True
//    else:
//        return False

function Divisible(n, x, y) {
    return n % x === 0 && n % y === 0;
  }



// Quarter of the year
//def quarter_of(month):
//    if month <= 3:
//        return 1
//    if month >= 4 and month <=6:
//        return 2
//    if month <= 9:
//        return 3
//    else:
//        return 4

function quarter_of(month) {
    if (month >= 1 && month <=3){
        return 1;
    } else if (month >= 4 && month <= 6) {
        return 2;
    } else if (month >= 7 && month <= 9) {
        return 3;
    } else if (month >= 10 && month <= 12) {
        return 4;
    }
}