"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { 
  ArrowLeft, 
  Store, 
  Eye, 
  ShoppingBag, 
  Tag, 
  ChevronLeft, 
  ChevronRight,
  Heart,
  Share2,
  ShieldCheck,
  Clock,
  MessageCircle,
  Star,
  Package,
  Check
} from "lucide-react"

interface VendorProduct {
  id: number
  title: string
  description: string
  price: number
  comparePrice?: number
  category: string
  subcategory?: string
  images: string[]
  thumbnailUrl?: string
  slug: string
  views: number
  sales: number
  stock: number
  trackStock: boolean
  metaTitle?: string
  metaDescription?: string
  createdAt: string
  vendor: {
    id: number
    storeName: string
    storeType: string
    storeDescription: string
    sellerName: string
  }
}

const categoryLabels: Record<string, string> = {
  template: "Template",
  design: "Design",
  service: "Service",
  digital: "Produit numérique",
  other: "Autre"
}

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  
  const [product, setProduct] = useState<VendorProduct | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (slug) {
      fetchProduct()
    }
  }, [slug])

  const fetchProduct = async () => {
    try {
      setLoading(true)
      const response = await fetch(`http://localhost:4000/api/v1/market/vendor/products/${slug}`)
      
      if (!response.ok) {
        if (response.status === 404) {
          setError("Produit non trouvé")
        } else {
          throw new Error("Erreur lors du chargement")
        }
        return
      }
      
      const data = await response.json()
      setProduct(data)
    } catch (err) {
      console.error("Error fetching product:", err)
      setError("Impossible de charger le produit")
    } finally {
      setLoading(false)
    }
  }

  const hasDiscount = product?.comparePrice && product.comparePrice > product.price
  const discountPercent = hasDiscount 
    ? Math.round(((product!.comparePrice! - product!.price) / product!.comparePrice!) * 100) 
    : 0

  // Assurer que images est toujours un array
  const images = product 
    ? (Array.isArray(product.images) 
        ? product.images 
        : typeof product.images === 'string' 
          ? JSON.parse(product.images)
          : [])
    : []
  const currentImage = images[currentImageIndex] || product?.thumbnailUrl

  const getImageUrl = (url: string | null | undefined): string => {
    if (!url) return "/placeholder.svg"
    if (url.startsWith('http')) return url
    return `http://localhost:4000${url}`
  }

  const nextImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: product?.title,
        text: product?.description,
        url: window.location.href
      })
    } catch {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Lien copié dans le presse-papier !")
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Chargement du produit...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (error || !product) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Produit non trouvé</h2>
            <p className="text-muted-foreground mb-6">{error || "Ce produit n'existe pas ou a été supprimé"}</p>
            <Link 
              href="/market"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au Market
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/market" className="hover:text-primary transition">Market</Link>
          <span>/</span>
          <Link href={`/market?category=${product.category}`} className="hover:text-primary transition">
            {categoryLabels[product.category] || product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground truncate max-w-[200px]">{product.title}</span>
        </nav>

        {/* Bouton retour */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              {currentImage ? (
                <img
                  src={getImageUrl(currentImage)}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                  <ShoppingBag className="w-24 h-24 text-muted-foreground/30" />
                </div>
              )}
              
              {/* Navigation images */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Badges */}
              {hasDiscount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{discountPercent}%
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition ${
                      index === currentImageIndex ? "border-primary" : "border-transparent hover:border-border"
                    }`}
                  >
                    <img
                      src={getImageUrl(img) || "/placeholder.svg"}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Détails */}
          <div className="space-y-6">
            {/* Catégorie */}
            <div className="flex items-center gap-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" />
                {categoryLabels[product.category] || product.category}
              </span>
              {product.subcategory && (
                <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                  {product.subcategory}
                </span>
              )}
            </div>

            {/* Titre */}
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">{product.title}</h1>

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{product.views} vues</span>
              </div>
              <div className="flex items-center gap-1">
                <ShoppingBag className="w-4 h-4" />
                <span>{product.sales} ventes</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>4.8</span>
              </div>
            </div>

            {/* Prix */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">{product.price.toFixed(2)} €</span>
              {hasDiscount && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    {product.comparePrice!.toFixed(2)} €
                  </span>
                  <span className="bg-green-500/10 text-green-600 px-2 py-1 rounded text-sm font-medium">
                    Économisez {(product.comparePrice! - product.price).toFixed(2)} €
                  </span>
                </>
              )}
            </div>

            {/* Stock */}
            {product.trackStock && (
              <div className="flex items-center gap-2">
                {product.stock > 10 ? (
                  <span className="flex items-center gap-1 text-green-600 text-sm">
                    <Check className="w-4 h-4" />
                    En stock ({product.stock} disponibles)
                  </span>
                ) : product.stock > 0 ? (
                  <span className="flex items-center gap-1 text-orange-500 text-sm">
                    <Clock className="w-4 h-4" />
                    Plus que {product.stock} en stock
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-red-500 text-sm font-medium">
                    Rupture de stock
                  </span>
                )}
              </div>
            )}

            {/* Description */}
            <div className="prose prose-sm max-w-none text-foreground/80">
              <p className="whitespace-pre-wrap">{product.description}</p>
            </div>

            {/* Quantité et boutons */}
            <div className="space-y-4 pt-4 border-t border-border">
              {product.trackStock && product.stock > 0 && (
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-foreground">Quantité:</span>
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-muted transition"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-border min-w-[50px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-3 py-2 hover:bg-muted transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  disabled={product.trackStock && product.stock === 0}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Acheter maintenant
                </button>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 rounded-xl border transition ${
                    isFavorite 
                      ? "bg-red-500/10 border-red-500/30 text-red-500" 
                      : "border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="p-3 rounded-xl border border-border hover:border-primary hover:text-primary transition"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Avantages */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span className="text-sm text-foreground">Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-foreground">Livraison rapide</span>
              </div>
            </div>

            {/* Vendeur */}
            <div className="p-4 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Store className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground">{product.vendor.storeName}</h3>
                  <p className="text-sm text-muted-foreground">{product.vendor.sellerName}</p>
                  <p className="text-xs text-muted-foreground capitalize">{product.vendor.storeType}</p>
                </div>
                <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Contacter
                </button>
              </div>
              {product.vendor.storeDescription && (
                <p className="mt-3 pt-3 border-t border-border text-sm text-muted-foreground line-clamp-2">
                  {product.vendor.storeDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
