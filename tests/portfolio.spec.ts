import { test, expect } from '@playwright/test';

// Smoke + capstone checks for the single-page portfolio. Runs on every
// configured project (Desktop Chrome, Mobile Chrome, Mobile Safari).

test.beforeEach(async ({ page }) => {
  await page.goto('/index.html', { waitUntil: 'networkidle' });
});

test('loads with the correct title and no console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  await page.reload({ waitUntil: 'networkidle' });

  await expect(page).toHaveTitle(/Peter Kenneth Gutiérrez/);
  expect(errors, `console errors: ${errors.join(' | ')}`).toHaveLength(0);
});

test('capstone: no contact details or social handles anywhere', async ({ page }) => {
  // No mailto/tel or links to social profiles. (twitter:card etc. are invisible
  // SEO meta tags, not visible handles — the rule is about contact links/handles.)
  const hrefs = await page.$$eval('a[href]', (as) => as.map((a) => a.getAttribute('href') || ''));
  const badLink = /^(mailto:|tel:)|\/\/(www\.)?(linkedin|github|twitter|x|instagram|facebook|bsky|mastodon|threads)\.[a-z]/i;
  const offenders = hrefs.filter((h) => badLink.test(h));
  expect(offenders, `contact/social links found: ${offenders.join(', ')}`).toHaveLength(0);

  // No email addresses or @handles in the visible text.
  const text = await page.locator('body').innerText();
  expect(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i.test(text), 'found an email address').toBeFalsy();
  expect(/(^|\s)@[a-z0-9_]{2,}\b/i.test(text), 'found an @handle in visible text').toBeFalsy();
});

test('capstone: Arca attribution is the last footer element and links out', async ({ page }) => {
  const arca = page.locator('.footer__arca');
  await expect(arca).toBeVisible();
  await expect(arca).toHaveAttribute('href', 'https://arca.ph');
  await expect(arca.getByText('Made for Arca.ph')).toBeVisible();
  await expect(arca.locator('img')).toBeVisible();

  // It must be the last child of the footer inner wrapper.
  const lastClass = await page.locator('.footer__inner > :last-child').getAttribute('class');
  expect(lastClass).toContain('footer__arca');
});

test('resume: three links; only the hero one force-downloads', async ({ page }) => {
  const links = page.locator('a[href="resume.pdf"]');
  await expect(links).toHaveCount(3);
  await expect(page.locator('.hero__cta')).toHaveAttribute('download', /resume\.pdf$/);
  await expect(page.locator('.nav__resume')).not.toHaveAttribute('download', /.*/);
});

test('work section shows real projects with live links', async ({ page }) => {
  const rows = page.locator('#work .work-row');
  expect(await rows.count()).toBeGreaterThanOrEqual(4);
  await expect(page.locator('.work-row__link', { hasText: 'View live' }).first())
    .toHaveAttribute('target', '_blank');
});

test('no horizontal scroll at this viewport', async ({ page }) => {
  // Scroll through so lazy/reveal content settles, then measure.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 30));
    }
    window.scrollTo(0, 0);
  });
  const { scrollW, innerW } = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    innerW: window.innerWidth,
  }));
  expect(scrollW, `scrollWidth ${scrollW} > innerWidth ${innerW}`).toBeLessThanOrEqual(innerW + 1);
});
