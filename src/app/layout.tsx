import './globals.css'
import type { Metadata } from 'next'
import { Staatliches, Chivo } from 'next/font/google'

export const staatliches = Staatliches({
  weight: '400',
  subsets: ['latin'],
  variable: '--staatliches',
})

export const chivo = Chivo({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--chivo',
})

export const metadata: Metadata = {
  title: 'Guiding Light',
  description: 'Aotearoa Night Sky Discovery App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-w-screen flex flex-col items-center text-center">
      <body>
        <main className={staatliches.className}>
          {children}
        </main>
      </body>
    </html>
  )
}