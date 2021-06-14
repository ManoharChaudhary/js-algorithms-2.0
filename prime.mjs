/**
 * Math basics - check if n is prime 
 */

/**
 * isPrime
 * @param {number} n - param n 
 * @returns {boolean} -  is Prime
 */

const isPrime = (n) => {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
export default isPrime;

console.log(isPrime(4));

/**
 * c
 * * time complexity O(n)
 * space complexity O(n)
 */
