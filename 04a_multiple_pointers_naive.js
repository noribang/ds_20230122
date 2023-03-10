// 0(n^2) time complexity. Using nested loops.
// 0(1) space complexity.
// Sorted array necessary.
// Find first two values of array that equal zero.
// e.g. [-4,-3,-2,-1,0,1,2,5]

// Two pointers. Each pointer is a for loop.
// First pointer starts at index 0 and iterates to the last value of array.
// Second pointer starts at index 0 + 1 (immedaite right of first pointer.)
// Second pointer iterates until end of array.
// First pointer value is added to second pointer value while second pointer 
// iterates through array.
// At each iteration of second pointer through array it is added
// to first pointer and sum is tested to see if sum equals zero.
function sumZero(arr) {
    // First pointer starts at index 0 and iterates to the last value of array.
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        // Second pointer starts at index 0 + 1 (immedaite right of first pointer.)
        // Second pointer iterates until end of array.
        for (let j = i + 1; j < arr.length; j++) {
            // console.log(arr[j])
            // If first pointer and second pointer add to zero return 
            // the two values in an array. 
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }

    }

} 



sumZero([-4,-3,-2,-1,0,1,2,5])