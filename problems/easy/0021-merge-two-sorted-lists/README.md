# 21. Merge Two Sorted Lists

**Link:** [/problems/merge-two-sorted-lists](https://leetcode.com/problems/merge-two-sorted-lists/description/)

**Difficulty:** &#9733; Easy

**Topics:** `Linked List`, `Recursion`

## Solution complexity

- Time complexity: _O(n + m)_
- Space complexity: _O(1)_

## Condition

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

## Examples

**Example 1:**

<img src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" />

```plaintext
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Example 2:**

```plaintext
Input: list1 = [], list2 = []
Output: []
```

**Example 3:**

```plaintext
Input: list1 = [], list2 = [0]
Output: [0]
```
