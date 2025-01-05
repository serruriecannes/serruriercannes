import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'  // Add this import
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Serrurier Cannes - Service de Serrurerie 24/7',
  description: 'Service de serrurerie professionnel à Cannes. Disponible 24/7, prix fixe, experts de confiance.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E06QJGZDPM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-E06QJGZDPM');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}