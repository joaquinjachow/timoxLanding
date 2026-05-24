import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Mail, Phone, MessageCircle, Lightbulb, Handshake } from "lucide-react"
import { FloatingActions } from "@/components/floating-actions"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/timox-hero.png"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              RENDIMIENTO PROFESIONAL EN CORTE Y SUJECIÓN
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-white/90 leading-relaxed">
              Discos, cables y accesorios <br /> para ferreterías, talleres e industria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1i8YEr-lR49kibk7Ge2TRhnIllMOBjSYe/view?usp=drive_link">
                <Button
                  size="lg"
                  className="bg-white text-[#2C3E50] hover:bg-gray-100 hover:text-[#3A506B] transition-all duration-200 w-full sm:w-auto shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Ver Catálogo Completo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#2C3E50] transition-all duration-200 w-full sm:w-auto bg-transparent hover:shadow-lg cursor-pointer"
                >
                  Contactar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Nuestra Línea de Productos Section */}
      <section id="productos" className="py-16 bg-[#ECEEEF]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Nuestra línea de productos</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Discos, cadenas, cables y accesorios diseñados para un rendimiento profesional.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {/* Discos */}
            <Card className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:shadow-lg">
              <div className="relative aspect-4/3">
                <Image
                  src="/imagenes/TIMOX-card.png"
                  alt="Discos"
                  fill
                  className="object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <ul className="text-sm text-muted-foreground leading-relaxed space-y-1">
                    <li>• De corte para máquina sensitiva</li>
                    <li>• De corte</li>
                    <li>• Desbaste</li>
                    <li>• Flap</li>
                    <li>• Diamantados</li>
                  </ul>
                </div>
              </div>
              <CardContent className="flex flex-col gap-3 p-6">
                <h3 className="text-lg font-semibold text-foreground">Discos</h3>
                <Link
                  href="/productos?type=discos"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#2C3E50] hover:text-[#3A506B]"
                >
                  Ver más
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            {/* Cadenas, Cables y Accesorios */}
            <Card className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:shadow-lg">
              <div className="relative aspect-4/3">
                <Image
                  src="/imagenes/CadenaCard.png"
                  alt="Cadenas, Cables y Accesorios"
                  fill
                  className="object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <ul className="text-sm text-muted-foreground leading-relaxed space-y-1">
                    <li>• Cadenas de acero galvanizadas</li>
                    <li>• Cables de acero galvanizados</li>
                    <li>• Gancho de elevación de ojo-gancho galvanizados</li>
                    <li>• Prensacables</li>
                    <li>• Tensores</li>
                  </ul>
                </div>
              </div>
              <CardContent className="flex flex-col gap-3 p-6">
                <h3 className="text-lg font-semibold text-foreground">Cadenas, Cables y Accesorios</h3>
                <Link
                  href="/productos?type=cadenas-cables-accesorios"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#2C3E50] hover:text-[#3A506B]"
                >
                  Ver más
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Sobre Timox Section */}
      <section id="empresa" className="py-24 bg-white max-w-6xl mx-auto">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Columna Izquierda - Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C3E50]">Sobre Timox</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Con más de seis décadas de trayectoria industrial, transformamos la experiencia en distribución y servicio técnico en productos que ofrecen rendimiento profesional, durabilidad y confianza. Cada herramienta refleja nuestro compromiso con la innovación y la mejora continua, diseñada para resistir el uso intensivo y optimizar procesos productivos en los entornos más exigentes.
            </p>
          </div>
          {/* Columna Derecha - Valores */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#2C3E50]">Nuestros valores</h3>
            <div className="space-y-6">
              {/* Valor 1 */}
              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#3A506B]" /> Calidad
                </h4>
                <p className="text-muted-foreground text-sm ml-7">
                  Elevarɑ duralidɑd entre los componentes
                </p>
              </div>
              {/* Valor 2 */}
              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-[#3A506B]" /> Innovación
                </h4>
                <p className="text-muted-foreground text-sm ml-7">
                  Empeñániéndó de modernas soluciones
                </p>
              </div>
              {/* Valor 3 */}
              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Handshake className="h-5 w-5 text-[#3A506B]" /> Confianza
                </h4>
                <p className="text-muted-foreground text-sm ml-7">
                  Abrimos relaciones duraderas en marca
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contacto Section */}
      <section id="contacto" className="pt-6 pb-0 mb-0">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Channels */}
            <div className="space-y-8 border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:pr-12">
              <div className="flex items-start gap-4">
                <MessageCircle className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h2 className="font-semibold text-lg mb-1 text-[#2C3E50]">Whatsapp</h2>
                  <Button
                    asChild
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 mb-2"
                  >
                    <a href="https://wa.me/5493515574449" target="_blank" rel="noopener noreferrer">
                      Chateá con nosotros
                    </a>
                  </Button>
                  <div className="text-[#1B1F23] text-sm mb-1">+54 9 351 557 4449</div>
                </div>
              </div>
              <div className="h-px bg-gray-200 my-2 md:hidden" />
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[#3A506B] mt-1" />
                <div>
                  <h2 className="font-semibold text-lg mb-1 text-[#2C3E50]">Teléfono</h2>
                  <div className="text-[#1B1F23]">(0351) 489 0900</div>
                </div>
              </div>
              <div className="h-px bg-gray-200 my-2 md:hidden" />
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-[#3A506B] mt-1" />
                <div>
                  <h2 className="font-semibold text-lg mb-1 text-[#2C3E50]">Email</h2>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=hola@oechsle.com.ar&su=Consulta desde la web de Oechsle S.A.&body=Hola, me contacto desde la página web de Oechsle S.A. para consultar sobre:"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#2C3E50] hover:bg-[#3A506B] text-white font-semibold px-6 py-2 rounded-md transition-colors"
                  >
                    Enviar email
                  </a>
                  <div className="text-[#1B1F23] text-sm mb-1">hola@oechsle.com.ar</div>
                  <div className="text-[#1B1F23]/70 text-xs">Haz clic para enviar un email</div>
                </div>
              </div>
              <div className="h-px bg-gray-200 my-2 md:hidden" />
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  {/* Icono de ubicación tipo pin/mapa */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A506B] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.418 0-8-4.03-8-9 0-4.97 3.582-9 8-9s8 4.03 8 9c0 4.97-3.582 9-8 9zm0-11a2 2 0 110 4 2 2 0 010-4z" /></svg>
                  <div>
                    <h2 className="font-semibold text-lg mb-1 text-[#2C3E50]">Dónde encontrarnos</h2>
                  </div>
                </div>
                {/* Mapa embebido */}
                <div className="w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.5!2d-64.2!3d-31.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2b2c3d4e5f6%3A0x1234567890abcdef!2sDr.%20Eliseo%20Canton%201870%2C%20X5008%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md w-full h-64"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#2C3E50]">Cómo podemos ayudarte?</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#1B1F23]">Nombre *</label>
                    <Input required placeholder="Tu nombre completo" className="border-gray-300 focus:border-[#2C3E50] focus:ring-[#2C3E50]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#1B1F23]">Empresa *</label>
                    <Input required placeholder="Nombre de tu empresa" className="border-gray-300 focus:border-[#2C3E50] focus:ring-[#2C3E50]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#1B1F23]">Correo electrónico *</label>
                    <Input required type="email" placeholder="tu@email.com" className="border-gray-300 focus:border-[#2C3E50] focus:ring-[#2C3E50]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#1B1F23]">Teléfono	 *</label>
                    <Input required placeholder="Tu número de teléfono" className="border-gray-300 focus:border-[#2C3E50] focus:ring-[#2C3E50]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#1B1F23]">Provincia *</label>
                    <select
                      required
                      className="block w-full rounded-md border border-gray-300 bg-[#ECEEEF] py-2 px-3 text-[#1B1F23] shadow-sm focus:border-[#2C3E50] focus:ring-[#2C3E50] focus:outline-none focus:ring-2 transition-colors duration-200"
                    >
                      <option value="">Selecciona una provincia</option>
                      <option value="Catamarca">Catamarca</option>
                      <option value="Chaco">Chaco</option>
                      <option value="Chubut">Chubut</option>
                      <option value="Córdoba">Córdoba</option>
                      <option value="Corrientes">Corrientes</option>
                      <option value="Entre Ríos">Entre Ríos</option>
                      <option value="Formosa">Formosa</option>
                      <option value="Jujuy">Jujuy</option>
                      <option value="La Pampa">La Pampa</option>
                      <option value="La Rioja">La Rioja</option>
                      <option value="Mendoza">Mendoza</option>
                      <option value="Misiones">Misiones</option>
                      <option value="Neuquén">Neuquén</option>
                      <option value="Río Negro">Río Negro</option>
                      <option value="Salta">Salta</option>
                      <option value="San Juan">San Juan</option>
                      <option value="San Luis">San Luis</option>
                      <option value="Santa Cruz">Santa Cruz</option>
                      <option value="Santa Fe">Santa Fe</option>
                      <option value="Santiago del Estero">Santiago del Estero</option>
                      <option value="Tierra del Fuego">Tierra del Fuego</option>
                      <option value="Tucumán">Tucumán</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#1B1F23]">Ciudad *</label>
                    <Input required placeholder="Ciudad" className="border-gray-300 focus:border-[#2C3E50] focus:ring-[#2C3E50]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1B1F23]">Asunto *</label>
                  <Input required placeholder="¿De qué se trata tu consulta?" className="border-gray-300 focus:border-[#2C3E50] focus:ring-[#2C3E50]" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1B1F23]">Mensaje *</label>
                  <Textarea required placeholder="Cuéntanos cómo podemos ayudarte..." className="min-h-[120px] border-gray-300 focus:border-[#2C3E50] focus:ring-[#2C3E50]" />
                </div>
                <Button type="submit" className="w-full bg-[#2C3E50] hover:bg-[#3A506B] text-white font-semibold py-3">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
      <FloatingActions />
    </div>
  )
}