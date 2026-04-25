/*

This file includes my implementations of searching and sorting algorithms.

    1. Linear Search
    2. Bubble Sort
    3. Binary Search
    4. Selection Sort
    5. Merge Sort
    6. Quick Sort
    
*/
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

// 4. Selection Sort
function selectionSort(arr){
    let sorted = arr.slice();
    for (let i = 0; i < sorted.length; i++){
        // 4.1 Find the smallest element in a list
        for (let j = i; j < sorted.length - 1; j++){
            // 4.2 Swap it with the first element of the list
            if (sorted[i] > sorted[j + 1]){
                let temp = sorted[i];
                sorted[i] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
        // 4.3 Repeat it for the rest of the list
    }
    return sorted;
}

// 5. Merge Sort
// 5.1 A recursive algorithm divides and conquers the sorting task
// 5.2 Divides list successively into halves until the smallest piece
// 5.3 Merges pieces back together sorting them in the process

function merge(left, right){
    let result = [];
    let i = 0, j = 0;

    // 5.3.1 Compares two sorted lists until their last item 
    while (i < left.length & j < right.length){
        // 5.3 Compares the items of both lists and addes the smallest one to the result
        if (left[i] < right[j]){
            result.push(left[i]);
            i++; 
        } else {
            result.push(right[j]);
            j++;
        }
    }
    // 5.3 Checks for unsorted items in the lists
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}

function mergeSort(arr){
    let sorted = arr.slice();
    // 5.1 Checks if the array is smaller than 2, meaning it is sorted, returning itself
    if (sorted.length < 2){
        return sorted;
    } else {
        // 5.2 Finds the middle point and sorts each half
        let mid = Math.floor(sorted.length / 2);
        let left = mergeSort(sorted.slice(0 , mid));
        let right = mergeSort(sorted.slice(mid, sorted.length));
        // 5.3 Merges each half together
        return merge(left, right);
    }
}


// 6. [TBA] Quick Sort

// Main
const myArray = [6, 7, 2, 0, 4, 9, 3, 1, 5, 8];
const sortedArray = bubbleSort(myArray);
const target = 8;

console.log(`[Merge Sort]: ${mergeSort(myArray)}`);

/* console.log(`\n--- Implementing search and sort algorithms:`);

console.log("\nOriginal array: " + myArray);
console.log(`[Linear search for ${target}] Found at index ${linearSearch(myArray, target)}`);

console.log("\nSorted array: " + sortedArray);
console.log(`[Binary search for ${target}] Found at index ${binarySearch(sortedArray, target)}`);

console.log(`\nOriginal array: ${myArray}`);
console.log(`[Bubble Sort]: ${bubbleSort(myArray)}`);
console.log(`[Selection Sort]: ${selectionSort(myArray)}`);
console.log(`[Merge Sort]: ${mergeSort(myArray)}`);

console.log(`\nOriginal array unchanged: ${myArray}`); */