"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Check, Sparkles, Zap, Shield, CreditCard, Crown, AlertCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function PurchasePublicationSpacePage() {
  const [trialActive, setTrialActive] = useState(true)
  const [trialDaysLeft, setTrialDaysLeft] = useState(7)
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">("monthly")

  const features = [
    "Publication illimitée sur toutes les plateformes",
    "Synchronisation automatique des stocks",
    "Analytics et rapports détaillés",
    "Gestion centralisée des commandes",
    "Support prioritaire 24/7",
    "API complète pour intégrations",
    "Automatisation des tâches",
    "Exportation des données",
  ]

  const platforms = [
    "Amazon",
    "eBay",
    "Shopify",
    "WooCommerce",
    "Etsy",
    "Facebook Marketplace",
    "Instagram Shopping",
    "Google Shopping",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Trial Banner */}
          {trialActive && (
            <div className="max-w-3xl mx-auto mb-12">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/20">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Essai gratuit actif
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {trialDaysLeft} {trialDaysLeft > 1 ? "jours restants" : "jour restant"} pour profiter de toutes les fonctionnalités gratuitement
                      </p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-green-500">
                    {trialDaysLeft}/7
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Crown className="w-4 h-4" />
              <span>Débloquez tout le potentiel</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {trialActive ? "Votre " : "Achetez votre "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Espace de Publication
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {trialActive 
                ? "Gérez vos publications et développez votre activité" 
                : "Continuez à vendre sur toutes les plateformes sans interruption"
              }
            </p>

            {/* CTA Button Top */}
            {trialActive && (
              <Link
                href="/market/publisher/manage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:opacity-90 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <Zap size={24} />
                Accéder à mon Espace de Publication
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-muted border border-border">
              <button
                onClick={() => setSelectedPlan("monthly")}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedPlan === "monthly"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setSelectedPlan("yearly")}
                className={`px-6 py-2 rounded-lg font-medium transition-all relative ${
                  selectedPlan === "yearly"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annuel
                <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-green-500 text-white text-xs font-bold">
                  -20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl" />
            
            <div className="relative p-12 rounded-3xl bg-card border-2 border-primary shadow-2xl shadow-primary/20">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg">
                  PLAN PRO
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="mb-4">
                  {selectedPlan === "monthly" ? (
                    <>
                      <span className="text-5xl md:text-6xl font-bold text-foreground">29€</span>
                      <span className="text-2xl text-muted-foreground ml-2">/ mois</span>
                    </>
                  ) : (
                    <div>
                      <div className="text-2xl text-muted-foreground line-through mb-2">348€</div>
                      <span className="text-5xl md:text-6xl font-bold text-foreground">278€</span>
                      <span className="text-2xl text-muted-foreground ml-2">/ an</span>
                      <div className="mt-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-semibold">
                          Économisez 70€ par an
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground">
                  Tout ce dont vous avez besoin pour réussir
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Platforms */}
              <div className="mb-8 p-6 rounded-xl bg-muted/50 border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Plateformes supportées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((platform, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center justify-center gap-2 text-sm text-foreground">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Paiement sécurisé • Résiliable à tout moment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 space-y-4">
            {/* CTA Button Bottom */}
            {trialActive && (
              <div className="mb-8">
                <Link
                  href="/market/publisher/manage"
                  className="block w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:opacity-90 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Zap size={24} />
                    Accéder à mon Espace de Publication
                  </div>
                </Link>
              </div>
            )}

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Comment fonctionne la facturation ?
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Profitez de 7 jours d'essai gratuit sans engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Après l'essai, votre abonnement sera automatiquement renouvelé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Vous pouvez annuler à tout moment depuis votre tableau de bord</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Garantie satisfait ou remboursé de 30 jours</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Des questions ?{" "}
                <Link href="/contact" className="text-primary hover:underline font-medium">
                  Contactez notre équipe commerciale
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Questions fréquentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Puis-je changer de plan ?",
                a: "Oui, vous pouvez passer du plan mensuel à annuel à tout moment. La différence sera calculée au prorata.",
              },
              {
                q: "Que se passe-t-il si j'annule ?",
                a: "Vous conservez l'accès jusqu'à la fin de votre période de facturation en cours. Aucun remboursement partiel n'est effectué.",
              },
              {
                q: "Y a-t-il des frais supplémentaires ?",
                a: "Non, tout est inclus dans le prix. Pas de frais cachés ni de commissions sur vos ventes.",
              },
              {
                q: "Puis-je gérer plusieurs boutiques ?",
                a: "Oui, vous pouvez connecter et gérer autant de boutiques que vous le souhaitez avec un seul abonnement.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
