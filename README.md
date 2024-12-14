# Unexpected Null Handling in JavaScript Function

This repository demonstrates a common, yet subtle, error in JavaScript related to handling null values.  The `foo` function aims to add two numbers, but it incorrectly handles null input.

The `bug.js` file contains the buggy code, which demonstrates the unexpected behavior when one of the inputs is null. The `bugSolution.js` file provides a more robust solution.

## Bug Description

The original code uses a simple `=== null` check to handle null values. However, this can lead to issues in larger, more complex applications where you might unintentionally have undefined or other falsy values as input.  A more robust solution should handle a wider range of potential input types.