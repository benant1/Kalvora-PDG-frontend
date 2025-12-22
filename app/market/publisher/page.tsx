"use client"

import Navigation from "@/components/navigation"
import PublisherHeader from "@/components/market/publisher/publisher-header"
import PublishSection from "@/components/market/publish-section"
import PublisherAvailableProducts from "@/components/market/publisher/publisher-available-products"
import PublisherProducts from "@/components/market/publisher/publisher-products"
import { useState } from "react"

export default function PublisherPage() {
  const [activeTab, setActiveTab] = useState<"publish" | "available" | "my-products">("publish")

  return (
    <main>
      <Navigation />
      <PublisherHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "publish" && <PublishSection />}
      {activeTab === "available" && <PublisherAvailableProducts />}
      {activeTab === "my-products" && <PublisherProducts />}
    </main>
  )
}
