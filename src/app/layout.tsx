import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: 'Modern Todo App',
  description: 'A modern, elegant, and fully responsive Todo Web Application.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-light-background-cream`}>
        {children}
      </body>
    </html>
  )
}
