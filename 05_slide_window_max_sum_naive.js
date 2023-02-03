// Problem: Find subset of data in a larger set of data.
// e.g. Calculate sum of n consecutive elements in an array.

function maxSubarraySum(arr, num) {
    // Check if num subset of array is greater than array. 
    // Return null if true.
    if (num > arr.length) {
        return null
    }
    // 
    let max = -Infinity;
    // 
    for (let i = 0; i < arr.length - num + 1; i++) {
        

    }

}

maxSubarraySum([],3)
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)