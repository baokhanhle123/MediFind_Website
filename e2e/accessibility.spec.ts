import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility tests using axe-core
 * Tests WCAG 2.1 Level AA compliance
 */
test.describe('Accessibility', () => {
  test('home page should not have accessibility violations', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have proper skip navigation link', async ({ page }) => {
    await page.goto('/');

    // Tab to skip link (it should be first focusable element)
    await page.keyboard.press('Tab');

    // Check if skip link is visible when focused
    const skipLink = page.getByText('Skip to main content');
    await expect(skipLink).toBeVisible();

    // Clicking skip link should focus main content
    await skipLink.click();
    const mainContent = page.locator('#main-content');
    await expect(mainContent).toBeFocused();
  });

  test('navigation should be keyboard accessible', async ({ page }) => {
    await page.goto('/');

    // Mobile menu button should be accessible
    const mobileMenuButton = page.getByLabel(/open menu|close menu/i);
    await expect(mobileMenuButton).toBeAccessible();
  });
});
