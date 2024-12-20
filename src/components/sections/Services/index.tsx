import React from 'react'

import { Arrow } from '@/components/icons'
import { Container } from '@/components/system/Container'

export const Services = () => {
  return (
    <section>
      <Container className="py-[6.25rem]">
        <div className="flex">
          <div className="flex grow flex-col items-center gap-2 uppercase ~text-[1.25rem]/[2.25rem] md:items-start">
            <h1 className="font-bold">Why build</h1>
            <div className="flex items-center gap-7">
              <span className="font-light">with hydra?</span>
              <div className="hidden items-center md:flex">
                <div className="-mr-2 h-[3px] rounded-full bg-accent-foreground ~md/laptop:~w-4/32" />
                <Arrow />
              </div>
            </div>
          </div>
          <div className="hidden w-[51.1%] ~text-[0.875rem]/[1rem] md:block">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </div>
        </div>
      </Container>
    </section>
  )
}
