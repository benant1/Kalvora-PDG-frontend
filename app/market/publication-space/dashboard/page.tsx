"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Package,
  TrendingUp,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  PlusCircle,
  Eye,
  ShoppingCart,
  Loader2
} from "lucide-react"

interface DashboardStats {
  stats: {
    products: { total: number; published: number; draft: number }
    orders: { total: number; pending: number; completed: number }
    revenue: number
    views: number
  }
  topProducts: any[]
  recentOrders: any[]
}

export default function VendorDashboardPage() {
  const [data, setData] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) return

        const response = await fetch("http://localhost:4000/api/v1/vendor/dashboard/stats", {
          headers: { Authorization: `Bearer ${token}` }
        })

        if (!response.ok) {
          throw new Error("Erreur lors du chargement des statistiques")
        }

        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error("Erreur:", error)
        setError("Impossible de charger les statistiques")
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const statCards = [
    {
      title: "Total Produits",
      value: data?.stats.products.total || 0,
      subtext: `${data?.stats.products.published || 0} publiés`,
      icon: Package,
      color: "text-primary",
      bgColor: "bg-primary/10",
      change: "+0%",
      positive: true
    },
    {
      title: "Commandes",
      value: data?.stats.orders.total || 0,
      subtext: `${data?.stats.orders.pending || 0} en attente`,
      icon: ShoppingCart,
      color: "text-accent",
      bgColor: "bg-accent/10",
      change: "+0%",
      positive: true
    },
    {
      title: "Vues Totales",
      value: data?.stats.views || 0,
      subtext: "Sur tous vos produits",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      change: "+0%",
      positive: true
    },
    {
      title: "Revenu Total",
      value: `${(data?.stats.revenue || 0).toLocaleString()} €`,
      subtext: `${data?.stats.orders.completed || 0} ventes`,
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      change: "+0%",
      positive: true
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tableau de bord</h1>
          <p className="text-muted-foreground mt-1">
            Bienvenue! Voici un aperçu de votre boutique.
          </p>
        </div>
        <Link
          href="/market/publication-space/dashboard/add-product"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition font-medium"
        >
          <PlusCircle size={20} />
          Ajouter un produit
        </Link>
      </div>

      {error && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
          {error}
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <span
                className={`flex items-center text-sm font-medium ${
                  stat.positive ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.change}
                {stat.positive ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.subtext}</p>
          </div>
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Commandes récentes</h2>
            <Link
              href="/market/publication-space/dashboard/orders"
              className="text-sm text-primary hover:underline"
            >
              Voir tout
            </Link>
          </div>
          
          {(!data?.recentOrders || data.recentOrders.length === 0) ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Aucune commande pour l'instant</p>
              <p className="text-sm text-muted-foreground mt-1">
                Les commandes apparaîtront ici une fois que vous aurez des ventes
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {data.recentOrders.map((order: any) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{order.product?.title || "Produit"}</p>
                      <p className="text-sm text-muted-foreground">{order.buyerName}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{order.totalAmount} €</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(order.createdAt).toLocaleDateString("fr-FR")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h2 className="text-xl font-bold text-foreground mb-6">Actions rapides</h2>
          <div className="space-y-3">
            <Link
              href="/market/publication-space/dashboard/add-product"
              className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition group"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
                <PlusCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Nouveau produit</p>
                <p className="text-sm text-muted-foreground">Ajouter un produit à vendre</p>
              </div>
            </Link>

            <Link
              href="/market/publication-space/dashboard/products"
              className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition group"
            >
              <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition">
                <Package className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">Gérer les produits</p>
                <p className="text-sm text-muted-foreground">Modifier ou supprimer</p>
              </div>
            </Link>

            <Link
              href="/market/publication-space/dashboard/analytics"
              className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition group"
            >
              <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition">
                <TrendingUp className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="font-medium text-foreground">Voir statistiques</p>
                <p className="text-sm text-muted-foreground">Analyser les performances</p>
              </div>
            </Link>

            <Link
              href="/market/publication-space/dashboard/settings"
              className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition group"
            >
              <div className="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition">
                <Eye className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="font-medium text-foreground">Voir ma boutique</p>
                <p className="text-sm text-muted-foreground">Aperçu public</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Getting Started Guide */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground mb-2">
              🚀 Commencez à vendre!
            </h2>
            <p className="text-muted-foreground mb-4">
              Ajoutez votre premier produit et commencez à recevoir des commandes. 
              Notre plateforme s'occupe du reste!
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/market/publication-space/dashboard/add-product"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
              >
                <PlusCircle size={18} />
                Ajouter mon premier produit
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition font-medium"
              >
                Guide vendeur
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <p className="text-xs text-muted-foreground">Ajouter<br/>produit</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
                <span className="text-xl font-bold text-accent">2</span>
              </div>
              <p className="text-xs text-muted-foreground">Recevoir<br/>commandes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-2">
                <span className="text-xl font-bold text-green-500">3</span>
              </div>
              <p className="text-xs text-muted-foreground">Gagner<br/>argent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
