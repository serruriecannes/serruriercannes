import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { useLanguage, LanguageProvider } from "@/providers/language-provider"
import { ThemeProvider } from "@/providers/theme-provider"
import { ConsentBanner } from '@/components/consent-banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Serrurier Cannes - Service de Serrurerie 24/7',
  description: 'Service de serrurerie professionnel à Cannes. Disponible 24/7, prix fixe, experts de confiance. Intervention rapide, devis gratuit.',
  keywords: 'serrurier, cannes, serrurerie, dépannage, urgence, 24/7, clés, serrure, porte',
  authors: [{ name: 'Serrurier Cannes' }],
  creator: 'Serrurier Cannes',
  publisher: 'Serrurier Cannes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cannesserrurier.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Serrurier Cannes - Service de Serrurerie 24/7',
    description: 'Service de serrurerie professionnel à Cannes. Disponible 24/7, prix fixe, experts de confiance.',
    url: 'https://cannesserrurier.fr',
    siteName: 'Serrurier Cannes',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/hero-seo-bg.png',
        width: 300,
        height: 200,
        alt: 'Serrurier Cannes Le Cannet Nice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serrurier Cannes - Service de Serrurerie 24/7',
    description: 'Service de serrurerie professionnel à Cannes. Disponible 24/7, prix fixe, experts de confiance.',
    images: ['/hero-seo-bg.png'],
  },
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
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MTRVTF26');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTRVTF26"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <ThemeProvider defaultTheme="system">
          <LanguageProvider>
            {children}
            <ConsentBanner />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}