import '../styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'

const montserrat = localFont({
  src: '../../public/fonts/Montserrat.ttf',
  variable: '--montserrat',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Hydra',
  description:
    'Hydra website is a platform for next generation virtual reality experiences.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.variable)}>{children}</body>
    </html>
  )
}
