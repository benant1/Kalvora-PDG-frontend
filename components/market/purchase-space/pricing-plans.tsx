import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PricingPlans() {
  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: 29,
      description: "Parfait pour débuter",
      features: ["Jusqu'à 5 produits", "3 plateformes maximum", "2 régions", "Support par email", "Analytics basiques"],
      highlighted: false,
    },
    {
      id: "pro",
      name: "Professionnel",
      price: 79,
      description: "Pour les vendeurs actifs",
      features: [
        "Jusqu'à 50 produits",
        "Toutes les plateformes (8)",
        "Toutes les régions (6)",
        "Support prioritaire",
        "Analytics avancées",
        "Intégrations API",
      ],
      highlighted: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 199,
      description: "Pour les grands volumes",
      features: [
        "Produits illimités",
        "Toutes les plateformes",
        "Toutes les régions",
        "Support 24/7",
        "Analytics avancées",
        "Intégrations API",
        "Gestionnaire dédié",
        "Webhooks personnalisés",
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-lg border transition ${
                plan.highlighted
                  ? "border-accent bg-gradient-to-b from-accent/5 to-transparent scale-105"
                  : "border-border bg-card"
              }`}
            >
              <div className="p-8">
                {plan.highlighted && (
                  <div className="mb-4 inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                    POPULAIRE
                  </div>
                )}

                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/70 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-foreground/70">/mois</span>
                </div>

                <Link
                  href="/market/publisher"
                  className={`block w-full px-6 py-3 rounded-lg font-semibold transition text-center mb-8 ${
                    plan.highlighted
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-muted text-foreground hover:bg-border"
                  }`}
                >
                  Commencer
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-4">
            Tous les plans incluent une période d'essai gratuite de 7 jours. Pas de carte bancaire requise.
          </p>
          <div className="flex items-center justify-center gap-2 text-accent hover:text-accent/80 cursor-pointer transition">
            <span className="font-semibold">Questions? Contactez notre équipe</span>
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </section>
  )
}
