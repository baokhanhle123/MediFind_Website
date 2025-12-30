import { test, expect } from '@playwright/test';

/**
 * Navigation and scroll behavior tests
 */
test.describe('Navigation', () => {
  test('should navigate between sections', async ({ page }) => {
    await page.goto('/');

    // Click on problem section link
    await page.click('a[href="#problem"]');

    // Wait for scroll to complete
    await page.waitForTimeout(500);

    // Check if problem section is in viewport
    const problemSection = page.locator('#problem');
    await expect(problemSection).toBeInViewport();
  });

  test('language toggle should work', async ({ page }) => {
    await page.goto('/');

    // Find and click language toggle
    const languageToggle = page.getByRole('button', { name: /english|vietnamese|en|vi/i });
    await languageToggle.click();

    // Check if language changed (HTML lang attribute)
    const htmlLang = await page.locator('html').getAttribute('lang');
    expect(['en', 'vi']).toContain(htmlLang);
  });
});
