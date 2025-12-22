import Navigation from "@/components/navigation"

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <section className="space-y-6">
          <div>
            <p className="text-muted-foreground">
              Dernière mise à jour : 3 décembre 2025
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              DevMarket s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Données collectées</h2>
            <p className="text-muted-foreground mb-3">
              Nous collectons les types de données suivants :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Informations d'identification</strong> : nom, prénom, adresse email, numéro de téléphone</li>
              <li><strong>Informations de compte</strong> : nom d'utilisateur, mot de passe (chiffré), photo de profil</li>
              <li><strong>Données de transaction</strong> : historique d'achats, méthodes de paiement, adresses de facturation</li>
              <li><strong>Données techniques</strong> : adresse IP, type de navigateur, système d'exploitation, pages visitées</li>
              <li><strong>Cookies et traceurs</strong> : données de navigation et préférences utilisateur</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Utilisation des données</h2>
            <p className="text-muted-foreground mb-3">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Fournir et améliorer nos services</li>
              <li>Traiter vos commandes et paiements</li>
              <li>Communiquer avec vous (notifications, support client)</li>
              <li>Personnaliser votre expérience utilisateur</li>
              <li>Assurer la sécurité de la plateforme</li>
              <li>Respecter nos obligations légales</li>
              <li>Analyser l'utilisation du site pour améliorer nos services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Partage des données</h2>
            <p className="text-muted-foreground">
              Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations avec :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-3">
              <li><strong>Prestataires de services</strong> : hébergement, paiement, email, analytique</li>
              <li><strong>Partenaires commerciaux</strong> : uniquement avec votre consentement explicite</li>
              <li><strong>Autorités légales</strong> : si requis par la loi ou pour protéger nos droits</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Sécurité des données</h2>
            <p className="text-muted-foreground">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-3">
              <li>Chiffrement SSL/TLS pour toutes les communications</li>
              <li>Stockage sécurisé des mots de passe (hachage bcrypt)</li>
              <li>Surveillance continue des activités suspectes</li>
              <li>Accès limité aux données personnelles (principe du moindre privilège)</li>
              <li>Sauvegardes régulières et plan de reprise d'activité</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Vos droits</h2>
            <p className="text-muted-foreground mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la limitation</strong> : restreindre le traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement</strong> : à tout moment</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Pour exercer ces droits, contactez-nous à : privacy@devmarket.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
            <p className="text-muted-foreground">
              Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur ou via notre outil de gestion des cookies.
            </p>
            <p className="text-muted-foreground mt-3">
              Consultez notre <a href="/cookies" className="text-primary hover:underline">politique de cookies</a> pour plus d'informations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">8. Conservation des données</h2>
            <p className="text-muted-foreground">
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services ou conformément aux obligations légales. Les données de compte inactif sont supprimées après 3 ans d'inactivité.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">9. Modifications</h2>
            <p className="text-muted-foreground">
              Nous pouvons modifier cette politique de confidentialité à tout moment. Les changements importants vous seront notifiés par email ou via une notification sur le site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant cette politique :<br />
              Email : privacy@devmarket.com<br />
              Adresse : 123 Avenue de l'Innovation, 75001 Paris, France
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
