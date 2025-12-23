"use client"

import { Suspense } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Check, Zap, Shield, Globe, TrendingUp, ArrowRight, Info, FileCheck, CreditCard, AlertCircle, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

function PublicationSpaceInfoContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const status = searchParams.get("status")
  const [rejectionReason, setRejectionReason] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(status === "rejected")

  useEffect(() => {
    const fetchRejectionInfo = async () => {
      try {
        const token = localStorage.getItem("token")
        
        if (!token) {
          router.push("/login")
          return
        }

        const response = await fetch("http://localhost:4000/api/v1/vendor/status", {
          headers: { Authorization: `Bearer ${token}` }
        })

        if (response.ok) {
          const data = await response.json()
          if (data.vendorApplication?.status === "rejected") {
            setRejectionReason(data.vendorApplication.rejectionReason)
          }
        }
      } catch (err) {
        console.error("Erreur:", err)
      } finally {
        setIsLoading(false)
      }
    }

    if (status === "rejected") {
      fetchRejectionInfo()
    }
  }, [status, router])

  // Si c'est une page de rejet, afficher le message spécifique
  if (status === "rejected") {
    if (isLoading) {
      return (
        <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
          <Navigation />
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
          <Footer />
        </main>
      )
    }

    return (
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <Navigation />
        
        <div className="container mx-auto px-4 py-16 max-w-2xl">
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-orange-600" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-center text-foreground mb-4">
              Demande Rejetée
            </h1>

            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-2">Raison du rejet :</p>
              <p className="text-foreground font-medium">
                {rejectionReason || "Votre demande n'a pas pu être approuvée. Veuillez vérifier vos informations et réessayer."}
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Vous pouvez soumettre une nouvelle demande
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Corrigez les erreurs mentionnées ci-dessus et soumettez à nouveau votre demande. 
                  Assurez-vous que toutes vos informations sont correctes et que vos documents sont valides.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4 ml-4 list-disc">
                  <li>Vérifiez que votre pièce d'identité est valide et lisible</li>
                  <li>Assurez-vous que toutes les informations sont exactes</li>
                  <li>Utilisez un document non expiré</li>
                  <li>Le format du fichier doit être JPG, PNG ou PDF</li>
                </ul>
              </div>

              <button
                onClick={() => router.push("/market/publication-space/register")}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-semibold flex items-center justify-center gap-2 group"
              >
                Soumettre une nouvelle demande
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => router.push("/market")}
                className="w-full px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-all"
              >
                Retour au Market
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    )
  }
  const features = [
    {
      icon: Globe,
      title: "Publication Multi-Plateforme",
      description: "Publiez simultanément sur Amazon, eBay, Shopify, WooCommerce et plus encore",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Gestion Centralisée",
      description: "Gérez tous vos produits et commandes depuis un seul tableau de bord",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Sécurité Garantie",
      description: "Vos données et transactions sont protégées par un cryptage de niveau bancaire",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Synchronisation Automatique",
      description: "Stock, prix et descriptions synchronisés en temps réel sur toutes les plateformes",
      color: "from-orange-500 to-red-500",
    },
  ]

  const plans = [
    {
      name: "Essai Gratuit",
      price: "0€",
      period: "7 jours",
      features: [
        "Accès complet à toutes les fonctionnalités",
        "Publication sur 3 plateformes",
        "Jusqu'à 50 produits",
        "Support par email",
      ],
    },
    {
      name: "Pro",
      price: "29€",
      period: "par mois",
      popular: true,
      features: [
        "Publication illimitée",
        "Toutes les plateformes",
        "Produits illimités",
        "Support prioritaire 24/7",
        "Analytics avancés",
        "Automatisation complète",
      ],
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Inscription",
      description: "Créez votre compte en fournissant vos informations et documents d'identité",
      icon: FileCheck,
    },
    {
      number: "02",
      title: "Validation",
      description: "Notre équipe vérifie votre dossier dans les 24h maximum",
      icon: Shield,
    },
    {
      number: "03",
      title: "Essai Gratuit",
      description: "Profitez de 7 jours gratuits pour tester toutes les fonctionnalités",
      icon: Zap,
    },
    {
      number: "04",
      title: "Abonnement",
      description: "Choisissez votre plan et continuez à développer votre activité",
      icon: CreditCard,
    },
  ]

  const requirements = [
    "Carte d'identité, passeport ou autre document officiel valide",
    "Informations complètes sur votre boutique ou entreprise",
    "Adresse email professionnelle",
    "Acceptation des conditions générales",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Info className="w-4 h-4" />
            <span>Informations sur l'Espace de Publication</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Créez votre{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Espace de Publication
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Vendez vos produits sur plusieurs plateformes depuis un seul endroit. 
            Commencez avec 7 jours d'essai gratuit, sans engagement.
          </p>

          <Link
            href="/market/publication-space/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
          >
            S'inscrire maintenant
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi choisir notre Espace de Publication ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simplifiez la gestion de vos ventes en ligne
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4 étapes simples pour commencer à vendre
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent opacity-30" />
                  )}
                  
                  <div className="relative bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                    
                    <div className="w-12 h-12 rounded-xl bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <FileCheck className="w-8 h-8 text-primary" />
              Documents et informations requis
            </h2>
            
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{req}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-sm text-foreground">
                <strong>⚠️ Important :</strong> Votre inscription sera validée dans un délai maximum de 24 heures. 
                Vous recevrez un email de confirmation une fois votre compte approuvé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tarifs simples et transparents
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Commencez gratuitement, évoluez à votre rythme
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-primary bg-gradient-to-br from-primary/5 to-accent/5 shadow-2xl shadow-primary/20' 
                    : 'border-border bg-card'
                } relative overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-primary to-accent text-white">
                      POPULAIRE
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/market/publication-space/register"
                  className={`w-full block text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  Commencer
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prêt à développer votre activité ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de vendeurs qui font confiance à notre plateforme
            </p>
            <Link
              href="/market/publication-space/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Créer mon espace maintenant
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function PublicationSpaceInfoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <Navigation />
      <PublicationSpaceInfoContent />
      <Footer />
    </Suspense>
  )
}
