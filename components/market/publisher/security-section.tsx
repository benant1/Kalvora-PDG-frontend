"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Shield, Save, Edit2 } from "lucide-react"

export default function SecuritySection({ onSave }: { onSave: () => void }) {
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [passwordData, setPasswordData] = useState({
    current: "",
    new: "",
    confirm: "",
  })

  const handlePasswordChange = () => {
    onSave()
    setIsChangingPassword(false)
    setPasswordData({ current: "", new: "", confirm: "" })
  }

  return (
    <div className="space-y-6">
      {/* Password */}
      <Card className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Mot de Passe</h2>
            <p className="text-foreground/70 mt-2">Gérez votre mot de passe de connexion</p>
          </div>
          {!isChangingPassword && (
            <Button variant="outline" onClick={() => setIsChangingPassword(true)} className="flex items-center gap-2">
              <Edit2 size={18} />
              Modifier
            </Button>
          )}
        </div>

        {!isChangingPassword ? (
          <div className="p-4 bg-muted rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-green-500" />
              <p className="text-foreground">Mot de passe sécurisé</p>
            </div>
            <p className="text-foreground/70 text-sm">Changé il y a 45 jours</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="text-foreground font-medium mb-2 block">Mot de passe actuel</label>
              <Input
                type="password"
                placeholder="Entrez votre mot de passe actuel"
                value={passwordData.current}
                onChange={(e) => setPasswordData({ ...passwordData, current: e.target.value })}
                className="text-base"
              />
            </div>
            <div>
              <label className="text-foreground font-medium mb-2 block">Nouveau mot de passe</label>
              <Input
                type="password"
                placeholder="Entrez votre nouveau mot de passe"
                value={passwordData.new}
                onChange={(e) => setPasswordData({ ...passwordData, new: e.target.value })}
                className="text-base"
              />
            </div>
            <div>
              <label className="text-foreground font-medium mb-2 block">Confirmer le mot de passe</label>
              <Input
                type="password"
                placeholder="Confirmez votre nouveau mot de passe"
                value={passwordData.confirm}
                onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })}
                className="text-base"
              />
            </div>

            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={() => setIsChangingPassword(false)}>
                Annuler
              </Button>
              <Button onClick={handlePasswordChange} className="flex items-center gap-2">
                <Save size={18} />
                Enregistrer
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* Two-Factor Authentication */}
      <Card className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Authentification à Deux Facteurs</h2>
            <p className="text-foreground/70 mt-2">Ajoutez une couche de sécurité supplémentaire à votre compte</p>
          </div>
        </div>

        <div className="p-4 bg-muted rounded-lg mb-4">
          <div className="flex items-start gap-4">
            <Shield size={24} className="text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-foreground font-medium">Non Activée</p>
              <p className="text-foreground/70 text-sm mt-1">
                Sécuriser votre compte avec une authentification à deux facteurs pour une meilleure protection
              </p>
            </div>
          </div>
        </div>

        <Button className="flex items-center gap-2">
          <Shield size={18} />
          Activer 2FA
        </Button>
      </Card>

      {/* Active Sessions */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Sessions Actives</h2>
        <div className="space-y-4">
          {[
            { device: "Chrome sur Windows", location: "Paris, France", lastActive: "À l'instant" },
            { device: "Safari sur macOS", location: "Lyon, France", lastActive: "Il y a 2 heures" },
            { device: "Mobile (iOS)", location: "Bordeaux, France", lastActive: "Il y a 5 heures" },
          ].map((session, i) => (
            <div
              key={i}
              className="p-4 border border-border rounded-lg flex justify-between items-center hover:bg-muted/50 transition"
            >
              <div>
                <p className="text-foreground font-medium">{session.device}</p>
                <p className="text-foreground/70 text-sm mt-1">
                  {session.location} • {session.lastActive}
                </p>
              </div>
              <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                Révoquer
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
