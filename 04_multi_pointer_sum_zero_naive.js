// Multiple pointers.
// O(n^2) time complexity.
// O(1) space complexity.

// Problem: Takes in sorted array of integers.
// Function should find first pair that sum to zero.
// Return an array that includes both values that 
// sum to zero or undefined if a pair does not exist.

// Function starts from first integer on left and 
// successively adds to itself the number to the
// right. If test finds two integers that sum to 
// zero it will return array with those two integers. 
function sumZero(arr) {
    // Iterate through array starting at index 0 to the end.
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        // Start iterating from the immediate right of i index.
        for (let j = i + 1; j < arr.length; j++) {
            // console.log(arr[j])
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }

}

sumZero([-4,-3,-2,-1,0,1,2,5])
