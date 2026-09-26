# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> failing check 1
- Location: tests\example.spec.ts:11:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 3
Received: 2
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('passing check 1', async () => {
  4  |   expect(2 + 2).toBe(4);
  5  | });
  6  | 
  7  | test('passing check 2', async () => {
  8  |   expect('playwright').toContain('play');
  9  | });
  10 | 
  11 | test('failing check 1', async () => {
> 12 |   expect(1 + 1).toBe(3);
     |                 ^ Error: expect(received).toBe(expected) // Object.is equality
  13 | });
  14 | 
  15 | test('failing check 2', async () => {
  16 |   expect('typescript').toBe('playwright');
  17 | });
```