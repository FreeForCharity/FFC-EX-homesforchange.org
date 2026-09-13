import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig, siteUrl } from '@/lib/site.config'
import { assetPath } from '@/lib/assetPath'

export const metadata: Metadata = {
  title: 'Volunteer',
  description: `Become a volunteer with ${siteConfig.name} and help bring help, hope, and healing to the homeless.`,
  alternates: { canonical: siteUrl('/volunteer') },
}

// The live site's Volunteer form is a Forminator plugin form with no
// backend once this site is static (per the migration skill's Forms
// gotcha). Replaced with a pre-filled mailto: link carrying the same
// question the source form asked ("Why do you want to Volunteer?").
export default function VolunteerPage() {
  const subject = encodeURIComponent(`Volunteering with ${siteConfig.name}`)
  const body = encodeURIComponent(
    'Hi,\n\nI would like to volunteer. Here is a bit about me:\n\nName:\nPhone:\nWhy do you want to volunteer?\n'
  )
  const mailtoHref = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`

  return (
    <main id="main-content" className="pt-[130px] pb-[70px]">
      <div className="ffc-container max-w-[860px] text-center">
        <h1 className="font-[400] text-[40px] lg:text-[48px] mb-6" id="faustina-font">
          Be a Volunteer
        </h1>
        <p className="text-[17px] leading-[27px] mb-8 lato-font">
          We&apos;re bringing help, hope, and healing to the homeless by creating awareness and
          prevention programs. Your time and talents are greatly appreciated.
        </p>

        <img
          src={assetPath('/Images/homesforchange/love-your-neighbour.jpg')}
          alt="A volunteer wearing a cap reading 'Love your neighbour'"
          className="mx-auto mb-10 w-full max-w-[520px] h-auto rounded-xl shadow"
        />

        <div className="ffc-card p-8">
          <h2 className="text-[20px] font-[700] mb-4 lato-font">
            Tell us how you&apos;d like to help
          </h2>
          <p className="text-[15px] leading-[24px] text-[#555] mb-6 lato-font">
            We currently coordinate volunteers by email. Let us know your name, phone number, and
            why you&apos;d like to volunteer.
          </p>
          <a
            href={mailtoHref}
            className="inline-block rounded-full px-8 py-3 text-[16px] font-[700] text-white transition-colors break-all"
            style={{ backgroundColor: '#0f6fb0' }}
          >
            Email us to volunteer
          </a>
          <p className="mt-4 text-[14px] text-[#777] break-all lato-font">
            {siteConfig.contactEmail}
          </p>
          {siteConfig.phone.display && (
            <p className="mt-2 text-[14px] text-[#777] lato-font">
              Or call:{' '}
              <a href={`tel:${siteConfig.phone.tel}`} className="font-[600]">
                {siteConfig.phone.display}
              </a>
            </p>
          )}
        </div>

        <p className="mt-10 text-[15px] lato-font">
          Prefer to give financially instead?{' '}
          <Link href="/donate" className="font-[600] underline">
            Donate to our cause
          </Link>
          .
        </p>
      </div>
    </main>
  )
}
