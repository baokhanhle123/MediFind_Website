import { test, expect } from '@playwright/test';

/**
 * Navigation, locale routing and scroll behavior tests
 */
test.describe('Navigation', () => {
  test('should navigate between sections', async ({ page }) => {
    await page.goto('/en');

    // Click on problem section link
    await page.click('a[href="#problem"]');

    // Wait for scroll to complete
    await page.waitForTimeout(500);

    // Check if problem section is in viewport
    const problemSection = page.locator('#problem');
    await expect(problemSection).toBeInViewport();
  });

  test('language toggle navigates to the other locale route', async ({ page }) => {
    await page.goto('/en');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');

    await page.getByRole('button', { name: /toggle language/i }).first().click();

    await expect(page).toHaveURL(/\/vi$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'vi');
  });

  test('language choice persists across a fresh visit to /', async ({ page }) => {
    await page.goto('/en');
    await page.getByRole('button', { name: /toggle language/i }).first().click();
    await expect(page).toHaveURL(/\/vi$/);

    // The toggle writes a cookie that middleware reads on the next bare-/ request
    await page.goto('/');
    await expect(page).toHaveURL(/\/vi$/);
  });

  test('bare / redirects to a locale route', async ({ page }) => {
    await page.context().clearCookies();
    await page.goto('/');
    await expect(page).toHaveURL(/\/(en|vi)$/);
  });

  test('vietnamese copy is present in the server-rendered HTML', async ({ request }) => {
    // Fetched without executing JS: proves the /vi content is crawlable, which
    // was the whole point of moving locales onto real routes.
    const response = await request.get('/vi');
    const html = await response.text();

    expect(html).toContain('lang="vi"');
    // Accented: the copy was originally authored without diacritics, so asserting
    // the exact tone marks is what proves the restored strings actually shipped.
    expect(html).toContain('Giải pháp');
    expect(html).toContain('Trang chủ');
    expect(html).toContain('Nền tảng thông minh giúp dược sĩ');
  });
});
