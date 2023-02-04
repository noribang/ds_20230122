// Problem: Find subset of data in a larger set of data.
// e.g. Calculate greatest sum of n consecutive elements in an array.
// Can be sorted or not sorted.

function maxSubarraySum(arr, num) {
    // Check if subset testing for is greater than array itself.
    if (num > arr.length) {
        return null;
    } 
    // Value to check each subset against.
    let max = -Infinity
    // Sliding window for loop. 
    for (let i = 0; i < arr.length - num + 1; i++) {
        // Variable to store sum of subset values.
        temp = 0;
        // Inner loop. Keeps walking to right with 
        // array summing up the values.
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
            console.log("max: " + max)
        }
    }
    return max;
}

maxSubarraySum([],3)
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
maxSubarraySum([2,6,9,2,1,8,5,6,3],2)