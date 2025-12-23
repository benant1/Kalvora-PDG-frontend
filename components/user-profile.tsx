'use client'

import { useAuth } from '@/lib/auth-context'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://kalvora-pdg.vercel.app'

export default function UserProfile() {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const router = useRouter()

  // Load avatar from user data
  useEffect(() => {
    if (user?.avatar) {
      // Si l'avatar commence par http, on l'utilise tel quel
      if (user.avatar.startsWith('http')) {
        // Si c'est localhost, on le remplace par l'URL de l'API
        const url = new URL(user.avatar, window.location.origin)
        if (url.hostname === 'localhost') {
          setAvatarUrl(user.avatar.replace(/^http:\/\/localhost:\d+/, API_URL))
        } else {
          setAvatarUrl(user.avatar)
        }
      } 
      // Si c'est un chemin relatif, on ajoute l'URL de base
      else if (user.avatar.startsWith('/')) {
        setAvatarUrl(`${API_URL}${user.avatar}`)
      } 
      // Sinon, on utilise la valeur telle quelle
      else {
        setAvatarUrl(user.avatar)
      }
    } else {
      setAvatarUrl(null)
    }
  }, [user])

  // Don't render until user data is loaded
  if (!user || !user.name) return null

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true)
  }

  const confirmLogout = () => {
    logout()
    setIsOpen(false)
    setShowLogoutConfirm(false)
    router.push('/')
  }

  const cancelLogout = () => {
    setShowLogoutConfirm(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted transition"
      >
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold overflow-hidden">
          {avatarUrl ? (
            <img src={avatarUrl} alt={user.name || 'Avatar'} className="w-full h-full object-cover" />
          ) : (
            user.name ? user.name.charAt(0).toUpperCase() : '?'
          )}
        </div>
        <span className="text-foreground text-sm font-medium hidden sm:inline">{user.name || 'Utilisateur'}</span>
        <svg
          className={`w-4 h-4 transition ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed right-4 top-16 md:right-8 md:top-20 w-80 bg-card border border-border rounded-lg shadow-lg z-50 p-4">
          <div className="mb-4 pb-4 border-b border-border">
            <h3 className="font-semibold text-foreground mb-2">Mon Compte</h3>
            <div className="space-y-2 text-sm text-foreground/70">
              <div>
                <span className="text-foreground/50">Nom:</span> {user.name}
              </div>
              <div>
                <span className="text-foreground/50">Email:</span> {user.email}
              </div>
              <div>
                <span className="text-foreground/50">Rôle:</span>{' '}
                <span className="capitalize text-primary font-medium">{user.role}</span>
              </div>
              <div>
                <span className="text-foreground/50">Inscrit:</span>{' '}
                {new Date(user.createdAt).toLocaleDateString('fr-FR')}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Link
              href="/profile"
              className="block px-4 py-2 rounded-lg hover:bg-muted transition text-foreground text-center"
              onClick={() => setIsOpen(false)}
            >
              Voir Mon Profil
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 rounded-lg hover:bg-muted transition text-foreground text-center"
              onClick={() => setIsOpen(false)}
            >
              Paramètres
            </Link>
            {user.role === 'admin' && (
              <Link
                href="/admin"
                className="block px-4 py-2 rounded-lg hover:bg-primary/10 transition text-primary text-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                🔧 Tableau de Bord Admin
              </Link>
            )}
            <button
              onClick={handleLogoutClick}
              className="w-full px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition text-red-500 text-center font-medium"
            >
              Se Déconnecter
            </button>
          </div>
        </div>
      )}

      {/* Logout Confirmation Dialog */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]" onClick={cancelLogout}>
          <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-foreground mb-3">Confirmer la déconnexion</h3>
            <p className="text-muted-foreground mb-6">
              Êtes-vous sûr de vouloir vous déconnecter ? Vous devrez vous reconnecter pour accéder à votre compte.
            </p>
            <div className="flex gap-3">
              <button
                onClick={cancelLogout}
                className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-muted transition text-foreground font-medium"
              >
                Annuler
              </button>
              <button
                onClick={confirmLogout}
                className="flex-1 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition text-white font-medium"
              >
                Se Déconnecter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
