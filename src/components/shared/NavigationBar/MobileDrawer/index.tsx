import Image from 'next/image'
import { useState } from 'react'

import DrawerButton from '@/../public/images/icons/drawer-button.svg'
import { Drawer } from '@/components/system/Drawer'
import { cn } from '@/lib/utils'

export const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="lg:hidden">
      <button onClick={() => handleDrawer()}>
        <Image
          src={DrawerButton}
          alt="drawer button"
          width={33}
          height={26}
        />
      </button>
      <Drawer
        open={isOpen}
        className="flex"
      >
        <div
          className={cn(
            'grow transition-all duration-300',
            !isOpen ? 'bg-transparent' : 'bg-black/45',
          )}
          onClick={() => handleDrawer()}
        />
        <div className="bg-accent h-full w-full !overflow-auto sm:max-w-[300px]"></div>
      </Drawer>
    </div>
  )
}
