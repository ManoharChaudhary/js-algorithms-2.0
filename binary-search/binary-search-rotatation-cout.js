/**
 * Binary Search - How many times the sorted array is rotated?
 * or FInd the lowest element index in sorted circular array
 */

/**
 * binary search
 * @param {number} arr - param arr
 * @param {number} start - param arr
 * @param {number} end - param x
 * @returns {string} - result of search
 */

const binarySearch = (arr, low = 0, high = arr.length - 1, n = arr.length) => {
    while (low <= high) {
        // case 1:
        if (arr[low] <= arr[high]) {
            return low;
        }
        //case 2:
        const mid = Math.floor((low + high) / 2);
        const prev = (mid + n - 1) % n; // used % for edge case when mid is start or end
        const next = (mid + 1) % n;  // used % for edge case when mid is start or end
        if (arr[mid] >= arr[prev] && arr[mid] <= arr[next]) {
            return mid;
        }
        // case 3: reduce the search
        if (arr[mid] <= arr[high]) {
            high = mid - 1;
        }
        if (arr[mid] >= arr[low]) {
            low = mid + 1;
        }

    }
    return -1;
}

console.log(binarySearch([76, 87, 90, 101, 110, 1, 6, 63, 66]));
console.log(binarySearch([1, 2, 3, 4, 5, 6]));




/**
 *
 * How many times the sorted array is rotated?

Input:
// [76, 87, 90, 101,110, 1, 6, 63, 66]
output :
4 index of pivot(small) element


Return low that is 5;

Case 1 : Arr[low] <= Arr[high]
    Return low;

Case 2:
      Next = Mid + 1;
    Prev = Mid - 1;
    Arr[Prev] < Arr[Mid] And Arr[Mid] < Arr[Next]
    Return Mid;

Case 3:
    Arr[Mid]  <= Arr[High]
    High = Mid - 1;
    Arr[mid] >= Arr[Low]
    Low = Mid + 1;

 */

