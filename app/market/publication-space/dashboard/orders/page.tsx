"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ShoppingCart,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  Truck,
  Search,
  Filter,
  ChevronRight,
  Eye
} from "lucide-react"

interface Order {
  id: string
  productName: string
  customerName: string
  customerEmail: string
  quantity: number
  total: number
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled"
  createdAt: string
  shippingAddress: string
}

const statusConfig = {
  pending: { label: "En attente", color: "text-yellow-500", bg: "bg-yellow-500/10", icon: Clock },
  confirmed: { label: "Confirmée", color: "text-blue-500", bg: "bg-blue-500/10", icon: CheckCircle },
  shipped: { label: "Expédiée", color: "text-purple-500", bg: "bg-purple-500/10", icon: Truck },
  delivered: { label: "Livrée", color: "text-green-500", bg: "bg-green-500/10", icon: CheckCircle },
  cancelled: { label: "Annulée", color: "text-red-500", bg: "bg-red-500/10", icon: XCircle }
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) return

        // TODO: Appeler l'API pour récupérer les commandes
        setOrders([])
      } catch (error) {
        console.error("Erreur:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [])

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    // TODO: Implémenter l'API pour mettre à jour le statut
    setOrders(orders.map(o => 
      o.id === orderId ? { ...o, status: newStatus as Order["status"] } : o
    ))
  }

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || order.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.status === "pending").length,
    confirmed: orders.filter(o => o.status === "confirmed").length,
    shipped: orders.filter(o => o.status === "shipped").length,
    delivered: orders.filter(o => o.status === "delivered").length
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Commandes</h1>
        <p className="text-muted-foreground mt-1">
          Gérez et suivez toutes vos commandes
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <div className="p-4 rounded-xl bg-card border border-border text-center">
          <p className="text-2xl font-bold text-foreground">{orderStats.total}</p>
          <p className="text-sm text-muted-foreground">Total</p>
        </div>
        <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-center">
          <p className="text-2xl font-bold text-yellow-500">{orderStats.pending}</p>
          <p className="text-sm text-yellow-500/80">En attente</p>
        </div>
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
          <p className="text-2xl font-bold text-blue-500">{orderStats.confirmed}</p>
          <p className="text-sm text-blue-500/80">Confirmées</p>
        </div>
        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
          <p className="text-2xl font-bold text-purple-500">{orderStats.shipped}</p>
          <p className="text-sm text-purple-500/80">Expédiées</p>
        </div>
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
          <p className="text-2xl font-bold text-green-500">{orderStats.delivered}</p>
          <p className="text-sm text-green-500/80">Livrées</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Rechercher une commande..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="pl-10 pr-8 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary outline-none appearance-none cursor-pointer"
          >
            <option value="all">Tous les statuts</option>
            <option value="pending">En attente</option>
            <option value="confirmed">Confirmées</option>
            <option value="shipped">Expédiées</option>
            <option value="delivered">Livrées</option>
            <option value="cancelled">Annulées</option>
          </select>
        </div>
      </div>

      {/* Orders List */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="text-center py-20 px-4 rounded-xl bg-card border border-border">
          <ShoppingCart className="w-20 h-20 text-muted-foreground/30 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {orders.length === 0 ? "Aucune commande" : "Aucun résultat"}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            {orders.length === 0
              ? "Vous n'avez pas encore reçu de commande. Les commandes apparaîtront ici dès que vous aurez des ventes."
              : "Aucune commande ne correspond à votre recherche."
            }
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const status = statusConfig[order.status]
            const StatusIcon = status.icon
            return (
              <div
                key={order.id}
                className="p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Order Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Package className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{order.productName}</p>
                        <p className="text-sm text-muted-foreground">#{order.id}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>Client: {order.customerName}</span>
                      <span>Qté: {order.quantity}</span>
                      <span>Total: {order.total} €</span>
                    </div>
                  </div>

                  {/* Status & Actions */}
                  <div className="flex items-center gap-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${status.bg} ${status.color}`}>
                      <StatusIcon size={14} />
                      {status.label}
                    </span>
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="p-2 rounded-lg hover:bg-muted transition"
                    >
                      <Eye size={20} className="text-muted-foreground" />
                    </button>
                    <ChevronRight className="text-muted-foreground" size={20} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Détails de la commande</h3>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-2 hover:bg-muted rounded-lg transition"
              >
                <XCircle size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">Numéro de commande</p>
                <p className="font-mono text-foreground">#{selectedOrder.id}</p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">Produit</p>
                <p className="font-semibold text-foreground">{selectedOrder.productName}</p>
                <p className="text-sm text-muted-foreground">Quantité: {selectedOrder.quantity}</p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">Client</p>
                <p className="font-semibold text-foreground">{selectedOrder.customerName}</p>
                <p className="text-sm text-muted-foreground">{selectedOrder.customerEmail}</p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">Adresse de livraison</p>
                <p className="text-foreground">{selectedOrder.shippingAddress || "Non spécifiée"}</p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-2xl font-bold text-primary">{selectedOrder.total} €</p>
              </div>

              {/* Status Update */}
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-2">Mettre à jour le statut</p>
                <select
                  value={selectedOrder.status}
                  onChange={(e) => {
                    updateOrderStatus(selectedOrder.id, e.target.value)
                    setSelectedOrder({ ...selectedOrder, status: e.target.value as Order["status"] })
                  }}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-primary outline-none"
                >
                  <option value="pending">En attente</option>
                  <option value="confirmed">Confirmée</option>
                  <option value="shipped">Expédiée</option>
                  <option value="delivered">Livrée</option>
                  <option value="cancelled">Annulée</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => setSelectedOrder(null)}
              className="w-full mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
