"use client"

import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Votre plateforme tout-en-un pour réussir</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            Créez, Concevez et{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Publiez
            </span>{" "}
            en toute simplicité
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Accédez à des templates web & mobile premium, des designs UI/UX exceptionnels, 
            et des outils de publication multi-plateforme pour transformer vos idées en réalité.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/tech"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Commencer maintenant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/design"
              className="px-8 py-4 bg-background border-2 border-border text-foreground rounded-xl hover:border-primary hover:bg-muted transition-all duration-300 font-semibold"
            >
              Découvrir les designs
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Déploiement Rapide</h3>
              <p className="text-sm text-muted-foreground text-center">
                Lancez vos projets en quelques minutes avec nos templates prêts à l'emploi
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Designs Premium</h3>
              <p className="text-sm text-muted-foreground text-center">
                Des interfaces modernes et élégantes créées par des designers experts
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-foreground">100% Sécurisé</h3>
              <p className="text-sm text-muted-foreground text-center">
                Code de qualité, testé et maintenu par notre équipe de développeurs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
