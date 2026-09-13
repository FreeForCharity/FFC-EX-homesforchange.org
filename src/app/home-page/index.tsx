import React from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'
import { siteConfig } from '@/lib/site.config'

const offerings = [
  {
    number: '1',
    title: 'Transitional Housing',
    body: 'We provide actual housing accommodations — a room or an efficiency apartment of one’s own, or separate bedrooms for a family — instead of turning people out onto the street every morning the way shelters operate.',
    linkLabel: 'Learn More',
    href: '/about',
  },
  {
    number: '2',
    title: 'Counseling & Training',
    body: 'Residents receive counseling, therapy, life-assessment programs, job-skills training, job placement, and budgeting and money-management courses, with ongoing support for two years.',
    linkLabel: 'Volunteer With Us',
    href: '/volunteer',
  },
  {
    number: '3',
    title: 'A Permanent Endowment',
    body: 'We are working with financial partners to build a permanent funding endowment, so our housing programs remain a dependable, known resource for our communities for the long term.',
    linkLabel: 'Donate Now',
    href: '/donate',
  },
]

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-[130px] pb-[70px] bg-[#f2f8fc]">
        <div className="ffc-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1
              className="font-[400] text-[40px] lg:text-[56px] leading-[1.1] mb-6"
              id="faustina-font"
            >
              {siteConfig.name}
            </h1>
            <p className="text-[18px] leading-[28px] mb-8 lato-font">{siteConfig.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="inline-block rounded px-8 py-3 text-white text-[16px] font-[600] lato-font"
                style={{ backgroundColor: '#0f6fb0' }}
              >
                Donate Now
              </Link>
              <Link
                href="/about"
                className="inline-block rounded px-8 py-3 border-2 border-[#0f6fb0] text-[#0f6fb0] text-[16px] font-[600] lato-font"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={assetPath('/Images/homesforchange/logo.jpg')}
              alt="Homes for Change logo"
              className="w-full max-w-[360px] h-auto"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="ffc-container py-[70px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img
            src={assetPath('/Images/homesforchange/donate-illustration.png')}
            alt="Illustration of people supporting one another"
            className="w-full h-auto rounded-xl"
          />
          <div>
            <h2 className="font-[400] text-[32px] lg:text-[40px] mb-4" id="faustina-font">
              About Us
            </h2>
            <p className="text-[16px] leading-[26px] mb-6 lato-font">
              {siteConfig.name} is a nonprofit organization dedicated to changing our world through
              helping those in need into warm, safe, comfortable, nurturing transitional housing
              homes and communities. Participants receive ongoing support for two years and are
              assisted into their very own accessible, affordable, sustainable permanent housing.
            </p>
            <Link href="/about" className="font-[600] underline lato-font">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-[#f9f9f9] py-[70px]">
        <div className="ffc-container">
          <h2 className="font-[400] text-[32px] lg:text-[40px] text-center mb-2" id="faustina-font">
            How We Help
          </h2>
          <p className="text-center text-[16px] mb-12 lato-font">
            Our purpose is to help every person have a place to call home.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((item) => (
              <div key={item.title} className="ffc-card p-8 flex flex-col">
                <span className="text-[14px] font-[700] text-[#0f6fb0] mb-2 lato-font">
                  {item.number}
                </span>
                <h3 className="text-[22px] font-[700] mb-3 lato-font">{item.title}</h3>
                <p className="text-[15px] leading-[24px] mb-6 flex-1 lato-font">{item.body}</p>
                <Link href={item.href} className="font-[600] underline lato-font">
                  {item.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate / Volunteer CTA */}
      <section className="ffc-container py-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="ffc-card p-8 text-center">
            <h2 className="font-[400] text-[28px] mb-4" id="faustina-font">
              Donate to Our Cause
            </h2>
            <p className="text-[16px] leading-[26px] mb-6 lato-font">
              You can donate at any time to help us make a difference. We are thankful to everyone
              for their support, and we sincerely thank everyone who has donated to help our
              mission.
            </p>
            <Link
              href="/donate"
              className="inline-block rounded px-8 py-3 text-white text-[16px] font-[600] lato-font"
              style={{ backgroundColor: '#0f6fb0' }}
            >
              Donate Now
            </Link>
          </div>
          <div className="ffc-card p-8 text-center">
            <h2 className="font-[400] text-[28px] mb-4" id="faustina-font">
              Be a Part of Us
            </h2>
            <p className="text-[16px] leading-[26px] mb-6 lato-font">
              You can help us make a difference by volunteering your time. We are thankful to
              everyone who has supported our organization and our mission.
            </p>
            <Link
              href="/volunteer"
              className="inline-block rounded px-8 py-3 border-2 border-[#0f6fb0] text-[#0f6fb0] text-[16px] font-[600] lato-font"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#f9f9f9] py-[70px] text-center">
        <div className="ffc-container">
          <h2 className="font-[400] text-[32px] lg:text-[40px] mb-4" id="faustina-font">
            Get in Touch
          </h2>
          <p className="max-w-[720px] mx-auto text-[16px] leading-[26px] mb-8 lato-font">
            If you are in crisis, please contact 911 or the National Helpline. This site is not
            monitored 24/7 — we will work to respond within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded px-8 py-3 text-white text-[16px] font-[600] lato-font"
            style={{ backgroundColor: '#0f6fb0' }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
