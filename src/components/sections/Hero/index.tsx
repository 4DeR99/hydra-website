import Image from 'next/image'

import Background from '@/../public/images/hero/background.png'
import VRWomen from '@/../public/images/hero/vr-women.png'
import { Arrow } from '@/components/icons'
import { Button } from '@/components/system/Button'
import { Container } from '@/components/system/Container'

export const Hero = () => {
  return (
    <section className="relative aspect-[1.77] w-full overflow-hidden">
      <Image
        src={Background}
        alt="Hero background"
        fill
        className="absolute left-0 top-0 w-full object-cover"
      />
      <Container className="relative mt-[18%] flex h-fit items-center justify-between">
        <div className="~gap-6/9 ~max-w-[18rem]/[28.125rem] flex h-fit flex-col">
          <div className="~text-[1.4rem]/[2.5rem] font-[1000]">
            <h1>
              <span className="from-accent-foreground to-accent bg-gradient-to-r bg-clip-text text-transparent">
                Dive
              </span>{' '}
              Into The Depths
            </h1>
            <h1>
              Of{' '}
              <span className="from-accent-foreground to-accent bg-gradient-to-l bg-clip-text text-transparent">
                Virtual Reality
              </span>
            </h1>
          </div>
          <p className="~text-[0.7rem]/[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
          <div className="flex gap-10">
            <Button className="~text-[0.6rem]/[0.75rem] font-extrabold">
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
          className="h-fit w-[42.53%]"
        />
      </Container>
    </section>
  )
}
