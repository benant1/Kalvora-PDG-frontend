"use client"

import Image from "next/image"
import Link from "next/link"
import { Store, Eye, ShoppingBag, Tag } from "lucide-react"

interface VendorProduct {
  id: number
  title: string
  description: string
  price: number
  comparePrice?: number
  category: string
  images: string[]
  thumbnailUrl?: string
  slug: string
  views: number
  sales: number
  stock: number
  trackStock: boolean
  vendor: {
    id: number
    storeName: string
    storeType: string
    sellerName: string
  }
}

const categoryLabels: Record<string, string> = {
  template: "Template",
  design: "Design",
  service: "Service",
  digital: "Numérique",
  other: "Autre"
}

export default function ProductCard({ product }: { product: VendorProduct }) {
  // Assurer que images est toujours un array
  const images = Array.isArray(product.images) 
    ? product.images 
    : typeof product.images === 'string' 
      ? JSON.parse(product.images)
      : []
  
  const imageUrl = product.thumbnailUrl || (images && images.length > 0 ? images[0] : null)
  
  console.log('ProductCard - product.title:', product.title, 'imageUrl:', imageUrl, 'images:', images)
  const hasDiscount = product.comparePrice && product.comparePrice > product.price
  const discountPercent = hasDiscount 
    ? Math.round(((product.comparePrice! - product.price) / product.comparePrice!) * 100) 
    : 0

  const getImageUrl = (url: string | null | undefined): string | null => {
    if (!url) return null
    if (url.startsWith('http')) return url
    return `http://localhost:4000${url}`
  }

  return (
    <Link href={`/market/product/${product.slug}`}>
      <div className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl cursor-pointer">
        <div className="relative h-52 bg-muted overflow-hidden">
          {imageUrl ? (
            <img
              src={getImageUrl(imageUrl) || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/50" />
            </div>
          )}
          
          {/* Badge prix */}
          <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              {product.price.toFixed(2)} €
            </div>
            {hasDiscount && (
              <div className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                -{discountPercent}%
              </div>
            )}
          </div>

          {/* Badge catégorie */}
          <div className="absolute top-3 left-3">
            <span className="bg-background/90 backdrop-blur-sm text-foreground px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {categoryLabels[product.category] || product.category}
            </span>
          </div>

          {/* Stock badge */}
          {product.trackStock && product.stock <= 5 && product.stock > 0 && (
            <div className="absolute bottom-3 left-3">
              <span className="bg-orange-500/90 text-white px-2 py-1 rounded-md text-xs font-medium">
                Plus que {product.stock} en stock
              </span>
            </div>
          )}
          {product.trackStock && product.stock === 0 && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                Rupture de stock
              </span>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg text-foreground mb-1 line-clamp-1 group-hover:text-primary transition">
            {product.title}
          </h3>
          <p className="text-foreground/60 text-sm mb-3 line-clamp-2">{product.description}</p>

          {/* Vendeur */}
          <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-muted/50">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Store className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{product.vendor.storeName}</p>
              <p className="text-xs text-muted-foreground truncate">{product.vendor.sellerName}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              <span>{product.views} vues</span>
            </div>
            <div className="flex items-center gap-1">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{product.sales} ventes</span>
            </div>
          </div>

          {/* Prix barré si réduction */}
          {hasDiscount && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-muted-foreground line-through text-sm">
                {product.comparePrice!.toFixed(2)} €
              </span>
              <span className="text-green-500 font-medium text-sm">
                Économisez {(product.comparePrice! - product.price).toFixed(2)} €
              </span>
            </div>
          )}

          <button className="w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold transition flex items-center justify-center gap-2 group-hover:shadow-md">
            <Eye className="w-4 h-4" />
            Voir les détails
          </button>
        </div>
      </div>
    </Link>
  )
}
