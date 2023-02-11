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
// Sum numbers.
function sumRange(num) {

}

