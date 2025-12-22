"use client"

import { useState } from "react"
import DesignCard from "./design-card"

export default function DesignGallery() {
  const [filter, setFilter] = useState("all")

  const designs = [
    {
      id: 1,
      title: "Mobile Banking App UI",
      category: "mobile",
      description: "Design complet d'application bancaire mobile",
      image: "/placeholder.svg?key=hwjfk",
      designer: "Studio Design Pro",
      format: "Figma + Adobe XD",
      price: "Gratuit",
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      category: "web",
      description: "Dashboard de gestion pour boutique e-commerce",
      image: "/placeholder.svg?key=lq6ym",
      designer: "Creative Hub",
      format: "Figma",
      price: "Gratuit",
    },
    {
      id: 3,
      title: "Social Media UI Kit",
      category: "kit",
      description: "Kit complet d'interface pour réseau social",
      image: "/placeholder.svg?key=8j9qw",
      designer: "UI Masters",
      format: "Adobe XD + Sketch",
      price: "Gratuit",
    },
    {
      id: 4,
      title: "Health & Fitness App",
      category: "mobile",
      description: "Design moderne pour application fitness",
      image: "/placeholder.svg?key=3nxko",
      designer: "Design Studio",
      format: "Figma + Adobe XD",
      price: "Gratuit",
    },
    {
      id: 5,
      title: "SaaS Landing Page",
      category: "web",
      description: "Page d'accueil premium pour SaaS",
      image: "/placeholder.svg?key=pq8rt",
      designer: "Web Design Lab",
      format: "Figma",
      price: "Gratuit",
    },
    {
      id: 6,
      title: "Admin Panel Components",
      category: "kit",
      description: "Système complet de composants admin",
      image: "/placeholder.svg?key=vb2cd",
      designer: "Component Library",
      format: "Adobe XD + Sketch",
      price: "Gratuit",
    },
  ]

  const filtered = filter === "all" ? designs : designs.filter((d) => d.category === filter)

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 mb-12 flex-wrap">
          {["all", "web", "mobile", "kit"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === cat ? "bg-secondary text-secondary-foreground" : "bg-muted text-foreground hover:bg-border"
              }`}
            >
              {cat === "all" ? "Tous" : cat === "web" ? "Web" : cat === "mobile" ? "Mobile" : "Kits"}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((design) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>
      </div>
    </section>
  )
}
