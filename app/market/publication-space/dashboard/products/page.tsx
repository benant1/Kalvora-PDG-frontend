"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Package,
  PlusCircle,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  AlertCircle,
  Loader2,
  X
} from "lucide-react"

interface Product {
  id: number
  title: string
  description: string
  price: number
  comparePrice?: number
  stock: number
  category: string
  images: string[]
  thumbnailUrl: string
  status: string
  slug: string
  views: number
  sales: number
  createdAt: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState("")

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem("token")
      if (!token) return

      let url = "http://localhost:4000/api/v1/vendor/products?limit=100"
      if (filterStatus !== "all") url += `&status=${filterStatus}`
      if (filterCategory !== "all") url += `&category=${filterCategory}`
      if (searchTerm) url += `&search=${encodeURIComponent(searchTerm)}`

      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` }
      })

      if (!response.ok) throw new Error("Erreur lors du chargement")

      const data = await response.json()
      setProducts(data.products || [])
    } catch (error) {
      console.error("Erreur:", error)
      setError("Impossible de charger les produits")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [filterStatus, filterCategory])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm !== "") {
        fetchProducts()
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [searchTerm])

  const toggleProductStatus = async (product: Product) => {
    try {
      const token = localStorage.getItem("token")
      if (!token) return

      const newStatus = product.status === "published" ? "draft" : "published"

      const response = await fetch(`http://localhost:4000/api/v1/vendor/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      })

      if (!response.ok) throw new Error("Erreur lors de la mise à jour")

      setProducts(products.map(p =>
        p.id === product.id ? { ...p, status: newStatus } : p
      ))
    } catch (error) {
      console.error("Erreur:", error)
      setError("Impossible de modifier le statut")
    }
  }

  const deleteProduct = async (productId: number) => {
    try {
      setDeleting(true)
      const token = localStorage.getItem("token")
      if (!token) return

      const response = await fetch(`http://localhost:4000/api/v1/vendor/products/${productId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      })

      if (!response.ok) throw new Error("Erreur lors de la suppression")

      setProducts(products.filter(p => p.id !== productId))
      setShowDeleteModal(null)
    } catch (error) {
      console.error("Erreur:", error)
      setError("Impossible de supprimer le produit")
    } finally {
      setDeleting(false)
    }
  }

  const categories = [
    { value: "all", label: "Toutes catégories" },
    { value: "template", label: "Templates" },
    { value: "design", label: "Designs" },
    { value: "service", label: "Services" },
    { value: "digital", label: "Digital" },
    { value: "other", label: "Autres" }
  ]

  const statuses = [
    { value: "all", label: "Tous les statuts" },
    { value: "published", label: "Publiés" },
    { value: "draft", label: "Brouillons" },
    { value: "archived", label: "Archivés" }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mes Produits</h1>
          <p className="text-muted-foreground mt-1">
            {products.length} produit{products.length !== 1 ? "s" : ""} dans votre boutique
          </p>
        </div>
        <Link
          href="/market/publication-space/dashboard/add-product"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition font-medium"
        >
          <PlusCircle size={20} />
          Ajouter un produit
        </Link>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
          <AlertCircle size={20} />
          {error}
          <button onClick={() => setError("")} className="ml-auto">
            <X size={18} />
          </button>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary outline-none cursor-pointer"
        >
          {categories.map(cat => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary outline-none cursor-pointer"
        >
          {statuses.map(status => (
            <option key={status.value} value={status.value}>{status.label}</option>
          ))}
        </select>
      </div>

      {/* Products Grid or Empty State */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20 px-4 rounded-xl bg-card border border-border">
          <Package className="w-20 h-20 text-muted-foreground/30 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Aucun produit</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Vous n'avez pas encore ajouté de produit. Commencez à vendre en ajoutant votre premier produit!
          </p>
          <Link
            href="/market/publication-space/dashboard/add-product"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition font-medium"
          >
            <PlusCircle size={20} />
            Ajouter mon premier produit
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`rounded-xl bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow ${
                product.status !== "published" ? "opacity-70" : ""
              }`}
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-muted">
                {product.thumbnailUrl ? (
                  <Image
                    src={`http://localhost:4000${product.thumbnailUrl}`}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-16 h-16 text-muted-foreground/30" />
                  </div>
                )}
                {product.status === "draft" && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-yellow-500 text-yellow-950 text-xs font-medium rounded">
                    Brouillon
                  </div>
                )}
                {product.status === "archived" && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-gray-500 text-white text-xs font-medium rounded">
                    Archivé
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <div className="relative group">
                    <button className="p-2 bg-card/80 backdrop-blur-sm rounded-lg hover:bg-card transition">
                      <MoreVertical size={16} />
                    </button>
                    <div className="absolute right-0 top-full mt-1 w-40 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                      <Link
                        href={`/market/publication-space/dashboard/edit-product/${product.id}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition"
                      >
                        <Edit size={16} />
                        Modifier
                      </Link>
                      <button
                        onClick={() => toggleProductStatus(product)}
                        className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition w-full text-left"
                      >
                        {product.status === "published" ? (
                          <>
                            <EyeOff size={16} />
                            Masquer
                          </>
                        ) : (
                          <>
                            <Eye size={16} />
                            Publier
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => setShowDeleteModal(product.id)}
                        className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition w-full text-left text-red-500"
                      >
                        <Trash2 size={16} />
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground truncate">{product.title}</h3>
                <p className="text-sm text-muted-foreground capitalize">{product.category}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">{product.price} €</span>
                    {product.comparePrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.comparePrice} €
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Stock: {product.stock}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye size={14} />
                    {product.views} vues
                  </span>
                  <span>{product.sales} ventes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-xl p-6 max-w-md w-full border border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-red-500/10">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Supprimer le produit?</h3>
                <p className="text-sm text-muted-foreground">Cette action est irréversible.</p>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowDeleteModal(null)}
                className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition"
                disabled={deleting}
              >
                Annuler
              </button>
              <button
                onClick={() => deleteProduct(showDeleteModal)}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition flex items-center gap-2"
                disabled={deleting}
              >
                {deleting && <Loader2 size={16} className="animate-spin" />}
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
