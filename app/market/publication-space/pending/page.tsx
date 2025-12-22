"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Clock, Mail, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function PendingApprovalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-green-500/20 animate-pulse">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Inscription{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Reçue !
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Merci pour votre inscription. Votre dossier est en cours de vérification.
            </p>
          </div>

          {/* Main Card */}
          <div className="p-8 md:p-12 rounded-2xl bg-card border border-border shadow-xl mb-8">
            <div className="space-y-6">
              {/* Timeline */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      Inscription complétée
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Vos informations ont été enregistrées avec succès
                    </p>
                  </div>
                </div>

                <div className="ml-5 h-8 w-0.5 bg-gradient-to-b from-green-500 to-orange-500" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      Vérification en cours
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Notre équipe examine votre dossier (maximum 24 heures)
                    </p>
                  </div>
                </div>

                <div className="ml-5 h-8 w-0.5 bg-gradient-to-b from-orange-500 to-border opacity-50" />

                <div className="flex items-start gap-4 opacity-50">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      Email de confirmation
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Vous recevrez un email avec vos identifiants de connexion
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Info */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Que se passe-t-il maintenant ?
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Notre équipe vérifie vos documents d'identité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Vous recevrez un email de confirmation dans les <strong className="text-foreground">24 heures maximum</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>L'email contiendra vos identifiants de connexion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Vous pourrez alors vous connecter et profiter de <strong className="text-foreground">7 jours d'essai gratuit</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Email Verification */}
              <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-foreground font-medium mb-1">
                      Vérifiez votre boîte email
                    </p>
                    <p className="text-muted-foreground">
                      Un email de confirmation a été envoyé à votre adresse. 
                      Pensez à vérifier vos spams si vous ne le recevez pas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Link
              href="/"
              className="block w-full px-6 py-3 bg-muted text-foreground text-center rounded-lg hover:bg-muted/80 transition font-medium"
            >
              Retour à l'accueil
            </Link>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Des questions ?{" "}
                <Link href="/contact" className="text-primary hover:underline font-medium">
                  Contactez notre support
                </Link>
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-primary mb-1">24h</div>
              <div className="text-xs text-muted-foreground">Délai max</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-primary mb-1">7j</div>
              <div className="text-xs text-muted-foreground">Essai gratuit</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-xs text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
