"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Save } from "lucide-react"

export default function PublisherSettingsSection({ onSave }: { onSave: () => void }) {
  const [settings, setSettings] = useState({
    autoPublish: false,
    notifications: true,
    socialSharing: true,
    analyticsTracking: true,
  })

  const handleToggle = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSave = () => {
    onSave()
  }

  return (
    <div className="space-y-6">
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Paramètres de Publication</h2>
        <p className="text-foreground/70 mb-6">Configurez le comportement de votre espace de publication</p>

        <div className="space-y-4">
          {/* Publication Automatique */}
          <div className="p-4 border border-border rounded-lg flex justify-between items-center hover:bg-muted/50 transition">
            <div>
              <p className="font-medium text-foreground">Publication Automatique</p>
              <p className="text-sm text-foreground/70 mt-1">
                Les produits sont publiés automatiquement après validation
              </p>
            </div>
            <button
              onClick={() => handleToggle("autoPublish")}
              className={`relative w-14 h-8 rounded-full transition ${
                settings.autoPublish ? "bg-green-600" : "bg-muted"
              }`}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full top-1 transition ${
                  settings.autoPublish ? "right-1" : "left-1"
                }`}
              />
            </button>
          </div>

          {/* Notifications */}
          <div className="p-4 border border-border rounded-lg flex justify-between items-center hover:bg-muted/50 transition">
            <div>
              <p className="font-medium text-foreground">Notifications</p>
              <p className="text-sm text-foreground/70 mt-1">
                Recevez des notifications pour les mises à jour importantes
              </p>
            </div>
            <button
              onClick={() => handleToggle("notifications")}
              className={`relative w-14 h-8 rounded-full transition ${
                settings.notifications ? "bg-green-600" : "bg-muted"
              }`}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full top-1 transition ${
                  settings.notifications ? "right-1" : "left-1"
                }`}
              />
            </button>
          </div>

          {/* Partage Social */}
          <div className="p-4 border border-border rounded-lg flex justify-between items-center hover:bg-muted/50 transition">
            <div>
              <p className="font-medium text-foreground">Partage Social Automatique</p>
              <p className="text-sm text-foreground/70 mt-1">
                Partagez automatiquement les produits sur les réseaux sociaux
              </p>
            </div>
            <button
              onClick={() => handleToggle("socialSharing")}
              className={`relative w-14 h-8 rounded-full transition ${
                settings.socialSharing ? "bg-green-600" : "bg-muted"
              }`}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full top-1 transition ${
                  settings.socialSharing ? "right-1" : "left-1"
                }`}
              />
            </button>
          </div>

          {/* Suivi des Statistiques */}
          <div className="p-4 border border-border rounded-lg flex justify-between items-center hover:bg-muted/50 transition">
            <div>
              <p className="font-medium text-foreground">Suivi Analytique</p>
              <p className="text-sm text-foreground/70 mt-1">Activer le suivi détaillé des performances des produits</p>
            </div>
            <button
              onClick={() => handleToggle("analyticsTracking")}
              className={`relative w-14 h-8 rounded-full transition ${
                settings.analyticsTracking ? "bg-green-600" : "bg-muted"
              }`}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full top-1 transition ${
                  settings.analyticsTracking ? "right-1" : "left-1"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-6 border-t border-border mt-6">
          <Button onClick={handleSave} className="flex items-center gap-2">
            <Save size={18} />
            Enregistrer les Paramètres
          </Button>
        </div>
      </Card>
    </div>
  )
}
