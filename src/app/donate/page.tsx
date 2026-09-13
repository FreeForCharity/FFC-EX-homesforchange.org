import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig, siteUrl } from '@/lib/site.config'
import { assetPath } from '@/lib/assetPath'

export const metadata: Metadata = {
  title: 'Donate',
  description: `Donate to ${siteConfig.name} to help build a permanent endowment fund supporting transitional and long-term housing.`,
  alternates: { canonical: siteUrl('/donate') },
}

// The live site's real, working donate button links here — a PayPal Giving
// donate page, not a WordPress/GiveWP form (GiveWP is installed but this
// button is the one actually wired up). Kept as an outbound link to a real
// external donation processor per the migration skill's Forms/Embeds
// guidance, rather than fabricating a payment integration.
const PAYPAL_DONATE_URL = 'https://www.paypal.com/donate/?hosted_button_id=EDGPK4WY95N5E'

export default function DonatePage() {
  return (
    <main id="main-content" className="pt-[130px] pb-[70px]">
      <div className="ffc-container max-w-[860px] text-center">
        <h1 className="font-[400] text-[40px] lg:text-[48px] mb-6" id="faustina-font">
          Donate
        </h1>
        <h2 className="text-[24px] font-[700] mb-4 lato-font">Donation</h2>
        <p className="text-[17px] leading-[27px] mb-8 lato-font">
          Please help us build our permanent endowment fund so we can spend our donations on helping
          people — and not fund-raising. Thank you!
        </p>
        <a
          href={PAYPAL_DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded px-10 py-4 text-white text-[18px] font-[700] lato-font"
          style={{ backgroundColor: '#0070ba' }}
        >
          Donate Now via PayPal
        </a>
        <p className="mt-3 text-[13px] text-[#777] lato-font">
          Opens PayPal in a new tab. {siteConfig.name} does not collect or store your payment
          details.
        </p>

        <div className="mt-16 ffc-card p-8">
          <img
            src={assetPath('/Images/homesforchange/piggy-bank.png')}
            alt="Illustration of people contributing to a shared fund"
            className="mx-auto mb-6 max-w-[260px] h-auto"
          />
          <h2 className="text-[24px] font-[700] mb-3 lato-font">Be a Part of Us</h2>
          <p className="text-[16px] leading-[26px] mb-2 lato-font">
            Motivate. Uplift. Inspire. Sustain.
          </p>
          <p className="text-[16px] leading-[26px] lato-font">
            Your contribution helps us provide a stable home in a sustainable community to uplift,
            motivate, and inspire the unhoused to re-enter life and society.
          </p>
        </div>

        <p className="mt-10 text-[15px] lato-font">
          Prefer to volunteer your time instead?{' '}
          <Link href="/volunteer" className="font-[600] underline">
            See how to get involved
          </Link>
          .
        </p>
      </div>
    </main>
  )
}
