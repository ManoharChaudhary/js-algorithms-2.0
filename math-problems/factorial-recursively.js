/**
 * Recursion basics - using factorial
 */


/**
 * Factorial of give number
 * @param {number} n - param of factorial
 * @returns {number} - factorial of n
 */

const factorial = (n) => {
    //console.log("number n value", n);
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
    //const f = n * factorial(n - 1);
    //console.log("factorial value", f);
    //return f;
}

factorial(4);

/**program tracing
 *  function    return      value
 *  f(4)        4 * f(3)    24
 *  f(3)        3 * f(2)    6
 *  f(2)        2 * f(1)    2
 *  f(1)        1 * f(0)    1
 *  f(0)        1           1
 *
 * time complexity O(n)
 * space complexity O(n)
 */
