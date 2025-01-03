'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

import { ContactUs } from '@/components/sections/ContactUs'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { HowWeBuild } from '@/components/sections/HowWeBuild'
import { Introduction } from '@/components/sections/Introduction'
import { Services } from '@/components/sections/Services'
import { TechnologiesAndHardware } from '@/components/sections/TechnologiesAndHardware'
import { NavigationBar } from '@/components/shared/NavigationBar'

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const lenis = new Lenis({
      autoRaf: true,
    })
  }, [])

  return (
    <main className="relative overflow-hidden font-montserrat">
      <Hero />
      <Introduction />
      <NavigationBar />
      <Services />
      <TechnologiesAndHardware />
      <HowWeBuild />
      <ContactUs />
      <Footer />
    </main>
  )
}
