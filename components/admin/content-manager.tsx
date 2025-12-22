"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Eye } from "lucide-react"

export default function ContentManager() {
  const [activeCategory, setActiveCategory] = useState("templates")

  const categories = [
    { id: "templates", label: "Templates", count: 48 },
    { id: "designs", label: "Designs UI/UX", count: 36 },
    { id: "products", label: "Produits Market", count: 156 },
  ]

  const items = [
    {
      id: 1,
      title: "E-Commerce Store",
      category: "templates",
      status: "published",
      downloads: 234,
      rating: 4.8,
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "templates",
      status: "published",
      downloads: 189,
      rating: 4.6,
    },
    {
      id: 3,
      title: "Mobile App UI Kit",
      category: "designs",
      status: "draft",
      downloads: 0,
      rating: 0,
    },
    {
      id: 4,
      title: "Laptop Premium",
      category: "products",
      status: "published",
      downloads: 0,
      rating: 4.9,
    },
    {
      id: 5,
      title: "Fitness Equipment",
      category: "products",
      status: "published",
      downloads: 0,
      rating: 4.7,
    },
  ]

  const filtered = items.filter((item) => item.category === activeCategory)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Gestion du Contenu</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold">
          <Plus size={20} />
          Ajouter du Contenu
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground hover:bg-border"
            }`}
          >
            {cat.label}
            <span className="ml-2 text-sm opacity-75">({cat.count})</span>
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 font-semibold text-foreground">Titre</th>
              <th className="text-left py-4 px-4 font-semibold text-foreground">Statut</th>
              <th className="text-left py-4 px-4 font-semibold text-foreground">Téléchargements</th>
              <th className="text-left py-4 px-4 font-semibold text-foreground">Note</th>
              <th className="text-left py-4 px-4 font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-b border-border hover:bg-muted/50 transition">
                <td className="py-4 px-4 text-foreground font-medium">{item.title}</td>
                <td className="py-4 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "published"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {item.status === "published" ? "Publié" : "Brouillon"}
                  </span>
                </td>
                <td className="py-4 px-4 text-foreground">{item.downloads}</td>
                <td className="py-4 px-4 text-foreground">{item.rating > 0 ? `⭐ ${item.rating}` : "—"}</td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-muted rounded-lg transition">
                      <Eye size={18} className="text-foreground/60" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg transition">
                      <Edit size={18} className="text-foreground/60" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg transition">
                      <Trash2 size={18} className="text-red-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
