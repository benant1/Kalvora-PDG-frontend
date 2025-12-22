"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  Upload,
  X,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ImageIcon,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

const categories = [
  { value: "template", label: "Template" },
  { value: "design", label: "Design" },
  { value: "service", label: "Service" },
  { value: "digital", label: "Produit Digital" },
  { value: "other", label: "Autre" }
]

export default function AddProductPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
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
    status: "published",
    metaTitle: "",
    metaDescription: ""
  })
  
  const [images, setImages] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length + images.length > 10) {
      setError("Maximum 10 images autorisées")
      return
    }
    
    const newImages = [...images, ...files]
    setImages(newImages)
    
    // Create previews
    files.forEach(file => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreviews(prev => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
    setImagePreviews(imagePreviews.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const token = localStorage.getItem("token")
      if (!token) {
        setError("Vous devez être connecté")
        setIsLoading(false)
        return
      }

      // Validation
      if (!formData.title || !formData.price || !formData.category || !formData.description) {
        setError("Veuillez remplir tous les champs obligatoires (titre, description, prix, catégorie)")
        setIsLoading(false)
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
      
      images.forEach((image) => {
        submitData.append("images", image)
      })

      const response = await fetch("http://localhost:4000/api/v1/vendor/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: submitData
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de la création du produit")
      }

      // Auto-share to social media platforms
      const productId = data.id
      const productUrl = `${window.location.origin}/market/product/${productId}`
      const mainImage = imagePreviews[0] || ""

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
        // Log error but don't fail the product creation
        console.warn("Social media share failed:", socialError)
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/market/publication-space/dashboard/products")
      }, 1500)
    } catch (err: any) {
      setError(err.message || "Erreur lors de la création du produit")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Produit créé!</h1>
        <p className="text-muted-foreground">Votre produit a été ajouté à votre boutique.</p>
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
        <h1 className="text-3xl font-bold text-foreground">Ajouter un produit</h1>
        <p className="text-muted-foreground mt-1">
          Remplissez les informations ci-dessous pour créer un nouveau produit
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Error Message */}
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
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                <Image
                  src={preview}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
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
            
            {images.length < 10 && (
              <label className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary cursor-pointer flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary transition">
                <Upload size={24} />
                <span className="text-xs text-center">Ajouter</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Formats acceptés: JPG, PNG, WEBP. Max 10 images, 10MB par image. La première image sera l'image principale.
          </p>
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
                placeholder="Ex: Template Dashboard React"
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
                placeholder="Décrivez votre produit en détail..."
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
                  placeholder="Ex: E-commerce, Portfolio..."
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
                placeholder="0.00"
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
                placeholder="0.00"
                step="0.01"
                min="0"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              />
              <p className="text-xs text-muted-foreground mt-1">Ancien prix pour montrer une réduction</p>
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
                placeholder="0"
                min="0"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              />
              <p className="text-xs text-muted-foreground mt-1">Laissez 0 pour illimité</p>
            </div>
          </div>
        </div>

        {/* Status and SEO */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Publication et SEO
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Statut de publication
              </label>
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
                  <span>Publier maintenant</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Titre SEO (optionnel)
              </label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleChange}
                placeholder="Titre pour les moteurs de recherche"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Description SEO (optionnel)
              </label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                placeholder="Description courte pour les moteurs de recherche (max 160 caractères)"
                rows={2}
                maxLength={160}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {formData.metaDescription.length}/160 caractères
              </p>
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition font-medium disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Création en cours...
              </>
            ) : (
              <>
                <CheckCircle2 size={20} />
                Créer le produit
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
