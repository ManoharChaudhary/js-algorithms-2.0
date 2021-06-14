/**
 * Recursion basics - using Power
 * Math formula x * x ^(n -1) if n > 0
 *              1             if n = 0     
 */


/**
 * Power of give number
 * @param {number} x - value
 * @param {number} n - power
 * @returns {number} - power of x
 */

const power = (x, n) => {
    if (n === 0) {
        return 1;
    }
    return x * power(x, n - 1);
}

console.log(power(4, 4));

/**program tracing
 *  function    return      value
 *  f(4 ,3)     4 * f(4, 2)    64
 *  f(4, 2)     4 * f(4, 1)    16
 *  f(4, 1)     4 * f(4, 0)    4
 *  f(4, 0)     1
 *
 * time complexity O(n)
 * space complexity O(n)
 */
