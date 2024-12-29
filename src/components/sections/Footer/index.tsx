import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import HydraLogo from '@/../public/images/icons/logo.png'
import {
  Facebook,
  Instagram,
  Linkedin,
  Pinterest,
  Twitter,
  Youtube,
} from '@/components/icons'
import { Button } from '@/components/system/Button'
import { Container } from '@/components/system/Container'

const socialLinks = [
  <Facebook key="facebook" />,
  <Twitter key="twitter" />,
  <Linkedin key="linkedin" />,
  <Youtube key="youtube" />,
  <Instagram key="instagram" />,
  <Pinterest key="pinterest" />,
]

export const Footer = () => {
  return (
    <footer className="my-12 py-10">
      <Container className="flex h-fit flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-14 lg:flex-row">
          <Image
            src={HydraLogo}
            alt="Hydra Logo"
            width={HydraLogo.width}
            height={HydraLogo.height}
            className="size-[186px] lg:~lg/xl:~size-[6.25rem]/[11.625rem]"
          />
          <div className="items-centr mx-4 hidden min-h-[190px] gap-20 lg:flex">
            <div className="w-1 bg-[linear-gradient(0deg,#343045_0%,#8176AF_35%,#C0B7E8_69%,#343045_100%)]" />
            <div className="flex flex-col justify-center gap-6 font-bold uppercase leading-[1.5]">
              <Link href={'#'}>About</Link>
              <Link href={'#'}>Services</Link>
              <Link href={'#'}>Technologies</Link>
              <Link href={'#'}>How to</Link>
              <Link href={'#'}>Join hydra</Link>
            </div>
            <div className="w-1 bg-[linear-gradient(0deg,#343045_0%,#8176AF_35%,#C0B7E8_69%,#343045_100%)]" />
          </div>
          <div className="flex flex-col items-center gap-6">
            <span className="font-bold">SOCIALIZE WITH HYDRA</span>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.key}
                  href={'#'}
                >
                  {link}
                </Link>
              ))}
            </div>
            <Button className="mt-4 w-full !text-sm font-bold">
              Build your world
            </Button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[linear-gradient(90deg,#343045_0%,#8176AF_35%,#C0B7E8_69%,#343045_100%)]" />
        <span className="hidden text-sm lg:block">
          2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
        </span>
        <span className="text-center text-sm font-bold leading-[3] ~xsm/sm:~w-[17.125rem]/[31.25rem] lg:hidden">
          2023 © HYDRA LANDING PAGE
          <br /> BY ZINE. E. FALOUTI
          <br /> ALL RIGHTS RESERVED
        </span>
      </Container>
    </footer>
  )
}
