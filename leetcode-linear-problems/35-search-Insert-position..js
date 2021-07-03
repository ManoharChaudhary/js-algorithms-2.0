// 35. Search Insert Position
// Easy

// 3836

// 306

// Add to List

// Share
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    var binarySearch = function(nums,target, start, end) {
        if(start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (nums[mid] === target) {
                //console.log('return mid', mid);
                return mid;
            } else if (nums[mid] > target) {
              return binarySearch(nums, target, start, mid-1);
            } else {
               return binarySearch(nums, target, mid + 1, end);
            }
        } else {
            return start;
        }
    }
    return binarySearch(nums, target, 0, nums.length -1);
};

//1,3,5,6
// 5
//start 0 2
//mid  1  2
//end  3  3
