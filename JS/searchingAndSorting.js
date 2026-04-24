/*

This file includes my implementations of searching and sorting algorithms.

    1. Linear Search
    2. Bubble Sort
    3. Binary Search
    4. Selection Sort
    5. Merge Sort
    6. Quick Sort
    
*/

let myArray = [6, 7, 2, 0, 4, 9, 3, 1, 5, 8];

// 1. Linear Search
function linearSearch(arr, target){
    for (let i in arr){
        if (arr[i] === target){
            return i;
        }
    }
    return -1;
}

// 2. Bubble Sort
function bubbleSort(arr){
    for (let i in arr){
        for (let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// 3. [TBA] Binary Search


// Main
console.log("Original array: " + myArray);

let target = 8;
console.log(`Linear search for ${target}: Target is at position ${linearSearch(myArray, 8)}`);

console.log(`\nOriginal array: ${myArray}`);
console.log(`Sorted array: ${bubbleSort(myArray)}`);