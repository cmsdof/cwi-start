/* 
1.You should initialize the five variables fortune1, fortune2, fortune3, fortune4, and fortune5 with a string value of your choice.
2.You should select a random number between 1 and 5, inclusive, and assign it to the variable randomNumber.
3.You should create a selectedFortune variable and assign the matching fortune based randomNumber.
4. You should log the selectedFortune to the console. 
*/

let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";

let randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
console.log(randomNumber);
let selectedFortune = 0;

switch (randomNumber) {
    case 1:
        selectedFortune = fortune1;
        break;
    case 2:
        selectedFortune = fortune2;
        break;
    case 3:
        selectedFortune = fortune3;
        break;
    case 4:
        selectedFortune = fortune4;
        break;
    case 5:
        selectedFortune = fortune5;
        break;
    default:
        console.log("Invalid Number!")
}

console.log(selectedFortune);