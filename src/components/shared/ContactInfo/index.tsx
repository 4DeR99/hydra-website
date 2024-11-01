import Image, { StaticImageData } from 'next/image'

import Email from '@/../public/images/hero/contact-info/email.svg'
import Location from '@/../public/images/hero/contact-info/location.svg'
import Phone from '@/../public/images/hero/contact-info/phone.svg'
import { cn } from '@/lib/utils'

export const ContactInfo = () => {
  return (
    <div className="absolute -bottom-[15%] left-0 hidden w-full items-center justify-around rounded-[90px] bg-gradient-to-r from-[#211E2E] from-[15%] via-[#3A3456] to-[#211E2E] to-[85%] px-12 ~h-[5rem]/[9.5rem] sm:flex 2xl:relative">
      <InfoItem
        icon={Location}
        title="Pay Us a Visit"
        description="Union St, Seattle, WA 98101, United States"
        iconStyle="~w-[1rem]/[2.5rem] h-fit"
      />
      <div className="h-[70%] w-0.5 bg-accent-foreground opacity-[0.33]" />
      <InfoItem
        icon={Phone}
        title="Give Us a Call"
        description="(110) 1111-1010"
        iconStyle="~w-[1.5rem]/[3.5rem] h-fit"
      />
      <div className="h-[70%] w-0.5 bg-accent-foreground opacity-[0.33]" />
      <InfoItem
        icon={Email}
        title="Send Us an Message"
        description="Contact@HydraVTech.com"
        iconStyle="~w-[1.8rem]/[4rem] h-fit"
      />
    </div>
  )
}

interface InfoItemProps {
  icon: StaticImageData
  title: string
  description: string
  iconStyle?: string
}

export const InfoItem = ({
  description,
  icon,
  title,
  iconStyle,
}: InfoItemProps) => {
  return (
    <div className="flex items-center ~min-w-[12rem]/[13rem] ~gap-3/6">
      <Image
        src={icon}
        alt={title}
        className={cn(iconStyle)}
      />
      <div className="flex flex-col gap-2">
        <h3 className="~text-[0.8rem]/[1.5rem]">{title}</h3>
        <p className="~text-[0.5rem]/[0.875rem]">{description}</p>
      </div>
    </div>
  )
}
