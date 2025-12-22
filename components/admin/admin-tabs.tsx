"use client"

import { useState } from "react"
import ContentManager from "./content-manager"
import UsersManager from "./users-manager"
import VendorsManager from "./vendors-manager"
import AnalyticsPanel from "./analytics-panel"

export default function AdminTabs() {
  const [activeTab, setActiveTab] = useState("vendors")

  const tabs = [
    { id: "vendors", label: "Demandes Vendeurs" },
    { id: "content", label: "Gestion du Contenu" },
    { id: "users", label: "Utilisateurs" },
    { id: "analytics", label: "Analytiques" },
  ]

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4 mb-8 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold transition border-b-2 ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/60 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {activeTab === "vendors" && <VendorsManager />}
          {activeTab === "content" && <ContentManager />}
          {activeTab === "users" && <UsersManager />}
          {activeTab === "analytics" && <AnalyticsPanel />}
        </div>
      </div>
    </section>
  )
}
