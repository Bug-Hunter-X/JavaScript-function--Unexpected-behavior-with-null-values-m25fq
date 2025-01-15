# JavaScript Function Bug: Null Value Handling

This repository demonstrates a potential bug in a simple JavaScript function that handles null values. The function `foo` adds two numbers but needs improvement in how it deals with `null` inputs.

## Bug Description

The `foo` function works correctly when both inputs are numbers. However, it might not behave as expected or might throw errors in more complex scenarios involving `null` values. This is a subtle bug that can be difficult to identify in larger codebases.

## Bug Solution

The solution provides a more robust approach to handle `null` values by using a more explicit check. The improved code gracefully handles `null` or `undefined` inputs, providing a more reliable output.

## How to run

1. Clone this repository
2. Open the `bug.js` file to see the buggy code
3. Open the `bugSolution.js` file to see the corrected code
4. Run the js file in node using `node bug.js` and `node bugSolution.js`.