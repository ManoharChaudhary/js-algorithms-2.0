/**
 * Binary Search - count the search item
 */

/**
 * binary search
 * @param {number} arr - param arr
 * @param {number} x - param searchTerm
 * @param {number} start - param arr
 * @param {number} end - param x
 * @returns {string} - result of search
 */

const searchFirstOccurance = (arr, x, low, high) => {
    // find the first occurance Index
    let firstOccurance = -1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (x === arr[mid]) {
            firstOccurance = mid;
            high = mid - 1;
        } else if (x < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return firstOccurance;
}
const searchLastOccurance = (arr, x, low, high) => {
    // find the last occurance Index
    let lastOccurance = -1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (x === arr[mid]) {
            lastOccurance = mid;
            low = mid + 1;
        } else if (x < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return lastOccurance;
}
const binarySearch = (arr, x, low = 0, high = arr.length) => {

    const firstOccurance = searchFirstOccurance(arr, x, low, high);
    const lastOccurance = searchLastOccurance(arr, x, low, high);
    if (firstOccurance === -1) {
        return -1;
    }
    console.log('why', firstOccurance)
    return (lastOccurance - firstOccurance) + 1;

}

console.log(binarySearch([5, 5, 6, 63, 66, 66, 87, 100], 0));

//5, 5, 6, 63, 66, 66, 87, 100
//  0  1  2   3   4  5   6   7


/**
 * time complexity O(logn)
 */


