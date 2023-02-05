// 1) LINEAR SEARCH
// Time complexity O(n) linear time.
// Sorted required.

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


// 1) BINARY SEARCH
// Time complexity Log(n) linear time.
// Sorted required.
// Cuts down search in half each iteration.

function biSearch(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    // Cut down search in half each iteration.
    while (min <= max) {
        // Round number down to nearest integer.
        // e.g. 4.5 = 4
        let middle = Math.floor((min + max) / 2);
        // Get middle element.
        let currentElement = arr[middle];
        // If mid element is less than val change min to 1 position to right.
        if (arr[middle] < val) {
            min = middle + 1;
        }
        // If mid element is greater than val change max to 1 position to left.
        else if (arr[middle] > val) {
            max = middle - 1;
        }
        // Return middle if neither greater than nor less than.
        else {
            return middle;
        }
    }
    // If value not found return -1;
    return -1;
}

let biSearch = [1,2,3,6,9,12,21,28,35,46]
search(biSearch, 3)












