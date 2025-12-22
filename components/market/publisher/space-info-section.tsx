"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Edit2, Save } from "lucide-react"

export default function SpaceInfoSection({ onSave }: { onSave: () => void }) {
  const [isEditing, setIsEditing] = useState(false)
  const [spaceName, setSpaceName] = useState("Tech Store Premium")
  const [description, setDescription] = useState("Espace de publication pour les produits technologiques haut de gamme")
  const [website, setWebsite] = useState("https://techstore.example.com")

  const handleSave = () => {
    onSave()
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      <Card className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Informations de l&apos;Espace</h2>
            <p className="text-foreground/70 mt-2">Détails principaux de votre espace de publication</p>
          </div>
          {!isEditing && (
            <Button variant="outline" onClick={() => setIsEditing(true)} className="flex items-center gap-2">
              <Edit2 size={18} />
              Modifier
            </Button>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-foreground font-medium mb-2 block">Nom de l&apos;Espace</label>
            <Input
              value={spaceName}
              onChange={(e) => setSpaceName(e.target.value)}
              disabled={!isEditing}
              className="text-base"
            />
          </div>

          <div>
            <label className="text-foreground font-medium mb-2 block">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={!isEditing}
              className="w-full p-3 bg-input border border-border rounded-lg text-foreground disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary min-h-24 resize-none"
            />
          </div>

          <div>
            <label className="text-foreground font-medium mb-2 block">Site Web</label>
            <Input
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              disabled={!isEditing}
              type="url"
              className="text-base"
            />
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-foreground/70 text-sm font-medium">ID de l&apos;Espace</p>
              <p className="text-foreground font-mono mt-2">SPACE-2024-001</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-foreground/70 text-sm font-medium">Date de Création</p>
              <p className="text-foreground mt-2">15 novembre 2024</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-foreground/70 text-sm font-medium">Statut</p>
              <p className="text-green-500 font-semibold mt-2">Actif</p>
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="flex gap-3 justify-end pt-6 border-t border-border mt-6">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Annuler
            </Button>
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save size={18} />
              Enregistrer
            </Button>
          </div>
        )}
      </Card>
    </div>
  )
}
