"use client"

import type React from "react"

import { useState } from "react"

export default function RequestSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demande soumise:", formData)
    setFormData({ name: "", email: "", project: "", description: "" })
  }

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Demander un Développement Personnalisé</h2>
          <p className="text-foreground/70">Décrivez votre projet et nous vous contacterons avec une proposition</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary"
          />

          <input
            type="email"
            placeholder="Votre email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary"
          />

          <input
            type="text"
            placeholder="Type de projet (Web/Mobile/Autre)"
            required
            value={formData.project}
            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary"
          />

          <textarea
            placeholder="Décrivez votre projet en détail..."
            rows={5}
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary resize-none"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold transition"
          >
            Soumettre la Demande
          </button>
        </form>
      </div>
    </section>
  )
}
