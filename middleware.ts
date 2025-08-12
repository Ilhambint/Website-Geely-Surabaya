import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Rate limiting storage (in production, use Redis or database)
const rateLimit = new Map()

// Security headers configuration
const securityHeaders = {
  // Prevent XSS attacks
  "X-XSS-Protection": "1; mode=block",

  // Prevent clickjacking
  "X-Frame-Options": "DENY",

  // Prevent MIME type sniffing
  "X-Content-Type-Options": "nosniff",

  // Referrer policy
  "Referrer-Policy": "strict-origin-when-cross-origin",

  // Permissions policy
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",

  // Content Security Policy
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://www.google.com https://maps.googleapis.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "media-src 'self' https:",
    "connect-src 'self' https://api.whatsapp.com https://wa.me https://maps.googleapis.com",
    "frame-src 'self' https://www.youtube.com https://www.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://wa.me",
    "upgrade-insecure-requests",
  ].join("; "),

  // Strict Transport Security (HTTPS only)
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
}

// Rate limiting function
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 100 // Max 100 requests per 15 minutes

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return false
  }

  const limit = rateLimit.get(ip)

  if (now > limit.resetTime) {
    // Reset the limit
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return false
  }

  if (limit.count >= maxRequests) {
    return true
  }

  limit.count++
  return false
}

// Suspicious patterns detection
function detectSuspiciousPatterns(request: NextRequest): boolean {
  const url = request.url.toLowerCase()
  const userAgent = request.headers.get("user-agent")?.toLowerCase() || ""

  // Common attack patterns
  const suspiciousPatterns = [
    // SQL Injection attempts
    /(\bunion\b.*\bselect\b)|(\bselect\b.*\bfrom\b)|(\binsert\b.*\binto\b)|(\bdelete\b.*\bfrom\b)|(\bdrop\b.*\btable\b)/i,

    // XSS attempts
    /<script[^>]*>.*?<\/script>/i,
    /javascript:/i,
    /on\w+\s*=/i,

    // Path traversal
    /\.\.\//,
    /\.\.\\/,

    // Command injection
    /;\s*(cat|ls|pwd|whoami|id|uname)/i,

    // Common exploit attempts
    /wp-admin|wp-login|phpmyadmin|admin\.php|config\.php/i,
  ]

  // Bot detection patterns
  const botPatterns = [/bot|crawler|spider|scraper/i, /curl|wget|python|php/i]

  // Check URL and user agent for suspicious patterns
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(url) || pattern.test(userAgent)) {
      return true
    }
  }

  // Allow legitimate bots (Google, Bing, etc.) but block others
  const legitimateBots =
    /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|linkedinbot/i

  for (const pattern of botPatterns) {
    if (pattern.test(userAgent) && !legitimateBots.test(userAgent)) {
      return true
    }
  }

  return false
}

// Geolocation-based blocking (optional)
function isBlockedCountry(request: NextRequest): boolean {
  // You can implement country-based blocking here
  // const country = request.geo?.country
  // const blockedCountries = ['XX', 'YY'] // ISO country codes
  // return blockedCountries.includes(country || '')
  return false
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Get client IP
  const ip =
    request.ip || request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "unknown"

  // Apply security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Rate limiting check
  if (isRateLimited(ip)) {
    console.log(`Rate limit exceeded for IP: ${ip}`)
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": "900", // 15 minutes
        ...Object.fromEntries(Object.entries(securityHeaders)),
      },
    })
  }

  // Suspicious pattern detection
  if (detectSuspiciousPatterns(request)) {
    console.log(`Suspicious activity detected from IP: ${ip}, URL: ${request.url}`)
    return new NextResponse("Forbidden", {
      status: 403,
      headers: {
        ...Object.fromEntries(Object.entries(securityHeaders)),
      },
    })
  }

  // Geolocation blocking (if enabled)
  if (isBlockedCountry(request)) {
    console.log(`Blocked country access from IP: ${ip}`)
    return new NextResponse("Access Denied", {
      status: 403,
      headers: {
        ...Object.fromEntries(Object.entries(securityHeaders)),
      },
    })
  }

  // Add security headers to response
  response.headers.set("X-Request-ID", crypto.randomUUID())
  response.headers.set("X-Powered-By", "Geely-Security")

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
