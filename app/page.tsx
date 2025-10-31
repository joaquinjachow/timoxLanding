import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Mail, MapPin, Phone, MessageCircle } from "lucide-react"
import productosDestacadosData from "@/data/productos-destacados-data"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image width={128} height={128} src="/timox-rgb.svg" alt="Timox" className="w-36" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#empresa" className="text-foreground hover:text-[rgb(46,49,145)] transition-colors font-medium">
              Empresa
            </Link>
            <Link
              href="/productos"
              className="text-foreground hover:text-[rgb(46,49,145)] transition-colors font-medium"
            >
              Productos
            </Link>
            <Link
              href="#contacto"
              className="text-foreground hover:text-[rgb(46,49,145)] transition-colors font-medium"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/heroImage.webp"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Herramientas de precisión para profesionales
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Discos de corte y desbaste de alta calidad. Timox ofrece soluciones confiables para la industria,
              garantizando rendimiento y durabilidad en cada trabajo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/productos">
                <Button
                  size="lg"
                  className="bg-white text-[rgb(46,49,145)] hover:bg-gray-100 hover:text-[rgb(36,39,125)] transition-all duration-200 w-full sm:w-auto shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Ver Productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[rgb(46,49,145)] transition-all duration-200 w-full sm:w-auto bg-transparent hover:shadow-lg cursor-pointer"
                >
                  Contactar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Nuestra Empresa Section */}
      <section id="empresa" className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Nuestra Empresa</h2>
            <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
              Timox es una empresa líder en la fabricación y distribución de herramientas abrasivas de alta calidad.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 hover:border-[rgb(46,49,145)] transition-colors">
                <CardContent className="pt-4">
                  <div className="w-10 h-10 bg-[rgb(46,49,145)]/10 rounded-lg flex items-center justify-center mb-3">
                    <CheckCircle className="h-6 w-6 text-[rgb(46,49,145)]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Calidad Garantizada</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Productos fabricados con los más altos estándares de calidad y seguridad industrial.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-[rgb(46,49,145)] transition-colors">
                <CardContent className="pt-4">
                  <div className="w-10 h-10 bg-[rgb(46,49,145)]/10 rounded-lg flex items-center justify-center mb-3">
                    <CheckCircle className="h-6 w-6 text-[rgb(46,49,145)]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Experiencia</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Años de trayectoria respaldando a profesionales y empresas en sus proyectos.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-[rgb(46,49,145)] transition-colors">
                <CardContent className="pt-4">
                  <div className="w-10 h-10 bg-[rgb(46,49,145)]/10 rounded-lg flex items-center justify-center mb-3">
                    <CheckCircle className="h-6 w-6 text-[rgb(46,49,145)]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Innovación</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Constante desarrollo de productos que se adaptan a las necesidades del mercado.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 md:p-8">
              <p className="text-lg leading-relaxed text-center">
                En <span className="font-bold text-[rgb(46,49,145)]">Timox</span>, comercializamos una amplia variedad de herramientas con un enfoque en nuestros productos principales: discos para cortes. Satisfacemos todas sus necesidades en cuanto a construcción, reparación y mantenimiento, ofreciendo discos de alta calidad y durabilidad para asegurar precisión y rendimiento en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Productos Destacados Section */}
      <section id="productos" className="py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Productos Destacados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Descubre nuestra selección de discos de corte y desbaste más populares
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
            {productosDestacadosData.map((producto) => (
              <Card
                key={producto.id}
                className="group hover:shadow-lg transition-all border-2 hover:border-[rgb(46,49,145)]"
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center overflow-hidden">
                    <img
                      src={producto.image || "/placeholder.svg"}
                      alt={producto.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-1.5">
                    <div className="inline-block px-1.5 py-0.5 bg-[rgb(46,49,145)]/10 text-[rgb(46,49,145)] text-xs font-medium rounded mb-1">
                      {producto.category}
                    </div>
                    <h3 className="font-bold text-sm mb-0.5">{producto.name}</h3>
                    <p className="text-xs text-muted-foreground mb-1 line-clamp-2">{producto.descripcion}</p>
                    <p className="text-xs text-muted-foreground">
                      Unidades por caja: <span className="font-semibold">{producto.unidades}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/productos">
              <Button size="lg" className="bg-[rgb(46,49,145)] hover:bg-[rgb(36,39,125)] text-white cursor-pointer">
                Ver Todos los Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
                  <h2 className="font-semibold text-lg mb-1 text-[#0419a2]">Whatsapp</h2>
                  <Button
                    asChild
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 mb-2"
                  >
                    <a href="https://wa.me/5493515574449" target="_blank" rel="noopener noreferrer">
                      Chateá con nosotros
                    </a>
                  </Button>
                  <div className="text-gray-600 text-sm mb-1">+54 9 351 557 4449</div>
                </div>
              </div>
              <div className="h-px bg-gray-200 my-2 md:hidden" />
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h2 className="font-semibold text-lg mb-1 text-[#0419a2]">Teléfono</h2>
                  <div className="text-gray-600">(0351) 489 0900</div>
                </div>
              </div>
              <div className="h-px bg-gray-200 my-2 md:hidden" />
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h2 className="font-semibold text-lg mb-1 text-[#0419a2]">Email</h2>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=hola@oechsle.com.ar&su=Consulta desde la web de Oechsle S.A.&body=Hola, me contacto desde la página web de Oechsle S.A. para consultar sobre:"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition-colors"
                  >
                    Enviar email
                  </a>
                  <div className="text-gray-600 text-sm mb-1">hola@oechsle.com.ar</div>
                  <div className="text-gray-500 text-xs">Haz clic para enviar un email</div>
                </div>
              </div>
              <div className="h-px bg-gray-200 my-2 md:hidden" />
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  {/* Icono de ubicación tipo pin/mapa */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.418 0-8-4.03-8-9 0-4.97 3.582-9 8-9s8 4.03 8 9c0 4.97-3.582 9-8 9zm0-11a2 2 0 110 4 2 2 0 010-4z" /></svg>
                  <div>
                    <h2 className="font-semibold text-lg mb-1 text-[#0419a2]">Dónde encontrarnos</h2>
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
              <h3 className="text-2xl font-bold mb-6 text-[#0419a2]">Cómo podemos ayudarte?</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nombre *</label>
                    <Input required placeholder="Tu nombre completo" className="border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Empresa *</label>
                    <Input required placeholder="Nombre de tu empresa" className="border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Correo electrónico *</label>
                    <Input required type="email" placeholder="tu@email.com" className="border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Teléfono	 *</label>
                    <Input required placeholder="Tu número de teléfono" className="border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Provincia *</label>
                    <select
                      required
                      className="block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 text-gray-900 shadow-sm focus:border-[#0419a2] focus:ring-[#0419a2] focus:outline-none focus:ring-2 transition-colors duration-200"
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
                    <label className="text-sm font-medium text-gray-700">Ciudad *</label>
                    <Input required placeholder="Ciudad" className="border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Asunto *</label>
                  <Input required placeholder="¿De qué se trata tu consulta?" className="border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Mensaje *</label>
                  <Textarea required placeholder="Cuéntanos cómo podemos ayudarte..." className="min-h-[120px] border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                </div>
                <Button type="submit" className="w-full bg-[#0419a2] hover:bg-[#0419a2]/90 text-white font-semibold py-3">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[rgb(46,49,145)] text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <Link href="/" className="flex items-center">
                <Image width={128} height={128} src="/timox-rgb.svg" alt="Timox" className="w-28" />
              </Link>
              <p className="text-white/80 leading-relaxed">
                Herramientas de precisión para profesionales de la industria.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Enlaces</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#empresa" className="text-white/80 hover:text-white transition-colors">
                    Empresa
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="text-white/80 hover:text-white transition-colors">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-white/80 hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contacto</h4>
              <ul className="space-y-2 text-white/80">
                <li>Av Eliseo Canton 1870 Cordoba, Cordoba.</li>
                <li>
                  <a
                    href="https://wa.me/5493515574449"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    (0351) 489 0900
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hola@oechsle.com.ar?subject=Consulta desde el sitio web"
                    className="hover:text-white transition-colors"
                  >
                    hola@oechsle.com.ar
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Timox. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}