import type { Metadata } from 'next'
import { siteConfig, siteUrl } from '@/lib/site.config'

export const metadata: Metadata = {
  title: 'Blog',
  description: `Updates from ${siteConfig.name}.`,
  alternates: { canonical: siteUrl('/blog') },
}

// The live site has exactly one published post. Rendered inline rather than
// as a per-post route since there is only one — see the migration tracking
// issue.
export default function BlogPage() {
  return (
    <main id="main-content" className="pt-[130px] pb-[70px]">
      <div className="ffc-container max-w-[760px]">
        <h1 className="font-[400] text-[40px] lg:text-[48px] mb-10" id="faustina-font">
          Blog
        </h1>

        <article className="ffc-card p-8">
          <h2 className="text-[26px] font-[700] mb-2 lato-font">Big, Beautiful Updates!</h2>
          <p className="text-[13px] text-[#777] mb-4 lato-font">
            by Carrie Diamand &middot; April 23, 2022
          </p>
          <p className="text-[16px] leading-[26px] lato-font">
            We are getting some major upgrades to our website. Our apologies in advance if something
            is a bit out of place or does not quite work right while we work on a bunch of things.
            Thank you for your understanding!
          </p>
        </article>
      </div>
    </main>
  )
}
