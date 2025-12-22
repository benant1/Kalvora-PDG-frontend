import Navigation from "@/components/navigation"

export default function CookiesPage() {
  return (
    <>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Politique de Cookies</h1>
        
        <section className="space-y-6">
          <div>
            <p className="text-muted-foreground">
              Dernière mise à jour : 3 décembre 2025
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Qu'est-ce qu'un cookie ?</h2>
            <p className="text-muted-foreground">
              Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) lors de votre visite sur un site web. Les cookies permettent au site de mémoriser vos préférences et d'améliorer votre expérience utilisateur.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Types de cookies utilisés</h2>
            
            <div className="space-y-4 mt-4">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Cookies essentiels (obligatoires)</h3>
                <p className="text-muted-foreground text-sm">
                  Ces cookies sont nécessaires au fonctionnement du site. Ils vous permettent de naviguer et d'utiliser les fonctionnalités de base (connexion, panier, sécurité).
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  <strong>Exemples :</strong> session utilisateur, authentification, sécurité CSRF
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  <strong>Durée :</strong> Session ou 30 jours
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Cookies de performance</h3>
                <p className="text-muted-foreground text-sm">
                  Ces cookies collectent des informations anonymes sur la façon dont vous utilisez notre site pour nous aider à améliorer ses performances.
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  <strong>Exemples :</strong> Google Analytics, temps de chargement, pages visitées
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  <strong>Durée :</strong> 13 mois
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Cookies de fonctionnalité</h3>
                <p className="text-muted-foreground text-sm">
                  Ces cookies permettent au site de mémoriser vos choix (langue, région, préférences) pour vous offrir une expérience personnalisée.
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  <strong>Exemples :</strong> préférences de langue, thème sombre/clair, taille de police
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  <strong>Durée :</strong> 12 mois
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Cookies publicitaires</h3>
                <p className="text-muted-foreground text-sm">
                  Ces cookies sont utilisés pour vous proposer des publicités pertinentes et mesurer l'efficacité de nos campagnes marketing.
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  <strong>Exemples :</strong> Google Ads, Facebook Pixel, retargeting
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  <strong>Durée :</strong> 13 mois
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Cookies tiers</h2>
            <p className="text-muted-foreground mb-3">
              Nous utilisons des services tiers qui peuvent déposer des cookies sur votre appareil :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Google Analytics</strong> : analyse du trafic et comportement utilisateur</li>
              <li><strong>Google Ads</strong> : publicité ciblée et remarketing</li>
              <li><strong>Facebook Pixel</strong> : suivi des conversions publicitaires</li>
              <li><strong>Stripe</strong> : traitement sécurisé des paiements</li>
              <li><strong>Vercel Analytics</strong> : performance et monitoring du site</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Ces services sont soumis à leurs propres politiques de confidentialité.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Gestion de vos préférences</h2>
            <p className="text-muted-foreground mb-3">
              Vous pouvez contrôler et gérer les cookies de plusieurs façons :
            </p>
            
            <div className="space-y-3 ml-4">
              <div>
                <h3 className="font-semibold text-sm mb-1">Via notre bandeau de consentement</h3>
                <p className="text-muted-foreground text-sm">
                  Lors de votre première visite, vous pouvez accepter ou refuser les cookies non essentiels. Vous pouvez modifier vos préférences à tout moment via le lien "Gérer les cookies" en bas de page.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-1">Via les paramètres de votre navigateur</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Vous pouvez configurer votre navigateur pour refuser tous les cookies ou être alerté lorsqu'un cookie est envoyé :
                </p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                  <li><strong>Chrome</strong> : Paramètres → Confidentialité et sécurité → Cookies</li>
                  <li><strong>Firefox</strong> : Options → Vie privée et sécurité → Cookies</li>
                  <li><strong>Safari</strong> : Préférences → Confidentialité → Cookies</li>
                  <li><strong>Edge</strong> : Paramètres → Confidentialité → Cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-1">Via des outils tiers</h3>
                <p className="text-muted-foreground text-sm">
                  Vous pouvez utiliser des extensions de navigateur comme Privacy Badger, uBlock Origin ou Ghostery pour bloquer les traceurs.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mt-4 p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
              ⚠️ <strong>Attention :</strong> Le blocage de certains cookies peut affecter votre expérience utilisateur et limiter l'accès à certaines fonctionnalités du site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Liste détaillée des cookies</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-3 text-left border-b">Nom</th>
                    <th className="p-3 text-left border-b">Type</th>
                    <th className="p-3 text-left border-b">Durée</th>
                    <th className="p-3 text-left border-b">Description</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="p-3 font-mono text-xs">session_id</td>
                    <td className="p-3">Essentiel</td>
                    <td className="p-3">Session</td>
                    <td className="p-3">Identifiant de session utilisateur</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-mono text-xs">csrf_token</td>
                    <td className="p-3">Essentiel</td>
                    <td className="p-3">Session</td>
                    <td className="p-3">Protection contre les attaques CSRF</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-mono text-xs">auth_token</td>
                    <td className="p-3">Essentiel</td>
                    <td className="p-3">30 jours</td>
                    <td className="p-3">Token d'authentification</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-mono text-xs">_ga</td>
                    <td className="p-3">Performance</td>
                    <td className="p-3">13 mois</td>
                    <td className="p-3">Google Analytics - identifiant unique</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-mono text-xs">_gid</td>
                    <td className="p-3">Performance</td>
                    <td className="p-3">24 heures</td>
                    <td className="p-3">Google Analytics - statistiques</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-mono text-xs">theme</td>
                    <td className="p-3">Fonctionnalité</td>
                    <td className="p-3">12 mois</td>
                    <td className="p-3">Préférence thème clair/sombre</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-mono text-xs">lang</td>
                    <td className="p-3">Fonctionnalité</td>
                    <td className="p-3">12 mois</td>
                    <td className="p-3">Langue préférée</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs">_fbp</td>
                    <td className="p-3">Publicité</td>
                    <td className="p-3">3 mois</td>
                    <td className="p-3">Facebook Pixel - tracking conversions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Durée de conservation</h2>
            <p className="text-muted-foreground">
              Les cookies sont conservés pour des durées variables selon leur type et finalité :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-3">
              <li><strong>Cookies de session</strong> : supprimés à la fermeture du navigateur</li>
              <li><strong>Cookies persistants</strong> : conservés jusqu'à expiration (max 13 mois)</li>
              <li><strong>Cookies essentiels</strong> : conservés tant que nécessaire au fonctionnement</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Mises à jour</h2>
            <p className="text-muted-foreground">
              Nous pouvons mettre à jour cette politique de cookies pour refléter les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.
            </p>
            <p className="text-muted-foreground mt-3">
              La date de dernière mise à jour est indiquée en haut de cette page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant notre utilisation des cookies :<br />
              Email : privacy@devmarket.com<br />
              Téléphone : +33 1 23 45 67 89<br />
              Adresse : 123 Avenue de l'Innovation, 75001 Paris, France
            </p>
          </div>

          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="font-semibold mb-3">📋 Gérer vos préférences</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Vous pouvez modifier vos choix concernant les cookies à tout moment en cliquant sur le bouton ci-dessous :
            </p>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition">
              Gérer mes cookies
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
