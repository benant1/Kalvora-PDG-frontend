import Navigation from "@/components/navigation"
import { Mail, MessageCircle, Phone, Clock, ExternalLink } from "lucide-react"

export default function SupportPage() {
  return (
    <>
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support & Assistance</h1>
          <p className="text-muted-foreground text-lg">
            Notre équipe est là pour vous aider. Choisissez le canal qui vous convient.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Email Support */}
          <div className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Réponse sous 24h (jours ouvrés)
            </p>
            <a href="mailto:support@devmarket.com" className="text-primary hover:underline flex items-center gap-2">
              support@devmarket.com
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Chat Support */}
          <div className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-lg mb-2">Chat en direct</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Disponible 9h-18h (lun-ven)
            </p>
            <button className="text-primary hover:underline flex items-center gap-2">
              Démarrer une conversation
              <ExternalLink size={16} />
            </button>
          </div>

          {/* Phone Support */}
          <div className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Lun-Ven: 9h-18h
            </p>
            <a href="tel:+33123456789" className="text-primary hover:underline flex items-center gap-2">
              +33 1 23 45 67 89
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
          <div className="space-y-4">
            <details className="p-6 bg-card border border-border rounded-xl group">
              <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                Comment créer un compte ?
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4 text-sm">
                Cliquez sur "S'inscrire" en haut à droite, remplissez le formulaire avec votre email et mot de passe, puis validez votre compte via l'email de confirmation.
              </p>
            </details>

            <details className="p-6 bg-card border border-border rounded-xl group">
              <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                Comment résilier mon abonnement ?
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4 text-sm">
                Rendez-vous dans Paramètres → Abonnement → Résilier. Votre accès restera actif jusqu'à la fin de la période payée.
              </p>
            </details>

            <details className="p-6 bg-card border border-border rounded-xl group">
              <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                Quels modes de paiement acceptez-vous ?
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4 text-sm">
                Nous acceptons les cartes bancaires (Visa, Mastercard, Amex), PayPal, virements SEPA et Apple Pay. Tous les paiements sont sécurisés via Stripe.
              </p>
            </details>

            <details className="p-6 bg-card border border-border rounded-xl group">
              <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                Comment publier sur plusieurs plateformes ?
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4 text-sm">
                Selon votre abonnement (Basic: 2 plateformes, Pro: 5, Enterprise: illimité), créez votre publication dans Market → Publier, et sélectionnez les plateformes souhaitées. Le système se charge de la diffusion.
              </p>
            </details>

            <details className="p-6 bg-card border border-border rounded-xl group">
              <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                Mes données sont-elles sécurisées ?
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4 text-sm">
                Oui. Nous utilisons le chiffrement SSL/TLS, des sauvegardes quotidiennes et respectons le RGPD. Consultez notre <a href="/privacy" className="text-primary hover:underline">politique de confidentialité</a> pour plus de détails.
              </p>
            </details>

            <details className="p-6 bg-card border border-border rounded-xl group">
              <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                Puis-je obtenir un remboursement ?
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4 text-sm">
                Nous offrons une garantie satisfait ou remboursé de 14 jours pour tous les nouveaux abonnements. Contactez le support avec votre numéro de commande.
              </p>
            </details>
          </div>

          <div className="mt-6 text-center">
            <a href="/faq" className="text-primary hover:underline inline-flex items-center gap-2">
              Voir toutes les questions fréquentes
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                  placeholder="jean.dupont@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Sujet</label>
              <select className="w-full px-4 py-2 border border-border rounded-lg bg-background">
                <option>Question générale</option>
                <option>Problème technique</option>
                <option>Facturation</option>
                <option>Suggestion</option>
                <option>Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows={6}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                placeholder="Décrivez votre demande en détail..."
              />
            </div>

            <button 
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
            >
              Envoyer le message
            </button>
          </form>
        </div>

        {/* Hours */}
        <div className="mt-12 p-6 bg-muted rounded-xl flex items-start gap-4">
          <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-semibold mb-2">Heures d'ouverture</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><strong>Lundi - Vendredi:</strong> 9h00 - 18h00</p>
              <p><strong>Samedi:</strong> 10h00 - 16h00</p>
              <p><strong>Dimanche:</strong> Fermé</p>
              <p className="mt-2 text-xs">Temps de réponse moyen: 2-4 heures pendant les heures d'ouverture</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
