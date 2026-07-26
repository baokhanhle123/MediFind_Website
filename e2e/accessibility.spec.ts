import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

/**
 * Accessibility tests using axe-core
 * Tests WCAG 2.1 Level AA compliance
 */
test.describe('Accessibility', () => {
  for (const path of ['/en', '/vi', '/en/legal', '/vi/legal'] as const) {
    test(`${path} should not have accessibility violations`, async ({ page }) => {
      await page.goto(path);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(WCAG_TAGS)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }

  test('should have proper skip navigation link', async ({ page }) => {
    await page.goto('/en');

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

  test('mobile menu button exposes its expanded state', async ({ page }) => {
    await page.setViewportSize({ width: 480, height: 900 });
    await page.goto('/en');

    const toggle = page.getByRole('button', { name: /open menu/i });
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await toggle.click();

    // The control is relabelled and the panel it advertises now exists
    await expect(page.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    await expect(page.locator('#mobile-navigation')).toBeVisible();
  });

  test('stakeholder tabs follow the ARIA tabs keyboard pattern', async ({ page }) => {
    await page.goto('/en');

    const tablist = page.getByRole('tablist');
    const tabs = tablist.getByRole('tab');
    const count = await tabs.count();
    expect(count).toBeGreaterThan(1);

    // Roving tabindex: exactly one tab is in the tab order at a time
    const tabIndexes = await tabs.evaluateAll((els) =>
      els.map((el) => el.getAttribute('tabindex'))
    );
    expect(tabIndexes.filter((t) => t === '0')).toHaveLength(1);
    expect(tabIndexes.filter((t) => t === '-1')).toHaveLength(count - 1);

    // Click rather than .focus(): the default selected tab is not the first one,
    // and focusing a tabindex="-1" tab does not select it.
    await tabs.first().click();
    await expect(tabs.first()).toHaveAttribute('aria-selected', 'true');
    await expect(tabs.first()).toBeFocused();

    await page.keyboard.press('ArrowRight');
    await expect(tabs.nth(1)).toBeFocused();
    await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
    await expect(tabs.first()).toHaveAttribute('aria-selected', 'false');

    // Wraps backwards from the first tab to the last
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('ArrowLeft');
    await expect(tabs.nth(count - 1)).toBeFocused();

    await page.keyboard.press('Home');
    await expect(tabs.first()).toBeFocused();

    await page.keyboard.press('End');
    await expect(tabs.nth(count - 1)).toBeFocused();
  });

  test('mobile menu manages focus, traps Tab and closes on Escape', async ({ page }) => {
    await page.setViewportSize({ width: 480, height: 900 });
    await page.goto('/en');

    const toggle = page.getByRole('button', { name: /open menu/i });
    await toggle.click();

    const panel = page.locator('#mobile-navigation');
    await expect(panel).toBeVisible();

    // Focus moves into the panel rather than staying behind the overlay
    const firstLink = panel.getByRole('link').first();
    await expect(firstLink).toBeFocused();

    // Tab cycles within the panel instead of escaping to the page behind it
    const focusables = panel.locator('a[href], button:not([disabled])');
    const total = await focusables.count();
    for (let i = 0; i < total; i++) await page.keyboard.press('Tab');
    await expect(firstLink).toBeFocused();

    // Escape closes and returns focus to the control that opened it
    await page.keyboard.press('Escape');
    await expect(panel).toBeHidden();
    await expect(page.getByRole('button', { name: /open menu/i })).toBeFocused();
  });

  test('interactive elements have a visible focus indicator', async ({ page }) => {
    await page.goto('/en');

    // Must tab rather than call .focus(): :focus-visible only matches after a
    // keyboard interaction, so programmatic focus reports no indicator even when
    // the style is correct. Walks the nav, language toggle and CTA — none of
    // which had any focus style before this pass.
    const seen: string[] = [];

    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');

      // Several controls transition `all`, so the indicator animates in rather
      // than appearing at once. Let it settle before measuring.
      await page.waitForTimeout(350);

      const focused = await page.evaluate(() => {
        const el = document.activeElement as HTMLElement | null;
        if (!el || el === document.body) return null;
        const style = getComputedStyle(el);

        const isTransparent = (c: string) =>
          c === 'transparent' || /rgba\(\s*\d+,\s*\d+,\s*\d+,\s*0\s*\)/.test(c);

        return {
          label: `${el.tagName.toLowerCase()}.${el.className || '(no class)'}`.slice(0, 60),
          // The two styling systems indicate focus differently: CSS Modules get
          // the global :focus-visible outline, Tailwind's Button uses a ring
          // (box-shadow) because focus:outline-none outranks the global rule.
          hasOutline:
            parseFloat(style.outlineWidth) > 0 &&
            style.outlineStyle !== 'none' &&
            !isTransparent(style.outlineColor),
          hasRing: style.boxShadow !== 'none' && style.boxShadow !== '',
        };
      });

      if (!focused) continue;
      seen.push(focused.label);

      expect(
        focused.hasOutline || focused.hasRing,
        `no visible focus indicator on ${focused.label}`
      ).toBe(true);
    }

    // Guard against the loop silently focusing nothing and vacuously passing
    expect(seen.length).toBeGreaterThan(3);
  });
});
