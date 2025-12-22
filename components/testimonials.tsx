"use client"

import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "CEO, TechStart",
      avatar: "SM",
      rating: 5,
      content: "DevMarket a transformé notre façon de travailler. Les templates sont de qualité exceptionnelle et le support est réactif. Je recommande à 100% !",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Thomas Dubois",
      role: "Designer Freelance",
      avatar: "TD",
      rating: 5,
      content: "Une plateforme incroyable avec des designs modernes et élégants. J'ai pu lancer mon portfolio en quelques heures seulement.",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Marie Laurent",
      role: "Développeur Full-Stack",
      avatar: "ML",
      rating: 5,
      content: "Les templates sont bien codés, documentés et faciles à personnaliser. Un gain de temps considérable pour mes projets clients.",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Alexandre Petit",
      role: "Product Manager",
      avatar: "AP",
      rating: 5,
      content: "Le service Market est parfait pour gérer nos produits sur plusieurs plateformes. Interface intuitive et fonctionnalités complètes.",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>Témoignages</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Ce que disent{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              nos clients
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez des milliers de professionnels qui nous font confiance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Note moyenne</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-1">10K+</div>
            <div className="text-sm text-muted-foreground">Clients satisfaits</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Projets réalisés</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Support disponible</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
