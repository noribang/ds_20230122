// Recursion
// 1) Base case. Recursion stops.
// 2) Recursive case. Different input.

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