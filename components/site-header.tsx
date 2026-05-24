import Image from "next/image"
import Link from "next/link"

type SiteHeaderProps = {
  variant?: "home" | "productos"
}

export function SiteHeader({ variant = "home" }: SiteHeaderProps) {
  const isProductos = variant === "productos"
  const empresaHref = isProductos ? "/#empresa" : "#empresa"
  const contactoHref = isProductos ? "/#contacto" : "#contacto"

  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image width={128} height={128} src="/timox-rgb.svg" alt="Timox" className="w-40" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href={empresaHref}
            className="text-foreground hover:text-[#3A506B] transition-colors font-medium"
          >
            Empresa
          </Link>
          <Link
            href="/productos"
            className={
              isProductos
                ? "text-[#2C3E50] font-bold"
                : "text-foreground hover:text-[#3A506B] transition-colors font-medium"
            }
          >
            Productos
          </Link>
          <Link
            href={contactoHref}
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
  )
}
