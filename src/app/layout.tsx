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
  title: "Swaroop | Premium Property in Nava Vadodara",
  description:
    "AMAR INSTRUMENTS LLP - Premium 2BHK, 3BHK and Duplex properties at Girnaar Technopark, Vaishnodev Junction. RERA approved project with world-class amenities.",
  generator: "v0.app",
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
