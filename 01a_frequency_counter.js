// O(n) linear time complexity.
// Compare two arrays for same values
// and frequency of values.

function same(arr1, arr2) {
    // Check length of both arrays.
    // Return if lengths not equal.
    if (arr1.length !== arr2.length) {
        return false;
    }
    // Create two objects to hold frequency values.
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // Populate object with arr1 frequency of values.
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    console.log(frequencyCounter1)
    // Populate object with arr2 frequency of values.
    for ( let val of arr2 ) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter2)

}


test1 = [1,2,3,4,5,3]
test2 = [9,25,16,4,1,9]
same(test1, test2)