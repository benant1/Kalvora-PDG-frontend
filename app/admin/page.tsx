"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { 
  Users, 
  ShoppingCart, 
  FileText, 
  MessageSquare, 
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock,
  Trash2,
  Plus,
  Edit,
  Layout,
  Palette,
  Download,
  DollarSign,
  BarChart3,
  User
} from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart
} from "recharts"

interface DashboardStats {
  totalUsers: number
  totalProducts: number
  totalBlogPosts: number
  totalRequests: number
  totalTemplates: number
  totalDesigns: number
  totalDownloads: number
  totalPurchases: number
  allUsers: Array<{
    id: number
    name: string
    email: string
    role: string
    createdAt: string
  }>
  usersByRole: Array<{
    role: string
    _count: number
  }>
  userGrowth: Array<{
    date: string
    count: number
  }>
  downloadStats: Array<{
    date: string
    template: number
    design: number
    total: number
  }>
  purchaseStats: Array<{
    date: string
    template: number
    design: number
    product: number
    total: number
  }>
  revenueStats: Array<{
    date: string
    revenue: number
  }>
  topDownloads: Array<{
    itemName: string
    itemType: string
    _count: number
  }>
  topPurchases: Array<{
    itemName: string
    itemType: string
    _count: number
    _sum: { amount: number }
  }>
}

interface User {
  id: number
  email: string
  name: string
  role: string
  avatar?: string
  vendorStatus?: string
  createdAt: string
  updatedAt: string
}

interface PendingVendor {
  id: number
  email: string
  name: string
  role: string
  vendorStatus: string
  createdAt: string
}

interface VendorApplication {
  id: number
  userId: number
  firstName: string
  lastName: string
  email: string
  phone: string
  documentType: string
  documentNumber: string
  documentFilePath?: string
  storeName: string
  storeType: string
  storeDescription: string
  status: string
  rejectionReason?: string
  createdAt: string
  updatedAt: string
  user: {
    id: number
    name: string
    email: string
    role: string
  }
}

interface Product {
  id: number
  productId: string
  name: string
  price: number
  category: string
  createdAt: string
}

interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
  createdAt: string
}

interface Request {
  id: number
  title: string
  status: string
  createdAt: string
  user?: {
    id: number
    name: string
    email: string
  }
}

interface Template {
  id: number
  name: string
  description: string
  category: string
  price: number
  imageUrl?: string
  demoUrl?: string
  downloadUrl?: string
  featured: boolean
  createdAt: string
}

interface Design {
  id: number
  title: string
  description: string
  category: string
  imageUrl: string
  price: number
  featured: boolean
  createdAt: string
}

export default function AdminPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const [pendingVendors, setPendingVendors] = useState<PendingVendor[]>([])
  const [vendorApplications, setVendorApplications] = useState<VendorApplication[]>([])
  const [selectedApplication, setSelectedApplication] = useState<VendorApplication | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [documentPreviewUrl, setDocumentPreviewUrl] = useState<string | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [requests, setRequests] = useState<Request[]>([])
  const [templates, setTemplates] = useState<Template[]>([])
  const [designs, setDesigns] = useState<Design[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [showTemplateForm, setShowTemplateForm] = useState(false)
  const [showDesignForm, setShowDesignForm] = useState(false)
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null)
  const [editingDesign, setEditingDesign] = useState<Design | null>(null)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    } else if (!loading && user && user.role !== "admin") {
      router.push("/")
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user?.role === "admin") {
      fetchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.role, activeTab])

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const token = localStorage.getItem("token")
      if (!token) {
        setIsLoading(false)
        return
      }

      // Fetch stats for dashboard
      if (activeTab === "dashboard") {
        const statsRes = await fetch("http://localhost:4000/api/v1/admin/stats", {
          headers: { Authorization: `Bearer ${token}` }
        })
        if (statsRes.ok) {
          const statsData = await statsRes.json()
          setStats(statsData)
        }
      }

      // Fetch users
      if (activeTab === "users") {
        const usersRes = await fetch("http://localhost:4000/api/v1/admin/users", {
          headers: { Authorization: `Bearer ${token}` }
        })
        if (usersRes.ok) {
          const usersData = await usersRes.json()
          setUsers(usersData)
        }
      }

      // Fetch pending vendors and vendor applications
      if (activeTab === "vendors") {
        console.log('Fetching vendors data...')
        const [vendorsRes, applicationsRes] = await Promise.all([
          fetch("http://localhost:4000/api/v1/admin/vendors/pending", {
            headers: { Authorization: `Bearer ${token}` }
          }),
          // Charger TOUTES les demandes (pas seulement pending) pour afficher leur statut
          fetch("http://localhost:4000/api/v1/vendor/admin/all", {
            headers: { Authorization: `Bearer ${token}` }
          })
        ])
        
        if (vendorsRes.ok) {
          const vendorsData = await vendorsRes.json()
          console.log('Pending vendors received:', vendorsData)
          setPendingVendors(vendorsData)
        } else {
          console.error('Vendors fetch failed:', vendorsRes.status, vendorsRes.statusText)
        }
        
        if (applicationsRes.ok) {
          const applicationsData = await applicationsRes.json()
          console.log('Vendor applications received:', applicationsData)
          setVendorApplications(applicationsData)
        } else {
          console.error('Applications fetch failed:', applicationsRes.status, applicationsRes.statusText)
        }
      }

      // Fetch content
      if (activeTab === "content") {
        const [productsRes, postsRes, requestsRes] = await Promise.all([
          fetch("http://localhost:4000/api/v1/admin/products", {
            headers: { Authorization: `Bearer ${token}` }
          }),
          fetch("http://localhost:4000/api/v1/admin/blog-posts", {
            headers: { Authorization: `Bearer ${token}` }
          }),
          fetch("http://localhost:4000/api/v1/admin/requests", {
            headers: { Authorization: `Bearer ${token}` }
          })
        ])

        if (productsRes.ok) setProducts(await productsRes.json())
        if (postsRes.ok) setBlogPosts(await postsRes.json())
        if (requestsRes.ok) setRequests(await requestsRes.json())
      }

      // Fetch templates & designs
      if (activeTab === "templates") {
        const [templatesRes, designsRes] = await Promise.all([
          fetch("http://localhost:4000/api/v1/admin/templates", {
            headers: { Authorization: `Bearer ${token}` }
          }),
          fetch("http://localhost:4000/api/v1/admin/designs", {
            headers: { Authorization: `Bearer ${token}` }
          })
        ])

        if (templatesRes.ok) setTemplates(await templatesRes.json())
        if (designsRes.ok) setDesigns(await designsRes.json())
      }

      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching admin data:", error)
      setIsLoading(false)
    }
  }

  const handleApproveVendor = async (userId: number) => {
    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`http://localhost:4000/api/v1/admin/vendors/${userId}/approve`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` }
      })

      if (res.ok) {
        setPendingVendors(pendingVendors.filter(v => v.id !== userId))
      }
    } catch (error) {
      console.error("Error approving vendor:", error)
    }
  }

  const handleRejectVendor = async (userId: number) => {
    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`http://localhost:4000/api/v1/admin/vendors/${userId}/reject`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` }
      })

      if (res.ok) {
        setPendingVendors(pendingVendors.filter(v => v.id !== userId))
      }
    } catch (error) {
      console.error("Error rejecting vendor:", error)
    }
  }

  const handleApproveApplication = async (applicationId: number) => {
    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`http://localhost:4000/api/v1/vendor/admin/${applicationId}/approve`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` }
      })

      if (res.ok) {
        const data = await res.json()
        alert(`✅ Demande approuvée avec succès!\n\nUn code d'activation a été envoyé par email au vendeur.`)
        // Mettre à jour le statut localement au lieu de filtrer
        setVendorApplications(vendorApplications.map(a => 
          a.id === applicationId ? { ...a, status: 'approved' } : a
        ))
        // Recharger les données
        fetchData()
      } else {
        const error = await res.json()
        alert(`❌ Erreur: ${error.error || 'Erreur lors de l\'approbation'}`)
      }
    } catch (error) {
      console.error("Error approving application:", error)
      alert("❌ Erreur de connexion au serveur")
    }
  }

  const handleRejectApplication = async (applicationId: number) => {
    const reason = prompt("Raison du rejet (optionnel):")
    
    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`http://localhost:4000/api/v1/vendor/admin/${applicationId}/reject`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ reason: reason || "Non spécifié" })
      })

      if (res.ok) {
        alert("✅ Demande rejetée. Un email a été envoyé au demandeur.")
        // Mettre à jour le statut localement
        setVendorApplications(vendorApplications.map(a => 
          a.id === applicationId ? { ...a, status: 'rejected', rejectionReason: reason || "Non spécifié" } : a
        ))
        // Recharger les données
        fetchData()
      } else {
        const error = await res.json()
        alert(`❌ Erreur: ${error.error || 'Erreur lors du rejet'}`)
      }
    } catch (error) {
      console.error("Error rejecting application:", error)
      alert("❌ Erreur de connexion au serveur")
    }
  }

  const handleDeleteUser = async (userId: number) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) return

    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`http://localhost:4000/api/v1/admin/users/${userId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      })

      if (res.ok) {
        setUsers(users.filter(u => u.id !== userId))
      }
    } catch (error) {
      console.error("Error deleting user:", error)
    }
  }

  const handleUpdateUserRole = async (userId: number, newRole: string) => {
    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`http://localhost:4000/api/v1/admin/users/${userId}/role`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ role: newRole })
      })

      if (res.ok) {
        const updatedUser = await res.json()
        setUsers(users.map(u => u.id === userId ? { ...u, role: updatedUser.role } : u))
      }
    } catch (error) {
      console.error("Error updating user role:", error)
    }
  }

  const handleCreateTemplate = async (data: Partial<Template>) => {
    try {
      const token = localStorage.getItem("token")
      const res = await fetch("http://localhost:4000/api/v1/admin/templates", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        const newTemplate = await res.json()
        setTemplates([newTemplate, ...templates])
        setShowTemplateForm(false)
      }
    } catch (error) {
      console.error("Error creating template:", error)
    }
  }

  const handleUpdateTemplate = async (id: number, data: Partial<Template>) => {
    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`http://localhost:4000/api/v1/admin/templates/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        const updatedTemplate = await res.json()
        setTemplates(templates.map(t => t.id === id ? updatedTemplate : t))
        setEditingTemplate(null)
      }
    } catch (error) {
      console.error("Error updating template:", error)
    }
  }

  const handleDeleteTemplate = async (id: number) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce template ?")) return

    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`http://localhost:4000/api/v1/admin/templates/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      })

      if (res.ok) {
        setTemplates(templates.filter(t => t.id !== id))
      }
    } catch (error) {
      console.error("Error deleting template:", error)
    }
  }

  const handleCreateDesign = async (data: Partial<Design>) => {
    try {
      const token = localStorage.getItem("token")
      const res = await fetch("http://localhost:4000/api/v1/admin/designs", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        const newDesign = await res.json()
        setDesigns([newDesign, ...designs])
        setShowDesignForm(false)
      }
    } catch (error) {
      console.error("Error creating design:", error)
    }
  }

  const handleUpdateDesign = async (id: number, data: Partial<Design>) => {
    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`http://localhost:4000/api/v1/admin/designs/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        const updatedDesign = await res.json()
        setDesigns(designs.map(d => d.id === id ? updatedDesign : d))
        setEditingDesign(null)
      }
    } catch (error) {
      console.error("Error updating design:", error)
    }
  }

  const handleDeleteDesign = async (id: number) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce design ?")) return

    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`http://localhost:4000/api/v1/admin/designs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      })

      if (res.ok) {
        setDesigns(designs.filter(d => d.id !== id))
      }
    } catch (error) {
      console.error("Error deleting design:", error)
    }
  }

  if (loading || isLoading) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </main>
    )
  }

  if (!user) {
    return null
  }

  if (loading) {
    return (
      <main>
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600">Chargement du tableau de bord...</p>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (!user) {
    return null
  }

  return (
    <main>
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Tableau de bord Admin</h1>
          <p className="text-gray-600">Gérer votre plateforme LUMYNIS</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="users">Utilisateurs</TabsTrigger>
            <TabsTrigger value="vendors">Vendeurs</TabsTrigger>
            <TabsTrigger value="content">Contenu</TabsTrigger>
            <TabsTrigger value="templates">Templates & Designs</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {isLoading ? (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                  <p className="text-gray-600">Chargement des statistiques...</p>
                </div>
              </div>
            ) : stats ? (
              <>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Utilisateurs</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.totalUsers}</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Produits</CardTitle>
                      <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.totalProducts}</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Articles Blog</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.totalBlogPosts}</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Demandes</CardTitle>
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.totalRequests}</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Templates</CardTitle>
                      <Layout className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.totalTemplates}</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Designs</CardTitle>
                      <Palette className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.totalDesigns}</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Téléchargements</CardTitle>
                      <Download className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.totalDownloads}</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Achats</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.totalPurchases}</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tous les utilisateurs</CardTitle>
                      <CardDescription>Liste complète des utilisateurs de la base de données</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 max-h-64 overflow-y-auto">
                        {stats.allUsers.map((user) => (
                          <div key={user.id} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                              <p className="text-xs text-gray-400">
                                Inscrit le {new Date(user.createdAt).toLocaleDateString('fr-FR')}
                              </p>
                            </div>
                            <Badge>{user.role}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Répartition par rôle</CardTitle>
                      <CardDescription>Distribution des utilisateurs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {stats.usersByRole.map((roleData) => (
                          <div key={roleData.role} className="flex items-center justify-between">
                            <span className="capitalize">{roleData.role}</span>
                            <Badge variant="outline">{roleData._count}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Croissance utilisateurs (7 derniers jours)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={stats.userGrowth}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="date"
                          tickFormatter={(dateStr) => new Date(dateStr).toLocaleDateString('fr-FR', { month: 'short', day: 'numeric' })}
                        />
                        <YAxis />
                        <Tooltip
                          formatter={(value) => value}
                          labelFormatter={(dateStr) => new Date(dateStr).toLocaleDateString('fr-FR')}
                          contentStyle={{ backgroundColor: '#f3f4f6', border: '1px solid #d1d5db' }}
                        />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="count"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          dot={{ fill: '#3b82f6', r: 4 }}
                          activeDot={{ r: 6 }}
                          name="Nouveaux utilisateurs"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Download Statistics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Téléchargements (7 jours)
                    </CardTitle>
                    <CardDescription>Templates & Designs téléchargés par jour</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <ComposedChart data={stats.downloadStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="date"
                          tickFormatter={(dateStr) => new Date(dateStr).toLocaleDateString('fr-FR', { month: 'short', day: 'numeric' })}
                        />
                        <YAxis />
                        <Tooltip
                          formatter={(value) => value}
                          labelFormatter={(dateStr) => new Date(dateStr).toLocaleDateString('fr-FR')}
                          contentStyle={{ backgroundColor: '#f3f4f6', border: '1px solid #d1d5db' }}
                        />
                        <Legend />
                        <Bar dataKey="template" fill="#3b82f6" name="Templates" />
                        <Bar dataKey="design" fill="#a855f7" name="Designs" />
                        <Line type="monotone" dataKey="total" stroke="#10b981" strokeWidth={2} name="Total" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Purchase & Revenue Statistics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Achats & Revenus (7 jours)
                    </CardTitle>
                    <CardDescription>Ventes et revenus générés par jour</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <ComposedChart data={stats.purchaseStats.map((purchase, idx) => ({
                        ...purchase,
                        revenue: stats.revenueStats[idx]?.revenue || 0
                      }))}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="date"
                          tickFormatter={(dateStr) => new Date(dateStr).toLocaleDateString('fr-FR', { month: 'short', day: 'numeric' })}
                        />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip
                          formatter={(value) => typeof value === 'number' ? value.toFixed(2) : value}
                          labelFormatter={(dateStr) => new Date(dateStr).toLocaleDateString('fr-FR')}
                          contentStyle={{ backgroundColor: '#f3f4f6', border: '1px solid #d1d5db' }}
                        />
                        <Legend />
                        <Bar yAxisId="left" dataKey="total" fill="#ef4444" name="Nombre d'achats" />
                        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} name="Revenus (€)" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Top Items */}
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Download className="h-5 w-5" />
                        Top Téléchargements
                      </CardTitle>
                      <CardDescription>Les plus téléchargés</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {stats.topDownloads.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-sm">{item.itemName}</p>
                              <Badge variant="outline" className="text-xs">{item.itemType}</Badge>
                            </div>
                            <Badge>{item._count} DL</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ShoppingCart className="h-5 w-5" />
                        Top Ventes
                      </CardTitle>
                      <CardDescription>Les plus vendus</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {stats.topPurchases.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-sm">{item.itemName}</p>
                              <div className="flex gap-2 items-center">
                                <Badge variant="outline" className="text-xs">{item.itemType}</Badge>
                                <span className="text-xs text-green-600 font-semibold">
                                  {item._sum.amount.toFixed(2)}€
                                </span>
                              </div>
                            </div>
                            <Badge>{item._count} ventes</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">Aucune donnée disponible</p>
              </div>
            )}
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des utilisateurs</CardTitle>
                <CardDescription>Total: {users.length} utilisateurs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <p className="text-xs text-gray-400">
                          Inscrit le {new Date(user.createdAt).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <select
                          value={user.role}
                          onChange={(e) => handleUpdateUserRole(user.id, e.target.value)}
                          className="px-3 py-1 border rounded"
                        >
                          <option value="user">User</option>
                          <option value="developer">Developer</option>
                          <option value="designer">Designer</option>
                          <option value="vendor">Vendor</option>
                          <option value="admin">Admin</option>
                        </select>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vendors Tab */}
          <TabsContent value="vendors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Toutes les demandes vendeurs</CardTitle>
                <CardDescription>
                  {vendorApplications.length} demande{vendorApplications.length > 1 ? 's' : ''} au total
                  {vendorApplications.filter(a => a.status === 'pending').length > 0 && (
                    <span className="ml-2 text-yellow-500">
                      ({vendorApplications.filter(a => a.status === 'pending').length} en attente)
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {vendorApplications.length === 0 ? (
                  <div className="text-center py-12">
                    <User className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500 text-lg font-medium">Aucune demande</p>
                    <p className="text-gray-400 text-sm mt-2">Les nouvelles demandes apparaîtront ici</p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {vendorApplications.map((application) => (
                      <div 
                        key={application.id} 
                        className={`p-4 border-2 rounded-lg hover:shadow-md transition-all cursor-pointer ${
                          application.status === 'approved' 
                            ? 'border-green-700 bg-green-950' 
                            : application.status === 'rejected'
                            ? 'border-red-700 bg-red-950'
                            : 'border-blue-700 bg-blue-950'
                        }`}
                        onClick={() => {
                          setSelectedApplication(application)
                          setIsModalOpen(true)
                        }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <User className="h-5 w-5 text-blue-300" />
                              <h3 className="font-semibold text-lg text-white">
                                {application.firstName} {application.lastName}
                              </h3>
                              <Badge variant="secondary" className="bg-blue-700 text-blue-100">{application.storeType}</Badge>
                              {/* Badge de statut */}
                              {application.status === 'approved' && (
                                <Badge className="bg-green-600 text-white">✓ Approuvé</Badge>
                              )}
                              {application.status === 'rejected' && (
                                <Badge className="bg-red-600 text-white">✗ Rejeté</Badge>
                              )}
                              {application.status === 'pending' && (
                                <Badge className="bg-yellow-600 text-white">⏳ En attente</Badge>
                              )}
                            </div>
                            <div className="grid md:grid-cols-3 gap-4 text-sm text-blue-200">
                              <div>
                                <p className="font-medium text-blue-100">Email:</p>
                                <p>{application.email}</p>
                              </div>
                              <div>
                                <p className="font-medium text-blue-100">Boutique:</p>
                                <p>{application.storeName}</p>
                              </div>
                              <div>
                                <p className="font-medium text-blue-100">Date:</p>
                                <p>{new Date(application.createdAt).toLocaleDateString('fr-FR')}</p>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-blue-300 hover:text-blue-100 hover:bg-blue-900">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Modal pour les détails */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                {selectedApplication && (
                  <>
                    <DialogHeader>
                      <DialogTitle className="text-2xl">
                        Demande de {selectedApplication.firstName} {selectedApplication.lastName}
                      </DialogTitle>
                      <DialogDescription>
                        Soumise le {new Date(selectedApplication.createdAt).toLocaleDateString('fr-FR')} à{' '}
                        {new Date(selectedApplication.createdAt).toLocaleTimeString('fr-FR')}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 py-4">
                      {/* Informations personnelles */}
                      <div className="p-4 bg-blue-900 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-white">
                          <User className="h-5 w-5 text-blue-300" />
                          Informations personnelles
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="text-blue-200">Prénom</p>
                            <p className="font-medium text-white">{selectedApplication.firstName}</p>
                          </div>
                          <div>
                            <p className="text-blue-200">Nom</p>
                            <p className="font-medium text-white">{selectedApplication.lastName}</p>
                          </div>
                          <div>
                            <p className="text-blue-200">Email</p>
                            <p className="font-medium text-white">{selectedApplication.email}</p>
                          </div>
                          <div>
                            <p className="text-blue-200">Téléphone</p>
                            <p className="font-medium text-white">{selectedApplication.phone}</p>
                          </div>
                        </div>
                      </div>

                      {/* Documents */}
                      <div className="p-4 bg-green-900 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-white">
                          <FileText className="h-5 w-5 text-green-300" />
                          Documents d'identité
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="text-green-200">Type de document</p>
                            <p className="font-medium text-white">{selectedApplication.documentType}</p>
                          </div>
                          <div>
                            <p className="text-green-200">Numéro de document</p>
                            <p className="font-medium text-white">{selectedApplication.documentNumber}</p>
                          </div>
                        </div>
                        {selectedApplication.documentFilePath && (
                          <div className="mt-3 p-3 bg-green-800 rounded border border-green-700">
                            <p className="text-sm text-green-200 mb-2">Fichier téléversé:</p>
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="flex items-center gap-2 bg-green-700 text-green-100 border-green-600">
                                <FileText className="h-3 w-3" />
                                Document scanné
                              </Badge>
                              <Button 
                                size="sm" 
                                variant="ghost"
                                className="text-green-300 hover:text-green-200 hover:bg-green-800"
                                onClick={() => {
                                  let filePath = selectedApplication.documentFilePath
                                  console.log('Document path from DB:', filePath)
                                  
                                  // Le chemin vient déjà au bon format depuis la DB: /uploads/vendor-documents/doc-xxx.jpeg
                                  // Pas besoin de transformation
                                  const fullUrl = `http://localhost:4000${filePath}`
                                  console.log('Full preview URL:', fullUrl)
                                  setDocumentPreviewUrl(fullUrl)
                                }}
                              >
                                Voir le document
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Boutique */}
                      <div className="p-4 bg-purple-900 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-white">
                          <ShoppingCart className="h-5 w-5 text-purple-300" />
                          Informations sur la boutique
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="text-purple-200">Nom de la boutique</p>
                            <p className="font-medium text-lg text-white">{selectedApplication.storeName}</p>
                          </div>
                          <div>
                            <p className="text-purple-200">Type de boutique</p>
                            <Badge variant="secondary" className="mt-1 bg-purple-700 text-purple-100 border-purple-600">
                              {selectedApplication.storeType}
                            </Badge>
                          </div>
                          {selectedApplication.storeDescription && (
                            <div>
                              <p className="text-purple-200">Description</p>
                              <p className="font-medium mt-1 text-white">{selectedApplication.storeDescription}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <DialogFooter className="flex gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Fermer
                      </Button>
                      
                      {/* Afficher le statut actuel */}
                      {selectedApplication.status === 'approved' && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-green-900 text-green-100 rounded-lg">
                          <CheckCircle className="h-4 w-4" />
                          <span>Demande approuvée</span>
                        </div>
                      )}
                      {selectedApplication.status === 'rejected' && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-red-900 text-red-100 rounded-lg">
                          <XCircle className="h-4 w-4" />
                          <span>Demande rejetée</span>
                        </div>
                      )}
                      
                      {/* Boutons d'action uniquement pour les demandes en attente */}
                      {selectedApplication.status === 'pending' && (
                        <>
                          <Button
                            variant="destructive"
                            onClick={() => {
                              handleRejectApplication(selectedApplication.id)
                              setIsModalOpen(false)
                            }}
                          >
                            <XCircle className="h-4 w-4 mr-2" />
                            Rejeter
                          </Button>
                          <Button
                            variant="default"
                            onClick={() => {
                              handleApproveApplication(selectedApplication.id)
                              setIsModalOpen(false)
                            }}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Approuver
                          </Button>
                        </>
                      )}
                    </DialogFooter>
                  </>
                )}
              </DialogContent>
            </Dialog>

            {/* Modal d'aperçu du document */}
            <Dialog open={!!documentPreviewUrl} onOpenChange={(open) => {
              if (!open) setDocumentPreviewUrl(null)
            }}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                <DialogHeader>
                  <DialogTitle>Aperçu du document</DialogTitle>
                  {documentPreviewUrl && (
                    <p className="text-xs text-gray-500 mt-2">{documentPreviewUrl}</p>
                  )}
                </DialogHeader>
                {documentPreviewUrl && (
                  <div className="relative w-full bg-gray-100 rounded-lg overflow-auto flex items-center justify-center" style={{ maxHeight: 'calc(90vh - 200px)', minHeight: '400px' }}>
                    {documentPreviewUrl.toLowerCase().endsWith('.pdf') ? (
                      <iframe
                        src={documentPreviewUrl}
                        className="w-full"
                        style={{ height: '100%', minHeight: '400px' }}
                        title="Document PDF"
                      />
                    ) : (
                      <img
                        src={documentPreviewUrl}
                        alt="Document"
                        className="max-w-full max-h-full object-contain"
                        crossOrigin="anonymous"
                        onLoad={() => console.log('Image loaded successfully')}
                        onError={(e) => {
                          console.error('Image failed to load:', documentPreviewUrl, e)
                        }}
                      />
                    )}
                  </div>
                )}
                <DialogFooter className="flex gap-3 mt-4">
                  <Button
                    variant="outline"
                    onClick={() => setDocumentPreviewUrl(null)}
                  >
                    ← Retour
                  </Button>
                  <Button
                    variant="default"
                    onClick={() => {
                      if (documentPreviewUrl) {
                        window.open(documentPreviewUrl, '_blank')
                      }
                    }}
                  >
                    Ouvrir dans nouvel onglet
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Anciens vendeurs en attente (sans documents détaillés) */}
            {pendingVendors.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Vendeurs en attente (ancien système)</CardTitle>
                  <CardDescription>
                    {pendingVendors.length} vendeur{pendingVendors.length > 1 ? 's' : ''} sans documentation complète
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingVendors.map((vendor) => (
                      <div key={vendor.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{vendor.name}</p>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              En attente
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">{vendor.email}</p>
                          <p className="text-xs text-gray-400">
                            Inscrit le {new Date(vendor.createdAt).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => handleApproveVendor(vendor.id)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approuver
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleRejectVendor(vendor.id)}
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            Rejeter
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Produits</CardTitle>
                  <CardDescription>{products.length} produits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {products.slice(0, 10).map((product) => (
                      <div key={product.id} className="p-2 border rounded text-sm">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-gray-500">{product.price}€ - {product.category}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Articles Blog</CardTitle>
                  <CardDescription>{blogPosts.length} articles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {blogPosts.slice(0, 10).map((post) => (
                      <div key={post.id} className="p-2 border rounded text-sm">
                        <p className="font-medium">{post.title}</p>
                        <p className="text-gray-500 text-xs">{post.excerpt.substring(0, 50)}...</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Demandes</CardTitle>
                  <CardDescription>{requests.length} demandes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {requests.slice(0, 10).map((request) => (
                      <div key={request.id} className="p-2 border rounded text-sm">
                        <p className="font-medium">{request.title}</p>
                        <p className="text-gray-500 text-xs">
                          {request.user?.name || 'Anonyme'} - {request.status}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Templates & Designs Tab */}
          <TabsContent value="templates" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Templates Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Layout className="h-5 w-5" />
                        Templates
                      </CardTitle>
                      <CardDescription>{templates.length} templates (Web & Mobile)</CardDescription>
                    </div>
                    <Button onClick={() => setShowTemplateForm(true)} size="sm">
                      <Plus className="h-4 w-4 mr-1" />
                      Ajouter
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {showTemplateForm && (
                    <TemplateForm 
                      onSubmit={handleCreateTemplate}
                      onCancel={() => setShowTemplateForm(false)}
                    />
                  )}
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {templates.map((template) => (
                      <div key={template.id} className="p-3 border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{template.name}</p>
                              <Badge variant="outline">{template.category}</Badge>
                              {template.featured && <Badge variant="default">Featured</Badge>}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{template.description.substring(0, 80)}...</p>
                            <p className="text-sm font-semibold text-blue-600 mt-1">{template.price}€</p>
                          </div>
                          <div className="flex gap-1">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setEditingTemplate(template)}
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleDeleteTemplate(template.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        {editingTemplate?.id === template.id && (
                          <div className="mt-3 pt-3 border-t">
                            <TemplateForm
                              template={editingTemplate}
                              onSubmit={(data) => handleUpdateTemplate(template.id, data)}
                              onCancel={() => setEditingTemplate(null)}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Designs Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Palette className="h-5 w-5" />
                        Designs
                      </CardTitle>
                      <CardDescription>{designs.length} designs (Logo, UI, Graphics)</CardDescription>
                    </div>
                    <Button onClick={() => setShowDesignForm(true)} size="sm">
                      <Plus className="h-4 w-4 mr-1" />
                      Ajouter
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {showDesignForm && (
                    <DesignForm 
                      onSubmit={handleCreateDesign}
                      onCancel={() => setShowDesignForm(false)}
                    />
                  )}
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {designs.map((design) => (
                      <div key={design.id} className="p-3 border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{design.title}</p>
                              <Badge variant="outline">{design.category}</Badge>
                              {design.featured && <Badge variant="default">Featured</Badge>}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{design.description.substring(0, 80)}...</p>
                            <p className="text-sm font-semibold text-blue-600 mt-1">{design.price}€</p>
                          </div>
                          <div className="flex gap-1">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setEditingDesign(design)}
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleDeleteDesign(design.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        {editingDesign?.id === design.id && (
                          <div className="mt-3 pt-3 border-t">
                            <DesignForm
                              design={editingDesign}
                              onSubmit={(data) => handleUpdateDesign(design.id, data)}
                              onCancel={() => setEditingDesign(null)}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

// Template Form Component
function TemplateForm({ template, onSubmit, onCancel }: {
  template?: Template
  onSubmit: (data: Partial<Template>) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState({
    name: template?.name || '',
    description: template?.description || '',
    category: template?.category || 'web',
    price: template?.price || 0,
    imageUrl: template?.imageUrl || '',
    demoUrl: template?.demoUrl || '',
    downloadUrl: template?.downloadUrl || '',
    featured: template?.featured || false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-3 bg-gray-50 rounded">
      <input
        type="text"
        placeholder="Nom du template"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full px-3 py-2 border rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="w-full px-3 py-2 border rounded"
        rows={3}
        required
      />
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="w-full px-3 py-2 border rounded"
      >
        <option value="web">Web</option>
        <option value="mobile">Mobile</option>
        <option value="design">Design</option>
      </select>
      <input
        type="number"
        placeholder="Prix"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
        className="w-full px-3 py-2 border rounded"
        step="0.01"
        required
      />
      <input
        type="url"
        placeholder="URL de l'image (optionnel)"
        value={formData.imageUrl}
        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="url"
        placeholder="URL de démo (optionnel)"
        value={formData.demoUrl}
        onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="url"
        placeholder="URL de téléchargement (optionnel)"
        value={formData.downloadUrl}
        onChange={(e) => setFormData({ ...formData, downloadUrl: e.target.value })}
        className="w-full px-3 py-2 border rounded"
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={formData.featured}
          onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
        />
        <span className="text-sm">Featured</span>
      </label>
      <div className="flex gap-2">
        <Button type="submit" size="sm">
          {template ? 'Modifier' : 'Créer'}
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={onCancel}>
          Annuler
        </Button>
      </div>
    </form>
  )
}

// Design Form Component
function DesignForm({ design, onSubmit, onCancel }: {
  design?: Design
  onSubmit: (data: Partial<Design>) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState({
    title: design?.title || '',
    description: design?.description || '',
    category: design?.category || 'logo',
    imageUrl: design?.imageUrl || '',
    price: design?.price || 0,
    featured: design?.featured || false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-3 bg-gray-50 rounded">
      <input
        type="text"
        placeholder="Titre du design"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="w-full px-3 py-2 border rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="w-full px-3 py-2 border rounded"
        rows={3}
        required
      />
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="w-full px-3 py-2 border rounded"
      >
        <option value="logo">Logo</option>
        <option value="ui">UI</option>
        <option value="graphic">Graphic</option>
        <option value="illustration">Illustration</option>
      </select>
      <input
        type="url"
        placeholder="URL de l'image"
        value={formData.imageUrl}
        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
        className="w-full px-3 py-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Prix"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
        className="w-full px-3 py-2 border rounded"
        step="0.01"
        required
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={formData.featured}
          onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
        />
        <span className="text-sm">Featured</span>
      </label>
      <div className="flex gap-2">
        <Button type="submit" size="sm">
          {design ? 'Modifier' : 'Créer'}
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={onCancel}>
          Annuler
        </Button>
      </div>
    </form>
  )
}
