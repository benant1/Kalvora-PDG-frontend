"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  ShoppingCart,
  BarChart3,
  Settings,
  Store,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Bell,
  User
} from "lucide-react"

interface VendorData {
  storeName: string
  status: string
  isBlocked: boolean
}

const sidebarLinks = [
  { href: "/market/publication-space/dashboard", icon: LayoutDashboard, label: "Tableau de bord" },
  { href: "/market/publication-space/dashboard/products", icon: Package, label: "Mes Produits" },
  { href: "/market/publication-space/dashboard/add-product", icon: PlusCircle, label: "Ajouter Produit" },
  { href: "/market/publication-space/dashboard/orders", icon: ShoppingCart, label: "Commandes" },
  { href: "/market/publication-space/dashboard/analytics", icon: BarChart3, label: "Statistiques" },
  { href: "/market/publication-space/dashboard/settings", icon: Settings, label: "Paramètres" },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [vendorData, setVendorData] = useState<VendorData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkVendorAccess = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          router.push("/login")
          return
        }

        const response = await fetch("http://localhost:4000/api/v1/vendor/status", {
          headers: { Authorization: `Bearer ${token}` }
        })

        const data = await response.json()
        
        if (data.vendorApplication?.status !== "approved") {
          router.push("/")
          return
        }

        if (data.vendorApplication?.isBlocked) {
          router.push("/market/publication-space/blocked")
          return
        }

        if (!data.vendorApplication?.pinSetAt) {
          router.push("/market/publication-space/verify-code")
          return
        }

        setVendorData({
          storeName: data.vendorApplication.storeName,
          status: data.vendorApplication.status,
          isBlocked: data.vendorApplication.isBlocked
        })
      } catch (error) {
        console.error("Erreur:", error)
        router.push("/")
      } finally {
        setLoading(false)
      }
    }

    checkVendorAccess()
  }, [router])

  const handleLogout = () => {
    router.push("/market/publication-space/access")
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <Navigation />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-lg shadow-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-40 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo / Store name */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Store className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-foreground truncate">
                {vendorData?.storeName || "Ma Boutique"}
              </h2>
              <p className="text-xs text-green-500 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Actif
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <link.icon size={20} />
                <span className="font-medium">{link.label}</span>
                {isActive && <ChevronRight size={16} className="ml-auto" />}
              </Link>
            )
          })}
        </nav>

        {/* Bottom actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Quitter l'espace</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-md border-b border-border">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4 ml-12 lg:ml-0">
              <h1 className="text-xl font-bold text-foreground">
                Espace Vendeur
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-muted transition relative">
                <Bell size={20} className="text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Link
                href="/profile"
                className="p-2 rounded-lg hover:bg-muted transition"
              >
                <User size={20} className="text-muted-foreground" />
              </Link>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
