"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Shield,
  Zap,
  MapPin,
  MessageCircle,
  Clock,
  Mail,
  Instagram,
  Fuel,
  Battery,
  Gauge,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"

export default function GeelyStarrayPage() {
  const [currentExteriorSlide, setCurrentExteriorSlide] = useState(0)
  const [currentInteriorSlide, setCurrentInteriorSlide] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    date: "",
    time: "",
  })

  const exteriorImages = [
    "/images/starray-exterior-1.webp",
    "/images/starray-exterior-2.webp",
    "/images/starray-exterior-3.webp",
    "/images/starray-exterior-4.webp",
    "/images/starray-exterior-5.webp",
  ]

  const interiorImages = [
    "/images/starray-interior-1.webp",
    "/images/starray-interior-2.webp",
    "/images/starray-interior-3.webp",
    "/images/starray-interior-4.webp",
  ]

  const nextExteriorSlide = () => {
    setCurrentExteriorSlide((prev) => (prev + 1) % exteriorImages.length)
  }

  const prevExteriorSlide = () => {
    setCurrentExteriorSlide((prev) => (prev - 1 + exteriorImages.length) % exteriorImages.length)
  }

  const nextInteriorSlide = () => {
    setCurrentInteriorSlide((prev) => (prev + 1) % interiorImages.length)
  }

  const prevInteriorSlide = () => {
    setCurrentInteriorSlide((prev) => (prev - 1 + interiorImages.length) % interiorImages.length)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Halo, saya tertarik test drive Geely Starray EM-i:
    
Nama: ${formData.name}
WhatsApp: ${formData.whatsapp}
Tanggal Test Drive: ${formData.date}
Waktu Test Drive: ${formData.time}

Terima kasih! Saya menunggu konfirmasi dari dealer Geely Surabaya.`

    const whatsappUrl = `https://wa.me/6281357046621?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Jumbotron Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/starray-hero-clean.webp"
            alt="Geely Starray EM-i - Hybrid SUV Premium dengan Teknologi Canggih"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg animate-pulse">
            🚗 GIIAS 2025 - SEGERA HADIR DI SURABAYA
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Geely <span className="text-blue-400">Starray EM-i</span>
            <div className="text-lg md:text-xl font-normal text-orange-600 mt-2">
              📍 Saat ini di GIIAS - Segera Hadir di Surabaya Maret 2025
            </div>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Starray EM-i menggabungkan gaya berani dengan rancangan yang cermat. Setiap sudut dan permukaannya
            memancarkan kepercayaan diri dan menawarkan pendekatan baru yang segar dalam dunia mobilitas.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <h3 className="font-bold text-orange-800">Status Ketersediaan</h3>
            </div>
            <p className="text-orange-700 leading-relaxed">
              Geely Starray EM-i saat ini sedang dipamerkan di <strong>GIIAS 2025</strong> dan akan segera hadir di
              showroom Geely Surabaya pada <strong>Maret 2025</strong>. Jadilah yang pertama merasakan teknologi hybrid
              terdepan dengan pre-order sekarang dan dapatkan benefit eksklusif!
            </p>
          </div>

          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            onClick={() => {
              const message =
                "Halo, saya tertarik untuk pre-order Geely Starray EM-i GIIAS 2025. Mohon informasi benefit khusus dan jadwal kedatangan di Surabaya."
              window.open(`https://wa.me/6281357046621?text=${encodeURIComponent(message)}`, "_blank")
            }}
          >
            Pre-Order Sekarang - Benefit Khusus!
          </Button>
        </div>
      </section>

      {/* About Starray EM-i Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Revolusi Teknologi Hybrid Terdepan</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Geely Starray EM-i menghadirkan inovasi teknologi hybrid yang menggabungkan efisiensi bahan bakar terdepan
              dengan performa elektrik yang responsif. Dengan jangkauan hingga 1000 km dan konsumsi bahan bakar hanya
              2.4L/100km, Starray EM-i menetapkan standar baru untuk SUV hybrid premium di Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Battery className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Teknologi EM-i Hybrid</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sistem hybrid canggih yang mengoptimalkan penggunaan motor listrik dan mesin bensin untuk efisiensi
                  maksimal dan performa superior.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Fuel className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Efisiensi Luar Biasa</h3>
                <p className="text-gray-600 leading-relaxed">
                  Konsumsi bahan bakar hanya 2.4L/100km dengan jangkauan gabungan hingga 1000km, menjadikannya pilihan
                  terdepan untuk mobilitas berkelanjutan.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Gauge className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performa Premium</h3>
                <p className="text-gray-600 leading-relaxed">
                  Motor listrik 160kW memberikan torsi instan dan akselerasi yang responsif, menghadirkan pengalaman
                  berkendara yang tak terlupakan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exterior Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Desain Eksterior yang Memukau</h2>
            <p className="text-xl text-gray-600">
              Setiap detail dirancang untuk mencerminkan kemewahan dan teknologi terdepan
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={exteriorImages[currentExteriorSlide] || "/placeholder.svg"}
                  alt={`Geely Starray EM-i Exterior ${currentExteriorSlide + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevExteriorSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                aria-label="Previous exterior image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextExteriorSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                aria-label="Next exterior image"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {exteriorImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentExteriorSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentExteriorSlide ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to exterior image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Exterior Features */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lampu LED Signature</h3>
                <p className="text-gray-600">
                  Desain lampu LED yang distinctive dengan teknologi matrix beam untuk visibilitas optimal dan tampilan
                  yang elegan di segala kondisi.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aerodinamika Optimal</h3>
                <p className="text-gray-600">
                  Body design yang aerodinamis mengurangi drag coefficient untuk efisiensi bahan bakar yang lebih baik
                  dan stabilitas berkendara.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interior Mewah & Teknologi Canggih</h2>
            <p className="text-xl text-gray-600">
              Kabin premium dengan material berkualitas tinggi dan teknologi terdepan
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={interiorImages[currentInteriorSlide] || "/placeholder.svg"}
                  alt={`Geely Starray EM-i Interior ${currentInteriorSlide + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevInteriorSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                aria-label="Previous interior image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextInteriorSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                aria-label="Next interior image"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {interiorImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentInteriorSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentInteriorSlide ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to interior image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Interior Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Panoramic Sunroof</h3>
                <p className="text-gray-600 text-sm">
                  Atap kaca panoramik memberikan nuansa lapang dan pencahayaan alami yang optimal untuk semua penumpang.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Premium Leather Seats</h3>
                <p className="text-gray-600 text-sm">
                  Jok kulit premium dengan pola perforasi dan stitching detail yang memberikan kenyamanan dan kemewahan
                  maksimal.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Digital Cockpit</h3>
                <p className="text-gray-600 text-sm">
                  Dashboard digital dengan layar sentuh besar dan kontrol intuitif untuk pengalaman berkendara yang
                  modern.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Spesifikasi Teknis</h2>
            <p className="text-xl text-gray-600">Teknologi hybrid terdepan dengan performa yang mengesankan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Performance Specs */}
            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Performa & Efisiensi</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Motor Listrik</span>
                  <span className="text-blue-600 font-semibold">160 kW</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Jangkauan Gabungan</span>
                  <span className="text-blue-600 font-semibold">1000 km*</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Jangkauan EV Murni</span>
                  <span className="text-blue-600 font-semibold">105 km*</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Konsumsi Bahan Bakar</span>
                  <span className="text-blue-600 font-semibold">2.4L/100km*</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Sistem Hybrid</span>
                  <span className="text-blue-600 font-semibold">EM-i Technology</span>
                </div>
              </div>
            </Card>

            {/* Safety & Technology */}
            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Keamanan & Teknologi</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Advanced Driver Assistance System (ADAS)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Adaptive Cruise Control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Lane Keeping Assist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Automatic Emergency Braking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">360° Surround View Camera</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Blind Spot Detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Smart Infotainment System</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Wireless Charging</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pre-Order Geely Starray EM-i</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Jadilah yang pertama memiliki hybrid SUV premium terdepan. Pre-order sekarang dan dapatkan benefit
              eksklusif serta prioritas delivery di Surabaya.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Nama Lengkap
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
                    Nomor WhatsApp (Wajib)
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
                      Pilih Tanggal Test Drive
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="mt-1"
                      aria-label="Pilih tanggal test drive"
                    />
                  </div>

                  <div>
                    <Label htmlFor="time" className="text-gray-700">
                      Pilih Jam Test Drive
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                      <SelectTrigger className="mt-1" aria-label="Pilih waktu test drive">
                        <SelectValue placeholder="Pilih waktu yang sesuai" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pagi">Pagi (09:00-12:00)</SelectItem>
                        <SelectItem value="siang">Siang (13:00-16:00)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 text-base md:text-lg"
                  aria-label="Kirim permintaan test drive Geely Starray EM-i"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  JADWALKAN TEST DRIVE GRATIS
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  Tim dealer resmi Geely Surabaya akan segera menghubungi Anda melalui WhatsApp untuk konfirmasi jadwal
                  test drive. Data pribadi Anda 100% aman dan terlindungi.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer - Same as Home */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Alamat Dealer */}
            <div>
              <h3 className="text-xl font-bold mb-4">Dealer Resmi Geely Surabaya - Jawa Timur</h3>
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
                      Lihat Lokasi di Google Maps
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
              <h3 className="text-xl font-bold mb-4">Hubungi Dealer Geely</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email Resmi</p>
                    <Link href="mailto:ilhambint.geely@gmail.com" className="hover:text-blue-400">
                      ilhambint.geely@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Sosial */}
            <div>
              <h3 className="text-xl font-bold mb-4">Ikuti Media Sosial Kami</h3>
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
                  href="https://wa.me/6281357046621?text=Hallo%2C%20saya%20tertarik%20test%20drive%20Geely%20Starray%20EM-i."
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
            <p className="text-gray-400">© 2025 Dealer Resmi Geely Surabaya - Jawa Timur. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
