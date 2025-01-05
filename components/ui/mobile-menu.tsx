'use client'

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/providers/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"

interface MobileMenuProps {
  phoneNumber: string
  emailAddress: string
  whatsappLink: string
}

export function MobileMenu({ phoneNumber, emailAddress, whatsappLink }: MobileMenuProps) {
  const { t } = useLanguage()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-4 mt-8">
          <LanguageSwitcher />
          <Link href={`tel:${phoneNumber}`} className="w-full">
            <Button className="w-full bg-red-600 text-white hover:bg-red-700">
              <Phone className="w-5 h-5 mr-2" />
              {t('callUs')}
            </Button>
          </Link>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white">
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('whatsappContact')}
            </Button>
          </Link>
            <Link href={`mailto:${emailAddress}`} className="w-full">
                <Button 
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-white dark:hover:bg-red-600 dark:hover:text-white"
                >
                    <Mail className="w-5 h-5 mr-2" />
                    {t('emailContact')}
                </Button>
            </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}