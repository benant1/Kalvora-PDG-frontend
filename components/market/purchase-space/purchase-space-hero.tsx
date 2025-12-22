export default function PurchaseSpaceHero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted to-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-3 h-3 bg-accent rounded-full"></div>
          <span className="text-accent font-semibold">DÉBUTER VOTRE AVENTURE</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Achetez Votre Espace de Publication
        </h1>
        <p className="text-xl text-foreground/70 text-balance">
          Choisissez un plan et commencez à publier vos produits sur les plus grandes plateformes mondiales
        </p>
      </div>
    </section>
  )
}
