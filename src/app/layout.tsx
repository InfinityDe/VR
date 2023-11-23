import { Navbar } from '@/components/Navbar'
import './global.css'
import type { Metadata } from 'next'
import { Alata } from 'next/font/google'
import { Header } from '@/components/Header'

const ALT = Alata({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Infinity',
  description: 'Infinity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={ALT.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
