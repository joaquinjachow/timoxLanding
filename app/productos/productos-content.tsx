"use client"

import { useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, ArrowRight, Search } from "lucide-react"
import { FloatingActions } from "@/components/floating-actions"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cadenasCablesAccesoriosCategories } from "@/data/cadenas-categories"
import { discosCategories } from "@/data/discos-categories"
import productosData from "@/data/productos-data"
import { tablasData } from "@/data/tablas-data"
import { getCategoryDisplayName } from "@/lib/productos-utils"

export function ProductosContent() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get("type")
  const categoryParam = searchParams.get("category")
  const filteredProducts = useMemo(() => {
    const categoryFilter = categoryParam || null
    return productosData.filter((producto) => {
      const matchesCategory = !categoryFilter || producto.category === categoryFilter
      return matchesCategory
    })
  }, [categoryParam])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="productos" />
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
                ? getCategoryDisplayName(categoryParam)
                : typeParam === "discos"
                  ? "Discos"
                  : typeParam === "cadenas-cables-accesorios"
                    ? "Cadenas, Cables y Accesorios"
                    : "Nuestros Productos"}
            </h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
            {categoryParam
              ? `Productos de ${getCategoryDisplayName(categoryParam)}`
              : typeParam === "discos"
                ? "Selecciona una categoría para ver los productos"
                : typeParam === "cadenas-cables-accesorios"
                  ? "Selecciona una categoría para ver los productos"
                  : "Explora nuestra línea completa de productos. Selecciona una categoría para ver más detalles"}
          </p>
        </div>
      </section>
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
                <Card key={index} className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:shadow-lg" title={categoria.fullName || categoria.name}>
                  <div className="relative aspect-4/3">
                    <Image
                      src={categoria.image}
                      alt={categoria.name}
                      fill
                      className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                      <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 text-center">
                        <li>• {categoria.fullName || categoria.name}</li>
                      </ul>
                    </div>
                  </div>
                  <CardContent className="flex flex-col gap-3 p-6">
                    <h3 className="text-base font-semibold text-foreground text-center" title={categoria.fullName || categoria.name}>{categoria.name}</h3>
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
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">Cadenas, Cables y Accesorios</h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 max-w-7xl mx-auto">
                  {cadenasCablesAccesoriosCategories.map((categoria, index) => (
                    <Card key={index} className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:shadow-lg" title={categoria.fullName || categoria.name}>
                      <div className="relative aspect-4/3">
                        <Image
                          src={categoria.image}
                          alt={categoria.name}
                          fill
                          className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                          <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 text-center">
                            <li>• {categoria.fullName || categoria.name}</li>
                          </ul>
                        </div>
                      </div>
                      <CardContent className="flex flex-col gap-3 p-6">
                        <h3 className="text-base font-semibold text-foreground text-center" title={categoria.fullName || categoria.name}>{categoria.name}</h3>
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
                {tablasData[categoryParam].unidadesPorCaja && categoryParam !== "discos de corte plano" && (
                  <div className="px-6 py-4 bg-[#ECEEEF]/30 border-t border-gray-200">
                    <p className="text-sm text-[#1B1F23] font-medium">
                      Unidades por caja: <span className="font-semibold">{tablasData[categoryParam].unidadesPorCaja}</span>
                    </p>
                  </div>
                )}
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
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
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
              <Button variant="outline">
                Limpiar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>
      <SiteFooter variant="productos" />
      <FloatingActions contactHref="/#contacto" />
    </div>
  )
}
