'use client'

import { useState } from 'react'
import { Facebook, Linkedin, Instagram, Music2, Share2, CheckCircle, AlertCircle } from 'lucide-react'

interface SocialShareProps {
  articleId: string
  title: string
  description: string
  imageUrl?: string
  articleUrl: string
  onShareComplete?: (results: any) => void
}

export function SocialSharePanel({ 
  articleId, 
  title, 
  description, 
  imageUrl, 
  articleUrl,
  onShareComplete 
}: SocialShareProps) {
  const [isSharing, setIsSharing] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [selectedPlatforms, setSelectedPlatforms] = useState<{ [key: string]: boolean }>({
    facebook: true,
    linkedin: true,
    instagram: true,
    tiktok: true,
  })

  const platforms = [
    { 
      id: 'facebook', 
      name: 'Facebook', 
      icon: Facebook, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    { 
      id: 'linkedin', 
      name: 'LinkedIn', 
      icon: Linkedin, 
      color: 'text-blue-700',
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    { 
      id: 'instagram', 
      name: 'Instagram', 
      icon: Instagram, 
      color: 'text-pink-600',
      bgColor: 'bg-pink-50 hover:bg-pink-100'
    },
    { 
      id: 'tiktok', 
      name: 'TikTok', 
      icon: Music2, 
      color: 'text-black',
      bgColor: 'bg-gray-50 hover:bg-gray-100'
    },
  ]

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => ({
      ...prev,
      [platformId]: !prev[platformId]
    }))
  }

  const handleShare = async () => {
    if (Object.values(selectedPlatforms).every(v => !v)) {
      alert('Sélectionnez au moins un réseau social')
      return
    }

    setIsSharing(true)
    
    try {
      const response = await fetch('/api/social/share-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articleId,
          title,
          description,
          imageUrl,
          articleUrl,
          selectedPlatforms: Object.keys(selectedPlatforms).filter(k => selectedPlatforms[k as keyof typeof selectedPlatforms]),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setResults(data.results)
        onShareComplete?.(data)
      } else {
        alert('Erreur lors du partage: ' + data.error)
      }
    } catch (error) {
      console.error('Share error:', error)
      alert('Une erreur est survenue lors du partage')
    } finally {
      setIsSharing(false)
    }
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-2">
          <Share2 size={20} className="text-primary" />
          Partager sur les réseaux sociaux
        </h3>
        <p className="text-sm text-muted-foreground">
          Votre article sera automatiquement partagé sur les comptes Kalvora sélectionnés
        </p>
      </div>

      {/* Platform Selection */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {platforms.map(platform => {
          const Icon = platform.icon
          const isSelected = selectedPlatforms[platform.id as keyof typeof selectedPlatforms]
          
          return (
            <button
              key={platform.id}
              onClick={() => togglePlatform(platform.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                isSelected 
                  ? `border-primary ${platform.bgColor}` 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <Icon className={`${platform.color} transition-transform ${isSelected ? 'scale-110' : ''}`} size={24} />
              <span className="text-xs font-medium text-foreground text-center">{platform.name}</span>
              {isSelected && (
                <CheckCircle size={16} className="text-primary absolute top-2 right-2" />
              )}
            </button>
          )
        })}
      </div>

      {/* Share Button */}
      <button
        onClick={handleShare}
        disabled={isSharing}
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition font-semibold flex items-center justify-center gap-2"
      >
        {isSharing ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
            Partage en cours...
          </>
        ) : (
          <>
            <Share2 size={18} />
            Partager maintenant
          </>
        )}
      </button>

      {/* Results */}
      {results && (
        <div className="mt-6 space-y-3 border-t border-border pt-6">
          <h4 className="font-semibold text-foreground">Résultats du partage :</h4>
          {Object.entries(results).map(([platform, result]: [string, any]) => {
            const isSuccess = result && !result.error
            const platformName = platforms.find(p => p.id === platform)?.name || platform
            
            return (
              <div key={platform} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                {isSuccess ? (
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{platformName}</p>
                  {isSuccess ? (
                    <p className="text-xs text-green-600">
                      ✓ Partagé avec succès
                      {result.url && (
                        <a 
                          href={result.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-2 underline hover:no-underline"
                        >
                          Voir le post
                        </a>
                      )}
                    </p>
                  ) : (
                    <p className="text-xs text-orange-600">
                      ⚠ {result?.error || 'Erreur inconnue'}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
