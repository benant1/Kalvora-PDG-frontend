'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main className="min-h-screen bg-background">
        <div className="flex items-center justify-center h-screen">
          <p className="text-foreground">Chargement...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Bienvenue sur <span className="text-primary">DevMarket</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Plateforme tout-en-un pour créateurs, designers et développeurs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="text-4xl mb-4"></div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Designs</h3>
            <p className="text-foreground/70">Premium designs créés par les meilleurs.</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="text-4xl mb-4"></div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Templates</h3>
            <p className="text-foreground/70">Templates web et mobile prêts à l'emploi.</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="text-4xl mb-4"></div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Marketplace</h3>
            <p className="text-foreground/70">Publiez et vendez vos créations.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/signup" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-center">
            S'inscrire
          </Link>
          <Link href="/login" className="px-8 py-4 bg-muted text-foreground rounded-lg border border-border text-center">
            Connexion
          </Link>
        </div>

        <p className="text-center text-foreground/50 text-sm">
           Mode Clair/Sombre |  Multilingue |  Backend
        </p>
      </div>
    </main>
  )
}
