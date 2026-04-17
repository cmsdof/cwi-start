    var name; // Declaring a variable using var
    let age; // Declaring a variable using let
    const PI = 3.14; // Declaring a constant using const
    
    let message = "Hello World"; // Declaring a String using let
    console.log(message);

    const thisIsCode = true; // Declaring a true Boolean using const
    const thisIsNotCode = false; // Declaring a false Boolean using const

    // Declaring multiple Arrays
    let numbers = [1, 2, 3, 4, 5];
    let people = ["John", "Mary", "Bob"];
    let mixed = [1, "John", true];
    console.log(numbers);
    console.log(people);
    console.log(mixed);

    // Declaring an Object
    let person = {
        name: "John",
        age: 30,
        isStudent: true
    };
    console.log(person);

    //Operators
    let number = 5;
    let sum = number + 10; //Result 15
    let difference = 10 - number; //Result 5
    let product = number * 10; //Result 50
    let quotient = 10 / number; //Result 2
    let remainder = 10 % number; //Result 0

    number += 5; //Result 10
    console.log(number);
    number -= 5; //Result 5
    console.log(number);
    number *= 5; //Result 25
    console.log(number);
    number /= 5; //Result 5
    console.log(number);
    number %= 5; //Result 0
    console.log(number);

    console.log(thisIsCode == thisIsNotCode); //False
    console.log(thisIsCode != thisIsNotCode); //True
    console.log(thisIsCode > thisIsNotCode); //True
    console.log(thisIsCode < thisIsNotCode); //False
    console.log(thisIsCode >= thisIsNotCode); //True
    console.log(thisIsCode <= thisIsNotCode); //False
    console.log(thisIsCode && thisIsNotCode); //False
    console.log(thisIsCode || thisIsNotCode); //True