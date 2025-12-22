'use client'

import { useAuth } from '@/lib/auth-context'
import Navigation from '@/components/navigation'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle, Clock, XCircle, ArrowLeft } from 'lucide-react'

export default function VendorStatusPage() {
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
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/profile"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition"
            >
              <ArrowLeft className="h-5 w-5" />
              Retour au Profil
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-8">État du Compte Vendeur</h1>

          {!user?.vendorStatus ? (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="text-gray-400 mb-4 text-6xl">📋</div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Aucune demande vendeur</h2>
              <p className="text-foreground/70 mb-6">Vous n'avez pas encore soumis de demande pour devenir vendeur.</p>
              <Link
                href="/market/publisher"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Soumettre une Demande Vendeur
              </Link>
            </div>
          ) : (
            <>
              {user.vendorStatus === 'pending' && (
                <div className="bg-yellow-900/20 border-2 border-yellow-700 rounded-lg p-8">
                  <div className="flex items-start gap-4">
                    <Clock className="h-10 w-10 text-yellow-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-yellow-400 mb-3">Demande en Attente de Validation</h2>
                      <p className="text-yellow-200 mb-4 text-lg">
                        Votre demande de compte vendeur est actuellement examinée par notre équipe d'administration.
                      </p>
                      <div className="bg-yellow-900/30 rounded-lg p-4 text-yellow-200 text-sm space-y-2">
                        <p><strong>Ce qu'il se passe:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Vérification de vos documents d'identité</li>
                          <li>Validation de vos informations de boutique</li>
                          <li>Vérification de conformité</li>
                        </ul>
                      </div>
                      <p className="text-yellow-300 mt-4 font-medium">
                        ⏱️ La validation peut prendre 24 à 48 heures. Vous recevrez une notification par email une fois approuvé.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {user.vendorStatus === 'approved' && (
                <div className="bg-green-900/20 border-2 border-green-700 rounded-lg p-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-10 w-10 text-green-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-green-400 mb-3">Compte Vendeur Approuvé ✓</h2>
                      <p className="text-green-200 mb-4 text-lg">
                        Félicitations! Votre demande a été approuvée. Un code d'activation a été envoyé à votre email.
                      </p>
                      <div className="bg-green-900/30 rounded-lg p-4 text-green-200 text-sm space-y-2 mb-4">
                        <p><strong>Prochaines étapes:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Vérifiez votre code d'activation (4 chiffres)</li>
                          <li>Définissez votre PIN personnel (4 chiffres)</li>
                          <li>Accédez à votre espace de publication</li>
                          <li>Commencez à publier vos créations</li>
                        </ul>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href="/market/publication-space/verify-code"
                          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium text-center"
                        >
                          Vérifier mon Code d'Activation
                        </Link>
                        <Link
                          href="/market"
                          className="px-6 py-3 bg-green-700/30 text-green-200 rounded-lg hover:bg-green-700/50 transition font-medium text-center border border-green-700"
                        >
                          Voir la Marketplace
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {user.vendorStatus === 'rejected' && (
                <div className="bg-red-900/20 border-2 border-red-700 rounded-lg p-8">
                  <div className="flex items-start gap-4">
                    <XCircle className="h-10 w-10 text-red-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-red-400 mb-3">Demande Rejetée</h2>
                      <p className="text-red-200 mb-4 text-lg">
                        Votre demande de compte vendeur a été rejetée après examen par notre équipe.
                      </p>
                      <div className="bg-red-900/30 rounded-lg p-4 text-red-200 text-sm mb-4">
                        <p><strong>Raison possible du rejet:</strong></p>
                        <p className="mt-2">
                          Les documents fournis ne correspondent pas à nos critères de validation. 
                          Veuillez vérifier que vos documents d'identité sont clairs et valides.
                        </p>
                      </div>
                      <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 text-blue-200 text-sm mb-4">
                        <p><strong>📝 Vous pouvez soumettre une nouvelle demande:</strong></p>
                        <p className="mt-2">
                          Corrigez les erreurs mentionnées ci-dessus et soumettez à nouveau votre demande. 
                          Assurez-vous que tous vos documents sont clairs, valides et non expirés.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => router.push("/market/publication-space/register")}
                          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-center"
                        >
                          Soumettre une Nouvelle Demande
                        </button>
                        <Link
                          href="/contact"
                          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium text-center"
                        >
                          Contacter le Support
                        </Link>
                        <Link
                          href="/profile"
                          className="px-6 py-3 bg-red-700/30 text-red-200 rounded-lg hover:bg-red-700/50 transition font-medium text-center border border-red-700"
                        >
                          Retour au Profil
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  )
}
