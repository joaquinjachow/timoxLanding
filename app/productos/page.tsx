"use client"
import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import productosData from "@/data/productos-data"
import Image from "next/image"

export default function ProductosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const categories = useMemo(() => {
    const cats = Array.from(new Set(productosData.map((p) => p.category)))
    return ["all", ...cats]
  }, [])
  const filteredProducts = useMemo(() => {
    return productosData.filter((producto) => {
      const matchesSearch =
        producto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
        producto.category.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || producto.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image width={128} height={128} src="/timox-rgb.svg" alt="Timox" className="w-36" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#empresa"
              className="text-foreground hover:text-[rgb(46,49,145)] transition-colors font-medium"
            >
              Empresa
            </Link>
            <Link href="/productos" className="text-[rgb(46,49,145)] font-bold">
              Productos
            </Link>
            <Link
              href="/#contacto"
              className="text-foreground hover:text-[rgb(46,49,145)] transition-colors font-medium"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[rgb(46,49,145)] to-[rgb(36,39,125)] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nuestros Productos</h1>
          <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
            Catálogo completo de discos de corte y desbaste para todas tus necesidades industriales
          </p>
        </div>
      </section>
      {/* Filters and Search */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11"
              />
            </div>
            {/* Category Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="h-5 w-5 text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-[rgb(46,49,145)] hover:bg-[rgb(36,39,125)]" : ""}
                >
                  {category === "all" ? "Todos" : category}
                </Button>
              ))}
            </div>
          </div>
          {/* Results Count */}
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Mostrando <span className="font-semibold text-foreground">{filteredProducts.length}</span> de{" "}
              <span className="font-semibold text-foreground">{productosData.length}</span> productos
            </p>
          </div>
        </div>
      </section>
      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((producto) => (
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
                    <div className="p-2">
                      <div className="inline-block px-1.5 py-0.5 bg-[rgb(46,49,145)]/10 text-[rgb(46,49,145)] text-xs font-medium rounded mb-1">
                        {producto.category}
                      </div>
                      <h3 className="font-bold text-sm mb-0.5">{producto.name}</h3>
                      <p className="text-xs text-muted-foreground mb-1 line-clamp-2">{producto.descripcion}</p>
                      <div className="flex items-center justify-between pt-1 border-t">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-semibold text-foreground">{producto.unidades}</span> unidades/caja
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">No se encontraron productos</h3>
              <p className="text-muted-foreground mb-6">Intenta con otros términos de búsqueda o filtros</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                variant="outline"
              >
                Limpiar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[rgb(46,49,145)] text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center">
                <Image width={128} height={128} src="/timox-rgb.svg" alt="Timox" className="w-28" />
              </Link>
              <p className="text-white/80 leading-relaxed">
                Herramientas de precisión para profesionales de la industria.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/#empresa" className="text-white/80 hover:text-white transition-colors">
                    Empresa
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="text-white/80 hover:text-white transition-colors">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/#contacto" className="text-white/80 hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
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
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Timox. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}