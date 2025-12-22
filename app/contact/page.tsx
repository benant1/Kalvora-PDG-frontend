"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@devmarket.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 1 23 45 67 89",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "123 Avenue des Champs-Élysées, Paris",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MessageSquare,
      title: "Support",
      content: "Disponible 24/7",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Contactez-
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              nous
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est là pour vous aider
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all text-center"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} mx-auto mb-4 flex items-center justify-center text-white shadow-lg`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.content}</p>
                </div>
              )
            })}
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 mx-auto mb-4 flex items-center justify-center text-white shadow-lg">
                <MessageSquare size={28} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Chat en direct</h3>
              <p className="text-muted-foreground">Réponse instantanée</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl bg-card border border-border shadow-xl">
              <h2 className="text-3xl font-bold text-foreground mb-2">Envoyez-nous un message</h2>
              <p className="text-muted-foreground mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
