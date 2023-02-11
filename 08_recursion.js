// Recursion
// a) Base case. Recursion stops.
// b) Recursive case. Different input.

// 1.
// Prints numbers in decreasing order.
function countDown(num) {
    // Base case.
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    // Recursive case.
    console.log(num);
    // num--;
    countDown(num - 1);
}

countDown(11);

// 2.
// Sum range of numbers.
function sumRange(num) {
    // a) Base case. Recursion stops.
    if (num === 1) { return 1; }
    // b) Recursive case.
    return num + sumRange(num - 1);
}

sumRange(5);

// 3a. Factorial
// Iterative.
// e.g. 4! = 4 * 3 * 2 * 1
function factorial (num) {

}

