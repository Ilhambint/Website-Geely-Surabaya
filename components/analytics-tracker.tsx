"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { analytics } from "@/lib/analytics"

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view
    let page: "home" | "ex2" | "starray" | "gallery" = "home"

    if (pathname === "/") page = "home"
    else if (pathname === "/ex2") page = "ex2"
    else if (pathname === "/starray") page = "starray"
    else if (pathname === "/gallery") page = "gallery"

    analytics.trackPageView(page)

    // Track visitor (simplified - in real app, get IP from server)
    analytics.trackVisitor()
  }, [pathname])

  return null // This component doesn't render anything
}
