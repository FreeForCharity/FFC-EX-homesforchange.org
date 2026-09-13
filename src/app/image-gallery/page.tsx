import type { Metadata } from 'next'
import { siteConfig, siteUrl } from '@/lib/site.config'
import { assetPath } from '@/lib/assetPath'

export const metadata: Metadata = {
  title: 'Image Gallery',
  description: `A look at ${siteConfig.name}'s community and mission.`,
  alternates: { canonical: siteUrl('/image-gallery') },
}

const galleryImages = [
  {
    src: assetPath('/Images/homesforchange/gallery-desk-calendar.jpg'),
    alt: 'Planning ahead with a calendar and laptop',
  },
  {
    src: assetPath('/Images/homesforchange/gallery-volunteers-boxes.jpg'),
    alt: 'Volunteers sorting donated goods',
  },
  {
    src: assetPath('/Images/homesforchange/gallery-desk-earbuds.jpg'),
    alt: 'Notebook and workspace supplies',
  },
]

export default function ImageGalleryPage() {
  return (
    <main id="main-content" className="pt-[130px] pb-[70px]">
      <div className="ffc-container">
        <h1 className="font-[400] text-[40px] lg:text-[48px] mb-10 text-center" id="faustina-font">
          Image Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-xl shadow"
            />
          ))}
        </div>
      </div>
    </main>
  )
}
