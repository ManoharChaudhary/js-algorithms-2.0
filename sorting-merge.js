/**
 * Sorting- Merge sort
 */

/**
 * Insertion sort
 * @param {Array} arr - unsorted array
 */
const merge = (L, R, arr) => {
    const Ln = L.length;
    const Rn = R.length;
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < Ln && j < Rn) {
        if (L[i] < R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < Ln) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < Rn) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
const mergeSort = (arr) => {
    const n = arr.length;
    if (n < 2) {
        return;
    }
    mid = Math.floor(n / 2);
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, n + 1);
    mergeSort(left)
    mergeSort(right);
    merge(left, right, arr);
}
const arr = [2, 4, 1, 6, 8, 5, 3, 7];
mergeSort(arr);
console.log(arr);

/**
 * time complexity = O(nlogn)
 */
