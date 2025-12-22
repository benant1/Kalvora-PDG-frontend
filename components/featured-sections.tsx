"use client"

import Link from "next/link"
import { Code2, Palette, Zap, LayoutDashboard, ArrowUpRight } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export default function FeaturedSections() {
  const { user } = useAuth()
  
  const sections = [
    {
      icon: Code2,
      title: "Tech",
      description: "Templates web & mobile professionnels. Développement sur mesure pour vos besoins spécifiques.",
      href: "/tech",
      color: "from-blue-500 to-cyan-500",
      badge: "Populaire",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Designs UI/UX premium créés par des experts. Interfaces modernes et intuitives.",
      href: "/design",
      color: "from-purple-500 to-pink-500",
      badge: "Nouveau",
    },
    {
      icon: Zap,
      title: "Market",
      description: "Publiez et vendez sur plusieurs plateformes. Gérez votre boutique e-commerce facilement.",
      href: "/market",
      color: "from-orange-500 to-red-500",
      badge: "Tendance",
    },
    {
      icon: LayoutDashboard,
      title: "Admin",
      description: "Tableau de bord complet. Analytics, gestion des utilisateurs et contenus.",
      href: "/admin",
      color: "from-green-500 to-emerald-500",
      badge: "Premium",
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <span>Nos Divisions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Une plateforme,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Infinies possibilités
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos divisions et commencez à créer des expériences exceptionnelles
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sections
            .filter(section => section.title !== "Admin" || user?.role === "admin")
            .map((section, index) => {
            const Icon = section.icon
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group relative p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {section.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} mb-6 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <Icon size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Bottom Border Animation */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${section.color}`} />
              </Link>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Prêt à commencer votre projet ?
              </h3>
              <p className="text-muted-foreground">
                Rejoignez des milliers de créateurs qui utilisent DevMarket
              </p>
            </div>
            <Link
              href="/signup"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              Créer un compte gratuit
            </Link>
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
