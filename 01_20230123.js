// Problem: Write a function called same, which accepts two arrays.
//          The function should return true if every value in the 
//          array has it's corresponding value squared in the 
//          second array. The frequency of the values must be 
//          the same.

function same(arr1, arr2) {
    // console.log(arr1)
    // console.log(arr2)
    if (arr1.length === arr2.length) {
        return true
    } else {
        return false
    }

}

array1 = [1, 2, 3]
array2 = [1, 4, 9]
array3 = [1, 4, 9, 16]

same(array1, array2)
same(array1, array3)
