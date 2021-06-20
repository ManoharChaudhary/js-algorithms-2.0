/**
 * Math basics - binary to deciaml
 */

/**
 * Binary to decimal
 * @param {number} n - binary number
 * @returns {number} decimalNumber - decimal number
 */

const binaryToDecimal = (n) => {
    if (!n && typeof n !== 'number') { return 'Not valid input' }
    let powerCounter = 0;
    let decimalNumber = 0;
    while (n > 0) {
        const rem = n % 10;
        decimalNumber = decimalNumber + (rem * (2 ** powerCounter));
        n = Math.floor(n / 10);
        powerCounter++;
    }
    return decimalNumber;
}

console.log(binaryToDecimal(1011));

/**
 * same can be done using parseInt(n, 2) method
 * * time complexity O(n)
 */
