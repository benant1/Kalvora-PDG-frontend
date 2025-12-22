"use client"

import { useState, useEffect } from "react"
import ProductCard from "./product-card"
import { Search, SlidersHorizontal, Loader2 } from "lucide-react"

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
  createdAt: string
  vendor: {
    id: number
    storeName: string
    storeType: string
    sellerName: string
  }
}

interface Pagination {
  page: number
  limit: number
  total: number
  pages: number
}

export default function ProductsList() {
  const [products, setProducts] = useState<VendorProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("newest")
  const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 20, total: 0, pages: 0 })

  const categories = [
    { value: "all", label: "Tous" },
    { value: "template", label: "Templates" },
    { value: "design", label: "Designs" },
    { value: "service", label: "Services" },
    { value: "digital", label: "Numériques" },
    { value: "other", label: "Autres" }
  ]

  const sortOptions = [
    { value: "newest", label: "Plus récents" },
    { value: "oldest", label: "Plus anciens" },
    { value: "price_asc", label: "Prix croissant" },
    { value: "price_desc", label: "Prix décroissant" },
    { value: "popular", label: "Plus vus" },
    { value: "bestselling", label: "Meilleures ventes" }
  ]

  useEffect(() => {
    fetchProducts()
  }, [filter, sort, pagination.page])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: "20",
        sort
      })
      
      if (filter !== "all") {
        params.append("category", filter)
      }
      
      if (search.trim()) {
        params.append("q", search.trim())
      }

      const response = await fetch(`http://localhost:4000/api/v1/market/vendor/products?${params}`)
      
      if (!response.ok) throw new Error("Erreur lors du chargement")
      
      const data = await response.json()
      setProducts(data.products || [])
      setPagination(data.pagination || { page: 1, limit: 20, total: 0, pages: 0 })
    } catch (err) {
      console.error("Error fetching products:", err)
      setError("Impossible de charger les produits")
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setPagination(prev => ({ ...prev, page: 1 }))
    fetchProducts()
  }

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Barre de recherche et filtres */}
        <div className="mb-8 space-y-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher des produits..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Rechercher
            </button>
          </form>

          <div className="flex flex-wrap items-center gap-4">
            {/* Filtres par catégorie */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => {
                    setFilter(cat.value)
                    setPagination(prev => ({ ...prev, page: 1 }))
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition text-sm ${
                    filter === cat.value 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-muted text-foreground hover:bg-border"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Tri */}
            <div className="flex items-center gap-2 ml-auto">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value)
                  setPagination(prev => ({ ...prev, page: 1 }))
                }}
                className="px-3 py-2 rounded-lg bg-card border border-border text-foreground text-sm focus:border-primary outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* État de chargement */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Chargement des produits...</span>
          </div>
        )}

        {/* Erreur */}
        {error && !loading && (
          <div className="text-center py-20">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={fetchProducts}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              Réessayer
            </button>
          </div>
        )}

        {/* Liste des produits */}
        {!loading && !error && (
          <>
            {products.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Aucun produit trouvé</h3>
                <p className="text-muted-foreground">
                  {search ? "Essayez avec d'autres termes de recherche" : "Les vendeurs n'ont pas encore publié de produits"}
                </p>
              </div>
            ) : (
              <>
                <p className="text-muted-foreground mb-6">
                  {pagination.total} produit{pagination.total > 1 ? "s" : ""} trouvé{pagination.total > 1 ? "s" : ""}
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {pagination.pages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-10">
                    <button
                      onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                      disabled={pagination.page === 1}
                      className="px-4 py-2 rounded-lg bg-muted text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-border transition"
                    >
                      Précédent
                    </button>
                    
                    <span className="px-4 py-2 text-foreground">
                      Page {pagination.page} sur {pagination.pages}
                    </span>
                    
                    <button
                      onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                      disabled={pagination.page === pagination.pages}
                      className="px-4 py-2 rounded-lg bg-muted text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-border transition"
                    >
                      Suivant
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </section>
  )
}
