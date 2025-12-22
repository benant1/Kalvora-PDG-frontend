"use client"

import Image from "next/image"
import { Download, MessageSquare, Eye } from "lucide-react"
import { useState } from "react"

interface Design {
  id: number
  title: string
  description: string
  image: string
  designer: string
  format: string
  price: string
}

export default function DesignCard({ design }: { design: Design }) {
  const [isRequesting, setIsRequesting] = useState(false)

  return (
    <div className="group rounded-lg border border-border bg-card overflow-hidden hover:border-secondary transition hover:shadow-lg">
      <div className="relative h-48 bg-muted overflow-hidden">
        <Image
          src={design.image || "/placeholder.svg"}
          alt={design.title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
          <button className="p-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90">
            <Eye size={20} />
          </button>
          <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
            <Download size={20} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-foreground mb-1">{design.title}</h3>
        <p className="text-sm text-secondary mb-3">{design.designer}</p>
        <p className="text-foreground/70 text-sm mb-3">{design.description}</p>

        <div className="flex gap-2 mb-4">
          <span className="text-xs bg-muted text-foreground/70 px-2 py-1 rounded">{design.format}</span>
          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Réf: #{design.id}</span>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-4">
          <span className="font-semibold text-secondary">{design.price}</span>
          <button
            onClick={() => setIsRequesting(!isRequesting)}
            className="text-secondary hover:text-secondary/80 transition"
          >
            <MessageSquare size={20} />
          </button>
        </div>
      </div>

      {isRequesting && (
        <div className="p-4 border-t border-border bg-muted">
          <button className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 font-semibold">
            Demander une Adaptation
          </button>
        </div>
      )}
    </div>
  )
}
