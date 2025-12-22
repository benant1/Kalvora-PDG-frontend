export default function MarketHero() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-accent rounded-full"></div>
          <span className="text-accent font-semibold">SECTION MARKET</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Publiez sur Plusieurs Plateformes
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl text-balance">
          Vendez vos produits et services sur les plus grands réseaux sociaux et plateformes e-commerce. Ciblage
          géographique inclus.
        </p>
        {/* Additional content can be added here */}
      </div>
    </section>
  )
}
