/**
 70. Climbing Stairs
Easy

6984

217

Add to List

Share
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 4
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step + 1 step
2. 1 step + 1 step + 2 steps
3. 1 step + 2 steps + 1 step
 */
/**
* @param {number} n
* @return {number}
*/
var climbStairs = function (n) {
    if (n <= 1) {
        return n;
    }
    let a = 1; b = 1; c = 0;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};
console.log(climbStairs(4));