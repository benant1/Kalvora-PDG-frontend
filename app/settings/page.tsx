"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { userApi } from "@/lib/api"
import Navigation from "@/components/navigation"
import { Camera, User, Mail, Lock, Trash2 } from "lucide-react"

export default function SettingsPage() {
  const { user, loading, updateUser } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("profile")
  
  // Profile form state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [avatar, setAvatar] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState("")
  
  // Password form state
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  // Delete account state
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteConfirmText, setDeleteConfirmText] = useState("")
  
  // Status messages
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
    if (user) {
      setName(user.name || "")
      setEmail(user.email || "")
      // Load avatar from user data
      if (user?.avatar) {
        // If avatar path starts with /, it's a relative path to backend
        if (user.avatar.startsWith('/')) {
          setAvatarPreview(`http://localhost:4000${user.avatar}`)
        } else {
          setAvatarPreview(user.avatar)
        }
      }
    }
  }, [user, loading, router])

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError("L'image ne doit pas dépasser 2 Mo")
        return
      }
      setAvatar(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setMessage("")

    try {
      // Update profile (name and email)
      const token = localStorage.getItem('token')
      const response = await fetch('http://localhost:4000/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Erreur lors de la mise à jour')
      }
      
      const userData = await response.json()
      updateUser(userData)
      
      // Upload avatar if changed
      if (avatar) {
        const formData = new FormData()
        formData.append('avatar', avatar)
        
        const avatarResponse = await fetch('http://localhost:4000/api/v1/upload/avatar', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData
        })
        
        if (avatarResponse.ok) {
          const avatarData = await avatarResponse.json()
          updateUser({ avatar: avatarData.user.avatar })
        }
        
        setAvatarPreview('')
        setAvatar(null)
      }
      
      setMessage("Profil mis à jour avec succès!")
      
      setTimeout(() => {
        setMessage("")
      }, 1500)
    } catch (err: any) {
      setError(err.message || err.error || "Erreur lors de la mise à jour")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setMessage("")

    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas")
      setIsSubmitting(false)
      return
    }

    if (newPassword.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères")
      setIsSubmitting(false)
      return
    }

    try {
      await userApi.updatePassword({
        currentPassword,
        newPassword
      })
      
      setMessage("Mot de passe modifié avec succès!")
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
    } catch (err: any) {
      setError(err.error || "Erreur lors de la modification")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteAccount = async () => {
    if (deleteConfirmText !== "SUPPRIMER") {
      setError('Veuillez taper "SUPPRIMER" pour confirmer')
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      await userApi.deleteAccount()
      // Clear auth and redirect
      localStorage.removeItem('auth_token')
      router.push("/")
    } catch (err: any) {
      setError(err.error || "Erreur lors de la suppression")
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </main>
    )
  }

  if (!user) {
    return null
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Paramètres du compte</h1>
          <p className="text-muted-foreground">Gérez vos informations personnelles et préférences</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-border mb-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("profile")}
              className={`pb-4 px-2 border-b-2 transition ${
                activeTab === "profile"
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="w-4 h-4 inline mr-2" />
              Profil
            </button>
            <button
              onClick={() => setActiveTab("password")}
              className={`pb-4 px-2 border-b-2 transition ${
                activeTab === "password"
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Lock className="w-4 h-4 inline mr-2" />
              Mot de passe
            </button>
            <button
              onClick={() => setActiveTab("danger")}
              className={`pb-4 px-2 border-b-2 transition ${
                activeTab === "danger"
                  ? "border-red-500 text-red-500 font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Trash2 className="w-4 h-4 inline mr-2" />
              Zone de danger
            </button>
          </div>
        </div>

        {/* Messages */}
        {message && (
          <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600">
            {error}
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Informations du profil</h2>
            
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold overflow-hidden">
                    {avatarPreview ? (
                      <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      user.name?.charAt(0).toUpperCase()
                    )}
                  </div>
                  <label className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition shadow-lg">
                    <Camera className="w-4 h-4 text-primary-foreground" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                  </label>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Photo de profil</h3>
                  <p className="text-sm text-muted-foreground">JPG, PNG ou GIF. Max 2 Mo.</p>
                  {avatarPreview && (
                    <button
                      type="button"
                      onClick={() => {
                        setAvatarPreview("")
                        setAvatar(null)
                      }}
                      className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition border border-red-200 hover:border-red-300"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Supprimer la photo</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enregistrement..." : "Enregistrer les modifications"}
              </button>
            </form>
          </div>
        )}

        {/* Password Tab */}
        {activeTab === "password" && (
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Modifier le mot de passe</h2>
            
            <form onSubmit={handlePasswordUpdate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mot de passe actuel
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  minLength={8}
                />
                <p className="text-xs text-muted-foreground mt-1">Au moins 8 caractères</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Confirmer le nouveau mot de passe
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Modification..." : "Modifier le mot de passe"}
              </button>
            </form>
          </div>
        )}

        {/* Danger Zone Tab */}
        {activeTab === "danger" && (
          <div className="bg-card border border-red-500/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Zone de danger</h2>
            <p className="text-muted-foreground mb-6">
              Les actions dans cette section sont irréversibles. Soyez prudent.
            </p>

            <div className="border border-red-500/20 rounded-lg p-6 bg-red-500/5">
              <h3 className="font-semibold text-foreground mb-2">Supprimer mon compte</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Une fois supprimé, votre compte ne pourra pas être récupéré. Toutes vos données seront
                définitivement effacées.
              </p>
              
              {!showDeleteConfirm ? (
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
                >
                  Supprimer mon compte
                </button>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tapez "SUPPRIMER" pour confirmer
                    </label>
                    <input
                      type="text"
                      value={deleteConfirmText}
                      onChange={(e) => setDeleteConfirmText(e.target.value)}
                      placeholder="SUPPRIMER"
                      className="w-full px-4 py-2 rounded-lg border border-red-500/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setShowDeleteConfirm(false)
                        setDeleteConfirmText("")
                      }}
                      className="flex-1 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={handleDeleteAccount}
                      disabled={isSubmitting || deleteConfirmText !== "SUPPRIMER"}
                      className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Suppression..." : "Confirmer la suppression"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
