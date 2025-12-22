import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { BookOpen, Code, FileText, Video, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Documentation - DevMarket",
  description: "Guides et documentation pour utiliser DevMarket",
}

export default function DocsPage() {
  const sections = [
    {
      icon: BookOpen,
      title: "Guide de démarrage",
      description: "Apprenez les bases pour bien commencer avec DevMarket",
      color: "from-blue-500 to-cyan-500",
      links: [
        "Installation",
        "Configuration",
        "Premier projet",
        "Déploiement",
      ],
    },
    {
      icon: Code,
      title: "Guides techniques",
      description: "Documentation technique approfondie pour développeurs",
      color: "from-purple-500 to-pink-500",
      links: [
        "API Reference",
        "Composants",
        "Hooks",
        "Utilisation avancée",
      ],
    },
    {
      icon: FileText,
      title: "Tutoriels",
      description: "Tutoriels étape par étape pour créer vos projets",
      color: "from-green-500 to-emerald-500",
      links: [
        "Créer un site web",
        "Application mobile",
        "E-commerce",
        "Blog personnel",
      ],
    },
    {
      icon: Video,
      title: "Vidéos",
      description: "Apprenez en vidéo avec nos formations",
      color: "from-orange-500 to-red-500",
      links: [
        "Cours complets",
        "Webinaires",
        "Démonstrations",
        "FAQ vidéo",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Centre de{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Tout ce dont vous avez besoin pour réussir avec DevMarket
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Rechercher dans la documentation..."
              className="w-full px-6 py-4 rounded-xl bg-card border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            />
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} mb-6 flex items-center justify-center text-white shadow-lg`}>
                      <Icon size={28} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {section.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {section.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {section.links.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            href={`/docs/${link.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-primary hover:underline flex items-center gap-2"
                          >
                            <span>→</span>
                            <span>{link}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Resources */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Téléchargez notre guide complet
                </h3>
                <p className="text-muted-foreground">
                  Un PDF de 100+ pages avec tout ce qu'il faut savoir
                </p>
              </div>
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
                <Download size={20} />
                Télécharger (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
