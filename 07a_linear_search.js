// Linear search
// O(n) linear time.
// Array must be sorted.

// Return index of val in arr.
function linearSearch(arr, val) {
    // Search from left to right.
    for (let i = 0; i < arr.length; i++) {
        // Check each element in array to see if equal to val.
        if (arr[i] === val) {
            return i;
        }         
    }

}

let arrSearch = [1,2,3,6,9,12,21,28,35,46,53,63]
search(arrSearch, 3)