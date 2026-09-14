import {
  canonicalPath,
  cardDescription,
  siteConfig,
  sitePath,
  siteUrl,
  twitterSite,
} from '../../src/lib/site.config'

const originalBasePath = process.env.NEXT_PUBLIC_BASE_PATH

afterEach(() => {
  if (originalBasePath === undefined) {
    delete process.env.NEXT_PUBLIC_BASE_PATH
  } else {
    process.env.NEXT_PUBLIC_BASE_PATH = originalBasePath
  }
})

describe('siteConfig contract', () => {
  it('exposes the full site identity shape used by runtime consumers', () => {
    expect(siteConfig).toMatchObject({
      name: 'Homes for Change',
      tagline: 'Building Homes, Restoring Lives',
      url: 'https://freeforcharity.github.io',
      twitterHandle: '',
      themeColor: '#ffffff',
      vulnerabilityDisclosurePath: '/vulnerability-disclosure-policy',
    })
    expect(siteConfig.description).toContain('housing')
    expect(siteConfig.shortDescription.length).toBeGreaterThan(0)
    expect(siteConfig.keywords).toEqual(
      expect.arrayContaining(['homeless', 'transitional housing'])
    )
    // No social media presence was found on the live source site.
    expect(siteConfig.social).toEqual([])
    // No validated EIN/501(c)(3) determination exists in FFC's own records
    // yet — never fabricate one. This flips to Level 2
    // (footer-standard-adoption-checklist) automatically once a validated
    // EIN/GuideStar profile is added.
    expect(siteConfig.ein).toBe('')
    expect(siteConfig.guidestar).toEqual({ profileUrl: '', directProfileUrl: '' })
    // No physical address is published anywhere on the live site; showing
    // Free For Charity's own office address would misattribute it as this
    // charity's location, so it stays empty rather than the template default.
    expect(siteConfig.addresses).toEqual([])
    // Real, published contact info from the live site's Contact page.
    expect(siteConfig.contactEmail).toBe('info@homesforchange.org')
    expect(siteConfig.phone).toEqual({
      display: '(818) 634-2704',
      tel: '8186342704',
    })
    // Permanent "Supported by Free For Charity" footer attribution (FFC
    // footer standard) — the values are intentionally FFC's and must survive
    // template customization.
    expect(siteConfig.supportedBy).toEqual({
      name: 'Free For Charity',
      url: 'https://freeforcharity.org',
      hubUrl: 'https://freeforcharity.org/hub/',
    })
    // Standalone charity by default: no "a project of" parent organization.
    expect(siteConfig.parentOrg).toBeUndefined()
  })

  it('builds same-origin absolute site URLs in the served (canonical) shape', () => {
    delete process.env.NEXT_PUBLIC_BASE_PATH
    // sitePath() is basePath-only and deliberately slash-agnostic.
    expect(sitePath('/')).toBe('/')
    expect(sitePath('/privacy-policy')).toBe('/privacy-policy')
    // canonicalPath() owns the trailingSlash policy; siteUrl() applies both.
    expect(canonicalPath('/')).toBe('/')
    expect(canonicalPath('/privacy-policy')).toBe('/privacy-policy/')
    expect(siteUrl('/')).toBe('https://freeforcharity.github.io/')
    expect(siteUrl('/privacy-policy')).toBe('https://freeforcharity.github.io/privacy-policy/')
    // Files are served verbatim and must not gain a slash.
    expect(siteUrl('/sitemap.xml')).toBe('https://freeforcharity.github.io/sitemap.xml')
    expect(() => siteUrl('privacy-policy')).toThrow(TypeError)
    expect(() => siteUrl('//example.com')).toThrow(TypeError)
    expect(() => canonicalPath('//example.com')).toThrow(TypeError)
  })

  it('builds same-origin URLs that include the GitHub Pages base path', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/FFC-EX-homesforchange.org'

    expect(sitePath('/')).toBe('/FFC-EX-homesforchange.org/')
    expect(sitePath('/privacy-policy')).toBe('/FFC-EX-homesforchange.org/privacy-policy')
    expect(siteUrl('/')).toBe('https://freeforcharity.github.io/FFC-EX-homesforchange.org/')
    expect(siteUrl('/privacy-policy')).toBe(
      'https://freeforcharity.github.io/FFC-EX-homesforchange.org/privacy-policy/'
    )
    expect(siteUrl('/sitemap.xml')).toBe(
      'https://freeforcharity.github.io/FFC-EX-homesforchange.org/sitemap.xml'
    )
  })

  it('normalizes card metadata helpers', () => {
    // No X/Twitter handle is configured for this site.
    expect(twitterSite()).toBeUndefined()
    expect(cardDescription()).toBe(siteConfig.shortDescription)
  })
})
