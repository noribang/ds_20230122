// O(n^2) time.
// Nested loop using indexOf.
function same(arr1, arr2) {
    // Test if two arrays are same length.
    // If not return false.
    if (arr1.length !== arr2.length) {
        return false;
    }
    // 
    for (i = 0; i < arr1.length; i++) {
        // Get index of value in arr2.
        // Value is element in arr1 squared.
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // If arr2 indexOf return -1 it does not exist
        // and return false.
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

test1 = [1,2,3,4,5]
test2 = [9,25,16,4,1]
same(test1, test2)