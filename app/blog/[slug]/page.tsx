import Link from "next/link"

const POSTS: Record<string, { title: string; content: string; date: string }> = {
  "lancer-votre-produit-en-5-etapes": {
    title: "Lancer votre produit en 5 étapes",
    date: "2025-11-15",
    content:
      "<p>Publier un produit peut sembler difficile — voici un guide simple en 5 étapes : 1) Validez l'idée, 2) Prototypage, 3) Tests utilisateurs, 4) Préparez les assets, 5) Lancez et itérez.</p><p>Chaque étape nécessite des outils adaptés; DevMarket facilite la partie publication et suivi.</p>",
  },
  "design-modernes-pour-interfaces": {
    title: "Design modernes pour interfaces",
    date: "2025-10-20",
    content:
      "<p>Les tendances actuelles privilégient la clarté, la typographie expressive et les micro-interactions. Utilisez des composants réutilisables et testez vos choix couleurs pour l'accessibilité.</p>",
  },
  "optimiser-vos-campagnes-marketing": {
    title: "Optimiser vos campagnes marketing",
    date: "2025-09-30",
    content:
      "<p>Pour maximiser votre ROI, segmentez vos audiences, testez vos creatives en A/B et suivez les conversions avec des événements clairs.</p>",
  },
}

import Head from "next/head"

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug]

  if (!post) {
    return (
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold">Article introuvable</h1>
          <p className="text-muted-foreground mt-4">L'article demandé est introuvable. Retournez au <Link href="/blog" className="text-primary">blog</Link>.</p>
        </div>
      </section>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} · DevMarket</title>
        <meta name="description" content={(post.content || "").replace(/<[^>]+>/g, "").slice(0, 160)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={(post.content || "").replace(/<[^>]+>/g, "").slice(0, 160)} />
        <meta property="og:type" content="article" />
      </Head>
    <section className="px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/blog" className="text-sm text-muted-foreground">← Retour au blog</Link>
        </div>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <time className="text-sm text-muted-foreground">{post.date}</time>
        <article className="mt-6 prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </section>
    </>
  )
}
