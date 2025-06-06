/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0;

  const romanDict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    const currentValue = romanDict[s[i]];
    const rightValue = romanDict[s[i + 1]];

    if (i + 1 < s.length && currentValue < rightValue) {
      res -= currentValue;
    } else {
      res += currentValue;
    }
  }

  return res;
};
