"use client"

import { Settings, BarChart3, CreditCard, Shield, Info, Sparkles, Megaphone } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function PublisherManagementHeader({
  activeTab,
  setActiveTab,
}: {
  activeTab: string
  setActiveTab: (tab: "info" | "settings" | "stats" | "billing" | "security") => void
}) {
  const [trialDaysLeft, setTrialDaysLeft] = useState(7)
  const [showTrialBanner, setShowTrialBanner] = useState(true)

  const tabs = [
    { id: "info", label: "Informations", icon: Info },
    { id: "settings", label: "Paramètres", icon: Settings },
    { id: "stats", label: "Statistiques", icon: BarChart3 },
    { id: "billing", label: "Facturation", icon: CreditCard },
    { id: "security", label: "Sécurité", icon: Shield },
  ]

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
                    Profitez de toutes les fonctionnalités gratuitement
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-green-500">{trialDaysLeft}/7</span>
                <Link
                  href="/market/publisher"
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition font-medium text-sm flex items-center gap-2"
                >
                  <Megaphone size={16} />
                  Publier
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Gestion de l&apos;Espace</h1>
          <p className="text-foreground/70">Gérez les paramètres et les détails de votre espace de publication</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition font-medium ${
                  activeTab === tab.id ? "bg-accent text-accent-foreground" : "bg-muted text-foreground hover:bg-border"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            )
          })}
        </div>
        </div>
      </section>
    </>
  )
}