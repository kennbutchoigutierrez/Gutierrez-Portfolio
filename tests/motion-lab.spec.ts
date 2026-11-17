import { expect, test } from '@playwright/test';

const films = [
  ['Always Pack', 'clipping.mp4'],
  ['Believe in Yourself', 'podcast.mp4'],
  ['The Remote-Work Sitcom', 'ugc.mp4'],
  ['Trust Fall, 1997', 'trust-fall.mp4'],
  ['FreelanceFlow', 'freelanceflow.mp4'],
  ['Open Tabs, Not Output', 'arca-reel.mp4'],
] as const;

test.beforeEach(async ({ page }) => {
  await page.goto('/demos/pkg-motion-lab/');
});

test('screens all six films with the correct media', async ({ page }) => {
  await expect(page.locator('.playlist__item')).toHaveCount(films.length);
  await expect(page.locator('.screening__count')).toContainText('/ 06');

  for (let index = 0; index < films.length; index += 1) {
    const [title, source] = films[index];
    await page.locator('.playlist__item').nth(index).click();
    await expect(page.locator('#filmTitle')).toHaveText(title);
    await expect(page.locator('#film')).toHaveAttribute('src', `media/${source}`);
    await expect(page.locator('#activeNumber')).toHaveText(String(index + 1).padStart(2, '0'));
  }
});

test('fits the viewport without horizontal page overflow', async ({ page }) => {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBeFalsy();
});
