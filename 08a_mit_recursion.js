// 1) Multiplication
// a. a * b
// b. add a to itself b times
// a + a + a...+ a 
// Capture state by:
// Iteration i
// i = b
// decrement i
// i = i - 1 
// stop i when i = 0
// Value of computation: result
// result = result + a
function mult_iter(a, b) {
    result = 0;
    while (b > 0) {
        result = result + a
        b = b - 1;
    }
    return result;
}
mult_iter(3, 5)