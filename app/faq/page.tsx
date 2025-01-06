'use client'

import { useLanguage } from "@/providers/language-provider"
import Link from "next/link"

export default function Terms() {
  const { t, locale } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          {locale === 'fr' ? "Conditions Générales et FAQ" : "Terms of Service and FAQ"}
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          {/* About Us Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "À propos de notre entreprise" : "About Our Company"}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                  {locale === 'fr' ? "Qui sommes-nous ?" : "Who are we?"}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {locale === 'fr' 
                    ? "Serrurier Cannes est un service de serrurerie professionnel basé à Cannes, dirigé par Gaspare Russo, avec plus de 15 ans d'expérience. Nous sommes spécialisés dans la réparation et l'installation de serrures, ainsi que dans la fourniture de solutions de sécurité pour les particuliers et les entreprises."
                    : "Serrurier Cannes is a professional locksmith service based in Cannes, led by Gaspare Russo, with over 15 years of experience. We specialize in lock repair and installation, as well as providing security solutions for individuals and businesses."}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                  {locale === 'fr' ? "Zone d'intervention" : "Service Area"}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {locale === 'fr'
                    ? "Nous intervenons principalement à Cannes et dans les communes environnantes. Contactez-nous pour vérifier si nous couvrons votre secteur."
                    : "We mainly operate in Cannes and surrounding communities. Contact us to check if we cover your area."}
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Nos Services" : "Our Services"}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              {locale === 'fr' ? (
                <>
                  <li>Installation et réparation de serrures</li>
                  <li>Création de doubles de clés</li>
                  <li>Dépannage d'urgence</li>
                  <li>Audit et solutions de sécurité</li>
                  <li>Contrats de maintenance pour professionnels et copropriétés</li>
                  <li>Installation de tous types de serrures (mécaniques, électroniques, connectées, haute sécurité)</li>
                </>
              ) : (
                <>
                  <li>Lock installation and repair</li>
                  <li>Key duplication</li>
                  <li>Emergency services</li>
                  <li>Security audit and solutions</li>
                  <li>Maintenance contracts for professionals and co-owned properties</li>
                  <li>Installation of all types of locks (mechanical, electronic, connected, high security)</li>
                </>
              )}
            </ul>
          </section>

          {/* Intervention Details */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Modalités d'intervention" : "Service Details"}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                  {locale === 'fr' ? "Horaires et délais" : "Hours and Response Times"}
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>{locale === 'fr' 
                    ? "Disponibilité : 24h/24 et 7j/7, y compris week-ends et jours fériés"
                    : "Availability: 24/7, including weekends and holidays"}</li>
                  <li>{locale === 'fr'
                    ? "Temps d'intervention d'urgence : sous 10 minutes dans la région de Cannes"
                    : "Emergency response time: within 10 minutes in the Cannes area"}</li>
                  <li>{locale === 'fr'
                    ? "Installations programmées : rendez-vous sous 24-48h"
                    : "Scheduled installations: appointments within 24-48h"}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Tarification et paiement" : "Pricing and Payment"}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                  {locale === 'fr' ? "Moyens de paiement acceptés" : "Accepted Payment Methods"}
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>{locale === 'fr' ? "Espèces" : "Cash"}</li>
                  <li>{locale === 'fr' ? "Cartes bancaires" : "Credit Cards"}</li>
                  <li>{locale === 'fr' ? "Virements bancaires (pour les professionnels)" : "Bank transfers (for professionals)"}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Emergency Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Urgences" : "Emergencies"}
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>{locale === 'fr' ? "En cas de perte de clés :" : "In case of lost keys:"}</strong>
                {' '}{locale === 'fr' 
                  ? "Contactez-nous immédiatement au 07 69 30 80 74 pour un dépannage rapide."
                  : "Contact us immediately at 07 69 30 80 74 for quick assistance."}
              </p>
              <p>
                <strong>{locale === 'fr' ? "Urgence nocturne :" : "Night emergency:"}</strong>
                {' '}{locale === 'fr'
                  ? "Notre service est disponible 24/7 au 07 69 30 80 74"
                  : "Our service is available 24/7 at 07 69 30 80 74"}
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {locale === 'fr' ? "Contact" : "Contact"}
            </h2>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>{locale === 'fr' ? "Téléphone :" : "Phone:"}</strong> 07 69 30 80 74</p>
              <p><strong>Email:</strong> contact@cannesserrurier.fr</p>
              <p>{locale === 'fr' ? "Service d'urgence 24/7 disponible" : "24/7 emergency service available"}</p>
            </div>
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