// Compare two arrays.
// O(n) time.
// Must have same frequency of values.
// Second array must be values of first array squared.

function same(arr1, arr2) {
    // Check for frequency of values.
    if (arr1.length !== arr2.length) {
        return true;
    }

    return true;
}

const array1 = [1,2,3]
const array2 = [4,5,6]

same(array1, array2)