"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, MessageCircle } from 'lucide-react'

interface MobileMenuProps {
  phoneNumber: string
  emailAddress: string
  whatsappLink: string
}

export function MobileMenu({ phoneNumber, emailAddress, whatsappLink }: MobileMenuProps) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] p-4">
          <nav className="flex flex-col gap-3 mt-6">
            <Link href={`tel:${phoneNumber}`}>
              <Button className="w-full bg-red-600 text-white hover:bg-red-700 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                Appelez-nous
              </Button>
            </Link>
            
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white text-sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </Link>
  
            <Link href={`mailto:${emailAddress}`}>
              <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    )
}