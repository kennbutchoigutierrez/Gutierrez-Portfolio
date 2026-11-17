import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/demos/approval-gated-content-automation/');
});

test('keeps publishing locked while review decisions stay interactive', async ({ page }) => {
  await expect(page.locator('.queue-item')).toHaveCount(3);
  await page.locator('#approveDraft').click();
  await expect(page.locator('#draftStatus')).toHaveText('Ready');
  await expect(page.locator('#auditLog')).toContainText('No external action taken');

  await page.locator('[data-panel="guardrails"]').click();
  await expect(page.locator('#guardrailPanel')).toBeVisible();
  await expect(page.locator('#guardrailPanel')).toContainText('External publishing requires a person');

  await page.locator('#resetDemo').click();
  await expect(page.locator('#draftStatus')).toHaveText('Needs review');
});

test('filters the synthetic queue and fits the viewport', async ({ page }) => {
  await page.locator('[data-channel="short"]').click();
  await expect(page.locator('.queue-item')).toHaveCount(1);
  await expect(page.locator('#draftChannel')).toHaveText('Short-form');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBeFalsy();
});
