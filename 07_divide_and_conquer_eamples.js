// Search for a value in array and return the index.
// Loop through an array from left to right until value is found.
// Return index when found.
function search(arr, val) {
    // Loop through array from left to right.
    for (let i = 0; i < arr.length; i++) {
        // If value found return its index.
        if (arr[i] === val) {
            return i;
        }
    }
    // If value not found return -1;
    return -1;
}

let arrSearch = [1,2,3,6,9,12,21,28,35,46,53,63]
search(arrSearch, 3)