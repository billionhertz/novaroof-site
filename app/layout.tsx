import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { COMPANY } from '@/lib/data/company'
import { generateLocalBusinessSchema, SchemaScript } from '@/lib/schema.tsx'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: {
    default: `Commercial Roofing Contractor Harrisonburg VA | ${COMPANY.name}`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description: "Nova Roof provides commercial roof repair, preventative maintenance, and membrane & metal roof restoration in Harrisonburg, VA and the Shenandoah Valley. Free inspections.",
  keywords: [
    "commercial roofing",
    "roof repair",
    "roof restoration",
    "roof maintenance",
    "Harrisonburg VA",
    "Shenandoah Valley",
    "EPDM",
    "TPO",
    "PVC",
    "metal roof",
    "spray foam"
  ],
  authors: [{ name: COMPANY.founder }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  metadataBase: new URL(COMPANY.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: `Commercial Roofing Contractor Harrisonburg VA | ${COMPANY.name}`,
    description: "Nova Roof provides commercial roof repair, preventative maintenance, and membrane & metal roof restoration in Harrisonburg, VA and the Shenandoah Valley.",
    images: [{ url: COMPANY.image }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Commercial Roofing Contractor Harrisonburg VA | ${COMPANY.name}`,
    description: "Nova Roof provides commercial roof repair, preventative maintenance, and membrane & metal roof restoration in Harrisonburg, VA and the Shenandoah Valley.",
    images: [COMPANY.image],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: COMPANY.url,
  },
}

export const viewport: Viewport = {
  themeColor: '#7ED321',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <SchemaScript schema={localBusinessSchema} />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-[#1F2937]">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
