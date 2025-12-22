import Navigation from "@/components/navigation"

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Conditions Générales d'Utilisation</h1>
        
        <section className="space-y-6">
          <div>
            <p className="text-muted-foreground">
              Dernière mise à jour : 3 décembre 2025
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
            <p className="text-muted-foreground">
              Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme DevMarket. En accédant à notre site, vous acceptez sans réserve les présentes CGU.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Accès au service</h2>
            <p className="text-muted-foreground mb-3">
              L'accès à DevMarket est ouvert à toute personne physique ou morale ayant la capacité juridique. L'inscription est gratuite mais certains services peuvent être payants.
            </p>
            <p className="text-muted-foreground">
              Vous devez avoir au moins 18 ans pour utiliser nos services ou obtenir le consentement d'un parent ou tuteur légal.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Création de compte</h2>
            <p className="text-muted-foreground mb-3">
              Pour utiliser certaines fonctionnalités, vous devez créer un compte en fournissant des informations exactes et à jour :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Nom complet</li>
              <li>Adresse email valide</li>
              <li>Mot de passe sécurisé (minimum 8 caractères)</li>
              <li>Informations de facturation (pour les services payants)</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Vous êtes responsable de la confidentialité de vos identifiants et de toutes les activités effectuées sur votre compte.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Services proposés</h2>
            <p className="text-muted-foreground mb-3">
              DevMarket offre trois divisions principales :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Tech</strong> : Templates et solutions techniques pour développeurs</li>
              <li><strong>Design</strong> : Ressources graphiques et services de design</li>
              <li><strong>Market</strong> : Outils et espaces de publication marketing</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Nous nous réservons le droit de modifier, suspendre ou interrompre tout ou partie des services à tout moment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Obligations de l'utilisateur</h2>
            <p className="text-muted-foreground mb-3">
              En utilisant DevMarket, vous vous engagez à :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Fournir des informations exactes et complètes</li>
              <li>Respecter les droits de propriété intellectuelle</li>
              <li>Ne pas diffuser de contenu illégal, offensant ou nuisible</li>
              <li>Ne pas utiliser le service à des fins frauduleuses</li>
              <li>Ne pas tenter d'accéder aux comptes d'autres utilisateurs</li>
              <li>Ne pas perturber le fonctionnement de la plateforme</li>
              <li>Respecter les règles de la communauté</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              Tous les contenus présents sur DevMarket (textes, images, logos, designs, code source) sont protégés par le droit d'auteur et appartiennent à DevMarket ou à ses partenaires.
            </p>
            <p className="text-muted-foreground mt-3">
              Toute reproduction, distribution ou utilisation commerciale sans autorisation écrite est strictement interdite.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Contenu utilisateur</h2>
            <p className="text-muted-foreground">
              En publiant du contenu sur DevMarket, vous accordez à la plateforme une licence mondiale, non exclusive et gratuite pour utiliser, reproduire et diffuser ce contenu dans le cadre de nos services.
            </p>
            <p className="text-muted-foreground mt-3">
              Vous restez propriétaire de votre contenu et garantissez que vous disposez de tous les droits nécessaires.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">8. Paiements et abonnements</h2>
            <p className="text-muted-foreground mb-3">
              Les services payants sont facturés selon les tarifs en vigueur :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Basic</strong> : 29€/mois - publication sur 2 plateformes</li>
              <li><strong>Pro</strong> : 59€/mois - publication sur 5 plateformes</li>
              <li><strong>Enterprise</strong> : 99€/mois - publication illimitée</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Les paiements sont sécurisés et traités par nos partenaires certifiés. Les abonnements sont renouvelés automatiquement sauf résiliation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">9. Résiliation</h2>
            <p className="text-muted-foreground">
              Vous pouvez résilier votre compte à tout moment depuis vos paramètres. Nous nous réservons le droit de suspendre ou supprimer votre compte en cas de violation des présentes CGU.
            </p>
            <p className="text-muted-foreground mt-3">
              En cas de résiliation, vos données seront supprimées conformément à notre politique de confidentialité, sauf obligation légale de conservation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">10. Limitation de responsabilité</h2>
            <p className="text-muted-foreground">
              DevMarket met tout en œuvre pour assurer la disponibilité et la sécurité de ses services, mais ne garantit pas :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-3">
              <li>L'absence d'interruption ou d'erreurs</li>
              <li>La compatibilité avec tous les appareils</li>
              <li>L'exactitude des contenus tiers</li>
              <li>La prévention de toute perte de données</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Notre responsabilité est limitée au montant payé par l'utilisateur au cours des 12 derniers mois.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">11. Force majeure</h2>
            <p className="text-muted-foreground">
              DevMarket ne saurait être tenu responsable de tout retard ou inexécution résultant d'événements indépendants de sa volonté (catastrophe naturelle, grève, panne de réseau, etc.).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">12. Modifications des CGU</h2>
            <p className="text-muted-foreground">
              Nous nous réservons le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication. Votre utilisation continue du service vaut acceptation des nouvelles conditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">13. Droit applicable</h2>
            <p className="text-muted-foreground">
              Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents de Paris, sauf dispositions légales contraires.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">14. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant ces conditions :<br />
              Email : legal@devmarket.com<br />
              Téléphone : +33 1 23 45 67 89<br />
              Adresse : 123 Avenue de l'Innovation, 75001 Paris, France
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
