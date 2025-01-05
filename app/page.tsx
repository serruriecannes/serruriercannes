import Image from "next/image"
import Link from "next/link"
import { Clock, Key, Shield, Phone, MessageCircle, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MobileMenu } from "@/components/ui/mobile-menu"

export default function Home() {
  const whatsappLink = "https://wa.me/+33769308074?text=Bonjour%2C%20j'ai%20besoin%20d'un%20service%20de%20serrurier"
  const phoneNumber = "+33769308074"
  const emailAddress = "contact@cannesserrurier.fr"

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image 
              src="/cannesserrurier.fr_-_logo.png"
              alt="Cannes Serrurier"
              width={300}
              height={100}
              className="h-12 w-auto sm:h-16"
            />
            <span className="text-xl sm:text-2xl font-bold text-gray-800">Serrurier Cannes</span>
          </div>
          
          <div className="hidden sm:flex flex-col md:flex-row gap-4">  {/* CHANGED THIS LINE */}
            <Link href={`tel:${phoneNumber}`}>
              <Button className="bg-red-600 text-white hover:bg-red-700">
                <Phone className="w-5 h-5 mr-2" />
                Appelez-nous
              </Button>
            </Link>
            <Link href={`mailto:${emailAddress}`}>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                <MessageCircle className="w-5 h-5 mr-2" />
                Email
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu trigger */}
          <div className="md:hidden">
            <MobileMenu 
              phoneNumber={phoneNumber}
              emailAddress={emailAddress}
              whatsappLink={whatsappLink}
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/hero_bg.png"
          alt="Service de Serrurerie Cannes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 space-y-4">
              <div>Service de Serrurerie</div>
              <div>Dépannage 7j/7 24h/24</div>
            </h1>
            <div className="mb-4">
              <Link href={`tel:${phoneNumber}`}>
                <Button className="text-3xl font-bold bg-red-600 hover:bg-red-700 px-6 py-3 blink-strong">
                  <Phone className="w-8 h-8 mr-3" />
                  07 69 30 80 74
                </Button>
              </Link>
            </div>
            <p className="text-xl mb-4">
              Service de serrurerie professionnel à votre porte. Prix fixe, experts de confiance.
            </p>
            <p className="text-2xl font-semibold mb-6">
              Temps de réponse : Immédiat (max 10 Minutes)
            </p>
            {/* Hero section buttons */}
            <div className="flex flex-col sm:flex-row gap-4">  {/* FIXED HERE */}
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#20BA5C] text-white w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactez-nous sur WhatsApp
                </Button>
              </Link>
              <Link href={`mailto:${emailAddress}`}>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 w-full sm:w-auto">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact par email
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-40 h-40 flex items-center justify-center">
                  <Image src="/247.png" alt="24/7 Service" width={200} height={200} />
                </div>
                <h3 className="font-semibold text-lg">Service 7j/7 24h/24</h3>
                <p className="text-gray-600">Disponible à tout moment, jour et nuit</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-40 h-40 flex items-center justify-center">
                  <Image src="/price.png" alt="Prix Fixe" width={200} height={200} />
                </div>
                <h3 className="font-semibold text-lg">Prix Fixe</h3>
                <p className="text-gray-600">Pas de coûts cachés ni de surprises</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-40 h-40 flex items-center justify-center">
                  <Image src="/expert.png" alt="Service Expert" width={200} height={200} />
                </div>
                <h3 className="font-semibold text-lg">Service Expert</h3>
                <p className="text-gray-600">Équipe professionnelle et fiable</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-40 h-40 flex items-center justify-center">
                  <Image src="/immediate.png" alt="Réponse Immédiate" width={200} height={200} />
                </div>
                <h3 className="font-semibold text-lg">Réponse Immédiate</h3>
                <p className="text-gray-600">Réponse rapide par WhatsApp</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">À Propos de Serrurier Cannes</h2>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-gray-700">
              Entreprise expérimentée depuis plus de 15 ans dans le domaine, nous nous sommes forgé une réputation de qualité et de fiabilité. Notre équipe, dirigée par Gaspare Russo, est composée d'experts passionnés et dévoués qui mettent tout en œuvre pour fournir des services rapides et efficaces. Nous nous efforçons de vous fournir les meilleurs services possibles, avec une attention particulière aux détails.
            </p>
            <blockquote className="text-xl italic text-gray-600">
              "Notre mission est de vous offrir des solutions personnalisées et des réponses rapides à vos questions"
            </blockquote>
            <blockquote className="text-xl italic text-gray-600">
              "Nous sommes fiers de notre engagement envers la qualité et la satisfaction de nos clients"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 flex flex-col items-center gap-4">
          <Image 
            src="/cannesserrurier.fr_-_logo.png"
            alt="Cannes Serrurier"
            width={240}
            height={80}
            className="h-20 w-auto"
          />
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Serrurier Cannes développé par{' '}
            <Link href="https://meetneura.ai" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Neura AI
            </Link>
            . Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}


