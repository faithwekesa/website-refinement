import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { SITE } from '@/lib/site'
import './globals.css'

const font = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  openGraph: {
    siteName: SITE.name,
    type: 'website',
    locale: 'en_KE',
  },
  title: 'Jawaka Catering | Corporate, wedding and private event catering',
  description:
    'Thoughtful food and seamless service for corporate events, weddings and private parties.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CateringService',
  name: SITE.name,
  url: SITE.url,
  telephone: '+254799194973',
  email: SITE.emails[0],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Choka Estate, Kangundo Road',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
