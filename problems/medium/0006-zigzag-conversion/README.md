# 6. Zigzag Conversion

**Link:** [/problems/zigzag-conversion](https://leetcode.com/problems/zigzag-conversion/description/)

**Difficulty:** &#9733; &#9733; Medium

**Topics:** `String`

## Solution complexity

- Time complexity: _O(n)_
- Space complexity: _O(n)_

## Condition

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```plaintext
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

```plaintext
string convert(string s, int numRows);
```

## Examples

**Example 1:**

```plaintext
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

**Example 2:**

```plaintext
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
```

**Example 3:**

```plaintext
Input: s = "A", numRows = 1
Output: "A"
```
