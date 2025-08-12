"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  Mail,
  Instagram,
  Shield,
  Zap,
  Camera,
  Smartphone,
  Volume2,
  Play,
  Download,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { VideoModal } from "@/components/video-modal"
import { Navbar } from "@/components/navbar"

type Language = "id"

const translations = {
  id: {
    // Navigation
    navDesign: "Desain & Eksterior",
    navInterior: "Interior & Teknologi",
    navPerformance: "Performa & Keamanan",
    navPricing: "Harga Geely EX5 MAX",
    navGallery: "Galeri",
    navTestDrive: "Jadwalkan Test Drive",

    // Hero Section
    heroTitle: "Revolusi Mobil Listrik EV Telah Tiba di",
    heroSubtitle:
      "Geely EX5 Max menghadirkan sinergi antara teknologi canggih, kemewahan premium, dan performa luar biasa untuk masa depan berkendara yang ramah lingkungan.",
    heroTestDrive: "Test Drive Gratis Sekarang",
    heroBrochure: "Unduh Brosur EX5 MAX",

    // Design Section
    designTitle: "Teknologi Mobil Listrik EV Terdepan",
    designSubtitle: "Inovasi berkelanjutan untuk masa depan yang lebih hijau",
    newGenBattery: "New Generation Short Blade Battery",
    newGenBatteryDesc:
      "Teknologi baterai revolusioner yang terintegrasi ke bodi mobil listrik EV, memberikan kekuatan maksimal, bobot ringan, dan stabilitas superior untuk pengalaman berkendara yang tak terlupakan.",
    flymeSound: "Flyme Sound System Premium",
    flymeSoundDesc:
      "Sistem audio canggih dengan teknologi terdepan yang menghadirkan pengalaman mendengarkan musik berkualitas studio di dalam kabin mobil listrik EV Geely EX5 MAX.",
    excellenceComfort: "Excellence in Comfort & Luxury",
    excellenceComfortDesc:
      "Kenyamanan premium yang beradaptasi dengan gaya hidup modern Anda, memastikan setiap perjalanan dengan mobil listrik EV menjadi pengalaman mewah dan menyenangkan.",

    // Interior Section
    interiorTitle: "Kokpit Cerdas Mobil Listrik EV Masa Depan",
    interiorSubtitle: "Teknologi Canggih Bertemu Kenyamanan Premium",
    touchScreen: "Layar Sentuh Cerdas 15.4 inci",
    touchScreenDesc: "Pusat kontrol digital untuk hiburan dan navigasi pintar",
    flymeSoundInterior: "Flyme Sound dengan 16 Speaker Premium",
    flymeSoundInteriorDesc: "Pengalaman audio imersif berkualitas konser di setiap perjalanan",
    camera360: "Kamera 360° dengan AI",
    camera360Desc: "Sistem parkir otomatis dan monitoring keamanan menyeluruh",
    wirelessCharging: "Fast Wireless Charging",
    wirelessChargingDesc: "Pengisian super cepat 20%-80% hanya dalam 20 menit",

    // Performance Section
    performanceTitle: "Performa Tinggi Mobil Listrik EV dengan Keamanan ADAS",
    performanceImpressive: "Performa Impresif EV",
    activeSafety: "Keamanan Aktif ADAS Terlengkap",
    engine: "Motor Listrik",
    power: "Tenaga Maksimal",
    torque: "Torsi Instan",
    acceleration: "Akselerasi (0-100 km/jam)",
    maxSpeed: "Kecepatan Maksimal",
    variantPro: "Varian Pro: 6,9 detik",
    variantMax: "Varian Max: 7,1 detik",

    // Pricing Section
    pricingTitle: "Harga Terbaik Geely EX5 MAX Surabaya",
    popular: "PALING POPULER",
    priceOtr: "Harga OTR Surabaya - Jawa Timur",
    scheduleTestDriveNow: "Test Drive Gratis Sekarang",

    // Gallery Section
    galleryTitle: "Galeri & Video Mobil Listrik EV",
    gallerySubtitle: "Lihat kecanggihan Geely EX5 MAX dari berbagai sudut",

    // Booking Section
    bookingTitle: "Test Drive Gratis Mobil Listrik EV Geely EX5 MAX",
    bookingSubtitle:
      "Rasakan langsung pengalaman berkendara mobil listrik EV terdepan di Surabaya. Dealer resmi Geely Jawa Timur siap melayani Anda dengan test drive gratis di showroom atau datang ke lokasi Anda.",
    fullName: "Nama Lengkap",
    whatsappNumber: "Nomor WhatsApp (Wajib)",
    selectDate: "Pilih Tanggal Test Drive",
    selectTime: "Pilih Jam Test Drive",
    selectTimeOption: "Pilih waktu yang sesuai",
    morning: "Pagi (09:00-12:00)",
    afternoon: "Siang (13:00-16:00)",
    scheduleTestDrive: "JADWALKAN TEST DRIVE GRATIS",
    dataSecure:
      "Tim dealer resmi Geely Surabaya akan segera menghubungi Anda melalui WhatsApp untuk konfirmasi jadwal test drive. Data pribadi Anda 100% aman dan terlindungi.",

    // Footer
    dealerAddress: "Dealer Resmi Geely Surabaya - Jawa Timur",
    viewOnMaps: "Lihat Lokasi di Google Maps",
    contactUs: "Hubungi Dealer Geely",
    email: "Email Resmi",
    followUs: "Ikuti Media Sosial Kami",
    copyright: "© 2025 Dealer Resmi Geely Surabaya - Jawa Timur. Hak Cipta Dilindungi.",

    // Form Message
    formMessage: "Halo, saya tertarik test drive gratis mobil listrik EV Geely EX5 MAX:",
    formName: "Nama:",
    formWhatsapp: "WhatsApp:",
    formDate: "Tanggal Test Drive:",
    formTime: "Waktu Test Drive:",
    formThanks: "Terima kasih! Saya menunggu konfirmasi dari dealer Geely Surabaya.",
  },
}

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

export default function GeelyEX5Landing() {
  const [language, setLanguage] = useState<Language>("id")
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    location: "",
    date: "",
    time: "",
  })

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isTestTrackVideoOpen, setIsTestTrackVideoOpen] = useState(false)
  const [isExhibitionVideoOpen, setIsExhibitionVideoOpen] = useState(false)
  const [currentInteriorSlide, setCurrentInteriorSlide] = useState(0)

  // Add interior images array
  const interiorImages = [
    "/images/geely-ex5-dark.png",
    "/images/geely-ex5-silver.png",
    "/images/geely-ex5-teal.png",
    "/images/geely-ex5-white.png",
  ]
  const heroImages = ["/images/hero-1.png", "/images/hero-2.png", "/images/hero-3.png", "/images/hero-4.png"]

  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `${t.formMessage}
    
${t.formName} ${formData.name}
${t.formWhatsapp} ${formData.whatsapp}
${t.formDate} ${formData.date}
${t.formTime} ${formData.time}

${t.formThanks}`

    const whatsappUrl = `https://wa.me/6281357046621?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  // Add this useEffect after the existing hero carousel useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInteriorSlide((prev) => (prev + 1) % interiorImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [interiorImages.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Video Modals */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoId="UhpHXpBRrEU" />
      <VideoModal isOpen={isTestTrackVideoOpen} onClose={() => setIsTestTrackVideoOpen(false)} videoId="l1YzaUTGLLk" />
      <VideoModal
        isOpen={isExhibitionVideoOpen}
        onClose={() => setIsExhibitionVideoOpen(false)}
        videoId="-LNtGOCJz64"
      />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Geely EX5 MAX - Mobil Listrik EV Premium Surabaya ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t.heroTitle} <span className="text-blue-400">Surabaya</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">{t.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("booking")}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              aria-label="Test drive gratis mobil listrik EV Geely EX5 MAX"
            >
              {t.heroTestDrive}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
              onClick={() => {
                const downloadUrl = "https://drive.google.com/uc?export=download&id=1lhNH-uevukJvh6Ro-DPanmPk95N0Tn5D"
                window.open(downloadUrl, "_blank")
              }}
              aria-label="Download brosur Geely EX5 MAX"
            >
              <Download className="w-5 h-5 mr-2" />
              {t.heroBrochure}
            </Button>
          </div>
        </div>
      </section>

      {/* Design & Exterior Section */}
      <section id="design" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.designTitle}</h2>
            <p className="text-xl text-gray-600">{t.designSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/new-generation-battery.webp"
                    alt="New Generation Short Blade Battery - Teknologi Baterai Mobil Listrik EV Terdepan"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t.newGenBattery}</h3>
                  <p className="text-gray-600">{t.newGenBatteryDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/flyme-sound-system.webp"
                    alt="Flyme Sound System Premium - Audio Berkualitas Tinggi Mobil Listrik EV"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t.flymeSound}</h3>
                  <p className="text-gray-600">{t.flymeSoundDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/excellence-in-comfort.webp"
                    alt="Excellence in Comfort - Kenyamanan Premium Mobil Listrik EV"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t.excellenceComfort}</h3>
                  <p className="text-gray-600">{t.excellenceComfortDesc}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interior & Technology Section */}
      <section id="interior" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.interiorTitle}</h2>
              <p className="text-xl text-gray-600 mb-8">{t.interiorSubtitle}</p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t.touchScreen}</h3>
                    <p className="text-gray-600">{t.touchScreenDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Volume2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t.flymeSoundInterior}</h3>
                    <p className="text-gray-600">{t.flymeSoundInteriorDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Camera className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t.camera360}</h3>
                    <p className="text-gray-600">{t.camera360Desc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t.wirelessCharging}</h3>
                    <p className="text-gray-600">{t.wirelessChargingDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                {interiorImages.map((image, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-1000 ${
                      index === currentInteriorSlide ? "opacity-100" : "opacity-0 absolute inset-0"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Interior Mewah Geely EX5 MAX - Mobil Listrik EV Premium ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance & Safety Section */}
      <section id="performance" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.performanceTitle}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Performance Column */}
            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t.performanceImpressive}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">{t.engine}</span>
                  <span className="text-blue-600 font-semibold text-sm">Permanent Magnetic Synchronous Motor</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">{t.power}</span>
                  <span className="text-blue-600 font-semibold">214 HP</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">{t.torque}</span>
                  <span className="text-blue-600 font-semibold">320 Nm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">{t.acceleration}</span>
                  <div className="text-right">
                    <div className="text-blue-600 font-semibold text-sm">{t.variantPro}</div>
                    <div className="text-blue-600 font-semibold text-sm">{t.variantMax}</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">{t.maxSpeed}</span>
                  <span className="text-blue-600 font-semibold">175 km/jam</span>
                </div>
              </div>
            </Card>

            {/* Safety Column */}
            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t.activeSafety}</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Adaptive Cruise Control (ACC)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Automatic Emergency Braking (AEB)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Lane Keeping Assist (LKA)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Blind Spot Detection (BSD)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Rear Cross Traffic Alert</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Intelligent Cruise Control (ICC)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Collision Mitigation Support (CMSF dan CMSR)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Lane Changing Assistant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Traffic Sign Information</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Doors Open Warning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Emergency Lane Keeping Assist</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.pricingTitle}</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center">
              <Badge className="mb-4 bg-blue-600">{t.popular}</Badge>
              <h3 className="text-2xl font-bold mb-2">Geely EX5 MAX</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">Rp 515.000.000</div>
              <p className="text-gray-600 mb-6">{t.priceOtr}</p>
              <Button
                onClick={() => scrollToSection("booking")}
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700"
                aria-label="Test drive gratis Geely EX5 MAX sekarang"
              >
                {t.scheduleTestDriveNow}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.galleryTitle}</h2>
            <p className="text-xl text-gray-600">{t.gallerySubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Item */}
            <Card className="group cursor-pointer overflow-hidden" onClick={() => setIsVideoModalOpen(true)}>
              <CardContent className="p-0 relative">
                <Image
                  src="/images/geely-safety-video-thumbnail.png"
                  alt="Video Safety Test Geely EX5 MAX - Uji Keamanan Mobil Listrik EV Terlengkap"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" variant="secondary" className="rounded-full bg-white/90 hover:bg-white shadow-lg">
                    <Play className="w-8 h-8 text-gray-900 ml-1" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  📹 Safety Test Video
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">3:45</div>
              </CardContent>
            </Card>

            {/* Test Track Video Item */}
            <Card className="group cursor-pointer overflow-hidden" onClick={() => setIsTestTrackVideoOpen(true)}>
              <CardContent className="p-0 relative">
                <Image
                  src="/images/test-track-video-thumbnail.jpeg"
                  alt="Video Test Track Geely EX5 MAX - Performa Mobil Listrik EV di Sirkuit"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" variant="secondary" className="rounded-full bg-white/90 hover:bg-white shadow-lg">
                    <Play className="w-8 h-8 text-gray-900 ml-1" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  📹 Test Track Performance
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">4:12</div>
              </CardContent>
            </Card>

            {/* Exhibition Gallery Item */}
            <Card className="group cursor-pointer overflow-hidden" onClick={() => setIsExhibitionVideoOpen(true)}>
              <CardContent className="p-0 relative">
                <Image
                  src="/images/geely-ex5-exhibition.png"
                  alt="Video Exhibition Geely EX5 MAX - Pameran Mobil Listrik EV Terbaru"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" variant="secondary" className="rounded-full bg-white/90 hover:bg-white shadow-lg">
                    <Play className="w-8 h-8 text-gray-900 ml-1" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  📹 Exhibition Display
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">2:30</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.bookingTitle}</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{t.bookingSubtitle}</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    {t.fullName}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1"
                    aria-label="Masukkan nama lengkap untuk test drive"
                  />
                </div>

                <div>
                  <Label htmlFor="whatsapp" className="text-gray-700">
                    {t.whatsappNumber}
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    required
                    className="mt-1"
                    placeholder="08123456789"
                    aria-label="Nomor WhatsApp untuk konfirmasi test drive"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-gray-700">
                      {t.selectDate}
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="mt-1"
                      aria-label="Pilih tanggal test drive mobil listrik EV"
                    />
                  </div>

                  <div>
                    <Label htmlFor="time" className="text-gray-700">
                      {t.selectTime}
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                      <SelectTrigger className="mt-1" aria-label="Pilih waktu test drive">
                        <SelectValue placeholder={t.selectTimeOption} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pagi">{t.morning}</SelectItem>
                        <SelectItem value="siang">{t.afternoon}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 text-base md:text-lg"
                  aria-label="Kirim permintaan test drive gratis Geely EX5 MAX"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.scheduleTestDrive}
                </Button>

                <p className="text-sm text-gray-600 text-center">{t.dataSecure}</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Alamat Dealer */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t.dealerAddress}</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
                  <div>
                    <p>Jl. Sulawesi No.69, Gubeng, Kec. Gubeng, Surabaya, Jawa Timur 60281</p>
                    <Link
                      href="https://maps.google.com/?q=Geely+Surabaya"
                      className="text-blue-400 hover:underline text-sm"
                      target="_blank"
                    >
                      {t.viewOnMaps}
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm">Senin - Sabtu: 08:00 - 17:00</p>
                    <p className="text-sm">Minggu: 09:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hubungi Kami */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t.contactUs}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">{t.email}</p>
                    <Link href="mailto:ilhambint.geely@gmail.com" className="hover:text-blue-400">
                      ilhambint.geely@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Sosial */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t.followUs}</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/ilhambint.geelysurabaya/"
                  target="_blank"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
                  aria-label="Follow Instagram Geely Surabaya"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://wa.me/6281357046621?text=Hallo%2C%20saya%20tertarik%20test%20drive%20mobil%20listrik%20EV%20Geely%20EX5%20MAX."
                  target="_blank"
                  className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
                  aria-label="Chat WhatsApp Geely Surabaya"
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">{t.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h1>Dealer Resmi Geely Surabaya - Mobil Listrik EV Terbaik Jawa Timur</h1>
        <p>
          Geely Surabaya adalah dealer resmi mobil listrik EV terpercaya di Jawa Timur. Kami menyediakan berbagai varian
          mobil listrik terbaru seperti Geely EX5 MAX, Geely Starwish, dan Geely Starray dengan teknologi canggih dan
          ramah lingkungan.
        </p>
        <p>
          Kunjungi showroom Geely Surabaya di Jl. Sulawesi No.69, Gubeng untuk test drive gratis dan konsultasi lengkap
          mengenai mobil listrik EV terbaik. Tim profesional kami siap membantu Anda menemukan mobil listrik yang sesuai
          dengan kebutuhan dan budget.
        </p>
        <p>
          Geely EX5 MAX hadir dengan teknologi ADAS terlengkap, performa tinggi 214 HP, dan fitur keamanan canggih.
          Dapatkan harga terbaik dan program kredit menarik hanya di dealer resmi Geely Surabaya.
        </p>
      </div>
    </div>
  )
}
