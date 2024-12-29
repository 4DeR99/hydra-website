import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef } from 'react'

import { SectionHeader } from '@/components/shared/SectionHeader'
import { StepNumber } from '@/components/shared/StepNumber'
import { Container } from '@/components/system/Container'
import { HeadlessCardsCarousel } from '@/components/system/HeadlessCardsCarousel'
import { cn } from '@/lib/utils'

import { STEPS } from './constant'

export const HowWeBuild = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const backgroundCoverRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth < 768) return
    gsap.registerPlugin(ScrollTrigger)
    const scrollTargets = document.querySelectorAll('.step-item')

    const scrollTween = gsap.to(scrollTargets, {
      xPercent: -100 * (scrollTargets.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: '+=3000',
      },
    })

    gsap.to(backgroundCoverRef.current, {
      width: '0%',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: scrollTargets[0],
        endTrigger: scrollTargets[scrollTargets.length - 1],
        containerAnimation: scrollTween,
        start: 'right 50%',
        end: 'right 50%',
        scrub: 1,
      },
    })

    scrollTargets.forEach((target, index) => {
      if (index === 4) return
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: target,
          containerAnimation: scrollTween,
          start: 'right 50%',
          end: 'right 30%',
          scrub: 5,
          toggleActions: 'play none none reverse',
        },
      })

      tl.to(`.step-${index}`, {
        opacity: 1,
        transform: 'translateX(0%)',
        ease: 'power1.out',
      })
    })
  }, [])

  return (
    <section
      className="relative my-[1.5rem] flex w-full flex-col overflow-hidden py-[1.5rem] md:my-[2.5rem] md:py-[2rem]"
      ref={sectionRef}
      id="howto"
    >
      <Background className="absolute left-0 top-[35%] hidden w-full md:block" />
      <div
        className="absolute right-0 top-[35%] h-[170px] w-full bg-background"
        ref={backgroundCoverRef}
      />
      <Container className="flex h-auto flex-col items-center gap-10">
        <SectionHeader
          title="How we build"
          subtitle="With Hydra"
          description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
        />

        {/*Mobile carousel*/}
        <HeadlessCardsCarousel cardsCount={STEPS.length}>
          {({ currentCardIndex, handleNextClick, handlePrevClick }) => (
            <div className="relative max-w-[210px] md:hidden">
              {STEPS.map((step, index) => (
                <StepNumber
                  key={step.index}
                  index={step.index}
                  title={step.title}
                  className={cn(
                    'transition-opacity duration-150',
                    { 'opacity-0': currentCardIndex !== index },
                    { 'absolute left-0 top-0': index !== 0 },
                  )}
                />
              ))}

              <button
                className={cn(
                  'absolute left-0 top-[77%] z-10 flex size-12 translate-x-[-130%] items-center justify-center',
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
                  'absolute right-0 top-[77%] z-10 flex size-12 translate-x-[130%] items-center justify-center',
                  'rounded-full border-[5px] border-[#0E0E0E]/60 bg-accent',
                  {
                    'cursor-not-allowed opacity-15':
                      currentCardIndex === STEPS.length,
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
      <div className="relative hidden h-[500px] w-full md:flex">
        {STEPS.map((step, index) => (
          <div
            className={cn('w-screen flex-shrink-0', `step-item`)}
            key={index}
          ></div>
        ))}
        <div className={cn('w-screen flex-shrink-0', `step-item`)}></div>
        <div className="absolute inset-0 flex h-full w-full items-center justify-evenly">
          {STEPS.map((step, index) => (
            <StepNumber
              key={index}
              index={step.index}
              title={step.title}
              className={cn(
                'max-w-[230px] translate-x-[10%] opacity-0',
                `step-${index}`,
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const Background = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1440"
    height="169"
    viewBox="0 0 1440 169"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M-9 21.7335C6.47753 71.4205 88.0505 181.243 245.37 106.768C350.5 57 405.361 2.72575 539.107 91.2619C672.853 179.798 776.317 173.796 841.423 82.2582C906.53 -9.27916 1076.11 -33.7892 1139.7 74.7552C1203.29 183.3 1417.79 196.305 1440 106.768"
      stroke="url(#paint0_linear_11_136)"
      strokeWidth="6"
    />
    <defs>
      <linearGradient
        id="paint0_linear_11_136"
        x1="0.49999"
        y1="84.9999"
        x2="1440"
        y2="84.9998"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#343045" />
        <stop
          offset="0.302083"
          stopColor="#C0B7E8"
        />
        <stop
          offset="0.739583"
          stopColor="#8176AF"
        />
        <stop
          offset="1"
          stopColor="#343045"
        />
      </linearGradient>
    </defs>
  </svg>
)
