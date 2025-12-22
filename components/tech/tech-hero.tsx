export default function TechHero() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="text-primary font-semibold">SECTION TECH</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Templates Web & Applications Mobiles
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl text-balance">
          Choisissez parmi notre collection de templates modernes et prêts à l'emploi. Téléchargez et personnalisez ou
          demandez un développement sur mesure.
        </p>
      </div>
    </section>
  )
}
