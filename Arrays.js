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
// console.log(getLeaders(nums2)); [ 17, 5, 2 ]

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
// console.log(getLeadersUsingSuffixMax(nums2)); [ 17, 5, 2 ]

// Given an array arr[], check if it is sorted in ascending order or not. Equal values are allowed in an array and two consecutive equal values are considered sorted.



// Iterative approach
let nums3 = [10, 20, 30, 40, 50];

let nums4 = [1, 2, 3, 10, 4]
function checkSorted(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        // console.log(nums[i], "current");
        // console.log(nums[i + 1], "it's Rightie");
        if (nums[i + 1] < nums[i]) {
            return "Not Sorted"
        }
    }
    return "Sorted"
}

// console.log(checkSorted(nums3)); Sorted
// console.log(checkSorted(nums4)); Not Sorted

// Remove duplicates from Sorted Array


// Given a sorted array arr[] of size n, the goal is to rearrange the array so that all distinct elements appear at the beginning in sorted order. Additionally, return the length of this distinct sorted subarray.

function returnDiscinctsFromSorted(nums) {
    let distincElArr = [];
    let distinctEl = nums[0];
    distincElArr.push(distinctEl);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === distinctEl) {
            continue;
        } else {
            distinctEl = nums[i];
            distincElArr.push(distinctEl);
        }
    }
    return distincElArr;
}

// console.log(returnDiscinctsFromSorted([2, 2, 2, 2, 2])); ---> [2]
// console.log(returnDiscinctsFromSorted([1, 2, 2, 3, 4, 4, 4, 5, 5])); --->  [ 1, 2, 3, 4, 5 ]
// console.log(returnDiscinctsFromSorted([1, 2, 3]));---> [ 1, 2, 3 ]

// Generating All Subarrays

// Given an array arr[], the task is to generate all the possible subarrays of the given array.

// Input: arr[] = [1, 2, 3]
// Output: [ [1], [1, 2], [2], [1, 2, 3], [2, 3], [3] ]

// Input: arr[] = [1, 2]
// Output: [ [1], [1, 2], [2] ]


function generateSubArrays(arr) {
    let mainArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let subArr = [];
            console.log("i", i);
            console.log("j", j);
            console.log("-----------------------");
            for (let k = i; k <= j; k++) {
                subArr.push(arr[k]);
            }
            mainArr.push(subArr);
        }
    }
    return mainArr;
}

// console.log(generateSubArrays([1, 2, 3]));


// Array Reverse
// Reverse an array Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.


function reverseArr(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

// console.log(reverseArr([1, 2, 3, 4, 5]))


// Rotate array from Right by d places

function rotateArrByDPlaces(arr, d) {
    for (let j = 0; j < d; j++) {
        let temp1 = arr[0];
        arr[0] = arr[arr.length - 1];

        for (let i = 1; i < arr.length; i++) {
            let temp2 = arr[i];
            arr[i] = temp1;
            temp1 = temp2
        }
    }

    return arr;
}

// console.log(rotateArrByDPlaces([1, 2, 3, 4, 5], 2)); ---> [4,5,1,2,3]

// Rotate array from Left by d places

function rotateArrByDPlacesFromLeft(arr, d) {
    for (let j = 0; j < d; j++) {
        let temp = arr[0];

        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = temp;
    }
    return arr;
}

// console.log(rotateArrByDPlacesFromLeft([1, 2, 3, 4, 5], 2)); --->   [3,4,5,1,2]

function moveZeroesToEnd(nums) {
    let trackingCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[trackingCount] = nums[i];
            trackingCount++;
        }
    }
    while (trackingCount < nums.length) {
        nums[trackingCount] = 0;
        trackingCount++;
    }
    return nums;
}

// console.log(moveZeroesToEnd([0, 2, 3, 0, 4, 5, 0, 6, 7]));


// Minimum increment by k operations to make all equal
// You are given an array of n-elements, you have to find the number of operations needed to make all elements of array equal.
//  Where a single operation can increment an element by k. 
// If it is not possible to make all elements equal print -1.

function incrOpsToEqualizeArr(arr, k) {
    // Get the max element of the array 
    let maxElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i]
        }
    }
    // console.log("Max element from the array", maxElement);
    let resultOperations = 0;
    for (let j = 0; j < arr.length; j++) {
        if (((maxElement - arr[j]) % k) !== 0) {
            return -1;
        } else {
            // console.log("by value", (maxElement - arr[j]) / k)
            resultOperations += Math.round((maxElement - arr[j]) / k);
            // console.log(resultOperations, "******")
        }
    }
    return resultOperations
}

// console.log(incrOpsToEqualizeArr([4, 7, 19, 16], 3)); // 10
// console.log(incrOpsToEqualizeArr([4, 4, 4, 4], 3)); // 0


// Minimum cost to make an array to size 1 by removing the larger from a pair.

// Problem explanation/understanding:
// At an operation select a pair, remove the larger one, by paying a cost value equal to the small element of the selected pair.


function costToMakeArrayToOne(arr) {
    let iniaitlaMin = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < iniaitlaMin) {
            iniaitlaMin = arr[i]
        }
    }
    // console.log(iniaitlaMin);

    return (arr.length - 1) * iniaitlaMin;
}
// console.log(costToMakeArrayToOne([4, 3, 2]));  // 4



// Duplicate within K Distance in an Array
// Given an integer array arr[] and an integer k, determine whether there exist two indices i and j such that arr[i] == arr[j] and |i - j| ≤ k. If such a pair exists, return 'Yes', otherwise return 'No'


function checkDuplicateWithinKDistance(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        // console.log("for single digit", arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            // console.log(arr[j]);
            if (arr[i] === arr[j] && Math.abs(i - j) <= k) {
                // console.log("distance lessthan K", Math.abs(i - j), "<=", k);
                return "Yes";
            }
        }
        // console.log("--------------------------")
    }
    return "No";
}
// console.log(checkDuplicateWithinKDistance([1, 2, 3, 4, 1, 2, 3, 4], 3)); // No
// console.log(checkDuplicateWithinKDistance([1, 2, 3, 1, 4, 5], 3)); // Yes
// console.log(checkDuplicateWithinKDistance([1, 2, 3, 4, 5], 3)); // No

