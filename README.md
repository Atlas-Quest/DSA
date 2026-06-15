# Daily DSA Practice

A collection of practice implementations of various Data Structures and Algorithms in TypeScript.

## Overview

This repository serves as a personal practice ground for implementing and understanding fundamental computer science concepts. Each implementation focuses on clarity and correctness.

## Algorithms

### Searching

| Algorithm     | File               | Time Complexity | Space Complexity |
| ------------- | ------------------ | --------------- | ---------------- |
| Binary Search | `binary_search.ts` | O(log n)        | O(1)             |

### Hashing

| Pattern              | File          | Time Complexity | Space Complexity |
| -------------------- | ------------- | --------------- | ---------------- |
| Duplicate Detection | `hash_map.ts` | O(1) avg        | O(n)             |

### Warm-ups

| Problem   | File            | Time Complexity | Space Complexity |
| --------- | --------------- | --------------- | ---------------- |
| Fizz Buzz | `fizz_buzz.ts`  | O(1)            | O(1)             |

### Sliding Window

| Pattern       | File                 | Time Complexity | Space Complexity |
| ------------- | -------------------- | --------------- | ---------------- |
| Rate Limiting | `sliding_window.ts`  | O(k) per call   | O(n)             |

## Usage

Run any file:

```bash
npx tsx binary_search.ts
npx tsx hash_map.ts
npx tsx fizz_buzz.ts
npx tsx sliding_window.ts
```

## Structure

```
dsa_prac/
├── binary_search.ts    # Binary search implementation
├── hash_map.ts         # Set-backed duplicate event detection
├── fizz_buzz.ts        # Classic FizzBuzz warm-up
├── sliding_window.ts   # Per-tenant sliding-window rate limiter
└── README.md
```

## Notes

- **Binary Search**: Efficiently finds a target value in a sorted array by repeatedly dividing the search interval in half. Returns the index if found, -1 otherwise.
- **Hash Map (Duplicate Detection)**: Uses a `Set` to track seen event IDs. `isDuplicateEvent` returns `true` if the ID was already recorded, otherwise adds it and returns `false`. Average O(1) lookup and insertion.
- **Fizz Buzz**: Returns `"Fizz"` for multiples of 3, `"Buzz"` for multiples of 5, `"Fizz Buzz"` for multiples of both, and the number as a string otherwise.
- **Sliding Window (Rate Limiting)**: `allow` tracks per-tenant event timestamps in a `Map`, drops events outside the window, and rejects new events when the limit is exceeded. Returns whether the event is allowed plus an immutable updated state.
