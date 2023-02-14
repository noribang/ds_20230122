// O(n^2) time complexity.
// Nested loop using indexOf.

// Compare two arrays of same frequency of values.

function same(arr1, arr2) {
    // Check if two arrays are not same length.
    if (arr1.length !== arr2.length) {
        return false;
    }   
    // Test if each value in arr1 exists in arr2
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i])
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
}

test1 = [1,2,3,4,5]
// test2 = [9,25,16,4,1]
test2 = [1,2,3,4,5]
same(test1, test2)