import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Homepage + Footer smoke tests for the homesforchange.org migration.
 *
 * This fork's live WordPress source had a Divi/Elementor-built homepage with
 * real charity content (mission, donate/volunteer CTAs, contact) — the
 * template's sample-team block is not mounted, since no real team roster
 * exists for this charity (see src/data/team.ts).
 */

test.describe('Homes for Change homepage', () => {
  test('should render the real hero content, not template placeholder text', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { level: 1, name: 'Homes for Change' })).toBeVisible()
    await expect(page.getByAltText(testConfig.logo.headerAlt).first()).toBeVisible()
  })

  test('should link Donate Now to the donate page', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('link', { name: 'Donate Now' }).first()).toHaveAttribute(
      'href',
      /\/donate\/?$/
    )
  })

  test('should render the Footer', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('footer')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Quick Links' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible()
    // Level 1 footer (no validated EIN yet): Endorsements is omitted.
    await expect(page.getByRole('heading', { name: 'Endorsements' })).toHaveCount(0)
  })
})
