'use client'

import { useLanguage } from "@/providers/language-provider"
import Link from "next/link"

export default function PrivacyPolicy() {
  const { t, locale } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          {locale === 'fr' ? "Serrurier Cannes - Politique de Confidentialité" : "Privacy Policy"}
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-700 dark:text-gray-300">
              {locale === 'fr'
                ? "Chez Serrurier Cannes, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations."
                : "At Serrurier Cannes, we take the protection of your personal data very seriously. This privacy policy explains how we collect, use, and protect your information."}
            </p>
          </section>

          {/* Personal Data Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Données Personnelles Collectées" : "Personal Data Collection"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {locale === 'fr'
                ? "Nous collectons les données suivantes :"
                : "We collect the following data:"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>{locale === 'fr'
                ? "Informations de contact (nom, adresse email, numéro de téléphone)"
                : "Contact information (name, email address, phone number)"}</li>
              <li>{locale === 'fr'
                ? "Adresse d'intervention pour nos services"
                : "Service location address"}</li>
              <li>{locale === 'fr'
                ? "Communications avec notre service client"
                : "Communications with our customer service"}</li>
            </ul>
          </section>

          {/* Purpose of Data Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Utilisation de vos Données" : "Use of Your Data"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {locale === 'fr'
                ? "Nous utilisons vos données pour :"
                : "We use your data for:"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>{locale === 'fr'
                ? "Fournir nos services de serrurerie"
                : "Providing our locksmith services"}</li>
              <li>{locale === 'fr'
                ? "Répondre à vos demandes et questions"
                : "Responding to your requests and questions"}</li>
              <li>{locale === 'fr'
                ? "Améliorer nos services et votre expérience utilisateur"
                : "Improving our services and your user experience"}</li>
              <li>{locale === 'fr'
                ? "Respecter nos obligations légales"
                : "Complying with legal obligations"}</li>
            </ul>
          </section>

          {/* Cookie Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Politique de Cookies" : "Cookie Policy"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {locale === 'fr'
                ? "Notre site utilise des cookies pour :"
                : "Our website uses cookies for:"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>{locale === 'fr'
                ? "Cookies essentiels : nécessaires au fonctionnement du site"
                : "Essential cookies: necessary for website functionality"}</li>
              <li>{locale === 'fr'
                ? "Cookies analytiques : via Google Analytics pour comprendre l'utilisation du site"
                : "Analytics cookies: via Google Analytics to understand site usage"}</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Protection des Données" : "Data Protection"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {locale === 'fr'
                ? "Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisés."
                : "We implement appropriate security measures to protect your data against unauthorized access, modification, disclosure, or destruction."}
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Conservation des Données" : "Data Retention"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {locale === 'fr'
                ? "Nous conservons vos données personnelles uniquement le temps nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, ou pour nous conformer à nos obligations légales."
                : "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or to comply with our legal obligations."}
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Vos Droits" : "Your Rights"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {locale === 'fr'
                ? "Conformément au RGPD, vous disposez des droits suivants :"
                : "Under GDPR, you have the following rights:"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>{locale === 'fr'
                ? "Accès à vos données personnelles"
                : "Access to your personal data"}</li>
              <li>{locale === 'fr'
                ? "Rectification de vos données"
                : "Rectification of your data"}</li>
              <li>{locale === 'fr'
                ? "Effacement de vos données"
                : "Erasure of your data"}</li>
              <li>{locale === 'fr'
                ? "Opposition au traitement"
                : "Objection to processing"}</li>
              <li>{locale === 'fr'
                ? "Portabilité des données"
                : "Data portability"}</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Contact" : "Contact"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {locale === 'fr'
                ? "Pour toute question concernant cette politique ou pour exercer vos droits, contactez-nous :"
                : "For any questions about this policy or to exercise your rights, contact us:"}
            </p>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
              <li>Email: contact@cannesserrurier.fr</li>
              <li>{locale === 'fr'
                ? "Téléphone : 07 69 30 80 74"
                : "Phone: 07 69 30 80 74"}</li>
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