/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = (res = 0);
  const count = {};

  for (let end = 0; end < s.length; end++) {
    let char = s[end];
    count[char] = (count[char] || 0) + 1;

    while (count[char] > 1) {
      count[s[start]] -= 1;
      start++;
    }

    res = Math.max(res, end - start + 1);
  }

  return res;
};
