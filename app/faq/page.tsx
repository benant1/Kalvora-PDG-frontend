"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ChevronDown, Search, HelpCircle } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: "Général",
      questions: [
        {
          q: "Qu'est-ce que DevMarket ?",
          a: "DevMarket est une plateforme tout-en-un qui regroupe des templates web & mobile, des designs UI/UX premium, et des outils de publication multi-plateforme pour vous aider à créer et lancer vos projets digitaux rapidement.",
        },
        {
          q: "Comment créer un compte ?",
          a: "Cliquez sur le bouton 'S'inscrire' en haut à droite, remplissez le formulaire avec vos informations, et validez votre email. C'est gratuit et ne prend que quelques secondes !",
        },
        {
          q: "Quels sont les modes de paiement acceptés ?",
          a: "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal, et les virements bancaires pour les entreprises.",
        },
      ],
    },
    {
      category: "Templates & Design",
      questions: [
        {
          q: "Les templates sont-ils personnalisables ?",
          a: "Oui, tous nos templates sont 100% personnalisables. Vous avez accès au code source complet et pouvez modifier tous les aspects selon vos besoins.",
        },
        {
          q: "Puis-je utiliser les templates pour des projets clients ?",
          a: "Absolument ! Avec une licence commerciale, vous pouvez utiliser nos templates pour créer des sites pour vos clients sans limite.",
        },
        {
          q: "Quelle est la différence entre Tech et Design ?",
          a: "Tech propose des templates de code complets et fonctionnels, tandis que Design offre des fichiers de design (Figma, Sketch, Adobe XD) pour la conception visuelle.",
        },
      ],
    },
    {
      category: "Market & Publication",
      questions: [
        {
          q: "Comment publier mes produits ?",
          a: "Accédez à votre Espace Éditeur, cliquez sur 'Nouveau produit', remplissez les informations, et choisissez les plateformes de publication. Notre système s'occupe du reste !",
        },
        {
          q: "Quelles sont les commissions ?",
          a: "Nous prenons une commission de 15% sur chaque vente. Aucun frais d'inscription ou frais cachés.",
        },
        {
          q: "Puis-je gérer plusieurs boutiques ?",
          a: "Oui, avec un compte Pro, vous pouvez gérer plusieurs boutiques et publications simultanément.",
        },
      ],
    },
    {
      category: "Support & Assistance",
      questions: [
        {
          q: "Quel type de support proposez-vous ?",
          a: "Nous offrons un support par email (24-48h), chat en direct (pour les comptes Pro), documentation complète, et tutoriels vidéo.",
        },
        {
          q: "Y a-t-il une garantie de remboursement ?",
          a: "Oui, nous offrons une garantie satisfait ou remboursé de 30 jours sur tous nos produits.",
        },
        {
          q: "Comment puis-je signaler un bug ?",
          a: "Contactez-nous via le formulaire de contact ou envoyez un email à support@devmarket.com avec une description détaillée du problème.",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Centre d'aide</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Questions{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Fréquentes
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Trouvez rapidement des réponses à vos questions
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Rechercher une question..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 10 + qIndex
                  const isOpen = openIndex === globalIndex
                  
                  return (
                    <div
                      key={qIndex}
                      className="rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/50"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-muted/50 transition"
                      >
                        <span className="font-semibold text-foreground text-lg">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Vous n'avez pas trouvé votre réponse ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Notre équipe de support est là pour vous aider
            </p>
            <a
              href="/contact"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
