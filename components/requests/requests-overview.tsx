import { FileText, AlertCircle, CheckCircle, Clock } from "lucide-react"

export default function RequestsOverview() {
  const stats = [
    {
      label: "Demandes Totales",
      value: "24",
      icon: FileText,
      color: "from-primary to-primary/60",
    },
    {
      label: "En Attente",
      value: "8",
      icon: Clock,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      label: "Approuvées",
      value: "12",
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
    },
    {
      label: "Rejetées",
      value: "4",
      icon: AlertCircle,
      color: "from-red-500 to-red-600",
    },
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-12">Vos Demandes & Commandes</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className={`p-6 rounded-lg bg-gradient-to-br ${stat.color} text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-sm font-medium opacity-90">{stat.label}</h3>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
