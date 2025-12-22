"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import {
  Upload,
  X,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ImageIcon,
  ArrowLeft,
  Trash2
} from "lucide-react"
import Link from "next/link"

const categories = [
  { value: "template", label: "Template" },
  { value: "design", label: "Design" },
  { value: "service", label: "Service" },
  { value: "digital", label: "Produit Digital" },
  { value: "other", label: "Autre" }
]

export default function EditProductPage() {
  const router = useRouter()
  const params = useParams()
  const productId = params.id as string
  
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    comparePrice: "",
    stock: "",
    category: "template",
    subcategory: "",
    status: "draft",
    metaTitle: "",
    metaDescription: ""
  })
  
  const [existingImages, setExistingImages] = useState<string[]>([])
  const [newImages, setNewImages] = useState<File[]>([])
  const [newImagePreviews, setNewImagePreviews] = useState<string[]>([])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          router.push("/login")
          return
        }

        const response = await fetch(`http://localhost:4000/api/v1/vendor/products/${productId}`, {
          headers: { Authorization: `Bearer ${token}` }
        })

        if (!response.ok) throw new Error("Produit non trouvé")

        const product = await response.json()
        
        setFormData({
          title: product.title || "",
          description: product.description || "",
          price: product.price?.toString() || "",
          comparePrice: product.comparePrice?.toString() || "",
          stock: product.stock?.toString() || "",
          category: product.category || "template",
          subcategory: product.subcategory || "",
          status: product.status || "draft",
          metaTitle: product.metaTitle || "",
          metaDescription: product.metaDescription || ""
        })
        
        setExistingImages(product.images || [])
      } catch (error) {
        console.error("Erreur:", error)
        setError("Impossible de charger le produit")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productId, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleNewImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const totalImages = existingImages.length + newImages.length + files.length
    
    if (totalImages > 10) {
      setError("Maximum 10 images autorisées")
      return
    }
    
    setNewImages(prev => [...prev, ...files])
    
    files.forEach(file => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewImagePreviews(prev => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeExistingImage = (index: number) => {
    setExistingImages(existingImages.filter((_, i) => i !== index))
  }

  const removeNewImage = (index: number) => {
    setNewImages(newImages.filter((_, i) => i !== index))
    setNewImagePreviews(newImagePreviews.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const token = localStorage.getItem("token")
      if (!token) {
        setError("Vous devez être connecté")
        setIsSubmitting(false)
        return
      }

      if (!formData.title || !formData.price || !formData.category || !formData.description) {
        setError("Veuillez remplir tous les champs obligatoires")
        setIsSubmitting(false)
        return
      }

      const submitData = new FormData()
      submitData.append("title", formData.title)
      submitData.append("description", formData.description)
      submitData.append("price", formData.price)
      if (formData.comparePrice) submitData.append("comparePrice", formData.comparePrice)
      submitData.append("stock", formData.stock || "0")
      submitData.append("category", formData.category)
      if (formData.subcategory) submitData.append("subcategory", formData.subcategory)
      submitData.append("status", formData.status)
      if (formData.metaTitle) submitData.append("metaTitle", formData.metaTitle)
      if (formData.metaDescription) submitData.append("metaDescription", formData.metaDescription)
      submitData.append("existingImages", JSON.stringify(existingImages))
      
      newImages.forEach((image) => {
        submitData.append("images", image)
      })

      const response = await fetch(`http://localhost:4000/api/v1/vendor/products/${productId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: submitData
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de la mise à jour")
      }

      // Auto-share to social media when product is updated
      if (formData.status === "published") {
        const productUrl = `${window.location.origin}/market/product/${productId}`
        const mainImage = existingImages[0] || newImagePreviews[0] || ""

        try {
          await fetch("http://localhost:4000/api/v1/social/share-article", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              articleId: productId,
              title: formData.title,
              description: formData.description,
              imageUrl: mainImage,
              articleUrl: productUrl,
            })
          })
          // Social share success - no error handling needed, continue anyway
        } catch (socialError) {
          // Log error but don't fail the product update
          console.warn("Social media share failed:", socialError)
        }
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/market/publication-space/dashboard/products")
      }, 1500)
    } catch (err: any) {
      setError(err.message || "Erreur lors de la mise à jour")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (success) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Produit mis à jour!</h1>
        <p className="text-muted-foreground">Les modifications ont été enregistrées.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/market/publication-space/dashboard/products"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft size={20} />
          Retour aux produits
        </Link>
        <h1 className="text-3xl font-bold text-foreground">Modifier le produit</h1>
        <p className="text-muted-foreground mt-1">
          Modifiez les informations de votre produit
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {error && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* Images Section */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-primary" />
            Images du produit
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {/* Existing Images */}
            {existingImages.map((image, index) => (
              <div key={`existing-${index}`} className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                <Image
                  src={`http://localhost:4000${image}`}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeExistingImage(index)}
                  className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600 transition"
                >
                  <X size={14} />
                </button>
                {index === 0 && (
                  <span className="absolute bottom-2 left-2 px-2 py-1 bg-primary text-xs text-white rounded">
                    Principal
                  </span>
                )}
              </div>
            ))}
            
            {/* New Images */}
            {newImagePreviews.map((preview, index) => (
              <div key={`new-${index}`} className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                <Image
                  src={preview}
                  alt={`Nouvelle image ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeNewImage(index)}
                  className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600 transition"
                >
                  <X size={14} />
                </button>
                <span className="absolute bottom-2 left-2 px-2 py-1 bg-green-500 text-xs text-white rounded">
                  Nouveau
                </span>
              </div>
            ))}
            
            {existingImages.length + newImages.length < 10 && (
              <label className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary cursor-pointer flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary transition">
                <Upload size={24} />
                <span className="text-xs text-center">Ajouter</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleNewImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        {/* Basic Info */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Informations de base
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Titre du produit *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Catégorie *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary outline-none"
                  required
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Sous-catégorie
                </label>
                <input
                  type="text"
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Prix et stock
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Prix (€) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                step="0.01"
                min="0"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Prix barré (€)
              </label>
              <input
                type="number"
                name="comparePrice"
                value={formData.comparePrice}
                onChange={handleChange}
                step="0.01"
                min="0"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Stock disponible
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                min="0"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Publication
          </h2>
          
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="status"
                value="draft"
                checked={formData.status === "draft"}
                onChange={handleChange}
                className="w-4 h-4 text-primary"
              />
              <span>Brouillon</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="status"
                value="published"
                checked={formData.status === "published"}
                onChange={handleChange}
                className="w-4 h-4 text-primary"
              />
              <span>Publié</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="status"
                value="archived"
                checked={formData.status === "archived"}
                onChange={handleChange}
                className="w-4 h-4 text-primary"
              />
              <span>Archivé</span>
            </label>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition font-medium disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Enregistrement...
              </>
            ) : (
              <>
                <CheckCircle2 size={20} />
                Enregistrer les modifications
              </>
            )}
          </button>
          <Link
            href="/market/publication-space/dashboard/products"
            className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition font-medium text-center"
          >
            Annuler
          </Link>
        </div>
      </form>
    </div>
  )
}
