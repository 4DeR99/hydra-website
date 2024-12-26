import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { forwardRef, useRef } from 'react'

import { Arrow } from '@/components/icons/Arrow'

interface SectionHeaderProps {
  title: string
  subtitle: string
  description: string
}

export const SectionHeader = ({
  title,
  subtitle,
  description,
}: SectionHeaderProps) => {
  const arrowRef = useRef<SVGSVGElement>(null)
  useGSAP(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth < 768) return

    let arrowWidth
    if (window.innerWidth > 1440) arrowWidth = 158
    else {
      arrowWidth = (window.innerWidth * 158) / 1440
    }

    gsap.to(arrowRef.current, {
      width: arrowWidth,
      height: 4,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: arrowRef.current,
        start: 'top 80%',
        end: 'bottom 60%',
      },
    })
  })

  return (
    <div className="flex">
      <div className="flex grow flex-col items-center gap-2 uppercase ~text-[1.25rem]/[2.25rem] md:items-start">
        <h1 className="font-bold">{title}</h1>
        <div className="flex items-center gap-7">
          <span className="font-light">{subtitle}</span>
          <div className="hidden items-center md:flex">
            <ArrowExtention
              ref={arrowRef}
              className="-mr-1 w-0"
            />
            <Arrow className="mt-[0.5px]" />
          </div>
        </div>
      </div>
      <div className="hidden w-[51.1%] ~text-[0.875rem]/[1rem] md:block">
        {description}
      </div>
    </div>
  )
}

export const ArrowExtention = forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      ref={ref}
      width="158"
      height="4"
      viewBox="0 0 158 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M157.5 2H0"
        stroke="#C0B7E8"
        strokeWidth="3"
      />
    </svg>
  )
})
