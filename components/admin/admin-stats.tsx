import { TrendingUp, Package, Zap, Users } from "lucide-react"

export default function AdminStats() {
  const stats = [
    {
      label: "Revenu Total",
      value: "$24,580",
      change: "+12%",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
    },
    {
      label: "Produits Publiés",
      value: "156",
      change: "+8",
      icon: Package,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Templates Actifs",
      value: "48",
      change: "+3",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
    },
    {
      label: "Utilisateurs Actifs",
      value: "1,240",
      change: "+120",
      icon: Users,
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-xs font-semibold text-green-500">{stat.change}</span>
                </div>
                <p className="text-sm text-foreground/60 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
