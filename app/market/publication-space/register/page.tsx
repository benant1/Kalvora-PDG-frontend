"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Upload, FileCheck, Store, CheckCircle2, AlertCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPublicationSpacePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoadingUser, setIsLoadingUser] = useState(true)
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    documentType: "carte-identite",
    documentNumber: "",
    documentFile: null as File | null,
    documentPreview: "",
    storeName: "",
    storeType: "boutique",
    storeDescription: "",
    termsAccepted: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          router.push("/login")
          return
        }

        const response = await fetch("http://localhost:4000/api/v1/auth/me", {
          headers: { Authorization: `Bearer ${token}` }
        })

        if (!response.ok) throw new Error("Erreur")

        const data = await response.json()
        const userData = data.user || data
        
        console.log('User data received:', userData)
        
        // Parser le nom - gérer plusieurs formats
        let firstName = ""
        let lastName = ""
        
        if (userData.name) {
          const nameParts = userData.name.trim().split(/\s+/)
          firstName = nameParts[0] || ""
          // Si un seul mot, l'utiliser aussi comme nom de famille
          lastName = nameParts.slice(1).join(' ') || nameParts[0] || ""
        }
        
        console.log('Parsed name - firstName:', firstName, 'lastName:', lastName)
        
        setFormData(prev => ({ 
          ...prev, 
          firstName: firstName,
          lastName: lastName,
          email: userData.email || "",
          phone: userData.phone || ""
        }))
      } catch (error) {
        console.error("Erreur:", error)
      } finally {
        setIsLoadingUser(false)
      }
    }

    fetchUserData()
  }, [router])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, documentFile: "Le fichier ne doit pas dépasser 5 MB" })
        return
      }

      const validTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"]
      if (!validTypes.includes(file.type)) {
        setErrors({ ...errors, documentFile: "Format accepté : JPG, PNG ou PDF" })
        return
      }

      setFormData({ ...formData, documentFile: file })
      
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setFormData(prev => ({ ...prev, documentPreview: reader.result as string }))
        }
        reader.readAsDataURL(file)
      } else {
        setFormData(prev => ({ ...prev, documentPreview: "" }))
      }
      
      const newErrors = { ...errors }
      delete newErrors.documentFile
      setErrors(newErrors)
    }
  }

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.documentNumber.trim()) newErrors.documentNumber = "Le numéro de document est requis"
    if (!formData.documentFile) newErrors.documentFile = "Veuillez téléverser votre document"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis"
    if (!formData.storeName.trim()) newErrors.storeName = "Le nom de la boutique est requis"
    if (!formData.termsAccepted) newErrors.terms = "Vous devez accepter les conditions"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep1() && step < 2) {
      setStep(step + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep2()) return
    
    // Log the form data before submission
    console.log('Form data before submission:', {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      documentNumber: formData.documentNumber,
      storeName: formData.storeName,
      storeType: formData.storeType
    })
    
    // Check if required fields are empty
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      const missingFields = []
      if (!formData.firstName.trim()) missingFields.push('firstName')
      if (!formData.lastName.trim()) missingFields.push('lastName')
      if (!formData.email.trim()) missingFields.push('email')
      if (!formData.phone.trim()) missingFields.push('phone')
      console.error('Missing fields:', missingFields)
      setErrors({ submit: `Champs manquants: ${missingFields.join(', ')}` })
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const token = localStorage.getItem("token")
      if (!token) {
        setErrors({ submit: "Vous devez être connecté" })
        setIsSubmitting(false)
        return
      }

      const submitData = new FormData()
      submitData.append('firstName', formData.firstName)
      submitData.append('lastName', formData.lastName)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone)
      submitData.append('documentType', formData.documentType)
      submitData.append('documentNumber', formData.documentNumber)
      submitData.append('storeName', formData.storeName)
      submitData.append('storeType', formData.storeType)
      submitData.append('storeDescription', formData.storeDescription)
      if (formData.documentFile) submitData.append('documentFile', formData.documentFile)

      console.log('Submitting form data...', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone
      })

      const response = await fetch("http://localhost:4000/api/v1/vendor/apply", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: submitData
      })

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)

      if (!response.ok) {
        let errorMessage = data.error || data.message || "Erreur lors de la soumission"
        
        // Si le statut est "approved", rediriger vers l'espace vendeur
        if (data.status === 'approved') {
          router.push("/market/publication-space/access")
          return
        }
        
        throw new Error(errorMessage)
      }

      console.log('Success! Redirecting...')
      router.push("/market/publication-space/pending")
    } catch (error: any) {
      console.error('Error:', error)
      setErrors({ submit: error.message || "Une erreur est survenue" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const documentTypes = [
    { value: "carte-identite", label: "Carte d'identité" },
    { value: "passeport", label: "Passeport" },
    { value: "permis-conduire", label: "Permis de conduire" },
    { value: "autre", label: "Autre document officiel" },
  ]

  const storeTypes = [
    { value: "boutique", label: "Boutique en ligne" },
    { value: "communaute", label: "Communauté" },
    { value: "marketplace", label: "Marketplace" },
    { value: "entreprise", label: "Entreprise" },
    { value: "autre", label: "Autre" },
  ]

  if (isLoadingUser) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <Navigation />
        <section className="py-20 px-4 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Créez votre{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Espace de Publication
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Complétez votre demande en 2 étapes simples
            </p>
          </div>

          <div className="mb-12">
            <div className="flex justify-between items-center max-w-2xl mx-auto">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= s ? "bg-gradient-to-br from-primary to-accent text-white shadow-lg" : "bg-muted text-muted-foreground"
                    }`}>
                      {step > s ? <CheckCircle2 size={24} /> : s}
                    </div>
                    <span className={`text-sm mt-2 ${step >= s ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                      {s === 1 && "Documents"}
                      {s === 2 && "Boutique"}
                    </span>
                  </div>
                  {s < 2 && <div className={`h-1 flex-1 mx-2 rounded ${step > s ? "bg-gradient-to-r from-primary to-accent" : "bg-muted"}`} />}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-2xl bg-card border border-border shadow-xl">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileCheck className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Informations personnelles</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        value={formData.firstName} 
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} 
                        className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.firstName ? 'border-red-500' : 'border-border'} text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`} 
                        placeholder="Votre prénom" 
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        value={formData.lastName} 
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} 
                        className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.lastName ? 'border-red-500' : 'border-border'} text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`} 
                        placeholder="Votre nom de famille" 
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Type de document <span className="text-red-500">*</span>
                    </label>
                    <select value={formData.documentType} onChange={(e) => setFormData({ ...formData, documentType: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition">
                      {documentTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Numéro du document <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={formData.documentNumber} onChange={(e) => setFormData({ ...formData, documentNumber: e.target.value })} className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.documentNumber ? 'border-red-500' : 'border-border'} text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`} placeholder="Ex: AB1234567" />
                    {errors.documentNumber && <p className="text-red-500 text-sm mt-1">{errors.documentNumber}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Téléverser le document <span className="text-red-500">*</span>
                    </label>
                    <div className={`border-2 border-dashed ${errors.documentFile ? 'border-red-500' : 'border-border'} rounded-lg p-8 text-center hover:border-primary transition cursor-pointer`}>
                      <input type="file" id="document-upload" accept="image/jpeg,image/jpg,image/png,application/pdf" onChange={handleFileChange} className="hidden" />
                      <label htmlFor="document-upload" className="cursor-pointer">
                        {formData.documentPreview ? (
                          <div className="space-y-4">
                            <img src={formData.documentPreview} alt="Aperçu" className="max-h-48 mx-auto rounded-lg" />
                            <p className="text-sm text-primary font-medium">{formData.documentFile?.name}</p>
                            <p className="text-xs text-muted-foreground">Cliquez pour changer</p>
                          </div>
                        ) : formData.documentFile ? (
                          <div className="space-y-4">
                            <FileCheck className="w-16 h-16 text-primary mx-auto" />
                            <p className="text-sm text-primary font-medium">{formData.documentFile.name}</p>
                            <p className="text-xs text-muted-foreground">Cliquez pour changer</p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <Upload className="w-16 h-16 text-muted-foreground mx-auto" />
                            <div>
                              <p className="text-foreground font-medium mb-1">Cliquez pour téléverser votre document</p>
                              <p className="text-sm text-muted-foreground">JPG, PNG ou PDF (max. 5 MB)</p>
                            </div>
                          </div>
                        )}
                      </label>
                    </div>
                    {errors.documentFile && <p className="text-red-500 text-sm mt-1">{errors.documentFile}</p>}
                  </div>

                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-foreground">
                        <p className="font-medium mb-1">Informations importantes :</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Le document doit être lisible et en couleur</li>
                          <li>Toutes les informations doivent être visibles</li>
                          <li>Le document doit être en cours de validité</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Store className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Informations sur votre activité</h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.phone ? 'border-red-500' : 'border-border'} text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`} placeholder="Ex: +33 6 12 34 56 78" />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Type d'activité <span className="text-red-500">*</span>
                    </label>
                    <select value={formData.storeType} onChange={(e) => setFormData({ ...formData, storeType: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition">
                      {storeTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nom de la boutique / Entreprise <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={formData.storeName} onChange={(e) => setFormData({ ...formData, storeName: e.target.value })} className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.storeName ? 'border-red-500' : 'border-border'} text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`} placeholder="Ex: Ma Super Boutique" />
                    {errors.storeName && <p className="text-red-500 text-sm mt-1">{errors.storeName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Description (optionnel)</label>
                    <textarea value={formData.storeDescription} onChange={(e) => setFormData({ ...formData, storeDescription: e.target.value })} rows={4} className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none" placeholder="Décrivez brièvement votre activité..." />
                  </div>

                  <div className="pt-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" checked={formData.termsAccepted} onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })} className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary" />
                      <span className="text-sm text-foreground">
                        J'accepte les <a href="/terms" className="text-primary hover:underline">conditions générales</a> et la <a href="/privacy" className="text-primary hover:underline">politique de confidentialité</a>
                        <span className="text-red-500"> *</span>
                      </span>
                    </label>
                    {errors.terms && <p className="text-red-500 text-sm mt-1 ml-8">{errors.terms}</p>}
                  </div>

                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-foreground mb-1">Dernière étape !</p>
                        <p className="text-muted-foreground">Après validation, vous recevrez un email dans les 24 heures pour accéder à votre espace et profiter de 7 jours d'essai gratuit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {errors.submit && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 mt-6">
                  <p className="text-red-500 text-sm">{errors.submit}</p>
                </div>
              )}

              <div className="flex gap-4 mt-8 pt-6 border-t border-border">
                {step > 1 && (
                  <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition font-medium">
                    Précédent
                  </button>
                )}
                
                {step < 2 ? (
                  <button type="button" onClick={handleNext} className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold">
                    Continuer
                  </button>
                ) : (
                  <button type="submit" disabled={isSubmitting} className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 size={20} />
                        Demander un espace
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
