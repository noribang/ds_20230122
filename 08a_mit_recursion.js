// 1) Multiplication - Iterative
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

// 1a) Multiplication - Recursive 
// a*b = a + a + a + a + a... + a; a, b times 
//     or written another way
//     = a + a + a + a + a... + a; a + a added to itself (b - 1) times    
//     or recursive reduction
//     a + a * (b - 1)
//     when b = 1, a * b = a
function mult(a, b) {
    // Base case.
    if ( b === 1 ) {
        return a;
    }

}

