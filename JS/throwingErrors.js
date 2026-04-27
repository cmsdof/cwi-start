function testArray (array) {
    try {
        if((Array.isArray(array))) {
            for (let i = 0; i < array.length; i++){
                if (typeof array[i] !== 'number' || array[i] === null){           
                    throw new Error("Invalid Input");
                } 
            }
            return console.log("No Errors.");
         } else {
            throw new Error("Invalid Input");        
        }
    } catch (err) {
        console.error(err.message);
    }
}

let array1 = 1;
let array2 = "[]";
let array3 = [1, 2, 3];
let array4 = [1, 2, null];
let array5 = undefined;
let array6 = [1, 2, undefined];

testArray(array1);
testArray(array2);
testArray(array3);
testArray(array4);
testArray(array5);
testArray(array6);