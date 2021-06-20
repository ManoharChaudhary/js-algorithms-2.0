/**
 * Sorting- Bubble sort
 */

/**
 * Bubble sort
 * @param {Array} arr - unsorted array
 */

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let flag = 0;
        for (let j = 0; j < arr.length - (1 + i); j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = 1;
            }
        }
        if (flag === 0) {
            return;
        }

    }
}
const arr = [2, 7, 4, 1, 5, 3];
bubbleSort(arr);
console.log(arr);

/**
 * space complexity O(n)
 */
