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
    let total = 1;
    console.log("total initial: ", total)
    // for (let i = num; i > 0; i--) {
    for (let i = num; i > 1; i--) { // Not necessary to multiple by 1.
        total = total * i;
        console.log("total: ", total)
    }
    // return total;
}

factorial(7);

// e.g.
// function factorial (4) {
//     let total = 1;
//     for (let i = 4; i > 0; i--) {
//         total = 1 * 4; i = 4 
//         total = 4 * 3; i = 3 
//         total = 12 * 2; i = 2
//         total = 24 * 1; i = 1
//         i = 0
//     }
//     total = 24

// }

// 3b) Factorial recursively.
function factorialRecursive(num) {
    // Base case.
    if (num === 1) { return 1; }
    // Recursive case.
    return num * factorial(num - 1)
}

