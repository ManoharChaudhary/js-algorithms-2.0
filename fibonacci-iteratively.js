/**
 * Iterative basics - using fibonacci
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
    let f1 = 0, f2 = 1, f = 0;
    for (let i = 2; i <= n; i++) {
        f = f1 + f2;
        f1 = f2;
        f2 = f;
    }
    return f;
}

fibonacci(40)
// console.time();
// console.log(fibonacci(40));
// console.timeEnd()

/**
 * fibonacci iterative more performant that recursive program because it calc
 * the number only once.
 * 
 * time complexity O(n)
 * space complexity O(n)
 */