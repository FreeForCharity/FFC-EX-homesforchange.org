import type { Metadata } from 'next'
import { siteConfig, siteUrl } from '@/lib/site.config'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${siteConfig.name}.`,
  alternates: { canonical: siteUrl('/contact') },
}

// The live site's Contact form is a Forminator plugin form with no backend
// once this site is static (per the migration skill's Forms gotcha).
// Replaced with a mailto: link, preserving the source page's own real
// crisis-line notice and response-time disclosure.
export default function ContactPage() {
  return (
    <main id="main-content" className="pt-[130px] pb-[70px]">
      <div className="ffc-container max-w-[720px] text-center">
        <h1 className="font-[400] text-[40px] lg:text-[48px] mb-6" id="faustina-font">
          Contact
        </h1>

        <div className="ffc-card p-8 mb-8 text-left">
          <p className="text-[15px] leading-[24px] text-[#555] lato-font">
            <strong>We Love to Help&hellip;</strong> If you are in crisis, please contact 911 or the
            National Helpline. This site is NOT monitored 24/7 — we will work to respond within 48
            hours.
          </p>
        </div>

        <div className="ffc-card p-8">
          <h2 className="text-[20px] font-[700] text-[#111827] mb-4 lato-font">Send a message</h2>
          <p className="text-[15px] leading-[24px] text-[#555] mb-6 lato-font">
            This site no longer has a live contact form — email us directly instead and we&apos;ll
            get back to you.
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="inline-block rounded-full px-8 py-3 text-[16px] font-[700] text-white transition-colors break-all"
            style={{ backgroundColor: '#0f6fb0' }}
          >
            {siteConfig.contactEmail}
          </a>
          {siteConfig.phone.display && (
            <p className="mt-6 text-[15px] text-[#555] lato-font">
              Or call:{' '}
              <a href={`tel:${siteConfig.phone.tel}`} className="font-[600]">
                {siteConfig.phone.display}
              </a>
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
