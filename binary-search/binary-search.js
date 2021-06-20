/**
 * Binary Search - using recursive
 */

/**
 * binary search
 * @param {number} arr - param arr
 * @param {number} x - param searchTerm
 * @param {number} start - param arr
 * @param {number} end - param x
 * @returns {string} - result of search
 */

const binarySearch = (arr, x, start = 0, end = arr.length) => {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === x) {
            return `Yes(${mid})`;
        } else if (arr[mid] < x) {
            start = mid + 1;
        } else if (arr[mid] > x) {
            end = mid - 1;
        }
    }
    return `No`;
}

console.log(binarySearch([-5, 5, 6, 23, 56, 66, 87, 100], 100));




/**
 * time complexity O(logn)
 */


