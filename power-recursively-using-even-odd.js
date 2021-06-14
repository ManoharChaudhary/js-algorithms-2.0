/**
 * Recursion basics - using Power
 *  * Math formula x ^ (n/2) * x ^(n/2) if n is even and n > 0
 *                 x * x^(n -1)         if n is odd and n > 0 
 *                  1                   if n = 0  
 */


/**
 * Power of give number
 * @param {number} x - param of power
 * @param {number} n - param of power
 * @returns {number} - power of x
 */

const power = (x, n) => {
    if (n === 0) {
        return 1;
    }

    if (n % 2 === 0) {
        const y = power(x, n / 2);
        return y * y;
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
