import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarBackground'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'
import { RootStyleRegistry } from './root-style-registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KodGenix',
  description: "This is Songkit's portfolio"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <RootStyleRegistry>
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
        </RootStyleRegistry>
      </body>
    </html>
  )
}
