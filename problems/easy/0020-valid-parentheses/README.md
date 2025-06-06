# 20. Valid Parentheses

**Link:** [/problems/valid-parentheses](https://leetcode.com/problems/valid-parentheses/description/)

**Difficulty:** &#9733; Easy

**Topics:** `String`, `Stack`

## Solution complexity

- Time complexity: _O(n)_
- Space complexity: _O(n)_

## Condition

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'[' and ']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

## Examples

**Example 1:**

```plaintext
Input: s = "()"

Output: true
```

**Example 2:**

```plaintext
Input: s = "()[]{}"

Output: true
```

**Example 3:**

```plaintext
Input: s = "(]"

Output: false
```

**Example 4:**

```plaintext
Input: s = "([])"

Output: true
```
