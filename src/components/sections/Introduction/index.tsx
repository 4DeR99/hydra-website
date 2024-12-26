import Image from 'next/image'
import React from 'react'

import Avatar from '@/../public/images/introduction/avatar.jpg'
import Shape from '@/../public/images/introduction/shape.png'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Button } from '@/components/system/Button'
import { Container } from '@/components/system/Container'
import { cn } from '@/lib/utils'

export const Introduction = () => {
  return (
    <section
      className={cn('relative mt-[14%] flex w-full flex-col', '2xl:mt-[2%]')}
    >
      <Image
        src={Shape}
        alt="shape"
        width={Shape.width}
        height={Shape.height}
        className="absolute bottom-[8%] left-0 hidden h-fit w-full lg:block"
      />
      <Container className="relative flex flex-col gap-6 md:~gap-[3.125rem]/[6.0625rem]">
        <SectionHeader
          title="Introduction"
          subtitle="To hydra vr"
          description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
        />
        <div className="flex flex-col items-center gap-6 md:flex-row md:~gap-[6rem]/[7.3125rem]">
          <Image
            src={Avatar}
            alt="avatar"
            width={Avatar.width}
            height={Avatar.height}
            className="h-fit w-[90%] max-w-[21.875rem] ~md/laptop:~rounded-tl-[7.5rem]/[15rem] ~md/laptop:~rounded-tr-[3.125rem]/[6.25rem] ~md/laptop:~rounded-br-[7.5rem]/[15rem] ~md/laptop:~rounded-bl-[3.125rem]/[6.25rem] md:w-[41.19%] md:max-w-none"
          />
          <div className="flex flex-col items-center gap-9 md:w-[49.6%] md:items-start">
            <div className="mb-1.5 hidden flex-col items-center gap-1 uppercase leading-[1.3] ~text-[1.25rem]/[2.25rem] md:flex md:items-start">
              <h1 className="font-bold">About</h1>
              <h1 className="font-light">Hydra vr</h1>
            </div>
            <p className="max-w-[21.875rem] ~sm/laptop:~text-xs/base md:max-w-none">
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo. Vivamus at augue eget
              arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
              Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam etiam erat velit scelerisque in dictum non consectetur a.
              Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
              orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
              adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </p>
            <Button className="w-[80%] max-w-[17.1875rem] ~px-[2.5rem]/[2.9375rem] md:w-fit">
              Let's get in touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
