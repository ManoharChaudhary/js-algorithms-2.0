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

const binarySearch = (arr, x, low = 0, high = arr.length - 1) => {
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === x) {
            return mid;
        }
        if (arr[mid] <= arr[high]) {
            if (x > arr[mid] && x <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            if (arr[low] <= x && x < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1
            }
        }
    }
    return -1;
}

console.log(binarySearch([76, 87, 90, 101, 110, 1, 6, 63, 66], 101));




/**
 * time complexity O(logn)
 */


