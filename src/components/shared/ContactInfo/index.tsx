import Image, { StaticImageData } from 'next/image'
import { useRef } from 'react'

import Email from '@/../public/images/hero/contact-info/email.svg'
import Location from '@/../public/images/hero/contact-info/location.svg'
import Phone from '@/../public/images/hero/contact-info/phone.svg'
import { CarrouselArrow1 } from '@/components/icons/CarrouselArrow1'
import { HeadlessCardsCarousel } from '@/components/system/HeadlessCardsCarousel'
import { cn } from '@/lib/utils'

export const ContactInfo = () => {
  return (
    <div
      className={cn(
        'absolute -bottom-[15%] left-0 hidden w-full items-center justify-around rounded-[90px] bg-gradient-to-r from-[#211E2E] from-[15%] via-[#3A3456] to-[#211E2E] to-[85%] px-12 ~md/laptop:~h-[5rem]/[9.5rem]',
        'sm:flex 2xl:relative',
      )}
    >
      <InfoCard
        icon={Location}
        title="Pay Us a Visit"
        description="Union St, Seattle, WA 98101, United States"
        iconStyle="~w-[1rem]/[2.5rem] h-fit"
      />
      <div className="h-[70%] w-0.5 bg-accent-foreground opacity-[0.33]" />
      <InfoCard
        icon={Phone}
        title="Give Us a Call"
        description="(110) 1111-1010"
        iconStyle="~w-[1.5rem]/[3.5rem] h-fit"
      />
      <div className="h-[70%] w-0.5 bg-accent-foreground opacity-[0.33]" />
      <InfoCard
        icon={Email}
        title="Send Us an Message"
        description="Contact@HydraVTech.com"
        iconStyle="~w-[1.8rem]/[4rem] h-fit"
      />
    </div>
  )
}

interface InfoCardProps {
  icon: StaticImageData
  title: string
  description: string
  iconStyle?: string
}

const InfoCard = ({ description, icon, title, iconStyle }: InfoCardProps) => {
  return (
    <div className="flex items-center ~min-w-[12rem]/[13rem] ~gap-3/6">
      <Image
        src={icon}
        alt={title}
        className={cn(iconStyle)}
      />
      <div className="flex flex-col gap-2">
        <h3 className="invisible ~md/laptop:~text-[0.8rem]/[1.5rem] sm:visible">
          {title}
        </h3>
        <p className="~md/laptop:~text-[0.5rem]/[0.875rem]">{description}</p>
      </div>
    </div>
  )
}

export const ContactInfoMobile = () => {
  const carouselRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        'absolute left-0 w-full ~2xsm/xsm:~bottom-[-2.875rem]/[0rem]',
        'sm:hidden',
      )}
    >
      <HeadlessCardsCarousel cardsCount={3}>
        {({ currentCardIndex, handleNextClick, handlePrevClick }) => (
          <div
            ref={carouselRef}
            className="relative mx-auto flex h-[6.8125rem] items-center overflow-hidden rounded-[5.625rem] bg-gradient-to-r from-[#211E2E] from-[15%] via-[#3A3456] to-[#211E2E] to-[85%] ~2xsm/xsm:~w-[18.75rem]/[21.6875rem]"
          >
            <div
              className="flex h-full w-full transition-transform duration-300"
              style={{
                transform: `translateX(-${currentCardIndex * (carouselRef.current?.offsetWidth || 0)}px)`,
              }}
            >
              <InfoCardMobile
                icon={Location}
                title="Pay Us a Visit"
                description="Union St, Seattle, WA 98101, United States"
                iconStyle="~2xsm/xsm:~w-[2.25rem]/[2.5rem] h-fit"
              />
              <InfoCardMobile
                icon={Phone}
                title="Give Us a Call"
                description="(110) 1111-1010"
                iconStyle="~2xsm/xsm:~w-[1.5rem]/[3.5rem] h-fit"
              />
              <InfoCardMobile
                icon={Email}
                title="Send Us an Message"
                description="Contact@HydraVTech.com"
                iconStyle="~2xsm/xsm:~w-[1.8rem]/[4rem] h-fit"
              />
            </div>
            <CarrouselArrow1
              className={cn('absolute left-4 top-[39%] cursor-pointer', {
                'cursor-not-allowed opacity-15': currentCardIndex === 0,
              })}
              onClick={handlePrevClick}
            />
            <CarrouselArrow1
              className={cn(
                'absolute right-4 top-[39%] rotate-180 cursor-pointer',
                {
                  'cursor-not-allowed opacity-15': currentCardIndex === 2,
                },
              )}
              onClick={handleNextClick}
            />
          </div>
        )}
      </HeadlessCardsCarousel>
    </div>
  )
}

const InfoCardMobile = ({
  description,
  icon,
  title,
  iconStyle,
}: InfoCardProps) => {
  return (
    <div className="flex h-full items-center justify-center ~gap-3/6 ~2xsm/xsm:~min-w-[18.75rem]/[21.6875rem]">
      <Image
        src={icon}
        alt={title}
        className={cn(iconStyle)}
      />
      <div className="flex flex-col gap-2">
        <p className="min-w-[100px] ~text-[0.75rem]/[0.875rem] ~2xsm/xsm:~max-w-[9.375rem]/[12.1875rem]">
          {description}
        </p>
      </div>
    </div>
  )
}
