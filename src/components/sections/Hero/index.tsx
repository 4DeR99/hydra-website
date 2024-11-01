import Image from 'next/image'

import MobileBackground from '@/../public/images/hero/background-mobile.png'
import Background from '@/../public/images/hero/background.png'
import VRWomen from '@/../public/images/hero/vr-women.png'
import { Arrow } from '@/components/icons'
import { ContactInfo } from '@/components/shared/ContactInfo'
import { Button } from '@/components/system/Button'
import { Container } from '@/components/system/Container'

export const Hero = () => {
  return (
    <section className="relative aspect-[0.5] w-full sm:aspect-[1.77]">
      <Image
        src={Background}
        alt="Hero background"
        fill
        className="absolute left-0 top-0 hidden h-full w-full object-cover sm:block"
      />
      <Image
        src={MobileBackground}
        alt="Hero background"
        width={371.5}
        height={615}
        className="absolute left-0 top-0 block w-full object-cover sm:hidden"
      />
      <Container className="relative flex flex-col justify-center">
        <div className="sm:mt-20 flex flex-col-reverse items-center justify-between sm:flex-row 2xl:mt-0">
          <div className="-mt-[2%] flex h-fit flex-col ~max-w-[20rem]/[32rem] ~gap-6/9">
            <div className="text-center font-bold ~text-[1.7rem]/[2.5rem] sm:text-start sm:~text-[1.4rem]/[2.5rem] sm:~leading-[2.1rem]/[3.2rem]">
              <h1>
                <span className="bg-gradient-to-r from-accent-foreground to-accent bg-clip-text text-transparent ~text-[2.25rem]/[3rem] sm:~text-[1.775rem]/[2.875rem]">
                  Dive
                </span>{' '}
                Into The Depths
              </h1>
              <h1>
                Of{' '}
                <span className="bg-gradient-to-l from-accent-foreground to-accent bg-clip-text text-transparent ~text-[2.25rem]/[3rem] sm:~text-[1.775rem]/[2.875rem]">
                  Virtual Reality
                </span>
              </h1>
            </div>
            <p className="hidden font-light ~text-[0.7rem]/[1rem] sm:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
            <div className="~mt-0/8 flex gap-10">
              <Button className="w-full font-extrabold ~text-[0.95rem]/[1.2rem] sm:w-fit sm:~text-[0.6rem]/[0.75rem]">
                build your world
              </Button>
              <Arrow className="hidden sm:block" />
            </div>
          </div>
          <Image
            src={VRWomen}
            alt="vr women"
            width={524}
            height={455}
            className="h-fit w-[87.179%] sm:w-[42.53%]"
          />
        </div>
        <ContactInfo />
      </Container>
    </section>
  )
}
