// O(n) linear time complexity.

function same(arr1, arr2) {
    // Test length of both arrays.
    if (arr1.length !== arr2.length) {
        return false;
    }
    // Two object literals.
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // Populate objects with frequency of each value in array.
    for (let val of arr1) {
        console.log(val)
    }

}

test1 = [1,2,3,4,5]
test2 = [9,25,16,4,1]
same(test1, test2)