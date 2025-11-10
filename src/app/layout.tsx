import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ARC — Two Minds. One Pulse.',
  description: 'A mirror framework for reflective AI: ARC-0 observes, ARC-1 explores, and their dialogue yields ✦ Sparks.',
  keywords: ['ARC', 'AI', 'reflection', 'spark', 'mindfulness', 'technology', 'philosophy'],
  authors: [{ name: 'Albira Rahman' }],
  creator: 'Albira Rahman',
  publisher: 'ARC Project',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://arc-site.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ARC — Two Minds. One Pulse.',
    description: 'A mirror framework for reflective AI: ARC-0 observes, ARC-1 explores, and their dialogue yields ✦ Sparks.',
    url: '/',
    siteName: 'ARC',
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'ARC - Two Minds. One Pulse.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARC — Two Minds. One Pulse.',
    description: 'A mirror framework for reflective AI: ARC-0 observes, ARC-1 explores, and their dialogue yields ✦ Sparks.',
    images: ['/og-cover.png'],
    creator: '@arc_project',
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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  other: {
    'copyright': '© 2025 Albira Rahman, ARC Project',
    'license': 'ARC-Reflective Use License v1.0',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D0D0F" />
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">
            {children}
          </div>
          <footer className="border-t border-border">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col gap-4 text-center text-sm text-muted-foreground">
                <p>
                  © 2025 ARC — Concept, Philosophy, and Design by{' '}
                  <span className="font-medium text-foreground">Albira Rahman</span>.
                </p>
                <p>
                  Licensed under{' '}
                  <a 
                    href="/license" 
                    className="font-medium text-accent hover:underline"
                  >
                    ARC-Reflective Use License v1.0
                  </a>{' '}
                  — Non-commercial, attribution required.
                </p>
                <div className="flex justify-center gap-6 text-xs">
                  <a href="/license" className="hover:text-foreground transition-colors">
                    License
                  </a>
                  <a href="/manifesto" className="hover:text-foreground transition-colors">
                    Manifesto
                  </a>
                  <a href="/sitemap.xml" className="hover:text-foreground transition-colors">
                    Sitemap
                  </a>
                  <a href="/robots.txt" className="hover:text-foreground transition-colors">
                    Robots
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}