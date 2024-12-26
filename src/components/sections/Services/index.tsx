import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

import { SectionHeader } from '@/components/shared/SectionHeader'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { Container } from '@/components/system/Container'
import { HeadlessCardsCarousel } from '@/components/system/HeadlessCardsCarousel'
import { cn } from '@/lib/utils'

import { services } from './constant'

export const Services = () => {
  useGSAP(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth < 768) return
    gsap.registerPlugin(ScrollTrigger)
    const scrollTargets = document.querySelectorAll('.scroll-item')

    const scrollTween = gsap.to(scrollTargets, {
      xPercent: -100 * (scrollTargets.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.services-container',
        pin: true,
        scrub: 1,
        end: '+=3000',
      },
    })

    scrollTargets.forEach((target, index) => {
      const hasNext = index < scrollTargets.length - 1
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: target,
          containerAnimation: scrollTween,
          start: 'right 80%',
          end: 'right 20%',
          scrub: 3,
          toggleActions: 'play none none reverse',
        },
      })

      if (hasNext) {
        tl.to(
          `.card-${index}`,
          {
            transform: `translateX(-${140 - 2 * index}%) translateY(${5 * index}%) scale(0.8)`,
            ease: 'power1.out',
          },
          0,
        ).to(
          `.card-${index + 1}`,
          {
            scale: 1.1,
            ease: 'power2.out',
          },
          0,
        )
      }
    })
  })

  return (
    <section className="services-container relative my-[1.5rem] w-full overflow-hidden py-[1.5rem] md:my-[2.5rem] md:py-[2rem]">
      <Container className="flex h-auto flex-col items-center gap-10">
        <SectionHeader
          title="Why build"
          subtitle="with hydra?"
          description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
        />
        <HeadlessCardsCarousel cardsCount={services.length}>
          {({ currentCardIndex, handleNextClick, handlePrevClick }) => (
            <div className="relative max-w-[320px] md:hidden">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  className={cn(
                    'absolute left-0 top-0 w-full transition-opacity duration-150',
                    { relative: index === 0 },
                    {
                      'opacity-0': index !== currentCardIndex,
                    },
                  )}
                  style={{
                    zIndex: services.length - index,
                  }}
                />
              ))}
              <button
                className={cn(
                  'absolute left-0 top-[47%] z-10 flex size-12 translate-x-[-50%] items-center justify-center',
                  'rounded-full border-[5px] border-[#0E0E0E]/60 bg-accent',
                  {
                    'cursor-not-allowed opacity-15': currentCardIndex === 0,
                  },
                )}
                onClick={handlePrevClick}
              >
                <ChevronLeft className="text-black/60" />
              </button>
              <button
                className={cn(
                  'absolute right-0 top-[47%] z-10 flex size-12 translate-x-[50%] items-center justify-center',
                  'rounded-full border-[5px] border-[#0E0E0E]/60 bg-accent',
                  {
                    'cursor-not-allowed opacity-15':
                      currentCardIndex === services.length - 1,
                  },
                )}
                onClick={handleNextClick}
              >
                <ChevronRight className="text-black/60" />
              </button>
            </div>
          )}
        </HeadlessCardsCarousel>
      </Container>
      <div className="scroll-target hidden min-h-[500px] w-fit md:flex">
        {services.map((service) => (
          <div
            key={service.title}
            className="scroll-item w-screen"
          ></div>
        ))}
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <div className="relative mt-[200px] h-[250px] w-[650px]">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                className={cn(
                  'absolute left-0 top-0 h-[250px] w-[650px] scale-[1.1]',
                  { 'scale-50': index !== 0 },
                  `card-${index}`,
                )}
                style={{
                  zIndex: services.length - index,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
