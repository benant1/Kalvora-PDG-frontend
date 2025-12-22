"use client"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function AnalyticsPanel() {
  const data = [
    { month: "Jan", downloads: 240, sales: 1240 },
    { month: "Fév", downloads: 380, sales: 2210 },
    { month: "Mar", downloads: 200, sales: 1290 },
    { month: "Avr", downloads: 278, sales: 2000 },
    { month: "Mai", downloads: 189, sales: 2181 },
    { month: "Juin", downloads: 239, sales: 2500 },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-foreground">Analytiques & Rapports</h2>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-lg text-foreground mb-4">Téléchargements & Ventes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155" }} />
              <Legend />
              <Bar dataKey="downloads" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="sales" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-lg text-foreground mb-4">Tendance des Revenus</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155" }} />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#f97316" strokeWidth={2} dot={{ fill: "#f97316" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-6 rounded-lg bg-card border border-border">
          <p className="text-sm text-foreground/60 mb-2">Taux de Conversion</p>
          <p className="text-3xl font-bold text-foreground">3.24%</p>
          <p className="text-xs text-green-500 mt-2">+0.5% vs mois dernier</p>
        </div>
        <div className="p-6 rounded-lg bg-card border border-border">
          <p className="text-sm text-foreground/60 mb-2">Panier Moyen</p>
          <p className="text-3xl font-bold text-foreground">$89.50</p>
          <p className="text-xs text-green-500 mt-2">+$12.30 vs mois dernier</p>
        </div>
        <div className="p-6 rounded-lg bg-card border border-border">
          <p className="text-sm text-foreground/60 mb-2">Taux de Satisfaction</p>
          <p className="text-3xl font-bold text-foreground">4.6/5</p>
          <p className="text-xs text-green-500 mt-2">+0.3 vs mois dernier</p>
        </div>
      </div>
    </div>
  )
}
