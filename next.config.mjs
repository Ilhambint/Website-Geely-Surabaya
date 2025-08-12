/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },

  // Image optimization security
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },

  // Disable x-powered-by header
  poweredByHeader: false,

  // Enable compression
  compress: true,

  // Strict mode
  reactStrictMode: true,

  // SWC minification
  swcMinify: true,

  // Experimental features for security
  experimental: {
    serverComponentsExternalPackages: [],
  },

  // Redirects for security
  async redirects() {
    return [
      // Redirect common attack paths
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/admin/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/phpmyadmin/:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // Rewrites for additional security
  async rewrites() {
    return [
      // Hide sensitive paths
      {
        source: '/health',
        destination: '/api/health',
      },
    ]
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
