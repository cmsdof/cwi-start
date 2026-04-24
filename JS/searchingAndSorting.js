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
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target){
            return i;
        }
    }
    return -1;
}

// 2. Bubble Sort
function bubbleSort(arr){
    let sorted = arr.slice(); // Copying of the original array to sort
    for (let i = 0; i < sorted.length; i++){
        for (let j = 0; j < sorted.length - 1; j++){
            if (sorted[j] > sorted[j + 1]){
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }
    return sorted;
}

// 3. [TBA] Binary Search


// Main
console.log("Original array: " + myArray);

let target = 8;
console.log(`Linear search for ${target}: Target is at position ${linearSearch(myArray, 8)}`);

let sortedArray = bubbleSort(myArray);
console.log(`\nOriginal array: ${myArray}`);
console.log(`Sorted array: ${sortedArray}`);

console.log(`\nOriginal array unchanged: ${myArray}`);