/**
 * Math basics - gcd using Euclidean algorithm
 */

/**
 * gcd
 * @param {number} a - param a
 * @param {number} b - param b
 * @returns {number} - gcd of a and b
 */

const gcd = (a, b) => {
    let dividend = a;
    let divisior = b;
    while (divisior !== 0) {
        const reminder = dividend % divisior;
        dividend = divisior;
        divisior = reminder;
    }
    return dividend;
}

console.log(gcd(124, 400));

/**
 * time complexity O(sqrt n)
 * space complexity O(n)
 */
//4
// dividend = 400 124 28 8  4
// divisior = 124 28  8  4  0

