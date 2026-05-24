import Image from "next/image"
import Link from "next/link"

type SiteFooterProps = {
  variant?: "home" | "productos"
}

export function SiteFooter({ variant = "home" }: SiteFooterProps) {
  const isProductos = variant === "productos"
  const empresaHref = isProductos ? "/#empresa" : "#empresa"
  const contactoHref = isProductos ? "/#contacto" : "#contacto"

  return (
    <footer
      className={`bg-[#2C3E50] text-white ${isProductos ? "py-12" : "py-8 mt-12"}`}
    >
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-3 ${isProductos ? "gap-8 mb-8" : "gap-6 mb-6"}`}>
          <div>
            <Link href="/" className="flex items-center">
              <Image width={128} height={128} src="/timox-rgb.svg" alt="Timox" className="w-28" />
            </Link>
            <p className="text-white/80 leading-relaxed">
              Herramientas de precisión para profesionales de la industria.
            </p>
          </div>
          <div>
            <h4 className={`font-bold ${isProductos ? "mb-4" : "mb-3"}`}>Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href={empresaHref} className="text-white/80 hover:text-white transition-colors">
                  Empresa
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-white/80 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href={contactoHref} className="text-white/80 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={`font-bold ${isProductos ? "mb-4" : "mb-3"}`}>Contacto</h4>
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
        <div
          className={`border-t border-white/20 text-center text-white/60 ${
            isProductos ? "pt-8" : "pt-6"
          }`}
        >
          <p>&copy; {new Date().getFullYear()} Timox. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}