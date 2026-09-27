import { test, expect } from '@playwright/test';

test('passing check 1', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
});

test('passing check 2', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
});

test('passing check 3', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('homepage has a deliberately missing heading @failing', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.getByRole('heading', { name: 'This heading does not exist' })).toBeVisible();
});