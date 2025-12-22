"use client"

import Navigation from "@/components/navigation"
import { useState } from "react"
import { Save } from "lucide-react"
import PublisherManagementHeader from "@/components/market/publisher/publisher-management-header"
import SpaceInfoSection from "@/components/market/publisher/space-info-section"
import PublisherSettingsSection from "@/components/market/publisher/publisher-settings-section"
import PublisherStatsSection from "@/components/market/publisher/publisher-stats-section"
import BillingSection from "@/components/market/publisher/billing-section"
import SecuritySection from "@/components/market/publisher/security-section"

export default function PublisherManagementPage() {
  const [activeTab, setActiveTab] = useState<"info" | "settings" | "stats" | "billing" | "security">("info")
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => setIsSaving(false), 1500)
  }

  return (
    <main>
      <Navigation />
      <PublisherManagementHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Save Notification */}
        {isSaving && (
          <div className="mb-6 p-4 bg-green-900/20 border border-green-700 rounded-lg flex items-center gap-3">
            <Save size={20} className="text-green-500" />
            <span className="text-green-500">Changements sauvegardés avec succès</span>
          </div>
        )}

        {/* Tab Content */}
        {activeTab === "info" && <SpaceInfoSection onSave={handleSave} />}
        {activeTab === "settings" && <PublisherSettingsSection onSave={handleSave} />}
        {activeTab === "stats" && <PublisherStatsSection />}
        {activeTab === "billing" && <BillingSection />}
        {activeTab === "security" && <SecuritySection onSave={handleSave} />}
      </div>
    </main>
  )
}
