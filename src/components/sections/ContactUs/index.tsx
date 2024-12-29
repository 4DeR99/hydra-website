import React from 'react'

import { Button } from '@/components/system/Button'
import { Container } from '@/components/system/Container'
import { cn } from '@/lib/utils'

export const ContactUs = () => {
  const handSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className="relative w-full">
      <Container>
        <div
          className={cn(
            'flex flex-col rounded-[40px] bg-[radial-gradient(50%_50%_at_center,#433D60,#211E2E)] leading-[1.3]',
            '~sm/lg:~px-[2.5rem]/[6.875rem] ~sm/lg:~py-[2.5rem]/[5.625rem]',
            'md:rounded-[100px]',
          )}
        >
          <div className="flex flex-col items-center gap-[30px]">
            <h1 className="text-center font-bold ~sm/lg:~text-[1.5rem]/[2.25rem]">
              JOIN HYDRA
            </h1>
            <div className="h-[1px] w-[50%] bg-[linear-gradient(90deg,#343045_0%,#8176AF_35%,#C0B7E8_69%,#343045_100%)] md:w-[414px]" />
            <h2 className="text-center font-light ~sm/lg:~text-[1.5rem]/[2.25rem]">
              Let’s Build <br className="block md:hidden" /> Your VR Experience
            </h2>
          </div>
          <form
            onSubmit={handSubmit}
            className="mt-[25px] flex flex-col gap-4 md:gap-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:gap-2.5">
              <Input
                label="First Name"
                placeholder="First Name"
              />
              <Input
                label="Last Name"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-2.5">
              <Input
                label="Email"
                placeholder="Email"
              />
              <Input
                label="Phone number"
                placeholder="Phone number"
              />
            </div>
            <Input
              label="Subject"
              placeholder="Subject"
            />
            <textarea
              placeholder="Message"
              className="h-[150px] w-full rounded-[35px] border-2 border-white bg-transparent px-[40px] py-[25px] focus:outline-none md:rounded-[40px]"
            />
            <Button className="mt-6 !text-xs md:mx-auto md:w-fit">
              Send to Hydra
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}

interface InputProps {
  label: string
  placeholder: string
  className?: string
  type?: string
}

const Input = ({ label, placeholder, className, type }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(
        'w-full rounded-[35px] border-2 border-white bg-transparent px-[40px] py-[25px] focus:outline-none',
        'md:rounded-[40px]',
        className,
      )}
      aria-label={label}
    />
  )
}
