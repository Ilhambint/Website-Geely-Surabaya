"use client"

// Analytics data structure
export interface AnalyticsData {
  visitors: {
    total: number
    today: number
    thisWeek: number
    thisMonth: number
    uniqueIPs: Set<string>
  }
  pageViews: {
    home: number
    ex2: number
    starray: number
    gallery: number
    total: number
  }
  interactions: {
    testDrive: number
    preOrder: {
      ex2: number
      starray: number
      total: number
    }
    socialMedia: {
      instagram: number
      whatsapp: number
      total: number
    }
    downloads: {
      brochure: number
    }
    videoPlays: {
      safety: number
      testTrack: number
      exhibition: number
      total: number
    }
  }
  models: {
    ex5: {
      views: number
      testDrives: number
      brochureDownloads: number
    }
    ex2: {
      views: number
      preOrders: number
      giiasClicks: number
    }
    starray: {
      views: number
      preOrders: number
      giiasClicks: number
    }
  }
  realTimeActivity: Array<{
    id: string
    timestamp: number
    type: "visit" | "click" | "form" | "download" | "video"
    action: string
    page: string
    userAgent?: string
    ip?: string
  }>
}

// Initialize analytics data
const initAnalyticsData = (): AnalyticsData => ({
  visitors: {
    total: 0,
    today: 0,
    thisWeek: 0,
    thisMonth: 0,
    uniqueIPs: new Set(),
  },
  pageViews: {
    home: 0,
    ex2: 0,
    starray: 0,
    gallery: 0,
    total: 0,
  },
  interactions: {
    testDrive: 0,
    preOrder: {
      ex2: 0,
      starray: 0,
      total: 0,
    },
    socialMedia: {
      instagram: 0,
      whatsapp: 0,
      total: 0,
    },
    downloads: {
      brochure: 0,
    },
    videoPlays: {
      safety: 0,
      testTrack: 0,
      exhibition: 0,
      total: 0,
    },
  },
  models: {
    ex5: {
      views: 0,
      testDrives: 0,
      brochureDownloads: 0,
    },
    ex2: {
      views: 0,
      preOrders: 0,
      giiasClicks: 0,
    },
    starray: {
      views: 0,
      preOrders: 0,
      giiasClicks: 0,
    },
  },
  realTimeActivity: [],
})

// Analytics class
class Analytics {
  private data: AnalyticsData
  private listeners: Array<(data: AnalyticsData) => void> = []

  constructor() {
    this.data = this.loadData()
    this.startPeriodicSave()
  }

  private loadData(): AnalyticsData {
    if (typeof window === "undefined") return initAnalyticsData()

    try {
      const saved = localStorage.getItem("geely_analytics")
      if (saved) {
        const parsed = JSON.parse(saved)
        // Convert uniqueIPs back to Set
        parsed.visitors.uniqueIPs = new Set(parsed.visitors.uniqueIPs || [])
        return parsed
      }
    } catch (error) {
      console.error("Error loading analytics data:", error)
    }
    return initAnalyticsData()
  }

  private saveData() {
    if (typeof window === "undefined") return

    try {
      // Convert Set to Array for JSON serialization
      const dataToSave = {
        ...this.data,
        visitors: {
          ...this.data.visitors,
          uniqueIPs: Array.from(this.data.visitors.uniqueIPs),
        },
      }
      localStorage.setItem("geely_analytics", JSON.stringify(dataToSave))
    } catch (error) {
      console.error("Error saving analytics data:", error)
    }
  }

  private startPeriodicSave() {
    if (typeof window === "undefined") return
    setInterval(() => this.saveData(), 5000) // Save every 5 seconds
  }

  private addActivity(type: AnalyticsData["realTimeActivity"][0]["type"], action: string, page: string) {
    const activity = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      type,
      action,
      page,
      userAgent: navigator.userAgent,
      ip: "hidden", // In real app, get from server
    }

    this.data.realTimeActivity.unshift(activity)

    // Keep only last 100 activities
    if (this.data.realTimeActivity.length > 100) {
      this.data.realTimeActivity = this.data.realTimeActivity.slice(0, 100)
    }

    this.notifyListeners()
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.data))
  }

  // Public methods
  subscribe(listener: (data: AnalyticsData) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }

  getData(): AnalyticsData {
    return this.data
  }

  // Track page visit
  trackPageView(page: "home" | "ex2" | "starray" | "gallery") {
    this.data.pageViews[page]++
    this.data.pageViews.total++

    // Track model views
    if (page === "home") this.data.models.ex5.views++
    if (page === "ex2") this.data.models.ex2.views++
    if (page === "starray") this.data.models.starray.views++

    this.addActivity("visit", `Viewed ${page} page`, page)
    this.notifyListeners()
  }

  // Track visitor
  trackVisitor(ip?: string) {
    this.data.visitors.total++
    this.data.visitors.today++
    this.data.visitors.thisWeek++
    this.data.visitors.thisMonth++

    if (ip) {
      this.data.visitors.uniqueIPs.add(ip)
    }

    this.addActivity("visit", "New visitor", window.location.pathname)
    this.notifyListeners()
  }

  // Track test drive
  trackTestDrive(model: "ex5" | "ex2" | "starray" = "ex5") {
    this.data.interactions.testDrive++

    if (model === "ex5") this.data.models.ex5.testDrives++

    this.addActivity("form", `Test drive request - ${model.toUpperCase()}`, window.location.pathname)
    this.notifyListeners()
  }

  // Track pre-order
  trackPreOrder(model: "ex2" | "starray") {
    this.data.interactions.preOrder[model]++
    this.data.interactions.preOrder.total++
    this.data.models[model].preOrders++

    this.addActivity("form", `Pre-order - ${model.toUpperCase()}`, window.location.pathname)
    this.notifyListeners()
  }

  // Track social media clicks
  trackSocialMedia(platform: "instagram" | "whatsapp") {
    this.data.interactions.socialMedia[platform]++
    this.data.interactions.socialMedia.total++

    this.addActivity("click", `Social media - ${platform}`, window.location.pathname)
    this.notifyListeners()
  }

  // Track downloads
  trackDownload(type: "brochure") {
    this.data.interactions.downloads[type]++
    this.data.models.ex5.brochureDownloads++

    this.addActivity("download", `Downloaded ${type}`, window.location.pathname)
    this.notifyListeners()
  }

  // Track video plays
  trackVideoPlay(video: "safety" | "testTrack" | "exhibition") {
    this.data.interactions.videoPlays[video]++
    this.data.interactions.videoPlays.total++

    this.addActivity("video", `Played ${video} video`, window.location.pathname)
    this.notifyListeners()
  }

  // Track GIIAS clicks
  trackGiiasClick(model: "ex2" | "starray") {
    this.data.models[model].giiasClicks++

    this.addActivity("click", `GIIAS location - ${model.toUpperCase()}`, window.location.pathname)
    this.notifyListeners()
  }

  // Reset data (admin function)
  resetData() {
    this.data = initAnalyticsData()
    this.saveData()
    this.notifyListeners()
  }

  // Export data
  exportData() {
    return JSON.stringify(this.data, null, 2)
  }
}

// Singleton instance
export const analytics = new Analytics()

// React hook
import { useState, useEffect } from "react"

export function useAnalytics() {
  const [data, setData] = useState<AnalyticsData>(analytics.getData())

  useEffect(() => {
    const unsubscribe = analytics.subscribe(setData)
    return unsubscribe
  }, [])

  return {
    data,
    trackPageView: analytics.trackPageView.bind(analytics),
    trackVisitor: analytics.trackVisitor.bind(analytics),
    trackTestDrive: analytics.trackTestDrive.bind(analytics),
    trackPreOrder: analytics.trackPreOrder.bind(analytics),
    trackSocialMedia: analytics.trackSocialMedia.bind(analytics),
    trackDownload: analytics.trackDownload.bind(analytics),
    trackVideoPlay: analytics.trackVideoPlay.bind(analytics),
    trackGiiasClick: analytics.trackGiiasClick.bind(analytics),
    resetData: analytics.resetData.bind(analytics),
    exportData: analytics.exportData.bind(analytics),
  }
}
