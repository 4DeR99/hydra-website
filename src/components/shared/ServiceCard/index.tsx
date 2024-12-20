import Image, { StaticImageData } from 'next/image'
import React, { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  icon: StaticImageData
}

export const ServiceCard = ({
  title,
  description,
  icon,
  className,
  ...props
}: ServiceCardProps & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'flex items-center gap-6 rounded-[40px] bg-[radial-gradient(#433D60,#211E2E)] p-6',
        className,
      )}
      {...props}
    >
      <div className="relative aspect-square h-fit w-[250px] rounded-full border-[10px] border-[#0E0E0E]/30">
        <Image
          src={icon}
          alt={title}
          className="rounded-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold ~text-xl/2xl">{title}</h1>
        <div className="w-full border-t border-accent" />
        <p>{description}</p>
      </div>
    </div>
  )
}
