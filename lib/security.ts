import crypto from "crypto"

// Input sanitization
export function sanitizeInput(input: string): string {
  if (!input) return ""

  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, "") // Remove event handlers
    .substring(0, 1000) // Limit length
}

// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

// Phone number validation (Indonesian format)
export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/
  return phoneRegex.test(phone.replace(/\s|-/g, ""))
}

// Generate secure token
export function generateSecureToken(): string {
  return crypto.randomBytes(32).toString("hex")
}

// Hash sensitive data
export function hashData(data: string): string {
  return crypto.createHash("sha256").update(data).digest("hex")
}

// Validate form data
export interface FormData {
  name: string
  whatsapp: string
  date?: string
  time?: string
}

export function validateFormData(data: FormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  // Name validation
  if (!data.name || data.name.length < 2) {
    errors.push("Nama harus minimal 2 karakter")
  }
  if (data.name && data.name.length > 100) {
    errors.push("Nama terlalu panjang")
  }

  // WhatsApp validation
  if (!data.whatsapp) {
    errors.push("Nomor WhatsApp wajib diisi")
  } else if (!isValidPhoneNumber(data.whatsapp)) {
    errors.push("Format nomor WhatsApp tidak valid")
  }

  // Date validation (if provided)
  if (data.date) {
    const selectedDate = new Date(data.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (selectedDate < today) {
      errors.push("Tanggal tidak boleh di masa lalu")
    }

    const maxDate = new Date()
    maxDate.setMonth(maxDate.getMonth() + 3) // Max 3 months ahead

    if (selectedDate > maxDate) {
      errors.push("Tanggal terlalu jauh di masa depan")
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

// Honeypot field validation (anti-bot)
export function validateHoneypot(honeypotValue: string): boolean {
  // Honeypot should be empty (filled by bots)
  return !honeypotValue || honeypotValue.trim() === ""
}

// CSRF token validation
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString("base64")
}

export function validateCSRFToken(token: string, sessionToken: string): boolean {
  return token === sessionToken
}

// Content filtering
export function containsSpam(content: string): boolean {
  const spamPatterns = [
    /\b(viagra|cialis|casino|poker|lottery|winner|congratulations)\b/gi,
    /\b(click here|act now|limited time|urgent|free money)\b/gi,
    /\$\$\$|!!!/g,
    /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g, // Credit card patterns
  ]

  return spamPatterns.some((pattern) => pattern.test(content))
}

// Log security events
export function logSecurityEvent(event: {
  type: "rate_limit" | "suspicious_activity" | "blocked_country" | "spam_detected" | "invalid_input"
  ip: string
  userAgent?: string
  url?: string
  details?: string
}) {
  const timestamp = new Date().toISOString()
  const logEntry = {
    timestamp,
    ...event,
  }

  // In production, send to logging service
  console.warn("SECURITY EVENT:", JSON.stringify(logEntry))

  // You can integrate with services like:
  // - Sentry for error tracking
  // - LogRocket for session replay
  // - DataDog for monitoring
  // - Custom webhook for alerts
}
