"use client"

import Image from "next/image"
import { Download, MessageSquare, Loader, X } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"

interface Template {
  id: number
  title: string
  description: string
  image: string
  price: string
  features: string[]
  templateId?: string
}

export default function TemplateCard({ template }: { template: Template }) {
  const { user } = useAuth()
  const [isRequesting, setIsRequesting] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: `Développement - ${template.title}`,
    description: '',
    budget: '',
    deadline: ''
  })
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleDownload = async () => {
    try {
      setIsDownloading(true)
      const templateId = template.templateId || template.title.toLowerCase().replace(/\s+/g, '-')
      
      const response = await fetch(`http://localhost:4000/api/v1/tech/templates/${templateId}/download`)
      
      if (!response.ok) {
        throw new Error('Téléchargement échoué')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${templateId}-${Date.now()}.zip`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Erreur de téléchargement:', error)
      alert('Erreur lors du téléchargement du template')
    } finally {
      setIsDownloading(false)
    }
  }

  const handleSubmitRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!user) {
      setSubmitMessage({ type: 'error', text: 'Veuillez vous connecter pour demander un développement' })
      setTimeout(() => setSubmitMessage(null), 3000)
      return
    }

    if (!formData.title.trim() || !formData.description.trim()) {
      setSubmitMessage({ type: 'error', text: 'Veuillez remplir tous les champs' })
      setTimeout(() => setSubmitMessage(null), 3000)
      return
    }

    try {
      setIsSubmitting(true)
      const response = await fetch('http://localhost:4000/api/v1/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token || ''}`
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          budget: formData.budget || null,
          deadline: formData.deadline || null,
          templateId: template.id
        })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Erreur lors de la soumission')
      }

      setSubmitMessage({ type: 'success', text: 'Votre demande a été envoyée avec succès !' })
      setTimeout(() => {
        setShowModal(false)
        setFormData({
          title: `Développement - ${template.title}`,
          description: '',
          budget: '',
          deadline: ''
        })
        setSubmitMessage(null)
      }, 2000)
    } catch (error) {
      console.error('Erreur:', error)
      setSubmitMessage({ type: 'error', text: error instanceof Error ? error.message : 'Erreur lors de la soumission' })
      setTimeout(() => setSubmitMessage(null), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="group rounded-lg border border-border bg-card overflow-hidden hover:border-primary transition hover:shadow-lg">
        <div className="relative h-48 bg-muted overflow-hidden">
          <Image
            src={template.image || "/placeholder.svg"}
            alt={template.title}
            fill
            className="object-cover group-hover:scale-105 transition"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
              title="Télécharger le template"
            >
              {isDownloading ? <Loader size={20} className="animate-spin" /> : <Download size={20} />}
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="p-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition"
              title="Demander un développement"
            >
              <MessageSquare size={20} />
            </button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg text-foreground mb-2">{template.title}</h3>
          <p className="text-foreground/70 text-sm mb-4">{template.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {template.features.map((feature) => (
              <span key={feature} className="text-xs bg-muted text-foreground/70 px-2 py-1 rounded">
                {feature}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold text-primary">{template.price}</span>
            <span className="text-xs text-foreground/50">Réf: #{template.id}</span>
          </div>
        </div>
      </div>

      {/* Modal de demande de développement */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg border border-border shadow-lg max-w-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">Demander un Développement</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-muted rounded transition"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmitRequest} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Titre
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="Titre de votre demande"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary min-h-24 resize-none"
                  placeholder="Décrivez vos besoins en détail..."
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Budget estimé
                  </label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                    placeholder="Ex: 500-1000€"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Deadline
                  </label>
                  <input
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {submitMessage && (
                <div className={`p-3 rounded-lg ${
                  submitMessage.type === 'success'
                    ? 'bg-green-500/10 text-green-700 border border-green-500'
                    : 'bg-red-500/10 text-red-700 border border-red-500'
                }`}>
                  {submitMessage.text}
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition font-semibold flex items-center justify-center gap-2"
                >
                  {isSubmitting && <Loader size={16} className="animate-spin" />}
                  Soumettre
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
