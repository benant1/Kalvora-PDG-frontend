import Navigation from "@/components/navigation"

export default function LegalPage() {
  return (
    <>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
        
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Éditeur du site</h2>
            <p className="text-muted-foreground">
              DevMarket<br />
              Société par actions simplifiée au capital de 10 000 €<br />
              Siège social : 123 Avenue de l'Innovation, 75001 Paris, France<br />
              RCS Paris : 123 456 789<br />
              SIRET : 123 456 789 00012<br />
              N° TVA intracommunautaire : FR12 123456789
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Directeur de la publication</h2>
            <p className="text-muted-foreground">
              Directeur de publication : Jean Dupont<br />
              Email : contact@devmarket.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Hébergeur</h2>
            <p className="text-muted-foreground">
              Ce site est hébergé par :<br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA<br />
              Site web : https://vercel.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="text-muted-foreground mt-4">
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Données personnelles</h2>
            <p className="text-muted-foreground">
              Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à la gestion des services proposés. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent.
            </p>
            <p className="text-muted-foreground mt-4">
              Pour exercer ce droit, vous pouvez contacter : privacy@devmarket.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Crédits</h2>
            <p className="text-muted-foreground">
              Conception et réalisation : DevMarket<br />
              Framework : Next.js<br />
              Design : Tailwind CSS & shadcn/ui
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant le site, vous pouvez nous contacter :<br />
              Email : contact@devmarket.com<br />
              Téléphone : +33 1 23 45 67 89<br />
              Adresse : 123 Avenue de l'Innovation, 75001 Paris, France
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
