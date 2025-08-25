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

// Given an array arr[] of size n, the task is to find all the Leaders in the array. An element is a Leader if it is greater than or equal to all the elements to its right side.

// Note: The rightmost element is always a leader.

let nums2 = [16, 17, 4, 3, 5, 2];

function getLeaders(nums) {
    let leaders = [];
    outer: for (let i = 0; i < nums.length; i++) {
        console.log("current Number--->", nums[i]);

        for (let j = i + 1; j < nums.length; j++) {
            console.log("it's righties", nums[j]);
            if (nums[j] > nums[i]) {
                continue outer;
            }
        }
        leaders.push(nums[i]);
    }
    return leaders
}
console.log(getLeaders(nums2));

function getLeadersUsingSuffixMax(nums) {

    let leaders = [];
    let maxRight = nums[nums.length - 1];
    leaders.push(maxRight);


    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] > maxRight) {
            maxRight = nums[i];
            leaders.push(maxRight);
        }
    }
    leaders.reverse()
    return leaders
}
console.log(getLeadersUsingSuffixMax(nums2));