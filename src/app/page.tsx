'use client'

import { Hero } from '@/components/sections/Hero'
import { NavigationBar } from '@/components/shared/NavigationBar'

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden font-montserrat">
      <Hero />
      <NavigationBar />
    </main>
  )
}
