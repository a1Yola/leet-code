/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let pref = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(pref) !== 0) {
      pref = pref.substring(0, pref.length - 1);

      if (pref === "") {
        return "";
      }
    }
  }

  return pref;
};
