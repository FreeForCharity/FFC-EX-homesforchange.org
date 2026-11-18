import { siteMetadata } from '../../src/lib/siteMetadata'

describe('Site metadata', () => {
  it('should have the correct metadataBase URL', () => {
    expect(siteMetadata.metadataBase?.toString()).toBe('https://homesforchange.org/')
  })

  it('should have a title containing the site name', () => {
    const title = siteMetadata.title as { default: string; template: string }
    expect(title.default).toContain('Homes for Change')
    expect(title.template).toContain('Homes for Change')
  })

  it('should have a description mentioning housing', () => {
    expect(siteMetadata.description).toContain('housing')
    expect(siteMetadata.description!.length).toBeGreaterThan(50)
  })

  it('should have relevant keywords', () => {
    const keywords = siteMetadata.keywords as string[]
    expect(keywords).toContain('homeless')
    expect(keywords).toContain('transitional housing')
  })

  it('should define OpenGraph fields', () => {
    const og = siteMetadata.openGraph as Record<string, unknown>
    expect(og.type).toBe('website')
    expect(og.siteName).toBe('Homes for Change')
    expect(og.url).toBe('https://homesforchange.org/')
    expect(og.images).toBeDefined()
  })

  it('should define Twitter card fields without a configured handle', () => {
    const twitter = siteMetadata.twitter as Record<string, unknown>
    expect(twitter.card).toBe('summary_large_image')
    // No X/Twitter account was found on the live source site.
    expect(twitter.site).toBeUndefined()
  })

  it('should allow indexing and following', () => {
    const robots = siteMetadata.robots as Record<string, unknown>
    expect(robots.index).toBe(true)
    expect(robots.follow).toBe(true)
  })

  it('should define icon and manifest paths', () => {
    expect(siteMetadata.manifest).toBeDefined()
    expect(siteMetadata.icons).toBeDefined()
  })
})
