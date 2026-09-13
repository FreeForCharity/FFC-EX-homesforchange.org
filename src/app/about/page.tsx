import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig, siteUrl } from '@/lib/site.config'
import { assetPath } from '@/lib/assetPath'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.name}'s mission to provide transitional housing, counseling, and job-skills training to unhoused and distressed families.`,
  alternates: { canonical: siteUrl('/about') },
}

export default function AboutUs() {
  return (
    <main id="main-content" className="pt-[130px] pb-[70px]">
      <div className="ffc-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-[60px]">
          <div>
            <h1 className="font-[400] text-[40px] lg:text-[48px] mb-6" id="faustina-font">
              About Us
            </h1>
            <h2 className="text-[22px] font-[700] mb-4 lato-font">Overview</h2>
            <p className="text-[16px] leading-[26px] mb-4 lato-font">
              {siteConfig.name} is a nonprofit organization dedicated to changing our world through
              helping those in need into warm, safe, comfortable, nurturing transitional housing
              homes and communities. We provide much needed services to our inhabitants, such as
              counseling, therapy, life assessment programs, job skills training, job placement,
              budgeting and money management courses. Participants receive ongoing support for two
              years, and are assisted into their very own accessible, affordable, sustainable
              permanent housing.
            </p>
            <p className="text-[16px] leading-[26px] mb-4 lato-font">
              Our purpose is to help every person to have a place to call home, and to foster a
              nurturing, pay-it-forward culture. We are here to do our part to change the world,
              acting from our hearts, providing our assistance, through our Homes for Change.
            </p>
          </div>
          <img
            src={assetPath('/Images/homesforchange/act-now.jpg')}
            alt="Volunteers taking action to support the community"
            className="w-full h-auto rounded-xl shadow"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-[60px]">
          <div className="ffc-card p-8">
            <h2 className="text-[26px] font-[700] mb-3 lato-font">Our Purpose</h2>
            <p className="text-[16px] leading-[26px] lato-font">
              Our primary purpose is to provide a viable pathway for the homeless to re-enter
              society as a productive member, using the most proven, cost-effective, and socially
              responsible methods available. A key component is restoring the individual&apos;s
              dignity and self-worth — the two most critical factors in generating the positive
              upward spiral that leads to permanent success.
            </p>
          </div>
          <div className="ffc-card p-8">
            <h2 className="text-[26px] font-[700] mb-3 lato-font">How We Do It</h2>
            <p className="text-[16px] leading-[26px] lato-font">
              We provide an actual semi-permanent housing accommodation — a room or efficiency
              apartment of one&apos;s own for an individual, or separate bedrooms for parents and
              children in a family. Instead of being turned out onto the street every morning the
              way shelters operate, we give people a home.
            </p>
          </div>
        </div>

        <div className="mb-[60px]">
          <h2 className="text-[26px] font-[700] mb-3 lato-font">How We Enhance Success</h2>
          <p className="text-[16px] leading-[26px] mb-4 lato-font">
            All charities have a noble purpose — and all have limited funds. To do the greatest good
            for the most people, both the homeless and our donors, we focus on those we can help
            most quickly. The sooner we reach and help a newly homeless person, the better their
            chances of re-entering society as a happy and productive person, before the long slide
            into psychological issues and substance abuse begins.
          </p>
          <p className="text-[16px] leading-[26px] mb-4 lato-font">
            To make the very best use of the generosity of our donors, we are working with financial
            partners to build a permanent funding endowment, so we have a lasting source of support
            for our programs and remain a dependable, known resource for our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-[60px]">
          <div className="ffc-card p-8">
            <h2 className="text-[26px] font-[700] mb-3 lato-font">Our Mission</h2>
            <p className="text-[16px] leading-[26px] lato-font">
              Our mission is to provide deserving individuals and families with opportunities to
              become homeowners and start a new chapter in their lives.
            </p>
          </div>
          <div className="ffc-card p-8">
            <h2 className="text-[26px] font-[700] mb-3 lato-font">Our Vision</h2>
            <p className="text-[16px] leading-[26px] lato-font">
              Our vision is to design programs which encourage people to re-enter the workforce,
              gain new skills, and become productive members of the community and society.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-[400] text-[28px] mb-4" id="faustina-font">
            Inspired to Join Us?
          </h2>
          <p className="max-w-[720px] mx-auto text-[16px] leading-[26px] mb-8 lato-font">
            Help us make a difference. We are thankful to everyone for their support, whether
            financial, spiritual, or through volunteer efforts.
          </p>
          <Link
            href="/volunteer"
            className="inline-block rounded px-8 py-3 text-white text-[16px] font-[600] lato-font"
            style={{ backgroundColor: '#0f6fb0' }}
          >
            Join Now
          </Link>
        </div>
      </div>
    </main>
  )
}
