// Searching in an Unsorted Array:


let nums = [2, 6, 1, 3, 5, 8];

let numberToFind = 3;

function findInUnSortedArr(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return arr[i];
        }
    }
    return -1;
}

// console.log(findInUnSortedArr(nums, numberToFind));

// Searching in sorted array using Binary search:

let sortedNums = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


let toBeFoundNum = 13;

function findInSortedArr(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    for (let i = 0; i < arr.length; i++) {
        mid = Math.floor((left + right) / 2);
        // console.log(mid);
        // console.log("left:", left);
        // console.log("right:", right);
        if (arr[mid] === num) {
            return arr[mid];
        } else if (num < mid) {
            right = mid
        } else if (num > mid) {
            left = mid
        }

    }
    return -1
}
// console.log(findInSortedArr(sortedNums, toBeFoundNum));