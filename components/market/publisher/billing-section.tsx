"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function BillingSection() {
  return (
    <div className="space-y-6">
      {/* Current Plan */}
      <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Plan Premium+</h2>
            <p className="text-foreground/70 mt-2">Votre plan actuel avec accès complet à toutes les fonctionnalités</p>
          </div>
          <span className="px-4 py-2 bg-green-900/30 text-green-500 rounded-full text-sm font-semibold flex items-center gap-2">
            <CheckCircle size={16} />
            Actif
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <p className="text-foreground/70 text-sm">Prix Mensuel</p>
            <p className="text-3xl font-bold text-accent mt-2">$29.99</p>
          </div>
          <div>
            <p className="text-foreground/70 text-sm">Renouvellement</p>
            <p className="text-foreground font-semibold mt-2">15 décembre 2024</p>
          </div>
          <div>
            <p className="text-foreground/70 text-sm">Prochaine Facturation</p>
            <p className="text-foreground font-semibold mt-2">$29.99</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Link href="/market/publication-space/purchase">
            <Button variant="outline">Changer de Plan</Button>
          </Link>
          <Button variant="outline" className="text-destructive bg-transparent">
            Annuler l&apos;Abonnement
          </Button>
        </div>
      </Card>

      {/* Plan Features */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">Fonctionnalités Incluses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Produits illimités",
            "8 Plateformes de publication",
            "Ciblage géographique avancé",
            "Statistiques en temps réel",
            "Support prioritaire 24/7",
            "Outils d'automatisation",
            "API d'intégration",
            "Sauvegardes automatiques",
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Billing History */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">Historique de Facturation</h3>
        <div className="space-y-2">
          {[
            { date: "15 nov 2024", description: "Abonnement Premium+ - Novembre", amount: "$29.99", status: "Payé" },
            { date: "15 oct 2024", description: "Abonnement Premium+ - Octobre", amount: "$29.99", status: "Payé" },
            { date: "15 sep 2024", description: "Abonnement Premium+ - Septembre", amount: "$29.99", status: "Payé" },
          ].map((invoice, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 border border-border rounded-lg hover:bg-muted/50 transition"
            >
              <div>
                <p className="text-foreground font-medium">{invoice.description}</p>
                <p className="text-foreground/70 text-sm">{invoice.date}</p>
              </div>
              <div className="text-right">
                <p className="text-foreground font-semibold">{invoice.amount}</p>
                <p className="text-green-500 text-sm">{invoice.status}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
