'use client'

import Image from "next/image"
import Link from "next/link"
import { Phone, MessageCircle, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Script from "next/script"
import { Header } from "@/components/ui/header"
import { useLanguage } from "@/providers/language-provider"
import { ChatbotProvider } from "@/components/chatbot-provider"

export default function Home() {
  const { t, locale } = useLanguage()
  const whatsappLink = `https://wa.me/+33769308074?text=${encodeURIComponent(t('whatsappMessage'))}`
  const phoneNumber = "+33769308074"
  const emailAddress = "contact@cannesserrurier.fr"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Serrurier Cannes",
    "image": "https://cannesserrurier.fr/cannesserrurier.fr_-_logo.png",
    "description": t('description'),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cannes",
      "addressRegion": "Alpes-Maritimes",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.5528,
      "longitude": 7.0174
    },
    "url": "https://cannesserrurier.fr",
    "telephone": phoneNumber,
    "email": emailAddress,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "€€"
  }

  return (
    <ChatbotProvider>
      <div className="min-h-screen bg-white dark:bg-black dark:text-white">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Header />

        {/* Hero Section */}
        <section className="relative h-screen">
          <Image
            src="/hero_bg.png"
            alt={t('heroTitle')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 space-y-4">
                <div>{t('heroTitle')}</div>
                <div>{t('heroSubtitle')}</div>
              </h1>
              <div className="mb-4">
                <Link href={`tel:${phoneNumber}`}>
                  <Button className="text-3xl font-bold bg-red-600 hover:bg-red-700 px-6 py-3 blink-strong">
                    <Phone className="w-8 h-8 mr-3" />
                    07 69 30 80 74
                  </Button>
                </Link>
              </div>
              <p className="text-xl mb-4">{t('heroDescription')}</p>
              <p className="text-2xl font-semibold mb-6">
                {t('responseTime')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#20BA5C] text-white w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t('whatsappContact')}
                  </Button>
                </Link>
                <Link href={`mailto:${emailAddress}`}>
                  <Button 
                    variant="outline" 
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-white dark:hover:bg-red-600 dark:hover:text-white w-full sm:w-auto"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    {t('emailContact')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-40 h-40 flex items-center justify-center">
                    <Image src="/247.png" alt={t('features.service247.title')} width={200} height={200} />
                  </div>
                  <h3 className="font-semibold text-lg">{t('features.service247.title')}</h3>
                  <p className="text-gray-600">{t('features.service247.description')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-40 h-40 flex items-center justify-center">
                    <Image src="/price.png" alt={t('features.fixedPrice.title')} width={200} height={200} />
                  </div>
                  <h3 className="font-semibold text-lg">{t('features.fixedPrice.title')}</h3>
                  <p className="text-gray-600">{t('features.fixedPrice.description')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-40 h-40 flex items-center justify-center">
                    <Image src="/expert.png" alt={t('features.expertService.title')} width={200} height={200} />
                  </div>
                  <h3 className="font-semibold text-lg">{t('features.expertService.title')}</h3>
                  <p className="text-gray-600">{t('features.expertService.description')}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-40 h-40 flex items-center justify-center">
                    <Image src="/immediate.png" alt={t('features.immediateResponse.title')} width={200} height={200} />
                  </div>
                  <h3 className="font-semibold text-lg">{t('features.immediateResponse.title')}</h3>
                  <p className="text-gray-600">{t('features.immediateResponse.description')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 py-12 md:py-24 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('services.title')}</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="font-semibold text-lg">{t('services.locksmith')}</h3>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="font-semibold text-lg">{t('services.doorOpening')}</h3>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="font-semibold text-lg">{t('services.lockChange')}</h3>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="font-semibold text-lg">{t('services.security')}</h3>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="font-semibold text-lg">{t('services.maintenance')}</h3>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="font-semibold text-lg">{t('services.installation')}</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white dark:bg-black py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              {t('about.title')}
            </h2>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t('about.description')}
              </p>
              <blockquote className="text-xl italic text-gray-600 dark:text-gray-400">
                "{t('about.quote1')}"
              </blockquote>
              <blockquote className="text-xl italic text-gray-600 dark:text-gray-400">
                "{t('about.quote2')}"
              </blockquote>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              {t('contact.title')}
            </h2>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">{t('contact.available')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`tel:${phoneNumber}`}>
                  <Button className="bg-red-600 text-white hover:bg-red-700 w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    {t('contact.phone')}
                  </Button>
                </Link>
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#20BA5C] text-white w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t('contact.whatsapp')}
                  </Button>
                </Link>
                <Link href={`mailto:${emailAddress}`}>
                  <Button 
                    variant="outline" 
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-white dark:hover:bg-red-600 dark:hover:text-white w-full sm:w-auto"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    {t('contact.email')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t mt-12">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col items-center gap-6">
              <Image 
                src="/cannesserrurier.fr_-_logo.png"
                alt="Cannes Serrurier"
                width={240}
                height={80}
                className="h-20 w-auto"
              />
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <Link 
                  href="/faq" 
                  className="hover:text-red-600 transition-colors"
                >
                  {t('footer.faq')}
                </Link>
                <span className="text-gray-400">•</span>
                <Link 
                  href="/terms" 
                  className="hover:text-red-600 transition-colors"
                >
                  {t('footer.terms')}
                </Link>
                <span className="text-gray-400">•</span>
                <Link 
                  href="/privacy-policy" 
                  className="hover:text-red-600 transition-colors"
                >
                  {t('footer.cookiePolicy')}
                </Link>
              </div>
              <p className="text-center text-gray-600">
                © {new Date().getFullYear()} {t('footer.rights')}{' '}
                <Link 
                  href="https://meetneura.ai" 
                  className="text-blue-600 hover:underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Neura AI 
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ChatbotProvider>
  )
}