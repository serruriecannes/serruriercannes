'use client'

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { MessageCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/providers/language-provider"
import { MobileMenu } from "./mobile-menu"

export function Header() {
    const { t } = useLanguage()
    const phoneNumber = "+33769308074"
    const emailAddress = "contact@cannesserrurier.fr"
    const whatsappLink = "https://wa.me/+33769308074?text=Bonjour%2C%20j'ai%20besoin%20d'un%20service%20de%20serrurier"
  
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-black dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image 
                src="/cannesserrurier.fr_-_logo.png"
                alt="Cannes Serrurier"
                width={300}
                height={100}
                className="h-12 w-auto sm:h-16"
              />
              <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                Serrurier Cannes
              </span>
            </div>
          
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link href={`tel:${phoneNumber}`}>
              <Button className="bg-red-600 text-white hover:bg-red-700">
                <Phone className="w-5 h-5 mr-2" />
                {t('callUs')}
              </Button>
            </Link>
                <Link href={`mailto:${emailAddress}`}>
                <Button 
                    variant="outline" 
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-white dark:hover:bg-red-600 dark:hover:text-white"
                >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t('email')}
                </Button>
            </Link>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <MobileMenu 
              phoneNumber={phoneNumber}
              emailAddress={emailAddress}
              whatsappLink={whatsappLink}
            />
          </div>
        </div>
      </div>
    </header>
  )
}