'use client'

import { useAuth } from '@/lib/auth-context'
import Navigation from '@/components/navigation'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Upload, AlertCircle } from 'lucide-react'

export default function VendorApplicationPage() {
  const { user, loading, updateUser } = useAuth()
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [document, setDocument] = useState<File | null>(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    documentType: 'passport',
    documentNumber: '',
    storeName: '',
    storeType: 'individual',
    storeDescription: '',
  })

  // Pré-remplir l'email de l'utilisateur connecté
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    } else if (user && user.email) {
      setFormData(prev => ({
        ...prev,
        email: user.email || ''
      }))
      // Set flag when user accesses account space
      if (!user.hasAccessedAccountSpace) {
        updateUser({ hasAccessedAccountSpace: true })
      }
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Vérifier le type de fichier
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']
      if (!allowedTypes.includes(file.type)) {
        setError('Format de fichier non accepté. Formats acceptés : JPG, PNG, PDF')
        return
      }

      // Vérifier la taille (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Le fichier ne doit pas dépasser 5 MB')
        return
      }

      setDocument(file)
      setError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.phone) {
      setError('Veuillez remplir toutes les informations personnelles')
      return
    }

    if (!formData.documentType || !formData.documentNumber) {
      setError('Veuillez remplir les informations de document')
      return
    }

    if (!formData.storeName || !formData.storeType) {
      setError('Veuillez remplir les informations de boutique')
      return
    }

    if (!document) {
      setError('Veuillez téléverser un document d\'identité')
      return
    }

    setSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('firstName', formData.firstName)
      formDataToSend.append('lastName', formData.lastName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('documentType', formData.documentType)
      formDataToSend.append('documentNumber', formData.documentNumber)
      formDataToSend.append('storeName', formData.storeName)
      formDataToSend.append('storeType', formData.storeType)
      formDataToSend.append('storeDescription', formData.storeDescription)
      formDataToSend.append('document', document)

      const token = localStorage.getItem('token')
      const response = await fetch('http://localhost:4000/api/v1/vendor/submit-application', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formDataToSend
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Erreur lors de la soumission')
      }

      setSuccess(true)
      setTimeout(() => {
        router.push('/profile/vendor-status')
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la soumission')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main>
      <Navigation />
      <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-background to-muted/20 p-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/profile"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            Retour au Profil
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-2">Devenir Vendeur</h1>
          <p className="text-foreground/70 mb-8">
            Remplissez ce formulaire pour soumettre votre demande d'inscription en tant que vendeur.
          </p>

          {success && (
            <div className="mb-6 p-4 bg-green-900/20 border border-green-700 rounded-lg text-green-200">
              ✓ Demande soumise avec succès! Redirection en cours...
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-700 rounded-lg flex gap-3 text-red-200">
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Informations Personnelles */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Informations Personnelles</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Prénom *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground opacity-60 cursor-not-allowed focus:outline-none"
                  />
                  <p className="text-xs text-foreground/50 mt-1">Email de votre compte (non modifiable)</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Informations Document */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Document d'Identité</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Type de Document *</label>
                  <select
                    name="documentType"
                    value={formData.documentType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    required
                  >
                    <option value="passport">Passeport</option>
                    <option value="idcard">Carte d'Identité</option>
                    <option value="driverslicense">Permis de Conduire</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Numéro de Document *</label>
                  <input
                    type="text"
                    name="documentNumber"
                    value={formData.documentNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-foreground mb-2">Téléverser le Document *</label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary transition">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/jpeg,image/jpg,image/png,application/pdf"
                    className="hidden"
                    id="document-input"
                  />
                  <label htmlFor="document-input" className="cursor-pointer block">
                    <Upload className="h-8 w-8 text-foreground/50 mx-auto mb-2" />
                    <p className="text-foreground font-medium">{document ? document.name : 'Cliquez pour téléverser'}</p>
                    <p className="text-xs text-foreground/50 mt-1">JPG, PNG ou PDF • Max 5 MB</p>
                  </label>
                </div>
              </div>
            </div>

            {/* Informations Boutique */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Informations de Boutique</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom de la Boutique *</label>
                  <input
                    type="text"
                    name="storeName"
                    value={formData.storeName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Type de Boutique *</label>
                  <select
                    name="storeType"
                    value={formData.storeType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    required
                  >
                    <option value="individual">Particulier</option>
                    <option value="sme">TPE/PME</option>
                    <option value="company">Entreprise</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-foreground mb-2">Description de la Boutique</label>
                <textarea
                  name="storeDescription"
                  value={formData.storeDescription}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-primary resize-none"
                  placeholder="Décrivez votre boutique, vos produits, vos spécialités..."
                />
              </div>
            </div>

            {/* Boutons */}
            <div className="flex gap-4">
              <Link
                href="/profile"
                className="flex-1 px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition font-medium text-center"
              >
                Annuler
              </Link>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Soumission en cours...' : 'Soumettre la Demande'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
