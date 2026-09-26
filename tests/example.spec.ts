import { test, expect } from '@playwright/test';

test('passing check 1', async () => {
  expect(2 + 2).toBe(4);
});

test('passing check 2', async () => {
  expect('playwright').toContain('play');
});

test('failing check 1', async () => {
  expect(1 + 1).toBe(3);
});

test('failing check 2', async () => {
  expect('typescript').toBe('playwright');
});