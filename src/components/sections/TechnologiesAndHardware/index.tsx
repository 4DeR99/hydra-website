import { ChevronRight } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import Banner from '@/../public/images/technologies-and-hardware/banner.png'
import Oculus from '@/../public/images/technologies-and-hardware/oculus.png'
import Unity from '@/../public/images/technologies-and-hardware/unity.png'
import UnrealEngine from '@/../public/images/technologies-and-hardware/unreal-engine.png'
import Vive from '@/../public/images/technologies-and-hardware/vive.png'
import { Container } from '@/components/system/Container'
import { HeadlessCardsCarousel } from '@/components/system/HeadlessCardsCarousel'
import { cn } from '@/lib/utils'

export const TechnologiesAndHardware = () => {
  return (
    <section className="my-[1.5rem] w-full gap-12 py-[1.5rem] md:my-[2.5rem] md:py-[2.5rem]">
      <Container className="flex flex-col items-center gap-3 md:gap-8">
        <div className="relative w-fit max-w-full">
          <Image
            src={Banner}
            alt="banner"
            width={Banner.width}
            height={Banner.width}
            className="min-h-[160px] w-full max-w-[350px] rounded-[60px] object-cover md:h-auto md:max-w-none md:rounded-[160px]"
          />
          <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center leading-[1.3] ~xsm/md:~text-[1rem]/[1.25rem] md:~md/2xl:~text-[1.875rem]/[2.25rem]">
            <h1 className="font-bold">TECHNOLOGIES & HARDWARE</h1>
            <span className="font-light">USED BY HYDRA VR</span>
          </div>
        </div>
        <div className="hidden items-center md:flex">
          <Image
            src={UnrealEngine}
            alt="unreal engine"
            width={UnrealEngine.width}
            height={UnrealEngine.height}
            className="w-auto ~md/xl:~mr-[2.375rem]/[3.0625rem] ~md/xl:~h-[9.1875rem]/[16.0625rem]"
          />
          <Image
            src={Unity}
            alt="unity"
            width={Unity.width}
            height={Unity.height}
            className="w-auto ~md/xl:~mr-[3.5625rem]/[4.4375rem] ~md/xl:~h-[8.875rem]/[15.75rem]"
          />
          <Image
            src={Oculus}
            alt="oculus"
            width={Oculus.width}
            height={Oculus.height}
            className="w-auto ~md/xl:~mr-[2.625rem]/[3.5rem] ~md/xl:~h-[8.9375rem]/[16.4375rem]"
          />
          <Image
            src={Vive}
            alt="vive"
            width={Vive.width}
            height={Vive.height}
            className="w-auto ~md/xl:~h-[10.125rem]/[17.625rem]"
          />
        </div>

        <HeadlessCardsCarousel cardsCount={4}>
          {({ currentCardIndex, handleNextClick, handlePrevClick }) => (
            <div className="relative max-w-[320px] md:hidden">
              <Image
                src={UnrealEngine}
                alt="unreal engine"
                width={UnrealEngine.width}
                height={UnrealEngine.height}
                className={cn(
                  'h-[200px] w-auto transition-opacity duration-150',
                  {
                    'opacity-0': currentCardIndex !== 0,
                  },
                )}
              />
              <Image
                src={Unity}
                alt="unity"
                width={Unity.width}
                height={Unity.height}
                className={cn(
                  'h-[200px] w-auto transition-opacity duration-150',
                  'absolute left-0 top-0',
                  {
                    'opacity-0': currentCardIndex !== 1,
                  },
                )}
              />
              <Image
                src={Oculus}
                alt="oculus"
                width={Oculus.width}
                height={Oculus.height}
                className={cn(
                  'h-[200px] w-auto transition-opacity duration-150',
                  'absolute left-0 top-0',
                  {
                    'opacity-0': currentCardIndex !== 2,
                  },
                )}
              />
              <Image
                src={Vive}
                alt="vive"
                width={Vive.width}
                height={Vive.height}
                className={cn(
                  'h-[200px] w-auto transition-opacity duration-150',
                  'absolute left-0 top-0',
                  {
                    'opacity-0': currentCardIndex !== 3,
                  },
                )}
              />
              <button
                className={cn(
                  'absolute left-0 top-[40%] z-10 flex size-12 translate-x-[-130%] items-center justify-center',
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
                  'absolute right-0 top-[40%] z-10 flex size-12 translate-x-[130%] items-center justify-center',
                  'rounded-full border-[5px] border-[#0E0E0E]/60 bg-accent',
                  {
                    'cursor-not-allowed opacity-15': currentCardIndex === 3,
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
    </section>
  )
}
