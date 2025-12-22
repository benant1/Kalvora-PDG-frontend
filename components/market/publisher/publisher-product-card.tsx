"use client"

import Image from "next/image"
import { Globe, MapPin, Send } from "lucide-react"
import { useState } from "react"

interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
  platforms: string[]
  regions: string[]
}

export default function PublisherProductCard({ product }: { product: Product }) {
  const [isPublishing, setIsPublishing] = useState(false)
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])

  const allRegions = ["EU", "US", "ASIA", "AFRICA", "OCEANIA"]

  const toggleRegion = (region: string) => {
    setSelectedRegions((prev) => (prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]))
  }

  return (
    <div className="group rounded-lg border border-border bg-card overflow-hidden hover:border-accent transition hover:shadow-lg">
      <div className="relative h-48 bg-muted overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
          ${product.price}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-foreground mb-2">{product.title}</h3>
        <p className="text-foreground/70 text-sm mb-4">{product.description}</p>

        <div className="mb-4 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Globe size={16} className="text-accent" />
            <span className="text-foreground/70">Plateformes:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.platforms.map((platform) => (
              <span key={platform} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                {platform}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsPublishing(!isPublishing)}
          className="w-full px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 font-semibold transition flex items-center justify-center gap-2"
        >
          <Send size={18} />
          Publier Maintenant
        </button>
      </div>

      {isPublishing && (
        <div className="p-4 border-t border-border bg-muted space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <MapPin size={18} className="text-accent" />
              Sélectionner les régions
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {allRegions.map((region) => (
                <label key={region} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedRegions.includes(region)}
                    onChange={() => toggleRegion(region)}
                    className="w-4 h-4 rounded border-border"
                  />
                  <span className="text-sm text-foreground">{region}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            disabled={selectedRegions.length === 0}
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:bg-muted disabled:text-foreground/50 font-semibold transition"
          >
            Confirmer Publication
          </button>
        </div>
      )}
    </div>
  )
}
