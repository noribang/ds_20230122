// O(n^2) time complexity.
// Find subset of array with max sum.
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let max = -Infinity
    for (let i = 0; i < arr.length - num +1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp = temp + arr[i + j]
        }
        if (temp > max) {
            max = temp
        }
    }
    return max;
}


maxSubarraySum([],3)
maxSubarraySum([2,6,9,2,1,8,5,6,3,4],3)
maxSubarraySum([2,6,9,2,1,8,5,6,3,4],2)