/**
 * Math basics - check if n is prime 
 */

/**
 * isPrime
 * @param {number} n - param n 
 * @returns {boolean} -  is Prime
 */

import isPrime from "./prime.mjs";

const findAllPrimes = (n) => {
    let list = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            list.push(i);
        }
    }
    return list;
}

console.log(findAllPrimes(177));

/**
 * c
 * * time complexity O(n)
 * space complexity O(n)
 */
