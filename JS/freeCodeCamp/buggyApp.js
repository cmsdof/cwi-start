/*  Original code:

    const firstResult = 5 + "10";
    console.log(`5 + 10 = ${firstResult}`);

    const secondResult = "Eight" - 5;
    console.log(`8 - 5 = ${secondResult}`);

    const thirdResult = true + 5;
    console.log(`1 + 5 = ${thirdResult}`);

    const fourthResult = false + 8;
    console.log(`0 + 8 = ${fourthResult}`);

    const fifthResult = "10" * 2;
    console.log(`10 * 2 = ${fifthResult}`);

    const sixthResult = null + 22;
    console.log(`0 + 22 = ${sixthResult}`);
*/

//Debugged code:
const firstResult = 5 + 10;
console.log(`5 + 10 = ${firstResult}`);

const secondResult = 8 - 5;
console.log(`8 - 5 = ${secondResult}`);

const thirdResult = 1 + 5;
console.log(`1 + 5 = ${thirdResult}`);

const fourthResult = 0 + 8;
console.log(`0 + 8 = ${fourthResult}`);

const fifthResult = 10 * 2;
console.log(`10 * 2 = ${fifthResult}`);

const sixthResult = 0 + 22;
console.log(`0 + 22 = ${sixthResult}`);


/* 
    //Buggy Code part 2
    let counter = 10;
    console.log(`Counter is currently ${counter}`);

    let updatedCounter = counter++;
    console.log(`Counter is now ${updatedCounter}`);

    let score = 8;
    console.log(`Score is currently ${score}`);

    let finalScore = ++score;
    console.log(`Score is still ${finalScore}`);

    let coins = 3;
    console.log(`Coins is currently ${coins}`);

    let updatedCoins = coins--;
    console.log(`Coins is now ${updatedCoins}`);

    let health = 7;
    console.log(`Health is currently ${health}`);

    let newHealth = --health;
    console.log(`Health is still ${newHealth}`);
*/

let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

let finalScore = score++;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = health--;
console.log(`Health is still ${newHealth}`);