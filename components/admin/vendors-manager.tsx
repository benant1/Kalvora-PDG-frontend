"use client"

import { useState, useEffect } from "react"
import { CheckCircle, XCircle, Clock, Ban, Unlock } from "lucide-react"
import { apiCall } from "@/lib/api"
import { useAuth } from "@/lib/auth-context"

interface VendorApplication {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  storeName: string
  storeType: string
  storeDescription: string
  status: 'pending' | 'approved' | 'rejected'
  isBlocked: boolean
  blockReason?: string
  rejectionReason?: string
  createdAt: string
  user: {
    id: number
    name: string
    email: string
    vendorStatus: string
  }
}

export default function VendorsManager() {
  const { token } = useAuth()
  const [applications, setApplications] = useState<VendorApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState<number | null>(null)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all')

  useEffect(() => {
    loadApplications()
  }, [token])

  const loadApplications = async () => {
    if (!token) return
    
    try {
      setLoading(true)
      const data = await apiCall('/api/v1/vendor/admin/all', {
        method: 'GET'
      })
      setApplications(data || [])
      setError('')
    } catch (err: any) {
      setError(err.message || 'Erreur lors du chargement des demandes')
      setApplications([])
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (applicationId: number) => {
    if (!token || !confirm('Approuver cette demande et envoyer le code d\'activation ?')) return
    
    try {
      setActionLoading(applicationId)
      await apiCall(`/api/v1/vendor/admin/${applicationId}/approve`, {
        method: 'PUT'
      })
      await loadApplications()
      alert('Demande approuvée ! Code d\'activation envoyé par email.')
    } catch (err: any) {
      alert(err.message || 'Erreur lors de l\'approbation')
    } finally {
      setActionLoading(null)
    }
  }

  const handleReject = async (applicationId: number) => {
    if (!token) return
    
    const reason = prompt('Raison du rejet (optionnel):')
    if (reason === null) return // User cancelled
    
    try {
      setActionLoading(applicationId)
      await apiCall(`/api/v1/vendor/admin/${applicationId}/reject`, {
        method: 'PUT',
        body: JSON.stringify({ reason })
      })
      await loadApplications()
      alert('Demande rejetée.')
    } catch (err: any) {
      alert(err.message || 'Erreur lors du rejet')
    } finally {
      setActionLoading(null)
    }
  }

  const handleToggleBlock = async (applicationId: number, currentlyBlocked: boolean) => {
    if (!token) return
    
    if (currentlyBlocked) {
      if (!confirm('Débloquer cet espace vendeur ?')) return
      
      try {
        setActionLoading(applicationId)
        await apiCall(`/api/v1/vendor/admin/${applicationId}/block`, {
          method: 'PUT',
          body: JSON.stringify({ blocked: false })
        })
        await loadApplications()
        alert('Espace vendeur débloqué.')
      } catch (err: any) {
        alert(err.message || 'Erreur lors du déblocage')
      } finally {
        setActionLoading(null)
      }
    } else {
      const reason = prompt('Raison du blocage:')
      if (!reason) return
      
      try {
        setActionLoading(applicationId)
        await apiCall(`/api/v1/vendor/admin/${applicationId}/block`, {
          method: 'PUT',
          body: JSON.stringify({ blocked: true, reason })
        })
        await loadApplications()
        alert('Espace vendeur bloqué.')
      } catch (err: any) {
        alert(err.message || 'Erreur lors du blocage')
      } finally {
        setActionLoading(null)
      }
    }
  }

  const filteredApplications = applications.filter(app => {
    if (filter === 'all') return true
    return app.status === filter
  })

  const getStatusBadge = (status: string, isBlocked: boolean) => {
    if (isBlocked) {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-400">
          <Ban size={14} />
          Bloqué
        </span>
      )
    }

    switch (status) {
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/20 text-yellow-400">
            <Clock size={14} />
            En attente
          </span>
        )
      case 'approved':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400">
            <CheckCircle size={14} />
            Approuvé
          </span>
        )
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-400">
            <XCircle size={14} />
            Rejeté
          </span>
        )
      default:
        return null
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-foreground/60">Chargement des demandes...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Demandes Vendeurs</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'all' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            Toutes ({applications.length})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'pending' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            En attente ({applications.filter(a => a.status === 'pending').length})
          </button>
          <button
            onClick={() => setFilter('approved')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'approved' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            Approuvées ({applications.filter(a => a.status === 'approved').length})
          </button>
          <button
            onClick={() => setFilter('rejected')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'rejected' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            Rejetées ({applications.filter(a => a.status === 'rejected').length})
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
          {error}
        </div>
      )}

      {filteredApplications.length === 0 ? (
        <div className="text-center py-12 text-foreground/60">
          Aucune demande à afficher
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Nom</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Email</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Boutique</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Type</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Date</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Statut</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((app) => (
                <tr key={app.id} className="border-b border-border hover:bg-muted/50 transition">
                  <td className="py-4 px-4 text-foreground font-medium">
                    {app.firstName} {app.lastName}
                  </td>
                  <td className="py-4 px-4 text-foreground/70">{app.email}</td>
                  <td className="py-4 px-4 text-foreground">{app.storeName}</td>
                  <td className="py-4 px-4 text-foreground/70 capitalize">{app.storeType}</td>
                  <td className="py-4 px-4 text-foreground/70">
                    {new Date(app.createdAt).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="py-4 px-4">
                    {getStatusBadge(app.status, app.isBlocked)}
                    {app.isBlocked && app.blockReason && (
                      <div className="text-xs text-foreground/60 mt-1">
                        Raison: {app.blockReason}
                      </div>
                    )}
                    {app.status === 'rejected' && app.rejectionReason && (
                      <div className="text-xs text-foreground/60 mt-1">
                        Raison: {app.rejectionReason}
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      {app.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleApprove(app.id)}
                            disabled={actionLoading === app.id}
                            className="px-3 py-1 bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-lg text-sm font-semibold transition disabled:opacity-50"
                          >
                            {actionLoading === app.id ? 'En cours...' : 'Approuver'}
                          </button>
                          <button
                            onClick={() => handleReject(app.id)}
                            disabled={actionLoading === app.id}
                            className="px-3 py-1 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg text-sm font-semibold transition disabled:opacity-50"
                          >
                            {actionLoading === app.id ? 'En cours...' : 'Rejeter'}
                          </button>
                        </>
                      )}
                      
                      {app.status === 'approved' && (
                        <button
                          onClick={() => handleToggleBlock(app.id, app.isBlocked)}
                          disabled={actionLoading === app.id}
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-semibold transition disabled:opacity-50 ${
                            app.isBlocked
                              ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                              : 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                          }`}
                        >
                          {app.isBlocked ? (
                            <>
                              <Unlock size={14} />
                              {actionLoading === app.id ? 'En cours...' : 'Débloquer'}
                            </>
                          ) : (
                            <>
                              <Ban size={14} />
                              {actionLoading === app.id ? 'En cours...' : 'Bloquer'}
                            </>
                          )}
                        </button>
                      )}

                      {app.status === 'rejected' && (
                        <button
                          onClick={() => handleApprove(app.id)}
                          disabled={actionLoading === app.id}
                          className="px-3 py-1 bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-lg text-sm font-semibold transition disabled:opacity-50"
                        >
                          {actionLoading === app.id ? 'En cours...' : 'Re-approuver'}
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
