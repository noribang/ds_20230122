// Compare two arrays.
// O(n) time.
// Must have same frequency of values.
// Second array must be values of first array squared.

function same(arr1, arr2) {
    // Check for frequency of values.
    if (arr1.length !== arr2.length) {
        return true;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    console.log(frequencyCounter1)
    // console.log(frequencyCounter2)
    return true;
}

const array1 = [1,2,3]
const array2 = [4,5,6]

same(array1, array2)