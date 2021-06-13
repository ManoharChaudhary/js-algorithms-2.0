/**
 * Recursion basics - using fibonacci
 */


/**
 * fibonacci of give number
 * @param {number} n - param of fibonacci 
 * @returns {number} - fibonacci of n
 */

const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(40)
// console.time();
// console.log(fibonacci(40));
// console.timeEnd();
/**
 * fibonacci recurcively program take more time that  iterative becuase it
 * calc same fib number multiple times eg f(2), f(3). IF we pass n as large
 * number.
 * 
 * time complexity O(2**n) two to the power of n
 * space complexity O(n)
 */