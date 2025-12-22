import { NextResponse } from "next/server"

const posts = [
  { slug: "lancer-votre-produit-en-5-etapes", title: "Lancer votre produit en 5 étapes", date: "2025-11-15", excerpt: "Un guide pratique pour passer de l'idée à la mise en ligne rapidement.", url: "/blog/lancer-votre-produit-en-5-etapes" },
  { slug: "design-modernes-pour-interfaces", title: "Design modernes pour interfaces", date: "2025-10-20", excerpt: "Principes et ressources pour des interfaces claires et agréables.", url: "/blog/design-modernes-pour-interfaces" },
  { slug: "optimiser-vos-campagnes-marketing", title: "Optimiser vos campagnes marketing", date: "2025-09-30", excerpt: "Conseils pour améliorer le ROI de vos campagnes publicitaires.", url: "/blog/optimiser-vos-campagnes-marketing" },
]

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const items = posts.map((p) => `
    <item>
      <title>${p.title}</title>
      <link>${base}${p.url}</link>
      <guid>${base}${p.url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${p.excerpt}</description>
    </item>`).join("\n")

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>DevMarket Blog</title>
      <link>${base}/blog</link>
      <description>Articles et actualités de DevMarket</description>
      ${items}
    </channel>
  </rss>`

  return new NextResponse(rss, {
    headers: { "Content-Type": "application/rss+xml" },
  })
}
