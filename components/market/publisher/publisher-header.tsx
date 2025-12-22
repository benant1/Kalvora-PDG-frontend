"use client"

import { Sparkles, Settings } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function PublisherHeader({
  activeTab,
  setActiveTab,
}: {
  activeTab: string
  setActiveTab: (tab: "publish" | "available" | "my-products") => void
}) {
  const [trialDaysLeft] = useState(7)
  const [showTrialBanner] = useState(true)

  return (
    <>
      {/* Trial Banner */}
      {showTrialBanner && (
        <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border-b border-green-500/20">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Essai gratuit actif · {trialDaysLeft} {trialDaysLeft > 1 ? "jours restants" : "jour restant"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Publiez gratuitement pendant votre période d'essai
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-green-500">{trialDaysLeft}/7</span>
                <Link
                  href="/market/publisher/manage"
                  className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition font-medium text-sm flex items-center gap-2"
                >
                  <Settings size={16} />
                  Gérer
                </Link>
                <Link
                  href="/market/publication-space/purchase"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium text-sm"
                >
                  Souscrire
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-12 px-4 bg-gradient-to-b from-muted to-background border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Espace Éditeur</h1>
          <p className="text-foreground/70">Gérez vos publications et produits sur plusieurs plateformes</p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => setActiveTab("publish")}
            className={`px-6 py-3 font-semibold rounded-lg transition ${
              activeTab === "publish" ? "bg-accent text-accent-foreground" : "bg-muted text-foreground hover:bg-border"
            }`}
          >
            Publier un Produit
          </button>
          <button
            onClick={() => setActiveTab("available")}
            className={`px-6 py-3 font-semibold rounded-lg transition ${
              activeTab === "available"
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-foreground hover:bg-border"
            }`}
          >
            Produits Disponibles
          </button>
          <button
            onClick={() => setActiveTab("my-products")}
            className={`px-6 py-3 font-semibold rounded-lg transition ${
              activeTab === "my-products"
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-foreground hover:bg-border"
            }`}
          >
            Mes Publications
          </button>
        </div>
        </div>
      </section>
    </>
  )
}