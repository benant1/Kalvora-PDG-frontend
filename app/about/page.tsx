import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Target, Users, TrendingUp, Heart, Sparkles } from "lucide-react"

export const metadata = {
  title: "À propos - DevMarket",
  description: "Découvrez notre histoire et notre mission",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Notre Mission",
      description: "Démocratiser l'accès aux outils de création digitale et permettre à chacun de concrétiser ses projets.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Notre Équipe",
      description: "Des experts passionnés par la technologie, le design et l'innovation, à votre service.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Notre Croissance",
      description: "Plus de 10,000 utilisateurs satisfaits et des centaines de projets réussis depuis notre lancement.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Nos Valeurs",
      description: "Qualité, transparence, innovation et satisfaction client au cœur de tout ce que nous faisons.",
      color: "from-orange-500 to-red-500",
    },
  ]

  const stats = [
    { value: "10K+", label: "Utilisateurs" },
    { value: "500+", label: "Projets" },
    { value: "98%", label: "Satisfaction" },
    { value: "24/7", label: "Support" },
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
            <Sparkles className="w-4 h-4" />
            <span>À propos de nous</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Nous créons l'avenir{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              du digital
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DevMarket est né d'une vision simple : rendre la création digitale accessible à tous. 
            Nous combinons technologie, design et innovation pour vous offrir les meilleurs outils.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Ce qui nous anime
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos valeurs fondamentales qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-6">Notre Histoire</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                DevMarket a été fondé en 2023 avec une mission claire : simplifier l'accès aux outils 
                de création digitale pour tous les créateurs, développeurs et entrepreneurs.
              </p>
              <p>
                Nous avons commencé avec une petite collection de templates et aujourd'hui, nous sommes 
                fiers d'offrir une plateforme complète regroupant des milliers de ressources, des services 
                professionnels et une communauté active de créateurs.
              </p>
              <p>
                Notre engagement envers la qualité, l'innovation et la satisfaction client nous a permis 
                de devenir une référence dans l'industrie. Nous continuons à évoluer et à nous améliorer 
                chaque jour pour mieux servir notre communauté.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
