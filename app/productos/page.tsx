"use client"
import { useState, useMemo } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Filter, ArrowRight, ArrowLeft } from "lucide-react"
import productosData from "@/data/productos-data"
import Image from "next/image"

const discosCategories = [
  { name: "Para máquina sensitiva", image: "/imagenes/timox115x6.jpg", categoryId: "DISCOS DE CORTE PARA MÁQUINA SENSITIVA" },
  { name: "De corte", image: "/imagenes/timox115x6.jpg", categoryId: "DISCOS DE CORTE PLANO" },
  { name: "Desbaste", image: "/imagenes/timox115x6.jpg", categoryId: "DISCOS DE DESBASTE" },
  { name: "Flap", image: "/imagenes/timox115x6.jpg", categoryId: "DISCOS FLAP" },
  { name: "Diamantados", image: "/imagenes/timox115x6.jpg", categoryId: "DISCOS DIAMANTADOS" },
]

const cadenasCablesAccesoriosCategories = [
  { name: "Cadenas de acero galvanizadas", image: "/imagenes/Cadena.png", categoryId: "CADENAS_ACERO_GALVANIZADAS" },
  { name: "Cables de acero galvanizados", image: "/imagenes/Cables.png", categoryId: "CABLES_ACERO_GALVANIZADOS" },
  { name: "Gancho de elevación de ojo con pestillo", image: "/imagenes/Gancho.png", categoryId: "GANCHO_ELEVACION_OJO_PESTILLO" },
  { name: "Prensacables", image: "/imagenes/Carrousel-1.jpeg", categoryId: "PRENSACABLES" },
  { name: "Tensores de ojo-gancho galvanizados", image: "/imagenes/Carrousel-1.jpeg", categoryId: "TENSORES_OJO_GANCHO" },
]

const tablasData: Record<string, { headers: string[], rows: string[][] }> = {
  "CADENAS_ACERO_GALVANIZADAS": {
    headers: ["Código", "No", "Peso (Kg)", "U.V."],
    rows: [
      ["TXC20", "20", "12,50", "1"],
      ["TXC30", "30", "12,50", "1"],
      ["TXC35", "35", "12,50", "1"],
      ["TXC40", "40", "12,50", "1"],
      ["TXC45", "45", "12,50", "1"],
      ["TXC50", "50", "12,50", "1"],
      ["TXC60", "60", "25,00", "1"],
      ["TXC70", "70", "25,00", "1"],
      ["TXC80", "80", "25,00", "1"],
      ["TXC90", "90", "25,00", "1"],
      ["TXC100", "100", "25,00", "1"],
      ["TXC110", "110", "25,00", "1"],
    ]
  },
  "CABLES_ACERO_GALVANIZADOS": {
    headers: ["Código", "Diámetro (mm)", "Construcción", "Longitud (Metros)", "U.V."],
    rows: [
      ["TXCG1.6", "1,6", "6x7", "100", "1"],
      ["TXCG2", "2", "6x7", "100", "1"],
      ["TXCG3", "3", "6x7", "100", "1"],
      ["TXCG4", "4", "6x7", "100", "1"],
      ["TXCG5", "5", "6x7", "100", "1"],
      ["TXCG6", "6", "6x19", "100", "1"],
      ["TXCG7", "7", "6x19", "100", "1"],
      ["TXCG8", "8", "6x19", "100", "1"],
      ["TXCG9", "9", "6x19", "100", "1"],
      ["TXCG10", "10", "6x19", "100", "1"],
      ["TXCG11", "11", "6x19", "100", "1"],
      ["TXCG12", "12", "6x19", "100", "1"],
    ]
  },
  "GANCHO_ELEVACION_OJO_PESTILLO": {
    headers: ["Código", "Capacidad (Tn)", "U.V."],
    rows: [
      ["TXGEOR12", "1/2", "1"],
      ["TXGEOR34", "3/4", "1"],
      ["TXGEOR1", "1", "1"],
      ["TXGEOR112", "1-1/2", "1"],
    ]
  },
  "PRENSACABLES": {
    headers: ["Código", "Medida (mm)", "U.V."],
    rows: [
      ["TXP3", "3", "1"],
      ["TXP5", "5", "1"],
      ["TXP6", "6", "1"],
      ["TXP8", "8", "1"],
      ["TXP10", "10", "1"],
      ["TXP13", "13", "1"],
      ["TXP14", "14", "1"],
      ["TXP16", "16", "1"],
      ["TXP19", "19", "1"],
      ["TXP22", "22", "1"],
      ["TXP26", "26", "1"],
    ]
  },
  "TENSORES_OJO_GANCHO": {
    headers: ["Código", "Medida (mm)", "U.V."],
    rows: [
      ["TXTOG6", "6", "1"],
      ["TXTOG8", "8", "1"],
      ["TXTOG10", "10", "1"],
    ]
  },
}

export default function ProductosPage() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get("type")
  const categoryParam = searchParams.get("category")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const categories = useMemo(() => {
    const cats = Array.from(new Set(productosData.map((p) => p.category)))
    return ["all", ...cats]
  }, [])
  const filteredProducts = useMemo(() => {
    const categoryFilter = categoryParam || (selectedCategory === "all" ? null : selectedCategory)
    return productosData.filter((producto) => {
      const matchesSearch =
        producto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
        producto.category.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !categoryFilter || producto.category === categoryFilter
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory, categoryParam])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image width={128} height={128} src="/timox-rgb.svg" alt="Timox" className="w-40" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#empresa"
              className="text-foreground hover:text-[#3A506B] transition-colors font-medium"
            >
              Empresa
            </Link>
            <Link href="/productos" className="text-[#2C3E50] font-bold">
              Productos
            </Link>
            <Link
              href="/#contacto"
              className="text-foreground hover:text-[#3A506B] transition-colors font-medium"
            >
              Contacto
            </Link>
            <Link
              href="https://oechsle.osapp.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2C3E50] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3A506B] transition-colors"
            >
              Clientes
            </Link>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C3E50] to-[#3A506B] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            {categoryParam && (
              <Link href="/productos">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/50 text-white bg-white/10 hover:bg-white/20 hover:border-white cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver
                </Button>
              </Link>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              {categoryParam
                ? discosCategories.find(c => c.categoryId === categoryParam)?.name || 
                  cadenasCablesAccesoriosCategories.find(c => c.categoryId === categoryParam)?.name || 
                  categoryParam
                : typeParam === "discos"
                  ? "Discos"
                  : typeParam === "cadenas-cables-accesorios"
                    ? "Cadenas, Cables y Accesorios"
                    : "Nuestros Productos"}
            </h1>
          </div>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              {categoryParam
                ? `Productos de ${discosCategories.find(c => c.categoryId === categoryParam)?.name || 
                    cadenasCablesAccesoriosCategories.find(c => c.categoryId === categoryParam)?.name || 
                    categoryParam}`
                : typeParam === "discos"
                  ? "Selecciona una categoría para ver los productos"
                  : typeParam === "cadenas-cables-accesorios"
                    ? "Selecciona una categoría para ver los productos"
                    : "Explora nuestra línea completa de productos. Selecciona una categoría para ver más detalles"}
            </p>
        </div>
      </section>
      {/* Filters and Search - Solo se muestra cuando hay productos individuales, no cuando hay cards */}
      {false && !typeParam && !categoryParam ? (
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
                    className={selectedCategory === category ? "bg-[#2C3E50] hover:bg-[#3A506B]" : ""}
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
      ) : null}
      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {typeParam === "discos" ? (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
              {discosCategories.map((categoria, index) => (
                <Card key={index} className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:shadow-lg">
                  <div className="relative aspect-4/3">
                    <Image
                      src={categoria.image}
                      alt={categoria.name}
                      fill
                      className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                      <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 text-center">
                        <li>• {categoria.name}</li>
                      </ul>
                    </div>
                  </div>
                  <CardContent className="flex flex-col gap-3 p-6">
                    <h3 className="text-base font-semibold text-foreground text-center">{categoria.name}</h3>
                    <Link href={`/productos?category=${encodeURIComponent(categoria.categoryId)}`} className="w-full mt-auto">
                      <Button variant="outline" className="w-full border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white font-medium transition-all cursor-pointer">
                        Ver más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : typeParam === "cadenas-cables-accesorios" ? (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
              {cadenasCablesAccesoriosCategories.map((categoria, index) => (
                <Card key={index} className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:shadow-lg">
                  <div className="relative aspect-4/3">
                    <Image
                      src={categoria.image}
                      alt={categoria.name}
                      fill
                      className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                      <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 text-center">
                        <li>• {categoria.name}</li>
                      </ul>
                    </div>
                  </div>
                  <CardContent className="flex flex-col gap-3 p-6">
                    <h3 className="text-base font-semibold text-foreground text-center">{categoria.name}</h3>
                    <Link href={`/productos?category=${encodeURIComponent(categoria.categoryId)}`} className="w-full mt-auto">
                      <Button variant="outline" className="w-full border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white font-medium transition-all cursor-pointer">
                        Ver más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : !typeParam && !categoryParam ? (
            <div className="space-y-12">
              {/* Sección de Discos */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">Discos</h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 max-w-7xl mx-auto">
                  {discosCategories.map((categoria, index) => (
                    <Card key={index} className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:shadow-lg">
                      <div className="relative aspect-4/3">
                        <Image
                          src={categoria.image}
                          alt={categoria.name}
                          fill
                          className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                          <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 text-center">
                            <li>• {categoria.name}</li>
                          </ul>
                        </div>
                      </div>
                      <CardContent className="flex flex-col gap-3 p-6">
                        <h3 className="text-base font-semibold text-foreground text-center">{categoria.name}</h3>
                        <Link href={`/productos?category=${encodeURIComponent(categoria.categoryId)}`} className="w-full mt-auto">
                          <Button variant="outline" className="w-full border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white font-medium transition-all cursor-pointer">
                            Ver más
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              {/* Sección de Cadenas, Cables y Accesorios */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">Cadenas, Cables y Accesorios</h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 max-w-7xl mx-auto">
                  {cadenasCablesAccesoriosCategories.map((categoria, index) => (
                    <Card key={index} className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:shadow-lg">
                      <div className="relative aspect-4/3">
                        <Image
                          src={categoria.image}
                          alt={categoria.name}
                          fill
                          className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                          <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 text-center">
                            <li>• {categoria.name}</li>
                          </ul>
                        </div>
                      </div>
                      <CardContent className="flex flex-col gap-3 p-6">
                        <h3 className="text-base font-semibold text-foreground text-center">{categoria.name}</h3>
                        <Link href={`/productos?category=${encodeURIComponent(categoria.categoryId)}`} className="w-full mt-auto">
                          <Button variant="outline" className="w-full border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white font-medium transition-all cursor-pointer">
                            Ver más
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ) : categoryParam && tablasData[categoryParam] ? (
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#2C3E50] text-white">
                      <tr>
                        {tablasData[categoryParam].headers.map((header, index) => (
                          <th key={index} className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wide">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {tablasData[categoryParam].rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-[#ECEEEF]/50 transition-colors">
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="px-6 py-4 text-sm text-[#1B1F23]">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((producto) => (
                <Card
                  key={producto.id}
                  className="group hover:shadow-lg transition-all border-2 hover:border-[#2C3E50]"
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
                      <div className="inline-block px-1.5 py-0.5 bg-[#2C3E50]/10 text-[#2C3E50] text-xs font-medium rounded mb-1">
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
      <footer className="bg-[#2C3E50] text-white py-12 mt-12">
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
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5493515574449"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl flex items-center justify-center w-16 h-16 cursor-pointer"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.77.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}