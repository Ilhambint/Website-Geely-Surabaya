"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Shield } from "lucide-react"
import {
  sanitizeInput,
  validateFormData,
  validateHoneypot,
  generateCSRFToken,
  containsSpam,
  type FormData,
} from "@/lib/security"

interface SecureFormProps {
  title: string
  productName: string
  onSubmit?: (data: FormData) => void
}

export function SecureForm({ title, productName, onSubmit }: SecureFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    whatsapp: "",
    date: "",
    time: "",
  })

  const [errors, setErrors] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [honeypot, setHoneypot] = useState("")
  const [csrfToken, setCsrfToken] = useState("")
  const [isClient, setIsClient] = useState(false)

  // Generate CSRF token on client side
  useEffect(() => {
    setIsClient(true)
    setCsrfToken(generateCSRFToken())
  }, [])

  const handleInputChange = (field: keyof FormData, value: string) => {
    // Sanitize input
    const sanitizedValue = sanitizeInput(value)

    setFormData((prev) => ({
      ...prev,
      [field]: sanitizedValue,
    }))

    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isClient) return

    setIsSubmitting(true)
    setErrors([])

    try {
      // Honeypot validation (anti-bot)
      if (!validateHoneypot(honeypot)) {
        console.warn("Bot detected via honeypot")
        return
      }

      // Validate form data
      const validation = validateFormData(formData)
      if (!validation.isValid) {
        setErrors(validation.errors)
        return
      }

      // Spam detection
      const allContent = Object.values(formData).join(" ")
      if (containsSpam(allContent)) {
        setErrors(["Konten terdeteksi sebagai spam"])
        return
      }

      // Rate limiting check (client-side)
      const lastSubmission = localStorage.getItem("lastFormSubmission")
      const now = Date.now()
      if (lastSubmission && now - Number.parseInt(lastSubmission) < 30000) {
        // 30 seconds
        setErrors(["Harap tunggu 30 detik sebelum mengirim lagi"])
        return
      }

      // Store submission time
      localStorage.setItem("lastFormSubmission", now.toString())

      // Create WhatsApp message
      const message = `Halo, saya tertarik ${productName}:

Nama: ${formData.name}
WhatsApp: ${formData.whatsapp}
${formData.date ? `Tanggal: ${formData.date}` : ""}
${formData.time ? `Waktu: ${formData.time}` : ""}

Terima kasih! Saya menunggu konfirmasi dari dealer Geely Surabaya.`

      // Open WhatsApp
      const whatsappUrl = `https://wa.me/6281357046621?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")

      // Call onSubmit callback if provided
      if (onSubmit) {
        onSubmit(formData)
      }

      // Reset form
      setFormData({
        name: "",
        whatsapp: "",
        date: "",
        time: "",
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setErrors(["Terjadi kesalahan. Silakan coba lagi."])
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isClient) {
    return <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Security indicator */}
      <div className="flex items-center space-x-2 text-sm text-green-600 bg-green-50 p-3 rounded-lg">
        <Shield className="w-4 h-4" />
        <span>Form ini dilindungi dengan enkripsi SSL dan anti-spam</span>
      </div>

      {/* Honeypot field (hidden from users, visible to bots) */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* CSRF Token */}
      <input type="hidden" name="csrf_token" value={csrfToken} />

      {/* Error display */}
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <ul className="text-red-600 text-sm space-y-1">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <Label htmlFor="name" className="text-gray-700">
          Nama Lengkap *
        </Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          required
          maxLength={100}
          className="mt-1"
          placeholder="Masukkan nama lengkap Anda"
          autoComplete="name"
        />
      </div>

      <div>
        <Label htmlFor="whatsapp" className="text-gray-700">
          Nomor WhatsApp *
        </Label>
        <Input
          id="whatsapp"
          type="tel"
          value={formData.whatsapp}
          onChange={(e) => handleInputChange("whatsapp", e.target.value)}
          required
          maxLength={20}
          className="mt-1"
          placeholder="08123456789"
          autoComplete="tel"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date" className="text-gray-700">
            Pilih Tanggal
          </Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => handleInputChange("date", e.target.value)}
            className="mt-1"
            min={new Date().toISOString().split("T")[0]}
            max={new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
          />
        </div>

        <div>
          <Label htmlFor="time" className="text-gray-700">
            Pilih Waktu
          </Label>
          <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
            <SelectTrigger className="mt-1">
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
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 text-base md:text-lg disabled:opacity-50"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        {isSubmitting ? "Mengirim..." : title}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        Tim dealer resmi Geely Surabaya akan segera menghubungi Anda melalui WhatsApp. Data pribadi Anda 100% aman dan
        terlindungi dengan enkripsi SSL.
      </p>
    </form>
  )
}
