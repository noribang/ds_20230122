// Problem: Write a function called same, which accepts two arrays.
//          The function should return true if every value in the 
//          array has it's corresponding value squared in the 
//          second array. The frequency of the values must be 
//          the same.

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
        let correctIndex = arr2.indexOf(arr[i] ** 2)
        // If arr2 indexOf return -1 it does not exist
        // and return false.
        if (correctIndex === -1) {
            return false;
        }
        // arr2.splice

    }

}

test1 = [1,2,3]
test2 = [1,4,9,12]
same(test1, test2)