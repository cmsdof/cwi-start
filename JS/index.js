// Creating a Set from an Array
const myArray = [1, 1, 2, 3, 3, 4, 5, 5];
const mySet = new Set(myArray);

console.log(myArray);
console.log(mySet);


// Set Methods
mySet.add(6);
console.log(mySet);

mySet.add({name: 'John', age: 30});
console.log(mySet);

mySet.delete({name: 'John', age: 30});
console.log(mySet);