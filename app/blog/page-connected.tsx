'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import { blogApi } from '@/lib/api'

interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    blogApi.getPosts()
      .then(setPosts)
      .catch((err) => setError(err?.error || 'Erreur lors du chargement'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Blog</h1>
          
          {loading && <p className="text-foreground/70">Chargement...</p>}
          {error && <p className="text-red-500">{error}</p>}
          
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition cursor-pointer">
                <h2 className="text-2xl font-semibold text-foreground mb-2">{post.title}</h2>
                <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                <p className="text-sm text-foreground/50">{new Date(post.date).toLocaleDateString('fr-FR')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
