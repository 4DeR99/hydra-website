import Image, { StaticImageData } from 'next/image'

import Email from '@/../public/images/hero/contact-info/email.svg'
import Location from '@/../public/images/hero/contact-info/location.svg'
import Phone from '@/../public/images/hero/contact-info/phone.svg'

export const ContactInfo = () => {
  return (
    <div className="absolute -bottom-[15%] left-0 flex w-full items-center justify-around rounded-[90px] bg-gradient-to-r from-[#211E2E] from-[15%] via-[#3A3456] to-[#211E2E] to-[85%] px-12">
      <InfoItem
        icon={Location}
        title="Pay Us a Visit"
        description="Union St, Seattle, WA 98101, United States"
      />
      <div className=" border bg-accent-foreground opacity-[0.33]" />
      <InfoItem
        icon={Phone}
        title="Give Us a Call"
        description="(110) 1111-1010"
      />
      <div className="h-[70%] w-0.5 bg-accent-foreground opacity-[0.33]" />
      <InfoItem
        icon={Email}
        title="Send Us an Message"
        description="Contact@HydraVTech.com"
      />
    </div>
  )
}

interface InfoItemProps {
  icon: StaticImageData
  title: string
  description: string
}

export const InfoItem = ({ description, icon, title }: InfoItemProps) => {
  return (
    <div className="my-12 flex gap-6 border ~min-w-[12rem]/[13rem]">
      <Image
        src={icon}
        alt={title}
      />
      <div className="flex flex-col gap-2">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
