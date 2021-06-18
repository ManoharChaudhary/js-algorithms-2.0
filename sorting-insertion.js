/**
 * Sorting- Insertion sort
 */

/**
 * Insertion sort
 * @param {Array} arr - unsorted array
 */

const insertionSort = (arr) => {
    for (let i = 1; i <= arr.length - 1; i++) {
        let hole = i;
        const value = arr[i];
        while (hole > 0 && arr[hole - 1] > value) {
            arr[hole] = arr[hole - 1];
            hole--;
        }
        arr[hole] = value;
    }
}
const arr = [2, 7, 4, 1, 5, 3];
insertionSort(arr);
console.log(arr);

/**
 * space complexity O(n)
 */
