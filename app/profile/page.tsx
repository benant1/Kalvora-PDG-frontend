'use client'

import { useAuth } from '@/lib/auth-context'
import Navigation from '@/components/navigation'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

export default function ProfilePage() {
  const { user, loading, updateUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
    // Set flag when user accesses account space
    if (!loading && user && !user.hasAccessedAccountSpace) {
      updateUser({ hasAccessedAccountSpace: true })
    }
  }, [user, loading, router, updateUser])

  // Show loading screen while auth is being checked
  if (loading) {
    return (
      <main>
        <Navigation />
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-foreground/70">Chargement...</p>
          </div>
        </div>
      </main>
    )
  }

  // Show redirect message if not authenticated
  if (!user) {
    return (
      <main>
        <Navigation />
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
          <p className="text-foreground/70">Redirection...</p>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Navigation />
      <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-background to-muted/20 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Mon Profil</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profil Card */}
            <div className="md:col-span-1">
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-4xl font-bold mx-auto mb-4">
                  {user?.name ? user.name.charAt(0).toUpperCase() : '?'}
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-1">{user?.name || 'Utilisateur'}</h2>
                <p className="text-foreground/70 mb-4">{user?.email || ''}</p>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium capitalize mb-4">
                  {user?.role || 'user'}
                </div>

                {/* Statut Vendeur Badge */}
                {user?.vendorStatus && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="text-xs text-foreground/50 uppercase tracking-wide mb-2">Statut Vendeur</div>
                    {user.vendorStatus === 'pending' && (
                      <div className="inline-block px-3 py-1 bg-yellow-900/30 text-yellow-400 rounded-full text-sm font-medium">
                        ⏳ En attente
                      </div>
                    )}
                    {user.vendorStatus === 'approved' && (
                      <div className="inline-block px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm font-medium">
                        ✓ Approuvé
                      </div>
                    )}
                    {user.vendorStatus === 'rejected' && (
                      <div className="inline-block px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm font-medium">
                        ✗ Rejeté
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Infos Card */}
            <div className="md:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Informations du Compte</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-sm text-foreground/50 uppercase tracking-wide">Nom Complet</label>
                    <p className="text-lg text-foreground mt-2">{user?.name || 'N/A'}</p>
                  </div>

                  <div>
                    <label className="text-sm text-foreground/50 uppercase tracking-wide">Adresse Email</label>
                    <p className="text-lg text-foreground mt-2">{user?.email || 'N/A'}</p>
                  </div>

                  <div>
                    <label className="text-sm text-foreground/50 uppercase tracking-wide">Rôle</label>
                    <p className="text-lg text-foreground capitalize mt-2">{user?.role || 'user'}</p>
                  </div>

                  <div>
                    <label className="text-sm text-foreground/50 uppercase tracking-wide">Date d'Inscription</label>
                    <p className="text-lg text-foreground mt-2">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      }) : 'N/A'}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border flex flex-col gap-3">
                  <Link
                    href="/settings"
                    className="px-6 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition text-center"
                  >
                    Paramètres
                  </Link>
                  <Link
                    href="/change-password"
                    className="px-6 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition text-center"
                  >
                    Changer le Mot de Passe
                  </Link>
                  
                  {/* Lien vers le compte vendeur */}
                  {user?.vendorStatus ? (
                    <Link
                      href="/profile/vendor-status"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center font-medium"
                    >
                      État du Compte Vendeur
                    </Link>
                  ) : user?.role !== 'admin' && (
                    <Link
                      href="/profile/vendor-application"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center font-medium"
                    >
                      Devenir Vendeur
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Activité Récente */}
          <div className="mt-8 bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Mon Activité</h3>
            
            <div className="space-y-4 text-foreground/70">
              <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                <span>Compte créé</span>
                <span className="text-foreground">
                  {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('fr-FR') : 'N/A'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
