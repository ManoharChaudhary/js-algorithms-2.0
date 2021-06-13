/**
 * Recursion basics - using fibonacci using memoization
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
    if (memo[n]) {
        return memo[n];
    }
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
}
let memo = [];
fibonacci(5)
console.time();
console.log(fibonacci(40));
console.timeEnd();
/**
 * fibonacci recurcively  memoization better that recursive only memoization
 * helps to avoid repeatative calc's but still iterative is better that memoization
 *
 * time complexity O(2**n) two to the power of n
 * space complexity O(n)
 */