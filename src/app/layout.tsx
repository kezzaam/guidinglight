import HotToast from '@/context/HotToast'
import Provider from '../context/Provider'
import './globals.css'
import type { Metadata } from 'next'
import { Staatliches } from 'next/font/google'

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
        <div className="w-screen flex flex-col items-center justify-center space-y-4">
          <Provider>
            <HotToast />
            <main className={`w-screen content ${staatliches.className} py-4`}>
              {children}
            </main>
          </Provider>
        </div>
      </body>
    </html>
  )
}
