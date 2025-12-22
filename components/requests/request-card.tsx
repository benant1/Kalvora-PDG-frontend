"use client"

interface RequestCardProps {
  request: {
    id: number
    type: string
    title: string
    status: string
    date: string
  }
}

export default function RequestCard({ request }: RequestCardProps) {
  return (
    <div className="p-4 bg-card border border-border rounded-lg hover:border-primary transition">
      <h3 className="font-bold text-foreground">{request.title}</h3>
      <p className="text-sm text-foreground/60">
        {request.type} • {request.date}
      </p>
    </div>
  )
}
