import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: StaticImageData
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="flex gap-4 rounded-[40px] bg-[radial-gradient(#433D60,#211E2E)]">
      <Image
        src={icon}
        alt={title}
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-3">
        <h3>{title}</h3>
        <div className="w-full border-t border-accent" />
        <p>{description}</p>
      </div>
    </div>
  )
}
