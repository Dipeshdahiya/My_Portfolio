'use client'

import './globals.css'
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import LoadingScreen from '@/components/LoadingScreen'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)

  return (
    <html lang="en">
      <body className="bg-black overflow-x-hidden">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

        {!loading && (
          <div className="flex min-h-screen">
            {/* LEFT SIDEBAR (ALWAYS PRESENT) */}
            <Sidebar />

            {/* RIGHT PAGE CONTENT */}
            <main className="flex-1 min-h-screen">
              {children}
            </main>
          </div>
        )}
      </body>
    </html>
  )
}

