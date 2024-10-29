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
    <nav className="~h-[3rem]/[6.44rem] absolute top-4 w-full">
      <Container className="flex items-center justify-between">
        <Image
          src={Hydra}
          alt="logo"
          width={193}
          height={103}
          className="w-[15.17%]"
        />
        <div className="~gap-12/20 hidden items-center uppercase lg:flex">
          <ul className="~text-[0.75rem]/lg ~gap-6/10 flex font-extrabold">
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
          <div className="~gap-5/8 flex">
            <Button type="outlined">Contact us</Button>
            <Button className="">Join hydra</Button>
          </div>
        </div>
        <MobileDrawer />
      </Container>
    </nav>
  )
}
