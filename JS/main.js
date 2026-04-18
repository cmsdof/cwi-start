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

    //Mathmatical Operators
    let number = 5;
    let sum = number + 10; //Result 15
    let difference = 10 - number; //Result 5
    let product = number * 10; //Result 50
    let quotient = 10 / number; //Result 2
    let remainder = 10 % number; //Result 0
    let exponent = number ** 2; //Result 25

    // Operations
    console.log(number += 5); //Result 10
    console.log(number -= 5); //Result 5
    console.log(number *= 5); //Result 25
    console.log(number /= 5); //Result 5
    console.log(number **= 5); //Result 3125
    console.log(number %= 5); //Result 0

    //Logical Operators
    console.log(thisIsCode == thisIsNotCode); //False
    console.log(thisIsCode === thisIsNotCode); //False    
    console.log(thisIsCode != thisIsNotCode); //True
    console.log(thisIsCode !== thisIsNotCode); //True
    console.log(thisIsCode > thisIsNotCode); //True
    console.log(thisIsCode < thisIsNotCode); //False
    console.log(thisIsCode >= thisIsNotCode); //True
    console.log(thisIsCode <= thisIsNotCode); //False
    console.log(thisIsCode && thisIsNotCode); //False
    console.log(thisIsCode || thisIsNotCode); //True
    console.log(!thisIsCode); //False

    // Creating a Set from an Array
    const myArray = [1, 1, 2, 3, 3, 4, 5, 5];
    const mySet = new Set(myArray);

    console.log(myArray);
    console.log(mySet);


    // Set
    mySet.add(6);
    console.log(mySet);

    mySet.add({name: 'John', age: 30});
    console.log(mySet);

    mySet.delete({name: 'John', age: 30});
    console.log(mySet);