export default function DesignHero() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-secondary rounded-full"></div>
          <span className="text-secondary font-semibold">SECTION DESIGN</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Designs UI/UX Premium et Prêts à l'Emploi
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl text-balance">
          Accédez à une collection de designs UI/UX créés par les meilleurs designers. Téléchargez en Figma, Adobe XD ou
          demandez une adaptation personnalisée.
        </p>
      </div>
    </section>
  )
}
