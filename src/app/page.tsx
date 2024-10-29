'use client'

import { Hero } from '@/components/sections/Hero'
import { NavigationBar } from '@/components/shared/NavigationBar'

export default function Home() {
  return (
    <main className="font-montserrat relative h-screen overflow-hidden">
      <Hero />
      <NavigationBar />
    </main>
  )
}
