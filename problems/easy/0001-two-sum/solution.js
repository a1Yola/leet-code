/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const pairs = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (target - num in pairs) {
      return [i, pairs[target - num]];
    }

    pairs[num] = i;
  }
};
