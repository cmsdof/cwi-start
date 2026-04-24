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
    // Copying of the original array to sort
    let sorted = arr.slice(); 
    for (let i = 0; i < sorted.length; i++){
        for (let j = 0; j < sorted.length - 1; j++){
            if (sorted[j] > sorted[j + 1]){ 
                // Tests [j] > [j + 1], if true swaps
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }
    return sorted;
}

// 3. Binary Search

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length -1;

    while (left <= right){
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target){
            return mid;
        } else if (arr[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// 4. [TBA] Selection Sort


// Main
console.log(`\n--- Implementing search and sort algorithms:`);

console.log("\nOriginal array: " + myArray);

let target = 8;
let sortedArray = bubbleSort(myArray);

console.log(`\nLinear search for ${target}: Target is at position ${linearSearch(myArray, 8)}`);
console.log(`Binary search for ${target}: Target is at position ${binarySearch(sortedArray, target)}`);

console.log(`\nOriginal array: ${myArray}`);
console.log(`Sorted array: ${sortedArray}`);

console.log(`\nOriginal array unchanged: ${myArray}`);
