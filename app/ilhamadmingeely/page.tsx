"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Eye,
  Users,
  MousePointer,
  Download,
  Play,
  MessageCircle,
  Instagram,
  Car,
  TrendingUp,
  Activity,
  Shield,
  BarChart3,
  RefreshCw,
  LogOut,
} from "lucide-react"
import { useAnalytics } from "@/lib/analytics"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginData, setLoginData] = useState({ id: "", password: "" })
  const [loginError, setLoginError] = useState("")
  const [currentTime, setCurrentTime] = useState(new Date())

  const { data, resetData, exportData } = useAnalytics()

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Check if already authenticated
  useEffect(() => {
    const auth = sessionStorage.getItem("geely_admin_auth")
    if (auth === "authenticated") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (loginData.id === "ilhamgub" && loginData.password === "ilham26") {
      setIsAuthenticated(true)
      sessionStorage.setItem("geely_admin_auth", "authenticated")
      setLoginError("")
    } else {
      setLoginError("ID atau password salah!")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem("geely_admin_auth")
    setLoginData({ id: "", password: "" })
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("id-ID").format(num)
  }

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("id-ID")
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "visit":
        return <Eye className="w-4 h-4" />
      case "click":
        return <MousePointer className="w-4 h-4" />
      case "form":
        return <MessageCircle className="w-4 h-4" />
      case "download":
        return <Download className="w-4 h-4" />
      case "video":
        return <Play className="w-4 h-4" />
      default:
        return <Activity className="w-4 h-4" />
    }
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Admin Dashboard</CardTitle>
            <p className="text-gray-600">Geely Surabaya Analytics</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {loginError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm">{loginError}</div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Admin ID</label>
                <Input
                  type="text"
                  value={loginData.id}
                  onChange={(e) => setLoginData((prev) => ({ ...prev, id: e.target.value }))}
                  placeholder="Masukkan Admin ID"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <Input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                  placeholder="Masukkan Password"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Geely Surabaya Analytics</h1>
              <p className="text-gray-600">Real-time Website Analytics Dashboard</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">
                  {currentTime.toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="text-lg font-mono">{currentTime.toLocaleTimeString("id-ID")}</div>
              </div>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Visitors</p>
                  <p className="text-3xl font-bold text-blue-600">{formatNumber(data.visitors.total)}</p>
                  <p className="text-xs text-gray-500">Unique IPs: {data.visitors.uniqueIPs.size}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Page Views</p>
                  <p className="text-3xl font-bold text-green-600">{formatNumber(data.pageViews.total)}</p>
                  <p className="text-xs text-gray-500">All pages</p>
                </div>
                <Eye className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Test Drives</p>
                  <p className="text-3xl font-bold text-orange-600">{formatNumber(data.interactions.testDrive)}</p>
                  <p className="text-xs text-gray-500">Form submissions</p>
                </div>
                <Car className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pre-Orders</p>
                  <p className="text-3xl font-bold text-purple-600">{formatNumber(data.interactions.preOrder.total)}</p>
                  <p className="text-xs text-gray-500">EX2 & Starray</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="models">Models</TabsTrigger>
            <TabsTrigger value="interactions">Interactions</TabsTrigger>
            <TabsTrigger value="realtime">Real-time</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Page Views */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5" />
                    <span>Page Views</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Home (EX5 MAX)</span>
                      <Badge variant="secondary">{formatNumber(data.pageViews.home)}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>EX2 Page</span>
                      <Badge variant="secondary">{formatNumber(data.pageViews.ex2)}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Starray Page</span>
                      <Badge variant="secondary">{formatNumber(data.pageViews.starray)}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Gallery</span>
                      <Badge variant="secondary">{formatNumber(data.pageViews.gallery)}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Instagram className="w-5 h-5" />
                    <span>Social Media Clicks</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Instagram</span>
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
                        {formatNumber(data.interactions.socialMedia.instagram)}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>WhatsApp</span>
                      <Badge className="bg-green-500">{formatNumber(data.interactions.socialMedia.whatsapp)}</Badge>
                    </div>
                    <div className="flex justify-between items-center font-semibold">
                      <span>Total</span>
                      <Badge variant="default">{formatNumber(data.interactions.socialMedia.total)}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Videos & Downloads */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Video Plays</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Safety Test Video</span>
                      <Badge variant="secondary">{formatNumber(data.interactions.videoPlays.safety)}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Test Track Video</span>
                      <Badge variant="secondary">{formatNumber(data.interactions.videoPlays.testTrack)}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Exhibition Video</span>
                      <Badge variant="secondary">{formatNumber(data.interactions.videoPlays.exhibition)}</Badge>
                    </div>
                    <div className="flex justify-between items-center font-semibold">
                      <span>Total</span>
                      <Badge variant="default">{formatNumber(data.interactions.videoPlays.total)}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Downloads</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>EX5 MAX Brochure</span>
                      <Badge variant="secondary">{formatNumber(data.interactions.downloads.brochure)}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Models Tab */}
          <TabsContent value="models" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* EX5 MAX */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Geely EX5 MAX</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Page Views</span>
                      <Badge variant="secondary">{formatNumber(data.models.ex5.views)}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Test Drives</span>
                      <Badge className="bg-blue-600">{formatNumber(data.models.ex5.testDrives)}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Brochure Downloads</span>
                      <Badge variant="outline">{formatNumber(data.models.ex5.brochureDownloads)}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* EX2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-pink-600">Geely EX2</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Page Views</span>
                      <Badge variant="secondary">{formatNumber(data.models.ex2.views)}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Pre-Orders</span>
                      <Badge className="bg-pink-600">{formatNumber(data.models.ex2.preOrders)}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>GIIAS Clicks</span>
                      <Badge variant="outline">{formatNumber(data.models.ex2.giiasClicks)}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Starray */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-indigo-600">Geely Starray EM-i</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Page Views</span>
                      <Badge variant="secondary">{formatNumber(data.models.starray.views)}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Pre-Orders</span>
                      <Badge className="bg-indigo-600">{formatNumber(data.models.starray.preOrders)}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>GIIAS Clicks</span>
                      <Badge variant="outline">{formatNumber(data.models.starray.giiasClicks)}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Interactions Tab */}
          <TabsContent value="interactions" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Form Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Test Drive Requests</span>
                      <Badge className="bg-orange-600">{formatNumber(data.interactions.testDrive)}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>EX2 Pre-Orders</span>
                      <Badge className="bg-pink-600">{formatNumber(data.interactions.preOrder.ex2)}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Starray Pre-Orders</span>
                      <Badge className="bg-indigo-600">{formatNumber(data.interactions.preOrder.starray)}</Badge>
                    </div>
                    <div className="flex justify-between items-center font-semibold">
                      <span>Total Pre-Orders</span>
                      <Badge variant="default">{formatNumber(data.interactions.preOrder.total)}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Engagement Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Social Media Clicks</span>
                      <Badge variant="secondary">{formatNumber(data.interactions.socialMedia.total)}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Video Plays</span>
                      <Badge variant="secondary">{formatNumber(data.interactions.videoPlays.total)}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Downloads</span>
                      <Badge variant="secondary">{formatNumber(data.interactions.downloads.brochure)}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Real-time Tab */}
          <TabsContent value="realtime" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span>Real-time Activity</span>
                  <Badge variant="secondary" className="ml-auto">
                    Live
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {data.realTimeActivity.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No recent activity</p>
                  ) : (
                    data.realTimeActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0">{getActivityIcon(activity.type)}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                          <p className="text-xs text-gray-500">
                            {activity.page} • {formatTime(activity.timestamp)}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {activity.type}
                        </Badge>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Data Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={resetData} variant="destructive" className="w-full">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reset All Data
                  </Button>
                  <p className="text-sm text-gray-600">⚠️ This will permanently delete all analytics data</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Export Data</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    onClick={() => {
                      const dataStr = exportData()
                      const dataBlob = new Blob([dataStr], { type: "application/json" })
                      const url = URL.createObjectURL(dataBlob)
                      const link = document.createElement("a")
                      link.href = url
                      link.download = `geely-analytics-${new Date().toISOString().split("T")[0]}.json`
                      link.click()
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export JSON
                  </Button>
                  <p className="text-sm text-gray-600">Download analytics data as JSON file</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
