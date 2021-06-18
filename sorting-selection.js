/**
 * Sorting- selection sort
 */

/**
 * selection sort
 * @param {Array} arr - unsorted array
 */

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

    }
}
const arr = [2, 7, 4, 1, 5, 3];
selectionSort(arr);
console.log(arr);

/**
 * space complexity O(n)
 */
