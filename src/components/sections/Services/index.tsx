import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react'

import { Arrow } from '@/components/icons'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { Container } from '@/components/system/Container'
import { cn } from '@/lib/utils'

import { services } from './constant'

export const Services = () => {
  useGSAP(() => {
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
            transform: `translateX(-${150 - 5 * index}%) translateY(${10 * index}%)`,
            scale: 0.8,
            ease: 'power1.out',
          },
          0,
        ).to(
          `.card-${index + 1}`,
          {
            scale: 1.5,
            ease: 'power2.out',
          },
          0,
        )
      }
    })
  })

  return (
    <section className="services-container relative my-[2.5rem] w-full overflow-hidden py-[2.5rem]">
      <Container className="h-auto">
        <div className="flex">
          <div className="flex grow flex-col items-center gap-2 uppercase ~text-[1.25rem]/[2.25rem] md:items-start">
            <h1 className="font-bold">Why build</h1>
            <div className="flex items-center gap-7">
              <span className="font-light">with hydra?</span>
              <div className="hidden items-center md:flex">
                <div className="-mr-2 h-[3px] rounded-full bg-accent-foreground ~md/laptop:~w-4/32" />
                <Arrow />
              </div>
            </div>
          </div>
          <div className="hidden w-[51.1%] ~text-[0.875rem]/[1rem] md:block">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </div>
        </div>
      </Container>
      <div className="scroll-target flex min-h-[500px] w-fit">
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
                  'absolute left-0 top-0 h-[250px] w-[650px] scale-150',
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
