'use client'

import { useLanguage } from "@/providers/language-provider"
import Link from "next/link"

export default function CookiePolicy() {
  const { t, locale } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          {locale === 'fr' ? "Politique de Cookies et de Confidentialité" : "Cookie and Privacy Policy"}
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Politique de consentement des utilisateurs" : "User Consent Policy"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {locale === 'fr' 
                ? "Conformément à la réglementation européenne, nous collectons votre consentement pour :"
                : "In accordance with European regulations, we collect your consent for:"}
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li>{locale === 'fr' 
                ? "L'utilisation de cookies et autres stockages locaux"
                : "The use of cookies and other local storage"}</li>
              <li>{locale === 'fr'
                ? "La collecte, le partage et l'utilisation de données personnelles pour l'amélioration de nos services"
                : "The collection, sharing and use of personal data for service improvement"}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Utilisation de Google Analytics" : "Use of Google Analytics"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {locale === 'fr'
                ? "Nous utilisons Google Analytics pour comprendre comment notre site est utilisé. Les données collectées sont :"
                : "We use Google Analytics to understand how our site is used. The data collected includes:"}
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li>{locale === 'fr' ? "Pages visitées" : "Visited pages"}</li>
              <li>{locale === 'fr' ? "Temps passé sur le site" : "Time spent on site"}</li>
              <li>{locale === 'fr' ? "Type d'appareil utilisé" : "Device type used"}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Vos droits" : "Your Rights"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {locale === 'fr'
                ? "Vous pouvez à tout moment :"
                : "You can at any time:"}
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li>{locale === 'fr' 
                ? "Retirer votre consentement"
                : "Withdraw your consent"}</li>
              <li>{locale === 'fr'
                ? "Accéder à vos données personnelles"
                : "Access your personal data"}</li>
              <li>{locale === 'fr'
                ? "Demander la suppression de vos données"
                : "Request deletion of your data"}</li>
            </ul>
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