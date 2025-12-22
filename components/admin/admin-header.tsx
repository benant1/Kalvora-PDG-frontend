import { Settings } from "lucide-react"

export default function AdminHeader() {
  return (
    <section className="py-8 px-4 bg-gradient-to-b from-primary/10 to-background border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Tableau de Bord Admin</h1>
            <p className="text-foreground/70">Gérez les templates, designs, produits et demandes de la plateforme</p>
          </div>
          <button className="p-3 bg-muted rounded-lg hover:bg-border transition">
            <Settings size={24} className="text-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
}
