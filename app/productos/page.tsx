import { Suspense } from "react"
import { ProductosContent } from "./productos-content"

export default function ProductosPage() {
  return (
    <Suspense fallback={null}>
      <ProductosContent />
    </Suspense>
  )
}