// O(n) linear time complexity.
// Compare two arrays for same values
// and frequency of values.

function same(arr1, arr2) {
    // Check lengths of two arrays.
    // If not same length return false.
    if (arr1.length !== arr2.length) {
        return false;
    } 
    // Create two object literals.
    frequencyCounter1 = {};
    frequencyCounter2 = {};
    // 
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter2);

}


test1 = [1,2,3,4,5]
test2 = [9,25,16,4,1]
same(test1, test2)