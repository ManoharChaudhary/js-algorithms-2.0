/**
 * Math basics - decimal to binary
 */

/**
 * Decimal to binary 
 * @param {number} n - param of base10 number
 * @returns {number} - binary number
 */

const decimalToBinary = (n) => {
    let binary = '';
    while (n > 0) {
        const rem = n % 2;
        n = Math.floor(n / 2);
        binary = rem + binary;
    }
    return binary;
}

console.log(decimalToBinary(125));

/**
 * same can be done using toString(2) method
 * * time complexity O(n)
 * space complexity O(n)
 */
