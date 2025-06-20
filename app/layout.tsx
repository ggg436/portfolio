import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import InteractiveBackground from "@/components/interactive-background"
import FloatingElements from "@/components/floating-elements"
import ScrollProgress from "@/components/scroll-progress"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: "Portfolio | Creative Developer & 3D Specialist",
  description:
    "A modern portfolio showcasing creative development work, 3D experiences, and cutting-edge web technologies",
  keywords: "creative developer, 3D specialist, web development, Three.js, React, Next.js",
  authors: [{ name: "Creative Developer" }],
  openGraph: {
    title: "Portfolio | Creative Developer & 3D Specialist",
    description: "Explore cutting-edge web development and 3D experiences",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgress />
          <InteractiveBackground />
          <FloatingElements />
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}