import { cadenasCablesAccesoriosCategories } from "@/data/cadenas-categories"
import { discosCategories } from "@/data/discos-categories"

export function getCategoryDisplayName(categoryId: string): string {
  const disco = discosCategories.find((c) => c.categoryId === categoryId)
  if (disco) return disco.name

  const cadena = cadenasCablesAccesoriosCategories.find((c) => c.categoryId === categoryId)
  if (cadena) return cadena.fullName || cadena.name

  return categoryId
}
