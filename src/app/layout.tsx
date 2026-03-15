import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import Script from 'next/script'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://unsvcc.org'),
  title: {
    default: 'UNSVCC — Senior Citizen Advocacy in Stratford, Ontario | United Senior Citizen Voice for Change Coalition',
    template: '%s — UNSVCC | Stratford, Ontario',
  },
  description: 'The United Senior Citizen Voice for Change Coalition (UNSVCC) is a nonprofit based in Stratford, Ontario, advocating for Canadian seniors through food programs, housing support, digital skills training, and community services.',
  keywords: ['senior citizens', 'seniors advocacy', 'Stratford Ontario', 'elderly support', 'senior programs Canada', 'food assistance seniors', 'housing support elderly', 'digital skills seniors', 'UNSVCC', 'United Senior Citizen Voice for Change Coalition', 'senior poverty Canada', 'Ontario seniors services'],
  authors: [{ name: 'UNSVCC' }],
  creator: 'United Senior Citizen Voice for Change Coalition',
  publisher: 'UNSVCC',
  verification: {
    google: '5Z_-OzD7dsMhdRX8XaQifgDdMootlTrBxP2ZZMxD8oE',
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://unsvcc.org',
    siteName: 'UNSVCC',
    title: 'UNSVCC — Senior Citizen Advocacy in Stratford, Ontario',
    description: 'Nonprofit based in Stratford, Ontario advocating for Canadian seniors through food programs, housing support, digital skills training, and community services.',
    images: [
      {
        url: '/images/hero/ottawacancer-hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UNSVCC - United Senior Citizen Voice for Change Coalition',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNSVCC — Senior Citizen Advocacy in Stratford, Ontario',
    description: 'Nonprofit based in Stratford, Ontario advocating for Canadian seniors through food programs, housing support, digital skills training, and community services.',
    images: ['/images/hero/ottawacancer-hero-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://unsvcc.org',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6PWG909EK0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6PWG909EK0');
          `}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NonprofitOrganization',
              name: 'United Senior Citizen Voice for Change Coalition',
              alternateName: 'UNSVCC',
              url: 'https://unsvcc.org',
              logo: 'https://unsvcc.org/images/logo/unsvcc-logo.png',
              description: 'A nonprofit based in Stratford, Ontario advocating for Canadian seniors through food programs, housing support, digital skills training, and community services.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Stratford',
                addressRegion: 'Ontario',
                addressCountry: 'CA',
              },
              telephone: '+1-519-703-3443',
              email: 'info@unsvcc.org',
              sameAs: [],
              areaServed: {
                '@type': 'Country',
                name: 'Canada',
              },
              foundingLocation: {
                '@type': 'Place',
                name: 'Stratford, Ontario, Canada',
              },
            }),
          }}
        />
      </head>
      <body className="font-body text-charcoal bg-white overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg font-heading font-bold text-impact-red">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
