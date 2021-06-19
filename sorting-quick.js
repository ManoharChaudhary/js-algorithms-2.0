/**
 * Sorting- Quick sort
 */

/**
 * Quick sort
 * @param {Array} arr - unsorted array
 * @param {number} start = start index of the array
 * @param {number} end = end index of the array
 */
const swap = (arr, first, second) => {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}
const partition = (arr, start, end) => {
    const pivot = arr[end];
    let pIndex = start;

    for (let i = start; i < end; i++) {
        if (arr[i] <= pivot) {
            swap(arr, i, pIndex)
            pIndex++;
        }
    }
    swap(arr, pIndex, end);
    return pIndex;

}
const quickSort = (arr, start = 0, end = arr.length - 1) => {

    if (start >= end) {
        return
    }
    const pIndex = partition(arr, start, end);
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end);

}
const arr = [7, 2, 1, 6, 8, 5, 3, 4];
quickSort(arr);
console.log(arr);

/**
 * time complexity = O(nlogn)
 * space complexity = O(1)
 */
