import Provider from '../context/Provider'
import './globals.css'
import type { Metadata } from 'next'
import { Staatliches } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const staatliches = Staatliches({
  weight: '400',
  subsets: ['latin'],
  variable: '--staatliches',
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
        <Provider>
          <div className="w-screen flex flex-col items-center justify-center space-y-4 p-4">
            <Header />
            <main className={`content ${staatliches.className}`}>
              {children}
            </main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  )
}
