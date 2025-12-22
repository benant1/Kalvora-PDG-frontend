"use client"

import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const monthlyData = [
  { month: "Jan", views: 4000, clicks: 2400, sales: 1200 },
  { month: "Fév", views: 3000, clicks: 1398, sales: 921 },
  { month: "Mar", views: 2000, clicks: 9800, sales: 2290 },
  { month: "Avr", views: 2780, clicks: 3908, sales: 2000 },
  { month: "Mai", views: 1890, clicks: 4800, sales: 2181 },
  { month: "Jun", views: 2390, clicks: 3800, sales: 2500 },
]

const platformData = [
  { name: "Amazon", value: 35, color: "#FF9900" },
  { name: "Facebook", value: 25, color: "#1877F2" },
  { name: "Instagram", value: 20, color: "#E4405F" },
  { name: "TikTok", value: 12, color: "#000000" },
  { name: "eBay", value: 8, color: "#E53238" },
]

export default function PublisherStatsSection() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 text-center">
          <p className="text-foreground/70 text-sm font-medium">Vues Totales</p>
          <p className="text-3xl font-bold text-primary mt-2">24,580</p>
          <p className="text-green-500 text-sm mt-2">+12% ce mois</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-foreground/70 text-sm font-medium">Clics</p>
          <p className="text-3xl font-bold text-secondary mt-2">8,240</p>
          <p className="text-green-500 text-sm mt-2">+8% ce mois</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-foreground/70 text-sm font-medium">Ventes</p>
          <p className="text-3xl font-bold text-accent mt-2">1,248</p>
          <p className="text-green-500 text-sm mt-2">+15% ce mois</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-foreground/70 text-sm font-medium">Revenu</p>
          <p className="text-3xl font-bold text-foreground mt-2">$24,560</p>
          <p className="text-green-500 text-sm mt-2">+18% ce mois</p>
        </Card>
      </div>

      {/* Charts */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">Tendances Mensuelles</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #444" }} />
            <Legend />
            <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} />
            <Line type="monotone" dataKey="clicks" stroke="#8b5cf6" strokeWidth={2} />
            <Line type="monotone" dataKey="sales" stroke="#f97316" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">Ventes par Plateforme</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">Top Produits</h3>
          <div className="space-y-3">
            {[
              { name: "Produit Premium Plus", sales: 245, revenue: "$5,200" },
              { name: "Template Moderne", sales: 189, revenue: "$3,780" },
              { name: "Design Kit Complet", sales: 156, revenue: "$3,120" },
              { name: "Application Mobile", sales: 128, revenue: "$2,560" },
            ].map((product, i) => (
              <div key={i} className="p-3 bg-muted rounded-lg">
                <p className="text-foreground font-medium">{product.name}</p>
                <div className="flex justify-between mt-2 text-sm text-foreground/70">
                  <span>{product.sales} ventes</span>
                  <span className="text-accent font-semibold">{product.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
