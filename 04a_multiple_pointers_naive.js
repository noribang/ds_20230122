// O(n^2) time complexity. Using nested loops.
// 0(1) space complexity.
// Sorted array necessary.
// Find first two values of array that equal zero.
function sumZero(arr) {
    // Iterate through array starting from index 0 until length - 1.
    // Nested loop will iterate through array starting from i+1 until 
    // find second value summed with first value equals zero.
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
    } 

}

sumZero([-4,-3,-2,-1,0,1,2,5])