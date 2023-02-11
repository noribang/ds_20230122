// Linear search
// O(n) time complexity.
// Array must be sorted.

// Find value by iterating through array from left to right.
function linearSearch(arr, val) {
    // 
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        // console.log(current);
        // If current element in array equals
        // val that we are looking for 
        // return index i.
        if (current === val) {
            return i;
        }       
    }
    // Default
    // If current is never equal to val
    // return -1.
    return -1
}


let arrSearch = [1,2,3,6,9,12,21,28,35,46,53,63]
linearSearch(arrSearch, 46)