"use client"

import { useState } from "react"
import TemplateCard from "./template-card"

export default function TemplateGrid() {
  const [filter, setFilter] = useState("all")

  const templates = [
    {
      id: 1,
      templateId: 'ecommerce',
      title: "E-Commerce Store",
      category: "web",
      description: "Boutique e-commerce complète avec panier et paiement",
      image: "/ecommerce-website-template.png",
      price: "Gratuit",
      features: ["Next.js", "Stripe", "Tailwind"],
    },
    {
      id: 2,
      templateId: 'saas-dashboard',
      title: "SaaS Dashboard",
      category: "web",
      description: "Dashboard complet pour applications SaaS",
      image: "/saas-dashboard-template.jpg",
      price: "Gratuit",
      features: ["React", "TypeScript", "Charts"],
    },
    {
      id: 3,
      templateId: 'mobile-app',
      title: "Mobile App Starter",
      category: "mobile",
      description: "Template React Native pour démarrer votre app mobile",
      image: "/react-native-mobile-app.png",
      price: "Gratuit",
      features: ["React Native", "Firebase", "Auth"],
    },
    {
      id: 4,
      templateId: 'blog-platform',
      title: "Blog Platform",
      category: "web",
      description: "Plateforme de blog avec système de commentaires",
      image: "/blog-website-template-modern.jpg",
      price: "Gratuit",
      features: ["Next.js", "MDX", "Comments"],
    },
    {
      id: 5,
      templateId: 'fitness-app',
      title: "Fitness App",
      category: "mobile",
      description: "Application fitness avec suivi des exercices",
      image: "/fitness-mobile-app-template.jpg",
      price: "Gratuit",
      features: ["Flutter", "SQLite", "Health API"],
    },
    {
      id: 6,
      templateId: 'admin-panel',
      title: "Admin Panel",
      category: "web",
      description: "Panneau d'administration complet et responsive",
      image: "/admin-panel-dashboard-ui.jpg",
      price: "Gratuit",
      features: ["React", "Recharts", "Forms"],
    },
  ]

  const filtered = filter === "all" ? templates : templates.filter((t) => t.category === filter)

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 mb-12 flex-wrap">
          {["all", "web", "mobile"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === cat ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-border"
              }`}
            >
              {cat === "all" ? "Tous" : cat === "web" ? "Web" : "Mobile"}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  )
}
