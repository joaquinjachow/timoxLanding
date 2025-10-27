import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import productosDestacadosData from "@/data/productos-destacados-data"
import Image from "next/image"

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
      <section className="relative bg-gradient-to-br from-[rgb(46,49,145)] to-[rgb(36,39,125)] text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
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
                  className="bg-white text-[rgb(46,49,145)] hover:bg-gray-100 hover:text-[rgb(36,39,125)] transition-all duration-200 w-full sm:w-auto shadow-lg hover:shadow-xl"
                >
                  Ver Productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[rgb(46,49,145)] transition-all duration-200 w-full sm:w-auto bg-transparent hover:shadow-lg"
                >
                  Contactar
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>
      {/* Nuestra Empresa Section */}
      <section id="empresa" className="py-12 bg-background">
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
      <section id="productos" className="py-12 bg-muted/30">
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
              <Button size="lg" className="bg-[rgb(46,49,145)] hover:bg-[rgb(36,39,125)] text-white">
                Ver Todos los Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Contacto Section */}
      <section id="contacto" className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Contacto</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ¿Tenés alguna consulta? Estamos para ayudarte
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="pt-4">
                  <h3 className="text-lg font-bold mb-4">Información de Contacto</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[rgb(46,49,145)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-4 w-4 text-[rgb(46,49,145)]" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <a
                          href="mailto:info@timox.com"
                          className="text-muted-foreground hover:text-[rgb(46,49,145)] transition-colors"
                        >
                          info@timox.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[rgb(46,49,145)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-4 w-4 text-[rgb(46,49,145)]" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Teléfono</p>
                        <a
                          href="tel:+5491112345678"
                          className="text-muted-foreground hover:text-[rgb(46,49,145)] transition-colors"
                        >
                          +54 9 11 1234-5678
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[rgb(46,49,145)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-4 w-4 text-[rgb(46,49,145)]" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Dirección</p>
                        <p className="text-muted-foreground">Buenos Aires, Argentina</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-4">
                  <h3 className="text-lg font-bold mb-4">Envianos un Mensaje</h3>
                  <form className="space-y-3">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(46,49,145)]"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(46,49,145)]"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="asunto" className="block text-sm font-medium mb-2">
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="asunto"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(46,49,145)]"
                        placeholder="Asunto de tu consulta"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(46,49,145)]"
                        placeholder="Tu mensaje..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[rgb(46,49,145)] hover:bg-[rgb(36,39,125)] text-white">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[rgb(46,49,145)] text-white py-8">
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
                <li>info@timox.com</li>
                <li>+54 9 11 1234-5678</li>
                <li>Buenos Aires, Argentina</li>
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