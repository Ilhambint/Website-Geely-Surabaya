import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Geely Surabaya - Dealer Resmi Mobil Listrik EV #1 Jawa Timur | EX5 MAX, EX2, Starray",
    template: "%s | Geely Surabaya - Dealer Resmi Mobil Listrik EV Jawa Timur",
  },
  description:
    "🚗 Dealer resmi Geely Surabaya #1 di Jawa Timur! Mobil listrik EV terbaru: Geely EX5 MAX (Rp 515jt), EX2 GIIAS 2025, Starray EM-i. ⚡ Test drive GRATIS, kredit DP ringan, service center terpercaya. Hubungi: 0813-5704-6621",
  keywords: [
    // Primary Keywords
    "Geely Surabaya",
    "dealer Geely Surabaya",
    "mobil listrik Surabaya",
    "mobil EV Surabaya",
    "Geely EX5 MAX Surabaya",
    "Geely EX2 Surabaya",
    "Geely Starray Surabaya",

    // Location-based Keywords
    "dealer mobil listrik Jawa Timur",
    "mobil EV Jawa Timur",
    "showroom Geely Surabaya",
    "Geely Gubeng Surabaya",
    "dealer resmi Geely Jawa Timur",

    // Product Keywords
    "harga Geely EX5 MAX",
    "spesifikasi Geely EX5",
    "Geely EX5 515 juta",
    "mobil listrik 500 jutaan",
    "SUV listrik Surabaya",

    // Service Keywords
    "test drive Geely Surabaya",
    "test drive mobil listrik gratis",
    "kredit Geely Surabaya",
    "service Geely Surabaya",
    "spare part Geely Surabaya",

    // Technology Keywords
    "mobil listrik ADAS",
    "EV fast charging Surabaya",
    "mobil hybrid Surabaya",
    "teknologi EM-i",
    "baterai Short Blade",

    // Competitor Keywords
    "alternatif Tesla Surabaya",
    "mobil listrik murah Surabaya",
    "EV terbaik Indonesia",
    "mobil listrik China Surabaya",

    // Long-tail Keywords
    "dimana beli mobil listrik di Surabaya",
    "dealer mobil listrik terpercaya Surabaya",
    "harga mobil listrik Geely terbaru",
    "mobil listrik keluarga Surabaya",
    "charging station mobil listrik Surabaya",
  ].join(", "),
  authors: [
    {
      name: "Geely Surabaya Official Dealer",
      url: "https://geely-surabaya.com",
    },
  ],
  creator: "Geely Surabaya - Dealer Resmi Mobil Listrik EV",
  publisher: "Ilham Bintang ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://geely-surabaya.com",
    siteName: "Geely Surabaya - Dealer Resmi Mobil Listrik EV #1 Jawa Timur",
    title:
      "Geely Surabaya - Dealer Resmi Mobil Listrik EV #1 Jawa Timur | EX5 MAX, EX2, Starray",
    description:
      "🚗 Dealer resmi Geely Surabaya #1 di Jawa Timur! Mobil listrik EV terbaru: Geely EX5 MAX (Rp 515jt), EX2 GIIAS 2025, Starray EM-i. ⚡ Test drive GRATIS, kredit DP ringan, service center terpercaya.",
    images: [
      {
        url: "https://geely-surabaya.com/images/hero-1.png",
        width: 1200,
        height: 630,
        alt: "Geely EX5 MAX - Mobil Listrik EV #1 Surabaya Jawa Timur",
        type: "image/png",
      },
      {
        url: "https://geely-surabaya.com/images/geely-ex2-giias.png",
        width: 1200,
        height: 630,
        alt: "Geely EX2 GIIAS 2025 - SUV Listrik Urban Surabaya",
        type: "image/png",
      },
      {
        url: "https://geely-surabaya.com/images/starray-hero-clean.webp",
        width: 1200,
        height: 630,
        alt: "Geely Starray EM-i - Hybrid SUV Premium Surabaya",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GeelyIndonesia",
    creator: "@GeelyIndonesia",
    title: "Geely Surabaya - Dealer Resmi Mobil Listrik EV #1 Jawa Timur",
    description:
      "🚗 Dealer resmi Geely Surabaya #1! Mobil listrik EV: EX5 MAX (Rp 515jt), EX2 GIIAS, Starray EM-i. ⚡ Test drive GRATIS!",
    images: ["https://geely-surabaya.com/images/hero-1.png"],
  },
  alternates: {
    canonical: "https://geely-surabaya.com",
    languages: {
      "id-ID": "https://geely-surabaya.com",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "automotive",
  classification: "business",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.png",
        color: "#2563eb",
      },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Geely Surabaya",
  },
  appLinks: {
    web: {
      url: "https://geely-surabaya.com",
      should_fallback: true,
    },
  },
  generator: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* Enhanced SEO Meta Tags */}
        <meta name="geo.region" content="ID-JI" />
        <meta name="geo.placename" content="Surabaya, Jawa Timur" />
        <meta name="geo.position" content="-7.2575;112.7521" />
        <meta name="ICBM" content="-7.2575, 112.7521" />
        <meta name="language" content="Indonesian" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />
        <meta name="expires" content="never" />
        <meta name="pragma" content="no-cache" />
        <meta name="cache-control" content="no-cache" />

        {/* Business Information */}
        <meta
          name="business:contact_data:street_address"
          content="Jl. Sulawesi No.69, Gubeng"
        />
        <meta name="business:contact_data:locality" content="Surabaya" />
        <meta name="business:contact_data:region" content="Jawa Timur" />
        <meta name="business:contact_data:postal_code" content="60281" />
        <meta name="business:contact_data:country_name" content="Indonesia" />
        <meta
          name="business:contact_data:phone_number"
          content="+62-813-5704-6621"
        />
        <meta
          name="business:contact_data:email"
          content="ilhambint.geely@gmail.com"
        />

        {/* Additional Favicon Sizes */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.png" color="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#2563eb" />

        {/* Enhanced Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "@id": "https://geely-surabaya.com/#organization",
              name: "Geely Surabaya - Dealer Resmi Mobil Listrik EV Jawa Timur",
              alternateName: [
                "Dealer Geely Surabaya",
                "Geely Surabaya Official",
                "Showroom Geely Surabaya",
              ],
              description:
                "Dealer resmi Geely Surabaya #1 di Jawa Timur menyediakan mobil listrik EV terbaru: Geely EX5 MAX, EX2 GIIAS 2025, Starray EM-i dengan teknologi canggih, harga terbaik, dan pelayanan terpercaya.",
              url: "https://geely-surabaya.com",
              logo: "https://geely-surabaya.com/images/geely-logo.png",
              image: [
                "https://geely-surabaya.com/images/hero-1.png",
                "https://geely-surabaya.com/images/geely-ex2-giias.png",
                "https://geely-surabaya.com/images/starray-hero-clean.webp",
              ],
              telephone: "+62-813-5704-6621",
              email: "ilhambint.geely@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Sulawesi No.69, Gubeng",
                addressLocality: "Surabaya",
                addressRegion: "Jawa Timur",
                postalCode: "60281",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -7.2575,
                longitude: 112.7521,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              priceRange: "Rp 400.000.000 - Rp 600.000.000",
              paymentAccepted: [
                "Cash",
                "Credit Card",
                "Bank Transfer",
                "Financing",
                "Leasing",
              ],
              currenciesAccepted: "IDR",
              areaServed: [
                {
                  "@type": "State",
                  name: "Jawa Timur",
                },
                {
                  "@type": "City",
                  name: "Surabaya",
                },
                {
                  "@type": "City",
                  name: "Malang",
                },
                {
                  "@type": "City",
                  name: "Sidoarjo",
                },
                {
                  "@type": "City",
                  name: "Gresik",
                },
              ],
              brand: {
                "@type": "Brand",
                name: "Geely",
                logo: "https://geely-surabaya.com/images/geely-logo.png",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Mobil Listrik EV Geely",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Car",
                      name: "Geely EX5 MAX",
                      brand: "Geely",
                      model: "EX5 MAX",
                      vehicleEngine: {
                        "@type": "EngineSpecification",
                        engineType: "Electric Motor",
                        enginePower: "214 HP",
                      },
                      fuelType: "Electric",
                      vehicleTransmission: "Automatic",
                      numberOfDoors: 5,
                      vehicleSeatingCapacity: 5,
                      bodyType: "SUV",
                      driveWheelConfiguration: "Front Wheel Drive",
                    },
                    price: "515000000",
                    priceCurrency: "IDR",
                    availability: "InStock",
                    validFrom: "2025-01-01",
                    priceValidUntil: "2025-12-31",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Car",
                      name: "Geely EX2",
                      brand: "Geely",
                      model: "EX2",
                      vehicleEngine: {
                        "@type": "EngineSpecification",
                        engineType: "Electric Motor",
                      },
                      fuelType: "Electric",
                      bodyType: "SUV",
                    },
                    availability: "PreOrder",
                    availabilityStarts: "2025-03-01",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Car",
                      name: "Geely Starray EM-i",
                      brand: "Geely",
                      model: "Starray EM-i",
                      vehicleEngine: {
                        "@type": "EngineSpecification",
                        engineType: "Hybrid Electric Motor",
                        enginePower: "160 kW",
                      },
                      fuelType: "Hybrid",
                      bodyType: "SUV",
                    },
                    availability: "PreOrder",
                    availabilityStarts: "2025-03-01",
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "247",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Customer Surabaya",
                  },
                  reviewBody:
                    "Pelayanan dealer Geely Surabaya sangat memuaskan. Mobil listrik EX5 MAX berkualitas tinggi dengan teknologi canggih.",
                },
              ],
              sameAs: [
                "https://www.instagram.com/ilhambint.geelysurabaya/",
                "https://wa.me/6281357046621",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+62-813-5704-6621",
                  contactType: "sales",
                  areaServed: "ID",
                  availableLanguage: ["Indonesian", "English"],
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ],
                    opens: "08:00",
                    closes: "17:00",
                  },
                },
                {
                  "@type": "ContactPoint",
                  email: "ilhambint.geely@gmail.com",
                  contactType: "customer service",
                  areaServed: "ID",
                },
              ],
            }),
          }}
        />

        {/* Enhanced FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Dimana dealer Geely resmi di Surabaya?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dealer resmi Geely Surabaya berlokasi di Jl. Sulawesi No.69, Gubeng, Kec. Gubeng, Surabaya, Jawa Timur 60281. Kami melayani seluruh Jawa Timur dengan showroom terlengkap dan service center terpercaya.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Berapa harga mobil listrik Geely EX5 MAX di Surabaya?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Harga Geely EX5 MAX OTR Surabaya adalah Rp 515.000.000. Tersedia program kredit dengan DP mulai 20% dan cicilan ringan. Hubungi dealer kami untuk penawaran terbaik dan promo menarik.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apa saja mobil listrik Geely yang tersedia di Surabaya?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dealer Geely Surabaya menyediakan: 1) Geely EX5 MAX (ready stock), 2) Geely EX2 (debut GIIAS 2025, segera hadir), 3) Geely Starray EM-i (hybrid, segera hadir). Semua dengan teknologi terdepan dan garansi resmi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Bagaimana cara test drive mobil listrik Geely di Surabaya?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Test drive GRATIS! Hubungi WhatsApp 0813-5704-6621 atau kunjungi showroom kami. Kami juga menyediakan layanan test drive ke lokasi Anda di seluruh Surabaya dan Jawa Timur.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah ada charging station untuk mobil listrik Geely di Surabaya?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya! Geely EX5 MAX mendukung fast charging dan dapat menggunakan charging station umum di Surabaya. Kami juga menyediakan informasi lengkap lokasi charging station terdekat untuk kemudahan customer.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Berapa lama garansi mobil listrik Geely?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Geely memberikan garansi kendaraan 5 tahun/150.000 km dan garansi baterai 8 tahun/200.000 km. Service center resmi Geely Surabaya siap melayani perawatan berkala dan perbaikan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Kapan Geely EX2 dan Starray tersedia di Surabaya?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Geely EX2 dan Starray EM-i saat ini dipamerkan di GIIAS 2025 dan akan segera hadir di Surabaya pada Maret 2025. Pre-order sudah dibuka dengan benefit menarik untuk early bird customer.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Enhanced Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://geely-surabaya.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Dealer Mobil Listrik Surabaya",
                  item: "https://geely-surabaya.com#about",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Mobil Listrik EV",
                  item: "https://geely-surabaya.com#design",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Geely EX5 MAX",
                  item: "https://geely-surabaya.com#pricing",
                },
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://geely-surabaya.com/#website",
              url: "https://geely-surabaya.com",
              name: "Geely Surabaya - Dealer Resmi Mobil Listrik EV Jawa Timur",
              description:
                "Dealer resmi Geely Surabaya #1 di Jawa Timur. Mobil listrik EV terbaru dengan teknologi canggih, harga terbaik, dan pelayanan terpercaya.",
              publisher: {
                "@id": "https://geely-surabaya.com/#organization",
              },
              potentialAction: [
                {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate:
                      "https://geely-surabaya.com/?s={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              ],
              inLanguage: "id-ID",
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Test Drive Mobil Listrik Geely Gratis",
              description:
                "Layanan test drive gratis mobil listrik Geely EX5 MAX, EX2, dan Starray EM-i di Surabaya dan seluruh Jawa Timur",
              provider: {
                "@id": "https://geely-surabaya.com/#organization",
              },
              areaServed: {
                "@type": "State",
                name: "Jawa Timur",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Layanan Test Drive",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Test Drive di Showroom",
                    },
                    price: "0",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Test Drive ke Lokasi Customer",
                    },
                    price: "0",
                    priceCurrency: "IDR",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
