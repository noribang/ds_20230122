// Compare two arrays.
// O(n) time.
// Must have same frequency of values.
// Second array must be values of first array squared.

function same(arr1, arr2) {
    // Check for frequency of values.
    if (arr1.length !== arr2.length) {
        return true;
    }
    // Set up two objects to hold frequency of 
    // values from the two arrays passed in.
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // Loop thru arr1 and create object of frequency of each value.
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    // Loop thru arr2 and create object of frequency of each value. 
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    // Test if each value in arr2 is the square of each value in arr1. 
    for (let key in frequencyCounter1) {
        console.log(key)
    }

    // console.log(frequencyCounter1)
    // console.log(frequencyCounter2)
    return true;
}

const array1 = [1,2,3]
const array2 = [4,9,1]

same(array1, array2)