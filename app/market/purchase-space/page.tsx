import Navigation from "@/components/navigation"
import PurchaseSpaceHero from "@/components/market/purchase-space/purchase-space-hero"
import PricingPlans from "@/components/market/purchase-space/pricing-plans"

export const metadata = {
  title: "Acheter Espace de Publication - DevMarket",
  description: "Achetez un espace de publication et commencez à vendre sur plusieurs plateformes",
}

export default function PurchaseSpacePage() {
  return (
    <main>
      <Navigation />
      <PurchaseSpaceHero />
      <PricingPlans />
    </main>
  )
}
