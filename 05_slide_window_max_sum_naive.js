// Problem: Find subset of data in a larger set of data.
// e.g. Calculate greatest sum of n consecutive elements in an array.

function maxSubarraySum(arr, num) {
    // Check if subset testing for is greater than array itself.
    if (num > arr.length) {
        return null;
    } 
    // Value to check each subset against.
    let max = -Infinity
    // Sliding window for loop. 
    for (let i = 0; i < arr.length - num + 1; i++) {

    }


}

maxSubarraySum([],3)
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
maxSubarraySum([2,6,9,2,1,8,5,6,3],2)