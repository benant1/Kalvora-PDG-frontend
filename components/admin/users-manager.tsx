"use client"

import { MoreVertical } from "lucide-react"

export default function UsersManager() {
  const users = [
    {
      id: 1,
      name: "Marie Dupont",
      email: "marie@example.com",
      role: "Designer",
      joinDate: "2024-11-15",
      status: "active",
      purchases: 12,
    },
    {
      id: 2,
      name: "Jean Martin",
      email: "jean@example.com",
      role: "Developer",
      joinDate: "2024-10-20",
      status: "active",
      purchases: 8,
    },
    {
      id: 3,
      name: "Sophie Bernard",
      email: "sophie@example.com",
      role: "Seller",
      joinDate: "2024-12-01",
      status: "active",
      purchases: 15,
    },
    {
      id: 4,
      name: "Pierre Lefevre",
      email: "pierre@example.com",
      role: "Designer",
      joinDate: "2024-09-10",
      status: "inactive",
      purchases: 3,
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Gestion des Utilisateurs</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 font-semibold text-foreground">Nom</th>
              <th className="text-left py-4 px-4 font-semibold text-foreground">Email</th>
              <th className="text-left py-4 px-4 font-semibold text-foreground">Rôle</th>
              <th className="text-left py-4 px-4 font-semibold text-foreground">Date d'adhésion</th>
              <th className="text-left py-4 px-4 font-semibold text-foreground">Statut</th>
              <th className="text-left py-4 px-4 font-semibold text-foreground">Achats</th>
              <th className="text-left py-4 px-4 font-semibold text-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-border hover:bg-muted/50 transition">
                <td className="py-4 px-4 text-foreground font-medium">{user.name}</td>
                <td className="py-4 px-4 text-foreground/70">{user.email}</td>
                <td className="py-4 px-4 text-foreground">{user.role}</td>
                <td className="py-4 px-4 text-foreground/70">{user.joinDate}</td>
                <td className="py-4 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      user.status === "active" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {user.status === "active" ? "Actif" : "Inactif"}
                  </span>
                </td>
                <td className="py-4 px-4 text-foreground">{user.purchases}</td>
                <td className="py-4 px-4">
                  <button className="p-2 hover:bg-muted rounded-lg transition">
                    <MoreVertical size={18} className="text-foreground/60" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
