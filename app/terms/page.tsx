'use client'

import { useLanguage } from "@/providers/language-provider"
import Link from "next/link"

export default function Terms() {
  const { t, locale } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          {locale === 'fr' ? "Conditions Générales d'Utilisation" : "Terms of Service"}
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-700 dark:text-gray-300">
              {locale === 'fr' 
                ? "En accédant à ce site web, vous acceptez d'être lié par ces conditions d'utilisation, toutes les lois et réglementations applicables. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser ce site."
                : "By accessing this website, you agree to be bound by these terms of service, all applicable laws and regulations. If you do not agree with these terms, you must not use this site."}
            </p>
          </section>

          {/* Data Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Collecte de Données" : "Data Collection"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {locale === 'fr'
                ? "Nous collectons les informations suivantes :"
                : "We collect the following information:"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>{locale === 'fr' 
                ? "Informations de contact (nom, email, téléphone) lorsque vous nous contactez"
                : "Contact information (name, email, phone) when you contact us"}</li>
              <li>{locale === 'fr'
                ? "Données de navigation via Google Analytics"
                : "Navigation data through Google Analytics"}</li>
              <li>{locale === 'fr'
                ? "Cookies nécessaires au fonctionnement du site"
                : "Cookies necessary for website functionality"}</li>
            </ul>
          </section>

          {/* Usage of Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Utilisation des Données" : "Use of Data"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {locale === 'fr'
                ? "Vos données sont utilisées pour :"
                : "Your data is used for:"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>{locale === 'fr' 
                ? "Vous fournir nos services de serrurerie"
                : "Providing our locksmith services"}</li>
              <li>{locale === 'fr'
                ? "Améliorer notre site web et nos services"
                : "Improving our website and services"}</li>
              <li>{locale === 'fr'
                ? "Communiquer avec vous concernant nos services"
                : "Communicating with you about our services"}</li>
            </ul>
          </section>

          {/* GDPR Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Vos Droits (RGPD)" : "Your Rights (GDPR)"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {locale === 'fr'
                ? "Conformément au RGPD, vous disposez des droits suivants :"
                : "Under GDPR, you have the following rights:"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>{locale === 'fr' 
                ? "Droit d'accès à vos données personnelles"
                : "Right to access your personal data"}</li>
              <li>{locale === 'fr'
                ? "Droit de rectification de vos données"
                : "Right to rectify your data"}</li>
              <li>{locale === 'fr'
                ? "Droit à l'effacement de vos données"
                : "Right to erasure of your data"}</li>
              <li>{locale === 'fr'
                ? "Droit à la limitation du traitement"
                : "Right to restrict processing"}</li>
              <li>{locale === 'fr'
                ? "Droit à la portabilité des données"
                : "Right to data portability"}</li>
              <li>{locale === 'fr'
                ? "Droit d'opposition au traitement"
                : "Right to object to processing"}</li>
            </ul>
          </section>

          {/* Contact for GDPR */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Contact pour vos Droits RGPD" : "Contact for GDPR Rights"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {locale === 'fr'
                ? "Pour exercer vos droits ou pour toute question concernant le traitement de vos données, contactez-nous à :"
                : "To exercise your rights or for any questions about the processing of your data, contact us at:"}
            </p>
            <ul className="list-none mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Email: contact@cannesserrurier.fr</li>
              <li>{locale === 'fr' 
                ? "Téléphone : 07 69 30 80 74"
                : "Phone: 07 69 30 80 74"}</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Politique de Cookies" : "Cookie Policy"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {locale === 'fr'
                ? "Notre site utilise des cookies pour améliorer votre expérience. Pour plus d'informations, consultez notre "
                : "Our site uses cookies to improve your experience. For more information, see our "}
              <Link href="/cookie-policy" className="text-red-600 hover:text-red-700">
                {locale === 'fr' ? "politique de cookies" : "cookie policy"}
              </Link>.
            </p>
          </section>

          {/* Updates to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Modifications des Conditions" : "Updates to Terms"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {locale === 'fr'
                ? "Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prennent effet dès leur publication sur ce site."
                : "We reserve the right to modify these terms at any time. Changes become effective immediately upon posting to this site."}
            </p>
          </section>

          <div className="mt-8">
            <Link 
              href="/"
              className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400"
            >
              {locale === 'fr' ? "← Retour à l'accueil" : "← Back to home"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}