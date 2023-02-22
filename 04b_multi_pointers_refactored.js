// O(n) Linear time complexity.
// O(1) space complexity.
// Find first two values that equal zero.
// Return two values in array.
function sumZero(arr) {
    // First pointer.
    let left = 0;
    // Second pointer.
    let right = arr.length - 1;
    // Loop through array.
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        }

    }

}
