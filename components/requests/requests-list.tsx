"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function RequestsList() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const requests = [
    {
      id: 1,
      type: "Développement",
      title: "E-Commerce Site Development",
      status: "pending",
      date: "2025-01-15",
      description: "J'ai besoin d'un site e-commerce complet avec intégration Stripe",
      email: "client@example.com",
      priority: "high",
      estimatedTime: "4 semaines",
    },
    {
      id: 2,
      type: "Design",
      title: "Mobile App UI Design",
      status: "approved",
      date: "2025-01-10",
      description: "Concevoir l'interface utilisateur d'une application de fitness",
      email: "designer@example.com",
      priority: "medium",
      estimatedTime: "2 semaines",
    },
    {
      id: 3,
      type: "Publication",
      title: "Product Launch - 5 Regions",
      status: "in-progress",
      date: "2025-01-08",
      description: "Publication de 3 nouveaux produits sur Amazon, Facebook et Instagram",
      email: "seller@example.com",
      priority: "high",
      estimatedTime: "3 jours",
    },
    {
      id: 4,
      type: "Développement",
      title: "Mobile App - React Native",
      status: "completed",
      date: "2025-01-01",
      description: "Application mobile pour gestion de tâches",
      email: "mobile@example.com",
      priority: "medium",
      estimatedTime: "6 semaines",
    },
    {
      id: 5,
      type: "Design",
      title: "Website Design Refresh",
      status: "rejected",
      date: "2024-12-28",
      description: "Refonte du design du site corporate",
      email: "corp@example.com",
      priority: "low",
      estimatedTime: "1 semaine",
    },
    {
      id: 6,
      type: "Publication",
      title: "Social Media Campaign",
      status: "pending",
      date: "2024-12-25",
      description: "Lancer une campagne sur TikTok et Instagram pour 2 régions",
      email: "marketing@example.com",
      priority: "high",
      estimatedTime: "5 jours",
    },
  ]

  const filtered = filter === "all" ? requests : requests.filter((r) => r.status === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/20 text-yellow-600 border-yellow-500/30"
      case "approved":
        return "bg-green-500/20 text-green-600 border-green-500/30"
      case "in-progress":
        return "bg-blue-500/20 text-blue-600 border-blue-500/30"
      case "completed":
        return "bg-green-700/20 text-green-400 border-green-700/30"
      case "rejected":
        return "bg-red-500/20 text-red-600 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-600 border-gray-500/30"
    }
  }

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      pending: "En Attente",
      approved: "Approuvée",
      in_progress: "En Cours",
      completed: "Complétée",
      rejected: "Rejetée",
    }
    return labels[status] || status
  }

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 mb-8 flex-wrap">
          {["all", "pending", "approved", "in-progress", "completed", "rejected"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filter === status
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-border"
              }`}
            >
              {status === "all" ? "Toutes" : getStatusLabel(status)}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((request) => (
            <div
              key={request.id}
              className="bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition"
            >
              <button
                onClick={() => setExpandedId(expandedId === request.id ? null : request.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-border/30 transition"
              >
                <div className="flex items-center gap-4 flex-1 text-left">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-foreground">{request.title}</h3>
                      <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(request.status)}`}>
                        {getStatusLabel(request.status)}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/60">
                      {request.type} • {request.date}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-foreground/50 transition ${expandedId === request.id ? "rotate-180" : ""}`}
                />
              </button>

              {expandedId === request.id && (
                <div className="px-6 py-4 border-t border-border bg-muted/50 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Description</h4>
                    <p className="text-foreground/70">{request.description}</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Email de Contact</p>
                      <p className="font-medium text-foreground">{request.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Priorité</p>
                      <span
                        className={`inline-block px-3 py-1 rounded text-sm font-semibold ${
                          request.priority === "high"
                            ? "bg-red-500/20 text-red-400"
                            : request.priority === "medium"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {request.priority === "high" ? "Haute" : request.priority === "medium" ? "Moyenne" : "Basse"}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Temps Estimé</p>
                      <p className="font-medium text-foreground">{request.estimatedTime}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold transition">
                      Accepter
                    </button>
                    <button className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition font-semibold">
                      Contacter le Client
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
