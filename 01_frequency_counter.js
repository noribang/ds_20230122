// O(n^2) Quadratic time complexity.
// Nested loop using indexOf.

// Compare two arrays of same frequency of values.
// Same length array. Same values in array.
function same(arr1, arr2) {
    // Test if arrays of the same length.
    // If array lengths are not equal return false.
    if (arr1.length !== arr2.length) {
        return false;
    }
    // Nested loop to test if array 2 contains
    // same values as array1.
    for (let i = 0; i < arr1.length; i++) {
        // console.log(arr1[i]);
        let arr1Val = arr1[i];
        // console.log(correctIndex);
        for (let j = 0; j < arr2.length; j++) {
            console.log(arr2[j]);
            if (arr2[j] === arr1Val) {
                arr2.splice(j, 1)
                console.log(arr2)
            }
        }

    }
    console.log("arr2: ", arr2)

}


test1 = [1,2,3,4,8]
// test2 = [9,25,16,4,1]
test2 = [8,3,2,1,4]
same(test1, test2)