"use client"

import { useState } from "react"
import PublisherProductCard from "./publisher-product-card"

interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
  platforms: string[]
  regions: string[]
}

export default function PublisherAvailableProducts() {
  const [filter, setFilter] = useState("all")

  const products: Product[] = [
    {
      id: 1,
      title: "Laptop Premium",
      category: "electronics",
      price: 1299.99,
      description: "Ordinateur portable haute performance",
      image: "/placeholder.svg?key=a1b2c",
      platforms: ["Amazon", "Facebook", "Instagram"],
      regions: ["EU", "US", "ASIA"],
    },
    {
      id: 2,
      title: "Designer Handbag",
      category: "fashion",
      price: 450.0,
      description: "Sac à main de créateur exclusive",
      image: "/placeholder.svg?key=d3e4f",
      platforms: ["Etsy", "Instagram", "Facebook"],
      regions: ["EU", "US"],
    },
    {
      id: 3,
      title: "Fitness Equipment Set",
      category: "sports",
      price: 299.99,
      description: "Ensemble complet d'équipement fitness",
      image: "/placeholder.svg?key=g5h6i",
      platforms: ["Amazon", "TikTok", "Instagram"],
      regions: ["EU", "US", "ASIA"],
    },
    {
      id: 4,
      title: "Organic Skincare Kit",
      category: "beauty",
      price: 79.99,
      description: "Kit complet de soins bio naturels",
      image: "/placeholder.svg?key=j7k8l",
      platforms: ["TikTok", "Instagram", "Pinterest"],
      regions: ["EU", "US"],
    },
    {
      id: 5,
      title: "Smart Home System",
      category: "electronics",
      price: 549.99,
      description: "Système domotique intelligente complète",
      image: "/placeholder.svg?key=m9n0o",
      platforms: ["Amazon", "YouTube", "Facebook"],
      regions: ["EU", "US", "ASIA"],
    },
    {
      id: 6,
      title: "Sustainable Water Bottle",
      category: "eco",
      price: 39.99,
      description: "Bouteille réutilisable écologique",
      image: "/placeholder.svg?key=p1q2r",
      platforms: ["Instagram", "TikTok", "Pinterest"],
      regions: ["EU", "US"],
    },
  ]

  const filtered = filter === "all" ? products : products.filter((p) => (p as any).category === filter)

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Produits Disponibles</h2>
          <p className="text-foreground/70 mb-6">Sélectionnez les produits et les régions pour les publier</p>

          <div className="flex gap-4 mb-8 flex-wrap">
            {["all", "electronics", "fashion", "sports", "beauty", "eco"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  filter === cat ? "bg-accent text-accent-foreground" : "bg-muted text-foreground hover:bg-border"
                }`}
              >
                {cat === "all" ? "Tous" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <PublisherProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
