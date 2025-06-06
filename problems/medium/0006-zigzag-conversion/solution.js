/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows < 2) return s;

  let res = "";
  const step = (numRows - 1) * 2;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < s.length; j += step) {
      res += s[j + i];

      if (i > 0 && i < numRows - 1 && j + step - i < s.length) {
        res += s[j + step - i];
      }
    }
  }

  return res;
};
