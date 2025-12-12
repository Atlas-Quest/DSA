# Daily DSA Practice

A collection of practice implementations of various Data Structures and Algorithms in TypeScript.

## Overview

This repository serves as a personal practice ground for implementing and understanding fundamental computer science concepts. Each implementation focuses on clarity and correctness.

## Algorithms

### Searching

| Algorithm     | File               | Time Complexity | Space Complexity |
| ------------- | ------------------ | --------------- | ---------------- |
| Binary Search | `binary_search.ts` | O(log n)        | O(1)             |

## Usage

Run any implementation using `ts-node`:

```bash
npx ts-node binary_search.ts
```

## Structure

```
dsa_prac/
├── binary_search.ts    # Binary search implementation
└── README.md
```

## Notes

- **Binary Search**: Efficiently finds a target value in a sorted array by repeatedly dividing the search interval in half. Returns the index if found, -1 otherwise.
