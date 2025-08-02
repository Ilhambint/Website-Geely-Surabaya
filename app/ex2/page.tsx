"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Car, Star, MapPin, MessageCircle, Clock, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"

export default function GeelyEX2Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-lg animate-pulse">
              🚗 GIIAS 2025 - SEGERA HADIR DI SURABAYA
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Geely EX2 <span className="text-pink-500">GIIAS 2025</span>
              <div className="text-lg md:text-xl font-normal text-orange-600 mt-2">
                📍 Saat ini di GIIAS - Segera Hadir di Surabaya Maret 2025
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Revolusi SUV Listrik Urban Telah Tiba Di Indonesia!
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <h3 className="font-bold text-orange-800">Status Ketersediaan</h3>
              </div>
              <p className="text-orange-700 text-sm leading-relaxed">
                Geely EX2 saat ini sedang dipamerkan di <strong>GIIAS 2025</strong> dan akan segera hadir di showroom
                Geely Surabaya pada <strong>Maret 2025</strong>. Pre-order sudah dibuka dengan benefit khusus untuk
                early bird customer!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Design & Comfort */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/geely-ex2-giias.png"
                  alt="Geely EX2 GIIAS 2025 - SUV Listrik Urban Premium"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold text-gray-900">GIIAS 2025 Debut</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Debut Spektakuler di GIIAS 2025</h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    <strong>Geely Auto Indonesia</strong> secara resmi mengawali babak baru di industri otomotif
                    nasional melalui penampilan perdananya di ajang{" "}
                    <strong>GAIKINDO Indonesia International Auto Show (GIIAS) 2025</strong>, mengusung tema{" "}
                    <em>"Geely Universe"</em> yang merefleksikan komitmen global mereka terhadap mobilitas cerdas dan
                    berkelanjutan di pasar Indonesia.
                  </p>
                  <p>
                    Di antara tiga model global unggulan yang debut perdana untuk pertama kalinya di Indonesia,{" "}
                    <strong>Geely Xingyuan</strong> (yang juga dikenal sebagai <strong>Geely EX2</strong>) hadir sebagai
                    mobil listrik urban yang menonjol dengan desain modern, sistem digital yang intuitif, dan efisiensi
                    tinggi.
                  </p>
                  <p>
                    Debut penting SUV listrik ini di GIIAS 2025 tidak hanya menunjukkan kapabilitas dan keunggulan
                    teknologi Geely, tetapi juga didukung oleh catatan penjualan Xingyuan yang telah mencapai{" "}
                    <strong>200.000 unit dalam enam bulan</strong> di pasar Tiongkok.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-pink-50 border-pink-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Star className="w-6 h-6 text-pink-500" />
                    <h3 className="font-bold text-gray-900">200K+ Unit Terjual</h3>
                  </div>
                  <p className="text-sm text-gray-600">Dalam 6 bulan di pasar Tiongkok</p>
                </Card>
                <Card className="p-6 bg-purple-50 border-purple-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Car className="w-6 h-6 text-purple-500" />
                    <h3 className="font-bold text-gray-900">SUV Listrik Urban</h3>
                  </div>
                  <p className="text-sm text-gray-600">Desain modern & sistem digital intuitif</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose EX2 Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Geely EX2 GIIAS 2025 Wajib Anda Miliki?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Design Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Desain Ikonik & Penuh Emosi</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Tampil memukau dengan kontur <strong>"Smiling Face"</strong> di bagian depan dan lampu Feather LED
                  yang elegan layaknya Audi. Pilihan warna ceria <em>"ice cream"</em> yang unik siap mencerminkan
                  kepribadian Anda.
                </p>
              </CardContent>
            </Card>

            {/* Comfort Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Car className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Kenyamanan Kabin "Rumah Impian"</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Rasakan kehangatan dan kelapangan kokpit <strong>"Embracing Cockpit"</strong>. Nikmati kursi{" "}
                  <strong>"Soft Feel Large Sofa"</strong>. Tambah lagi, hadirnya satu-satunya lampu suasana{" "}
                  <strong>256 warna</strong> di kelasnya yang dapat disesuaikan dengan suasana hati Anda.
                </p>
              </CardContent>
            </Card>

            {/* Space Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">"Raja Ruang" di Segmennya</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Dengan tingkat pemanfaatan kabin <strong>85%</strong> terbesar di kelas A0-Geely EX2 menghadirkan
                  ruang seluas mobil kelas B. Ruang kaki belakang sampai dengan <strong>890mm</strong> dan lantai
                  belakang rata menjamin kenyamanan maksimal bagi semua penumpang. Berkat desain{" "}
                  <strong>"Three drill-free"</strong> dengan ambang pintu rendah dan bukaan pintu lebar 65°, akses masuk
                  dan keluar sangat mudah. Jangan lupakan <strong>36 ruang penyimpanan</strong> fleksibel termasuk
                  bagasi depan 70L yang <em>"ramah wanita"</em>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Safety & Performance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Keamanan & Performa Terdepan</h2>

                {/* Safety Section */}
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-8 h-8 text-green-500" />
                    <h3 className="text-2xl font-bold text-gray-900">Keamanan Berstandar Global</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Dilengkapi <strong>SHIELD Battery Safety System</strong> yang teruji ekstrem, baterai Short Blade
                    kami terbukti <strong>8 kali lebih aman</strong> dari standar industri tanpa asap, api, atau ledakan
                    dalam uji tabrak. Fitur <strong>ADAS Level 2+</strong> dengan fungsi canggih dan pandangan panorama
                    540° dengan transparansi chassis memberikan perlindungan menyeluruh di setiap perjalanan.
                  </p>
                </div>

                {/* Performance Section */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="w-8 h-8 text-blue-500" />
                    <h3 className="text-2xl font-bold text-gray-900">Performa Lincah & Efisiensi Puncak</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Ditenagai arsitektur <strong>GEA</strong> yang fleksibel dengan penggerak roda belakang dan suspensi
                    independen penuh. Akselerasi gesit <strong>0-50 km/jam hanya dalam 3.9 detik</strong>. Teknologi
                    baterai liquid-cooled CATL memungkinkan pengisian daya cepat{" "}
                    <strong>30% hingga 80% hanya dalam 21 menit</strong>. Dengan jarak tempuh{" "}
                    <strong>NEDC 410 km</strong>, Geely EX2 sangat ideal untuk mobilitas harian di perkotaan dan
                    perjalanan menengah.
                  </p>
                </div>

                {/* Performance Stats */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-blue-50 border-blue-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">3.9s</div>
                      <div className="text-sm text-gray-600">0-50 km/jam</div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-green-50 border-green-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">21min</div>
                      <div className="text-sm text-gray-600">30%-80% Charging</div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-purple-50 border-purple-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">410km</div>
                      <div className="text-sm text-gray-600">NEDC Range</div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Features Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/geely-ex2-features.png"
                  alt="Geely EX2 Features - LED Headlights, Safety & Performance"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold text-gray-900">Premium Features</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Geely EX2 adalah perwujudan masa depan mobilitas</h2>
          <p className="text-xl md:text-2xl mb-8 text-pink-100">Cerdas, aman, nyaman, dan ramah lingkungan</p>

          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Jangan Tunggu Lagi! Jadilah Bagian dari Revolusi Ini!
            </h3>
            <p className="text-lg text-pink-100 mb-8">
              Lakukan Pre-book Geely EX2 GIIAS 2025 di Dealer Geely Ambara Group
            </p>
          </div>

          <Button
            size="lg"
            className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <Link href="https://wa.me/6281357046621?text=Halo%2C%20saya%20tertarik%20untuk%20pre-order%20Geely%20EX2%20GIIAS%202025">
              <MessageCircle className="w-5 h-5 mr-2" />
              Pre-Order Sekarang - Benefit Khusus!
            </Link>
          </Button>
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
                  href="https://wa.me/6281357046621?text=Hallo%2C%20saya%20tertarik%20test%20drive%20Geely%20EX2."
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
