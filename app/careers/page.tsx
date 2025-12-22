import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Carrières - DevMarket",
  description: "Rejoignez notre équipe et construisez l'avenir du digital",
}

export default function CareersPage() {
  const positions = [
    {
      title: "Développeur Full-Stack Senior",
      department: "Engineering",
      location: "Paris / Remote",
      type: "CDI",
      description: "Nous recherchons un développeur full-stack passionné pour rejoindre notre équipe technique.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Paris",
      type: "CDI",
      description: "Créez des expériences utilisateur exceptionnelles pour notre plateforme.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "CDI",
      description: "Pilotez le développement de nos produits et fonctionnalités.",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Paris / Remote",
      type: "CDI",
      description: "Développez notre présence en ligne et notre stratégie marketing.",
      color: "from-orange-500 to-red-500",
    },
  ]

  const benefits = [
    "Salaire compétitif",
    "Télétravail flexible",
    "Mutuelle premium",
    "Formation continue",
    "Tickets restaurant",
    "RTT",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Rejoignez{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              l'équipe
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Construisez l'avenir du digital avec nous dans un environnement innovant et stimulant
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Pourquoi nous rejoindre ?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Postes ouverts
          </h2>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${position.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-foreground">{position.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${position.color} text-white`}>
                        {position.department}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href={`/careers/${index}`}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 font-medium group-hover:scale-105 self-start md:self-center"
                  >
                    Postuler
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
