import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Swaroop Infra Build | Leading Construction Company in Ahmedabad",
  description:
    "Swaroop Infra Build - Premier construction company in Ahmedabad specializing in industrial, commercial & residential projects. Quality materials, experienced team, on-time delivery. Located at SG Highway, Vaishnodev Junction.",
  generator: "v0.app",
  keywords: "construction company Ahmedabad, industrial construction, commercial construction, residential construction, Swaroop Infra Build, builders in Ahmedabad, construction services Gujarat",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ inter.variable } ${ poppins.variable } font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
