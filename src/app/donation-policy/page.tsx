import type { Metadata } from 'next'
import { siteConfig, siteUrl } from '@/lib/site.config'

export const metadata: Metadata = {
  title: `Donation Policy | ${siteConfig.name}`,
  description: `Donation Policy for ${siteConfig.name}`,
  // Own canonical: without it Next inherits the layout's, which points at the home page.
  alternates: { canonical: siteUrl('/donation-policy') },
}

// This site's live source describes Homes for Change as a 501(c)(3)
// nonprofit, but Free For Charity has not independently verified a
// tax-exempt determination for this organization in its own records — see
// src/lib/site.config.ts (siteConfig.ein). This policy page states that
// plainly rather than repeating an unverified determination as fact.
const PAYPAL_DONATE_URL = 'https://www.paypal.com/donate/?hosted_button_id=EDGPK4WY95N5E'

export default function DonationPolicy() {
  return (
    <main id="main-content" className="ffc-container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-[var(--font-faustina)] text-[48px] leading-[60px] mb-8">
          Donation Policy
        </h1>

        <div className="prose max-w-none font-[var(--font-lato)] text-[18px] leading-[28px]">
          <p>
            <strong>Effective Date:</strong> September 13, 2026
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Tax Deductibility
          </h2>
          <p>
            {siteConfig.name} describes itself as a 501(c)(3) nonprofit organization. Free For
            Charity has not independently verified a tax-exempt determination for this organization
            in its own records, so this page does not confirm tax-deductibility on {siteConfig.name}
            &apos;s behalf. Please consult your tax advisor, or contact {siteConfig.name} directly
            at{' '}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:underline">
              {siteConfig.contactEmail}
            </a>
            , regarding the deductibility of any donation.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Use of Donations
          </h2>
          <p>
            Donations support {siteConfig.name}&apos;s mission of providing transitional and
            long-term housing, counseling, and job-skills training that help unhoused and distressed
            families become self-sustaining, including the organization&apos;s efforts to build a
            permanent funding endowment for its housing programs.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Donation Processing
          </h2>
          <p>
            {siteConfig.name} accepts donations through PayPal. Visit the{' '}
            <a href="/donate" className="text-primary hover:underline">
              Donate
            </a>{' '}
            page, or give directly via{' '}
            <a
              href={PAYPAL_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              PayPal
            </a>
            . PayPal processes payment details directly; {siteConfig.name} and Free For Charity do
            not collect or store your payment information. PayPal issues its own transaction receipt
            at the time of donation.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Refund Policy
          </h2>
          <p>
            We generally do not provide refunds for donations. If you believe an error has occurred,
            please contact us within 30 days of your donation.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Privacy
          </h2>
          <p>
            Donor information submitted through PayPal is handled under PayPal&apos;s own privacy
            policy. {siteConfig.name} keeps any donor information it receives confidential and does
            not share it with third parties except as required by law.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Contact Us
          </h2>
          <p>For questions about donations or this policy, please contact us at:</p>
          <p>
            Email:{' '}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:underline">
              {siteConfig.contactEmail}
            </a>
            <br />
            Phone: {siteConfig.phone.display}
          </p>
        </div>
      </div>
    </main>
  )
}
