import React from 'react'

import { Arrow } from '@/components/icons'
import { cn } from '@/lib/utils'

interface StepNumberProps {
  index: string
  title: string
  className?: string
}

export const StepNumber = ({ index, title, className }: StepNumberProps) => {
  return (
    <div className={cn('flex flex-col gap-9 md:gap-6', className)}>
      <div className="flex size-[198px] items-center justify-center rounded-full bg-[#0D0D0D]/30">
        <div
          className={cn(
            'flex size-[159px] items-center justify-center rounded-full',
            'bg-gradient-to-tr from-[#C0B7E8] to-[#8176AF]',
            'text-[4rem] font-bold text-[#343045]',
          )}
        >
          {index}
        </div>
      </div>
      <div className="flex gap-4">
        <Arrow />
        <div className="text-center text-[1.5rem] md:text-start">{title}</div>
      </div>
    </div>
  )
}
