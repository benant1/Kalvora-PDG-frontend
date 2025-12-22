"use client"

import type React from "react"
import { useState } from "react"
import { Upload, X, Check } from "lucide-react"

export default function PublishSection() {
  // Simuler le type d'abonnement (dans la vraie app, ceci viendrait du backend)
  const [subscriptionPlan] = useState<"trial" | "pro">("trial") // trial = 3 plateformes, pro = toutes
  const [trialDaysLeft] = useState(7)

  const allPlatforms = [
    "Amazon", 
    "eBay", 
    "Shopify", 
    "WooCommerce", 
    "Etsy", 
    "Facebook Marketplace", 
    "Instagram Shopping", 
    "Google Shopping"
  ]

  // Plateformes disponibles selon l'abonnement
  const availablePlatforms = subscriptionPlan === "trial" 
    ? allPlatforms.slice(0, 3) // Trial: 3 premières plateformes
    : allPlatforms // Pro: toutes les plateformes

  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    description: "",
    productImages: [] as File[],
    imagesPreviews: [] as string[],
    platforms: availablePlatforms,
    regions: [] as string[],
    countries: [] as string[],
  })

  const regions = [
    { code: "EU", name: "Europe", countries: ["France", "Allemagne", "Italie", "Espagne", "Pays-Bas", "Belgique", "Portugal"] },
    { code: "US", name: "Amérique du Nord", countries: ["États-Unis", "Canada", "Mexique"] },
    { code: "ASIA", name: "Asie", countries: ["Chine", "Japon", "Corée du Sud", "Inde", "Singapour", "Thaïlande"] },
    { code: "AFRICA", name: "Afrique", countries: ["Afrique du Sud", "Nigéria", "Kenya", "Égypte", "Maroc"] },
    { code: "OCEANIA", name: "Océanie", countries: ["Australie", "Nouvelle-Zélande"] },
    { code: "SOUTH_AMERICA", name: "Amérique du Sud", countries: ["Brésil", "Argentine", "Chili", "Colombie", "Pérou"] },
  ]

  // Obtenir les pays disponibles selon les régions sélectionnées
  const getAvailableCountries = () => {
    if (formData.regions.length === 0) return []
    
    const countries: string[] = []
    formData.regions.forEach(regionCode => {
      const region = regions.find(r => r.code === regionCode)
      if (region) {
        countries.push(...region.countries)
      }
    })
    return countries
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    
    // Limiter à 5 images
    if (formData.productImages.length + files.length > 5) {
      alert("Vous pouvez téléverser maximum 5 images")
      return
    }

    // Vérifier la taille (max 5MB par image)
    const oversizedFiles = files.filter(file => file.size > 5 * 1024 * 1024)
    if (oversizedFiles.length > 0) {
      alert("Chaque image ne doit pas dépasser 5 MB")
      return
    }

    // Créer les prévisualisations
    const newPreviews: string[] = []
    files.forEach(file => {
      const reader = new FileReader()
      reader.onloadend = () => {
        newPreviews.push(reader.result as string)
        if (newPreviews.length === files.length) {
          setFormData(prev => ({
            ...prev,
            productImages: [...prev.productImages, ...files],
            imagesPreviews: [...prev.imagesPreviews, ...newPreviews]
          }))
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      productImages: prev.productImages.filter((_, i) => i !== index),
      imagesPreviews: prev.imagesPreviews.filter((_, i) => i !== index)
    }))
  }

  const toggleRegion = (regionCode: string) => {
    setFormData((prev) => {
      const newRegions = prev.regions.includes(regionCode)
        ? prev.regions.filter((r) => r !== regionCode)
        : [...prev.regions, regionCode]
      
      // Si on désélectionne une région, enlever les pays de cette région
      if (!newRegions.includes(regionCode)) {
        const region = regions.find(r => r.code === regionCode)
        const newCountries = prev.countries.filter(c => !region?.countries.includes(c))
        return { ...prev, regions: newRegions, countries: newCountries }
      }
      
      return { ...prev, regions: newRegions }
    })
  }

  const toggleCountry = (country: string) => {
    setFormData((prev) => ({
      ...prev,
      countries: prev.countries.includes(country)
        ? prev.countries.filter((c) => c !== country)
        : [...prev.countries, country],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.productImages.length === 0) {
      alert("Veuillez ajouter au moins une image du produit")
      return
    }
    
    console.log("Produit publié:", formData)
    
    // Reset form
    setFormData({ 
      productName: "", 
      price: "", 
      description: "", 
      productImages: [],
      imagesPreviews: [],
      platforms: availablePlatforms,
      regions: [], 
      countries: [] 
    })
  }

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Publier un Nouveau Produit</h2>
          <p className="text-foreground/70">
            Remplissez le formulaire pour publier sur {subscriptionPlan === "trial" ? "3 plateformes" : "toutes les plateformes"}
          </p>
          {subscriptionPlan === "trial" && (
            <div className="mt-4 inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-sm text-green-500 font-medium">
                Essai gratuit: {trialDaysLeft} jours restants · {availablePlatforms.length} plateformes disponibles
              </p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Product Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Informations du Produit</h3>

            <input
              type="text"
              placeholder="Nom du produit"
              required
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent"
            />

            <input
              type="number"
              step="0.01"
              placeholder="Prix (€)"
              required
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent"
            />

            <textarea
              placeholder="Description du produit..."
              rows={4}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent resize-none"
            />
          </div>

          {/* Product Images */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Images du Produit *</h3>
            <p className="text-sm text-foreground/70">Ajoutez jusqu'à 5 images (JPG, PNG, max 5MB chacune)</p>
            
            {/* Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {formData.imagesPreviews.map((preview, index) => (
                <div key={index} className="relative group aspect-square">
                  <img 
                    src={preview} 
                    alt={`Produit ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg border-2 border-border"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:bg-red-600"
                  >
                    <X size={14} />
                  </button>
                  {index === 0 && (
                    <span className="absolute top-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                      Principal
                    </span>
                  )}
                </div>
              ))}
              
              {/* Upload Button */}
              {formData.productImages.length < 5 && (
                <label className="aspect-square border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-accent hover:bg-accent/5 transition">
                  <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                  <span className="text-xs text-muted-foreground text-center px-2">
                    Ajouter
                  </span>
                </label>
              )}
            </div>
          </div>

          {/* Platforms */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-foreground">Plateformes de Publication</h3>
              <span className="text-sm text-muted-foreground">
                {formData.platforms.length}/{availablePlatforms.length} sélectionnées
              </span>
            </div>
            
            {subscriptionPlan === "trial" && (
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-sm text-blue-500">
                  <strong>Essai gratuit:</strong> {availablePlatforms.length} plateformes disponibles. 
                  Passez au plan Pro pour accéder à toutes les {allPlatforms.length} plateformes.
                </p>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-3">
              {availablePlatforms.map((platform) => (
                <label
                  key={platform}
                  className="flex items-center gap-3 p-4 bg-background border-2 border-primary/30 rounded-lg cursor-not-allowed"
                >
                  <div className="w-5 h-5 rounded border-2 border-primary bg-primary flex items-center justify-center">
                    <Check size={14} className="text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{platform}</span>
                  <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    Auto
                  </span>
                </label>
              ))}
              
              {/* Locked platforms for trial users */}
              {subscriptionPlan === "trial" && allPlatforms.slice(3).map((platform) => (
                <div
                  key={platform}
                  className="flex items-center gap-3 p-4 bg-muted border border-border rounded-lg opacity-50 cursor-not-allowed"
                >
                  <div className="w-5 h-5 rounded border border-border bg-muted"></div>
                  <span className="text-muted-foreground">{platform}</span>
                  <span className="ml-auto text-xs bg-muted-foreground/20 text-muted-foreground px-2 py-1 rounded-full">
                    Pro
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Regions */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Sélectionner les Régions *</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {regions.map((region) => (
                <label
                  key={region.code}
                  className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg cursor-pointer hover:border-accent transition"
                >
                  <input
                    type="checkbox"
                    checked={formData.regions.includes(region.code)}
                    onChange={() => toggleRegion(region.code)}
                    className="w-4 h-4 rounded border-border cursor-pointer"
                  />
                  <span className="text-foreground">{region.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Countries - Visible only when regions are selected */}
          {formData.regions.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-foreground">
                Sélectionner les Pays (Optionnel)
              </h3>
              <p className="text-sm text-foreground/70">
                Si aucun pays n'est sélectionné, la publication couvrira toute la région
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                {getAvailableCountries().map((country) => (
                  <label
                    key={country}
                    className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg cursor-pointer hover:border-accent transition"
                  >
                    <input
                      type="checkbox"
                      checked={formData.countries.includes(country)}
                      onChange={() => toggleCountry(country)}
                      className="w-4 h-4 rounded border-border cursor-pointer"
                    />
                    <span className="text-foreground text-sm">{country}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={formData.regions.length === 0 || formData.productImages.length === 0}
            className="w-full px-6 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 disabled:bg-muted disabled:text-foreground/50 font-semibold transition text-lg"
          >
            Publier sur {formData.platforms.length} plateforme{formData.platforms.length > 1 ? 's' : ''}
          </button>
        </form>
      </div>
    </section>
  )
}
