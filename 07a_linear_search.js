// Linear search
// O(n) time complexity.
// Array must be sorted.

// 
function linearSearch(arr, val) {
    // 
    for (let i = 0; i < arr.length; i++) {
        // 
        let current = arr[i]
        // console.log("current: ", current)
        // 
        if (current === val) {
            // return index i if equal to val
            return i;
        }
    }
    // Default return -1 if not found.
        return -1;
}

let arrSearch = [1,2,3,6,9,12,21,28,35,46,53,63]
linearSearch(arrSearch, 12)