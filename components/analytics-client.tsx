'use client'

import React, { useEffect, useState } from 'react'

export default function AnalyticsClient() {
  const [AnalyticsComp, setAnalyticsComp] = useState<any>(null)

  useEffect(() => {
    let mounted = true
    // Import the analytics module dynamically on the client only
    import('@vercel/analytics/next')
      .then((mod) => {
        if (mounted && mod?.Analytics) {
          setAnalyticsComp(() => mod.Analytics)
        }
      })
      .catch((err) => {
        // ignore failure to load analytics in dev
        console.debug('Analytics dynamic import failed:', err)
      })

    return () => {
      mounted = false
    }
  }, [])

  if (!AnalyticsComp) return null
  return <AnalyticsComp />
}
