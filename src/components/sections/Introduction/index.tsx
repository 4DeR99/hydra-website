import Image from 'next/image'
import React from 'react'

import Avatar from '@/../public/images/introduction/avatar.jpg'
import Shape from '@/../public/images/introduction/shape.png'
import { Arrow } from '@/components/icons'
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
        className="absolute bottom-[8%] left-0 h-fit w-full"
      />
      <Container className="relative flex flex-col ~gap-[3.125rem]/[6.0625rem]">
        <div className="flex">
          <div className="grow gap-2 uppercase ~text-[1.25rem]/[2.25rem]">
            <h1 className="font-bold">Introduction</h1>
            <div className="flex items-center gap-7">
              <span className="font-light">To hydra vr</span>
              <div className="flex items-center">
                <div className="-mr-2 h-[3px] rounded-full bg-accent-foreground ~md/laptop:~w-4/32" />
                <Arrow />
              </div>
            </div>
          </div>
          <div className="w-[51.1%] ~text-[0.875rem]/[1rem]">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </div>
        </div>
        <div className="flex ~gap-[6rem]/[7.3125rem]">
          <Image
            src={Avatar}
            alt="avatar"
            width={Avatar.width}
            height={Avatar.height}
            className="h-fit w-[41.19%] ~md/laptop:~rounded-tl-[7.5rem]/[15rem] ~md/laptop:~rounded-tr-[3.125rem]/[6.25rem] ~md/laptop:~rounded-br-[7.5rem]/[15rem] ~md/laptop:~rounded-bl-[3.125rem]/[6.25rem]"
          />
          <div className="flex w-[49.6%] flex-col gap-9">
            <div className="mb-1.5 flex flex-col gap-1 uppercase leading-[1.3] ~text-[1.25rem]/[2.25rem]">
              <h1 className="font-bold">About</h1>
              <h1 className="font-light">Hydra vr</h1>
            </div>
            <p className="~sm/laptop:~text-sm/base">
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
            <Button className="w-fit ~px-[2.5rem]/[2.9375rem]">
              Let's get in touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
