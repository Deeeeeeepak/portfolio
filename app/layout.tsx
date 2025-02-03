import { Metadata } from 'next'
import { ThemeProvider } from "@/providers/theme-provider"
import { ProvideFilter } from "@/providers/filter-provider"
import { ProvideSection } from "@/providers/section-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: 'Deepak Borana | Fullstack Developer',
  description: 'Fullstack Developer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies',
  keywords: [
    'Fullstack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Web Development',
    'JavaScript',
    'MongoDB',
    'Express.js'
  ],
  authors: [{ name: 'Deepak Borana' }],
  creator: 'Deepak Borana',
  publisher: 'Deepak Borana',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://deepakborana.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepakborana.dev',
    title: 'Deepak Borana | Fullstack Developer',
    description: 'Fullstack Developer specializing in React, Next.js, TypeScript, and Node.js',
    siteName: 'Deepak Borana Portfolio',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Deepak Borana - Fullstack Developer Portfolio'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepak Borana | Fullstack Developer',
    description: 'Fullstack Developer specializing in React, Next.js, TypeScript, and Node.js',
    images: ['/og-image.png'],
    creator: '@deepakborana',
  },
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicons/safari-pinned-tab.svg',
        color: '#1d2a35'
      }
    ]
  },
  manifest: '/favicons/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#1d2a35',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#1d2a35" />
        <link rel="canonical" href="https://deepakborana.dev" />
      </head>
      <body className="overflow-x-hidden relative w-full">
        <ThemeProvider>
          <ProvideFilter>
            <ProvideSection>
              <Header />
              <main className="pt-16">
                {children}
              </main>
              <Footer />
            </ProvideSection>
          </ProvideFilter>
        </ThemeProvider>
      </body>
    </html>
  )
}