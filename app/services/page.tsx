import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Check, Zap, Shield, Headphones, Globe, Award } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Nos Services - DevMarket",
  description: "Découvrez tous nos services professionnels pour votre réussite digitale",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Zap,
      title: "Développement Sur Mesure",
      description: "Applications web et mobile personnalisées selon vos besoins",
      features: [
        "Analyse de vos besoins",
        "Développement agile",
        "Tests et qualité",
        "Maintenance et support",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Consulting Digital",
      description: "Conseils stratégiques pour votre transformation digitale",
      features: [
        "Audit technique",
        "Stratégie digitale",
        "Architecture logicielle",
        "Optimisation des performances",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Sécurité & Infrastructure",
      description: "Protection et optimisation de votre infrastructure",
      features: [
        "Audit de sécurité",
        "Configuration serveur",
        "Monitoring 24/7",
        "Sauvegarde automatique",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Headphones,
      title: "Support Premium",
      description: "Accompagnement personnalisé et support technique",
      features: [
        "Support prioritaire",
        "Formation utilisateurs",
        "Documentation complète",
        "Assistance dédiée",
      ],
      color: "from-orange-500 to-red-500",
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
            <Award className="w-4 h-4" />
            <span>Services Professionnels</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Des services qui{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              transforment
            </span>
            <br />votre vision en réalité
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Solutions complètes et personnalisées pour accompagner votre croissance digitale
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 flex items-center justify-center text-white shadow-lg`}>
                      <Icon size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-foreground">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col items-center gap-6 p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
              <h3 className="text-3xl font-bold text-foreground">
                Besoin d'un service personnalisé ?
              </h3>
              <p className="text-muted-foreground max-w-2xl">
                Notre équipe d'experts est prête à vous accompagner dans tous vos projets digitaux
              </p>
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
