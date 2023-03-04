// O(n) linear time complexity.
// Find consecutive elements of array that equal max sum.

function maxSubarraySum(arr, num) {
    let maxSum = 0
    let tempSum = 0
    // Check if arr.length is shorter 
    // than subset num we are looking for.
    if (arr.length < num) return null;
    // Sum first subset.
    for (let i = 0; i < num; i++) {
        maxSum = maxSum + arr[i];
        console.log(maxSum)
    }
    // Bind first subset sum to tempSum.
    tempSum = maxSum;
    // 
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] +arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

maxSubarraySum([],3)
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
maxSubarraySum([2,6,9,2,1,8,5,6,3],2)