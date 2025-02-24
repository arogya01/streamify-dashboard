import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { DateRangePicker } from "@/components/date-range-picker"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Streamify Analytics Dashboard",
  description: "Analytics dashboard for Streamify music streaming service",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-screen bg-background">
            <Sidebar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto">
              <div className="flex justify-between items-center p-4 border-b">
                <DateRangePicker />
                <ThemeToggle />
              </div>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'