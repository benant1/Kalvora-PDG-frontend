"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  const divisions = [
    { name: "Tech", href: "/tech" },
    { name: "Design", href: "/design" },
    { name: "Market", href: "/market" },
  ]

  const company = [
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Carrières", href: "/careers" },
  ]

  const resources = [
    { name: "Documentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "RSS", href: "/rss.xml" },
    { name: "Support", href: "/support" },
    { name: "FAQ", href: "/faq" },
  ]

  const legal = [
    { name: "Mentions légales", href: "/legal" },
    { name: "Confidentialité", href: "/privacy" },
    { name: "Conditions d'utilisation", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
  ]

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="relative border-t border-border bg-card mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white">
                K
              </div>
              <span className="text-foreground">Kalvora</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              La plateforme tout-en-un pour créer, concevoir et publier vos projets digitaux avec succès.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Divisions</h3>
            <ul className="space-y-3">
              {divisions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Ressources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Légal</h3>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-border">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-foreground mb-2 flex items-center justify-center gap-2">
              <Mail size={20} />
              Restez informé
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recevez nos dernières actualités et offres exclusives
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Kalvora. Tous droits réservés.</p>
            <p>
              Conçu avec ❤️ par{" "}
              <span className="text-primary font-medium">Kalvora Team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
