import { Edit2, Trash2, Eye } from "lucide-react"

export default function PublisherProducts() {
  // Sample data - in production, this would come from the database
  const myProducts = [
    {
      id: 1,
      title: "Laptop Premium",
      platforms: ["Amazon", "Facebook", "Instagram"],
      regions: ["EU", "US"],
      status: "active",
      publishedDate: "2024-01-15",
      views: 1240,
    },
    {
      id: 2,
      title: "Designer Handbag",
      platforms: ["Etsy", "Instagram"],
      regions: ["EU"],
      status: "active",
      publishedDate: "2024-01-10",
      views: 856,
    },
    {
      id: 3,
      title: "Fitness Equipment",
      platforms: ["Amazon", "TikTok"],
      regions: ["US", "ASIA"],
      status: "paused",
      publishedDate: "2024-01-05",
      views: 520,
    },
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Produit</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Plateformes</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Régions</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Statut</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Vues</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myProducts.map((product) => (
                <tr key={product.id} className="border-b border-border hover:bg-muted/50 transition">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-foreground">{product.title}</p>
                      <p className="text-sm text-foreground/60">{product.publishedDate}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {product.platforms.slice(0, 2).map((platform) => (
                        <span key={platform} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                          {platform}
                        </span>
                      ))}
                      {product.platforms.length > 2 && (
                        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                          +{product.platforms.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {product.regions.map((region) => (
                        <span key={region} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                          {region}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        product.status === "active"
                          ? "bg-green-500/20 text-green-600"
                          : "bg-yellow-500/20 text-yellow-600"
                      }`}
                    >
                      {product.status === "active" ? "Actif" : "En Pause"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-foreground font-semibold">{product.views.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-muted rounded-lg transition" title="Voir">
                        <Eye size={18} className="text-foreground/60" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition" title="Éditer">
                        <Edit2 size={18} className="text-foreground/60" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition" title="Supprimer">
                        <Trash2 size={18} className="text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
