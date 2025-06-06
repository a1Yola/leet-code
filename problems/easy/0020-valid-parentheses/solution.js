/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s.length || s.length % 2 !== 0) return false;

  const bracketPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];

  for (const char of s) {
    if (!stack.length && !(char in bracketPairs)) {
      return false;
    }

    if (char in bracketPairs) {
      stack.push(char);
    } else if (bracketPairs[stack.pop()] !== char) {
      return false;
    }
  }

  return !stack.length;
};
