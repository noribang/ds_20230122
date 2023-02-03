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
    // Creates window or subset of array.
    for (let i = 0; i < arr.length - num + 1; i++) {
        // e.g. 9-3+1=7
        // e.g. 9-2+1=8
        temp = 0;
        // 
        for (let j = 0; j < num; j++) {
            temp += arr[i + j]
        }

    }

}

maxSubarraySum([],3)
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
maxSubarraySum([2,6,9,2,1,8,5,6,3],2)