"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  Settings,
  Store,
  User,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Mail,
  Phone,
  MapPin,
  Camera,
  Save,
  Loader,
  CheckCircle2,
  AlertCircle,
  Lock
} from "lucide-react"
import Link from "next/link"

interface StoreSettings {
  storeName: string
  storeDescription: string
  logo: string
  banner: string
  email: string
  phone: string
  address: string
  city: string
  country: string
  website: string
  socialLinks: {
    facebook: string
    instagram: string
    twitter: string
  }
  notifications: {
    newOrder: boolean
    lowStock: boolean
    messages: boolean
    promotions: boolean
  }
}

export default function SettingsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("store")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  
  const [settings, setSettings] = useState<StoreSettings>({
    storeName: "",
    storeDescription: "",
    logo: "",
    banner: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    website: "",
    socialLinks: {
      facebook: "",
      instagram: "",
      twitter: ""
    },
    notifications: {
      newOrder: true,
      lowStock: true,
      messages: true,
      promotions: false
    }
  })

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) return

        // Récupérer les données vendeur
        const response = await fetch("http://localhost:4000/api/v1/vendor/status", {
          headers: { Authorization: `Bearer ${token}` }
        })
        const data = await response.json()

        if (data.vendorApplication) {
          setSettings(prev => ({
            ...prev,
            storeName: data.vendorApplication.storeName || "",
            storeDescription: data.vendorApplication.businessDescription || "",
            email: data.vendorApplication.businessEmail || "",
            phone: data.vendorApplication.businessPhone || "",
            address: data.vendorApplication.businessAddress || ""
          }))
        }
      } catch (error) {
        console.error("Erreur:", error)
      }
    }

    fetchSettings()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      setSettings(prev => ({
        ...prev,
        [parent]: {
          ...(prev as any)[parent],
          [child]: value
        }
      }))
    } else {
      setSettings(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleNotificationChange = (key: string) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key as keyof typeof prev.notifications]
      }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      const token = localStorage.getItem("token")
      if (!token) return

      // TODO: Implémenter l'API pour sauvegarder les paramètres
      // await fetch("http://localhost:4000/api/v1/vendor/settings", {
      //   method: "PUT",
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(settings)
      // })

      setSuccess("Paramètres sauvegardés avec succès!")
      setTimeout(() => setSuccess(""), 3000)
    } catch (err: any) {
      setError(err.message || "Erreur lors de la sauvegarde")
    } finally {
      setIsLoading(false)
    }
  }

  const tabs = [
    { id: "store", label: "Boutique", icon: Store },
    { id: "profile", label: "Profil", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Sécurité", icon: Shield }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Paramètres</h1>
        <p className="text-muted-foreground mt-1">
          Configurez votre boutique et vos préférences
        </p>
      </div>

      {/* Messages */}
      {success && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
          <p className="text-green-500">{success}</p>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-red-500">{error}</p>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tabs */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="p-2 rounded-xl bg-card border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <tab.icon size={20} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            {/* Store Settings */}
            {activeTab === "store" && (
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-6">Informations de la boutique</h2>
                  
                  {/* Logo & Banner */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Logo de la boutique
                      </label>
                      <div className="relative w-32 h-32 rounded-xl bg-muted border-2 border-dashed border-border hover:border-primary transition cursor-pointer group">
                        {settings.logo ? (
                          <Image src={settings.logo} alt="Logo" fill className="object-cover rounded-xl" />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center">
                            <Camera className="w-8 h-8 text-muted-foreground group-hover:text-primary transition" />
                            <span className="text-xs text-muted-foreground mt-2">Ajouter</span>
                          </div>
                        )}
                        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nom de la boutique
                      </label>
                      <input
                        type="text"
                        name="storeName"
                        value={settings.storeName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Description
                      </label>
                      <textarea
                        name="storeDescription"
                        value={settings.storeDescription}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-6">Coordonnées</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Mail className="inline w-4 h-4 mr-1" />
                        Email professionnel
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={settings.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Phone className="inline w-4 h-4 mr-1" />
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={settings.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <MapPin className="inline w-4 h-4 mr-1" />
                        Adresse
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={settings.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Ville
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={settings.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Globe className="inline w-4 h-4 mr-1" />
                        Site web
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={settings.website}
                        onChange={handleChange}
                        placeholder="https://"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Settings */}
            {activeTab === "profile" && (
              <div className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold text-foreground mb-6">Réseaux sociaux</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Facebook
                    </label>
                    <input
                      type="url"
                      name="socialLinks.facebook"
                      value={settings.socialLinks.facebook}
                      onChange={handleChange}
                      placeholder="https://facebook.com/..."
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Instagram
                    </label>
                    <input
                      type="url"
                      name="socialLinks.instagram"
                      value={settings.socialLinks.instagram}
                      onChange={handleChange}
                      placeholder="https://instagram.com/..."
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Twitter / X
                    </label>
                    <input
                      type="url"
                      name="socialLinks.twitter"
                      value={settings.socialLinks.twitter}
                      onChange={handleChange}
                      placeholder="https://twitter.com/..."
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === "notifications" && (
              <div className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold text-foreground mb-6">Préférences de notification</h2>
                
                <div className="space-y-4">
                  {[
                    { key: "newOrder", label: "Nouvelles commandes", desc: "Recevoir une notification pour chaque nouvelle commande" },
                    { key: "lowStock", label: "Stock faible", desc: "Être alerté quand un produit est en rupture de stock" },
                    { key: "messages", label: "Messages clients", desc: "Recevoir les messages des clients" },
                    { key: "promotions", label: "Promotions Lumynis", desc: "Recevoir des offres et actualités de la plateforme" }
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/30"
                    >
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleNotificationChange(item.key)}
                        className={`relative w-12 h-6 rounded-full transition ${
                          settings.notifications[item.key as keyof typeof settings.notifications]
                            ? "bg-primary"
                            : "bg-muted"
                        }`}
                      >
                        <span
                          className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                            settings.notifications[item.key as keyof typeof settings.notifications]
                              ? "translate-x-7"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-6">Sécurité du compte</h2>
                  
                  <div className="space-y-4">
                    <Link
                      href="/market/publication-space/set-pin?reset=true"
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Lock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Changer le PIN</p>
                          <p className="text-sm text-muted-foreground">Modifier votre code PIN d'accès</p>
                        </div>
                      </div>
                      <span className="text-primary">→</span>
                    </Link>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-green-500/10">
                          <Shield className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Authentification à deux facteurs</p>
                          <p className="text-sm text-muted-foreground">Ajouter une couche de sécurité supplémentaire</p>
                        </div>
                      </div>
                      <span className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded">Bientôt</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                  <h2 className="text-xl font-bold text-red-500 mb-2">Zone de danger</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ces actions sont irréversibles. Procédez avec prudence.
                  </p>
                  <button
                    type="button"
                    className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500/10 transition"
                  >
                    Désactiver ma boutique
                  </button>
                </div>
              </div>
            )}

            {/* Save Button */}
            {activeTab !== "security" && (
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition font-medium disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sauvegarde...
                    </>
                  ) : (
                    <>
                      <Save size={20} />
                      Sauvegarder
                    </>
                  )}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
