"use client"

import type React from "react"

import { useState } from "react"

export default function DesignRequest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designType: "",
    details: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demande de design soumise:", formData)
    setFormData({ name: "", email: "", designType: "", details: "" })
  }

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Demander un Design Personnalisé</h2>
          <p className="text-foreground/70">Notre équipe de designers créera un design sur mesure pour vos besoins</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-secondary"
          />

          <input
            type="email"
            placeholder="Votre email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-secondary"
          />

          <select
            required
            value={formData.designType}
            onChange={(e) => setFormData({ ...formData, designType: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-secondary"
          >
            <option value="">Sélectionner le type de design</option>
            <option value="mobile">Application Mobile</option>
            <option value="web">Site Web</option>
            <option value="kit">Kit UI</option>
            <option value="autre">Autre</option>
          </select>

          <textarea
            placeholder="Décrivez votre projet en détail..."
            rows={5}
            required
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-secondary resize-none"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 font-semibold transition"
          >
            Soumettre la Demande
          </button>
        </form>
      </div>
    </section>
  )
}
