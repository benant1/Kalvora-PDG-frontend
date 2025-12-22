"use client"

import { useState, useEffect } from "react"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Eye,
  ShoppingCart,
  DollarSign,
  Users,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

interface AnalyticsData {
  revenue: { current: number; previous: number; change: number }
  orders: { current: number; previous: number; change: number }
  visitors: { current: number; previous: number; change: number }
  conversionRate: { current: number; previous: number; change: number }
  topProducts: { name: string; sales: number; revenue: number }[]
  revenueChart: { date: string; amount: number }[]
}

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [period, setPeriod] = useState("30days")

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) return

        // TODO: Appeler l'API pour récupérer les analytics
        // Données fictives pour l'affichage
        setAnalytics({
          revenue: { current: 0, previous: 0, change: 0 },
          orders: { current: 0, previous: 0, change: 0 },
          visitors: { current: 0, previous: 0, change: 0 },
          conversionRate: { current: 0, previous: 0, change: 0 },
          topProducts: [],
          revenueChart: []
        })
      } catch (error) {
        console.error("Erreur:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAnalytics()
  }, [period])

  const statCards = [
    {
      title: "Revenu",
      value: analytics ? `${analytics.revenue.current.toLocaleString()} €` : "0 €",
      change: analytics?.revenue.change || 0,
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Commandes",
      value: analytics?.orders.current || 0,
      change: analytics?.orders.change || 0,
      icon: ShoppingCart,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Visiteurs",
      value: analytics?.visitors.current || 0,
      change: analytics?.visitors.change || 0,
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Taux de conversion",
      value: `${analytics?.conversionRate.current || 0}%`,
      change: analytics?.conversionRate.change || 0,
      icon: TrendingUp,
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Statistiques</h1>
          <p className="text-muted-foreground mt-1">
            Analysez les performances de votre boutique
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="text-muted-foreground" size={20} />
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary outline-none"
          >
            <option value="7days">7 derniers jours</option>
            <option value="30days">30 derniers jours</option>
            <option value="90days">90 derniers jours</option>
            <option value="year">Cette année</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <span
                className={`flex items-center text-sm font-medium ${
                  stat.change >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.change >= 0 ? "+" : ""}{stat.change}%
                {stat.change >= 0 ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h2 className="text-xl font-bold text-foreground mb-6">Évolution du revenu</h2>
          <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Pas de données disponibles</p>
              <p className="text-sm text-muted-foreground mt-1">
                Les graphiques apparaîtront avec vos premières ventes
              </p>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h2 className="text-xl font-bold text-foreground mb-6">Produits les plus vendus</h2>
          {analytics?.topProducts.length === 0 ? (
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Aucun produit vendu</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Vos meilleurs produits apparaîtront ici
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {analytics?.topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/30"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.sales} ventes</p>
                    </div>
                  </div>
                  <p className="font-bold text-foreground">{product.revenue} €</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Eye className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Pages vues</h3>
          </div>
          <p className="text-3xl font-bold text-foreground mb-1">0</p>
          <p className="text-sm text-muted-foreground">Vues de vos produits</p>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <ShoppingCart className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground">Panier moyen</h3>
          </div>
          <p className="text-3xl font-bold text-foreground mb-1">0 €</p>
          <p className="text-sm text-muted-foreground">Valeur moyenne par commande</p>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-green-500/10">
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="font-semibold text-foreground">Croissance</h3>
          </div>
          <p className="text-3xl font-bold text-foreground mb-1">0%</p>
          <p className="text-sm text-muted-foreground">Par rapport au mois dernier</p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="p-3 rounded-full bg-primary/20">
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-foreground mb-1">
              📊 Améliorez vos statistiques
            </h3>
            <p className="text-sm text-muted-foreground">
              Ajoutez des produits et promouvez votre boutique pour voir vos statistiques s'améliorer. 
              Plus vous vendez, plus vos données seront détaillées!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
