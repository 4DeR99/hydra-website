'use client'

import { Hero } from '@/components/sections/Hero'
import { Introduction } from '@/components/sections/Introduction'
import { NavigationBar } from '@/components/shared/NavigationBar'

export default function Home() {
  return (
    <main className="relative overflow-hidden font-montserrat">
      <Hero />
      <Introduction />
      <NavigationBar />
    </main>
  )
}
