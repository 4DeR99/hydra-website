import Image from 'next/image'

import Hydra from '@/../public/images/icons/hydra.png'
import { Button } from '@/components/system/Button'
import { Container } from '@/components/system/Container'

import { MobileDrawer } from './MobileDrawer'

const navBarItems = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Technologies',
    href: '#technologies',
  },
  {
    title: 'How To',
    href: '#howto',
  },
]

export const NavigationBar = () => {
  return (
    <nav className="absolute top-4 w-full ~h-[4rem]/[6.44rem]">
      <Container className="flex items-center justify-between">
        <Image
          src={Hydra}
          alt="logo"
          width={193}
          height={103}
          className="h-[90%] w-fit"
        />
        <div className="hidden items-center uppercase ~gap-12/20 lg:flex">
          <ul className="flex font-extrabold ~text-[0.75rem]/lg ~gap-6/10">
            {navBarItems.map((navItem) => (
              <li key={navItem.title}>
                <a
                  className="hover:text-accent-foreground"
                  href={navItem.href}
                >
                  {navItem.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex ~gap-5/8">
            <Button type="outlined">Contact us</Button>
            <Button className="">Join hydra</Button>
          </div>
        </div>
        <MobileDrawer />
      </Container>
    </nav>
  )
}
