"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import Navigation from "@/components/navigation"

const posts = [
  {
    slug: "lancer-votre-produit-en-5-etapes",
    title: "Lancer votre produit en 5 étapes",
    excerpt: "Un guide pratique pour passer de l'idée à la mise en ligne rapidement.",
    date: "2025-11-15",
    thumb: "/blog/thumb1.svg",
  },
  {
    slug: "design-modernes-pour-interfaces",
    title: "Design modernes pour interfaces",
    excerpt: "Principes et ressources pour des interfaces claires et agréables.",
    date: "2025-10-20",
    thumb: "/blog/thumb2.svg",
  },
  {
    slug: "optimiser-vos-campagnes-marketing",
    title: "Optimiser vos campagnes marketing",
    excerpt: "Conseils pour améliorer le ROI de vos campagnes publicitaires.",
    date: "2025-09-30",
    thumb: "/blog/thumb3.svg",
  },
]

export default function BlogPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </main>
    )
  }

  if (!user) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600">Redirection...</p>
        </div>
      </main>
    )
  }

  // simple client-side search + pagination
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const pageSize = 6

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      p.date.includes(query)
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize)

  return (
    <>
      <Navigation />
      <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Blog DevMarket</h1>
          <p className="text-muted-foreground mt-2">Articles, guides et actualités autour du développement, design et marketing.</p>
        </header>

        <div className="flex items-center gap-4 mb-6">
          <input
            placeholder="Rechercher un article..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1) }}
            className="flex-1 px-4 py-2 border border-border rounded-lg bg-background"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pageItems.map((post) => (
            <article key={post.slug} className="p-4 bg-card border border-border rounded-xl shadow-sm flex gap-4 items-center">
              <img src={post.thumb} alt={post.title} className="w-28 h-20 object-cover rounded-md flex-shrink-0" />
              <div>
                <h2 className="text-lg font-semibold mb-1">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
                <div className="flex items-center gap-4">
                  <Link href={`/blog/${post.slug}`} className="text-sm text-primary font-medium">
                    Lire l'article →
                  </Link>
                  <time className="text-xs text-muted-foreground">{post.date}</time>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-3 py-1 border rounded" disabled={page === 1}>
            Préc
          </button>
          <span className="text-sm text-muted-foreground">Page {page} / {totalPages}</span>
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="px-3 py-1 border rounded" disabled={page === totalPages}>
            Suiv
          </button>
        </div>
      </div>
    </section>
    </>
  )
}
