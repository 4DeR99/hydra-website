import Image from 'next/image'

import Background from '@/../public/images/hero/background.png'
import MobileBackground from '@/../public/images/hero/background-mobile.png'
import VRWomen from '@/../public/images/hero/vr-women.png'
import { Arrow } from '@/components/icons'
import { Button } from '@/components/system/Button'
import { Container } from '@/components/system/Container'

export const Hero = () => {
  return (
    <section className="relative aspect-[0.5] w-full overflow-hidden md:aspect-[1.77]">
      <Image
        src={Background}
        alt="Hero background"
        fill
        className="absolute left-0 top-0 hidden h-full w-full object-cover md:block"
      />
      <Image
        src={MobileBackground}
        alt="Hero background"
        width={371.5}
        height={615}
        className="absolute left-0 top-0 block w-full object-cover md:hidden"
      />
      <Container className="relative h-fit">
        <div className="mt-[40%] flex flex-col-reverse items-center justify-between gap-[14vw] md:mt-[18%] md:flex-row">
          <div className="-mt-[7%] flex h-fit flex-col ~max-w-[20rem]/[28.125rem] ~gap-6/9">
            <div className="text-center font-bold ~text-[1.7rem]/[2.5rem] md:text-start md:~text-[1.4rem]/[2.5rem] md:~leading-[2.1rem]/[3.2rem]">
              <h1>
                <span className="bg-gradient-to-r from-accent-foreground to-accent bg-clip-text text-transparent ~text-[2.25rem]/[3rem] md:~text-[1.775rem]/[2.875rem]">
                  Dive
                </span>{' '}
                Into The Depths
              </h1>
              <h1>
                Of{' '}
                <span className="bg-gradient-to-l from-accent-foreground to-accent bg-clip-text text-transparent ~text-[2.25rem]/[3rem] md:~text-[1.775rem]/[2.875rem]">
                  Virtual Reality
                </span>
              </h1>
            </div>
            <p className="hidden font-light ~text-[0.7rem]/[1rem] md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
            <div className="flex gap-10">
              <Button className="w-full font-extrabold ~text-[0.95rem]/[1.2rem] md:w-fit md:~text-[0.6rem]/[0.75rem]">
                build your world
              </Button>
              <Arrow className="hidden md:block" />
            </div>
          </div>
          <Image
            src={VRWomen}
            alt="vr women"
            width={524}
            height={455}
            className="h-fit w-[87.179%] md:w-[42.53%]"
          />
        </div>
      </Container>
    </section>
  )
}
