/**
 * Binary Search - using iterative search first occurance
 */

/**
 * binary search
 * @param {number} arr - param arr
 * @param {number} x - param searchTerm
 * @param {number} start - param arr
 * @param {number} end - param x
 * @returns {string} - result of search
 */

const binarySearch = (arr, x, low = 0, high = arr.length) => {
    let result = -1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (x === arr[mid]) {
            result = mid; // save first search item
            high = mid - 1; // lower the high so we can reach to the leftmost search item if exit
            // for the last occurance search 
            // low = mid + 1;
        } else if (x < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}

console.log(binarySearch([5, 5, 6, 23, 56, 66, 87, 100], 5));




/**
 * time complexity O(logn)
 */


