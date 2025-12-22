import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function MarketCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-accent/10 to-accent/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Prêt à Publier vos Produits?</h2>
        <p className="text-lg text-foreground/70 mb-8 text-balance">
          Créez votre espace de publication et accédez à millions de clients sur les plus grandes plateformes
        </p>
        <Link
          href="/market/publication-space/info"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 font-semibold transition"
        >
          Créer un Espace de Publication
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  )
}
