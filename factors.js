/**
 * Math basics - factors
 */

/**
 * factors
 * @param {number} n - param of base10 number
 * @returns {number} - binary number
 */

const factors = (n) => {
    let list = [1];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            list.push(i);
            if (i !== Math.sqrt(n)) {
                list.push(n / i);
            }
        }
    }
    list.push(n);
    return list.sort((a, b) => a - b);
}

console.log(factors(36));

/**
 * time complexity O(sqrt n)
 * space complexity O(n)
 */
