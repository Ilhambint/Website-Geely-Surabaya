"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Calendar, MapPin, User, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"

interface GalleryImage {
  id: string
  src: string
  title: string
  description: string
  date: string
  location: string
  category: "customer-delivery" | "showroom" | "event" | "product"
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Gallery images data - easy to add more images here
  const galleryImages: GalleryImage[] = [
    {
      id: "delivery-1",
      src: "/images/gallery/customer-delivery-1.jpeg",
      title: "Serah Terima Geely EX5 MAX",
      description:
        "Serah terima kendaraan Geely EX5 MAX kepada customer di area Bandung. Terima kasih atas kepercayaannya memilih mobil listrik Geely.",
      date: "31 Juli 2025",
      location: "Bandung",
      category: "customer-delivery",
    },
    {
      id: "delivery-2",
      src: "/images/gallery/customer-delivery-2.jpeg",
      title: "Customer Delivery Geely EX5 MAX",
      description:
        "Momen bahagia serah terima kendaraan Geely EX5 MAX. Pelayanan terbaik dari dealer resmi Geely Surabaya untuk kepuasan customer.",
      date: "21 Juli 2025",
      location: "Surabaya",
      category: "customer-delivery",
    },
    {
      id: "delivery-3",
      src: "/images/gallery/customer-delivery-3.jpeg",
      title: "Handover Geely EX5 MAX",
      description:
        "Proses serah terima kendaraan Geely EX5 MAX yang dilakukan langsung di lokasi customer. Komitmen kami memberikan pelayanan terbaik.",
      date: "26 Juli 2025",
      location: "Surabaya",
      category: "customer-delivery",
    },
  ]

  const categories = [
    { id: "all", name: "Semua Foto", count: galleryImages.length },
    {
      id: "customer-delivery",
      name: "Serah Terima Customer",
      count: galleryImages.filter((img) => img.category === "customer-delivery").length,
    },
    { id: "showroom", name: "Showroom", count: galleryImages.filter((img) => img.category === "showroom").length },
    { id: "event", name: "Event", count: galleryImages.filter((img) => img.category === "event").length },
    { id: "product", name: "Produk", count: galleryImages.filter((img) => img.category === "product").length },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Galeri <span className="text-blue-600">Geely Surabaya</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Dokumentasi perjalanan kami melayani customer terbaik di Jawa Timur. Setiap foto menceritakan kepercayaan
              dan kepuasan customer terhadap mobil listrik Geely.
            </p>
            <Badge className="bg-blue-600 text-white px-6 py-2 text-lg">{galleryImages.length} Foto Terbaru</Badge>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {category.name}
                <Badge
                  variant="secondary"
                  className={`ml-2 ${selectedCategory === category.id ? "bg-white/20 text-white" : "bg-gray-100"}`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">Belum Ada Foto</h3>
              <p className="text-gray-500">Kategori ini belum memiliki foto. Silakan pilih kategori lain.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image) => (
                <Card
                  key={image.id}
                  className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  onClick={() => openModal(image)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{image.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{image.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{image.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{image.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{image.location}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {image.category === "customer-delivery"
                            ? "Serah Terima"
                            : image.category === "showroom"
                              ? "Showroom"
                              : image.category === "event"
                                ? "Event"
                                : "Produk"}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            {/* Close Button */}
            <Button
              onClick={closeModal}
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2"
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <Button
                  onClick={() => navigateImage("prev")}
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  onClick={() => navigateImage("next")}
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </>
            )}

            <div className="grid lg:grid-cols-2 h-full">
              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <Badge className="mb-4 bg-blue-600 text-white">
                      {selectedImage.category === "customer-delivery"
                        ? "Serah Terima Customer"
                        : selectedImage.category === "showroom"
                          ? "Showroom"
                          : selectedImage.category === "event"
                            ? "Event"
                            : "Produk"}
                    </Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedImage.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{selectedImage.description}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Tanggal:</span>
                      <span>{selectedImage.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Lokasi:</span>
                      <span>{selectedImage.location}</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                      <Link href="/#booking">Jadwalkan Test Drive</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bergabunglah dengan Customer Puas Kami</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari keluarga besar Geely Surabaya. Rasakan pengalaman berkendara mobil listrik terdepan
            dengan pelayanan terbaik.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full"
          >
            <Link href="/#booking">Test Drive Gratis Sekarang</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
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
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Hubungi Dealer Geely</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email Resmi</p>
                    <Link href="mailto:ilhambint.geely@gmail.com" className="hover:text-blue-400">
                      ilhambint.geely@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Ikuti Media Sosial Kami</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/ilhambint.geelysurabaya/"
                  target="_blank"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
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
