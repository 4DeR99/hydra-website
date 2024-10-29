import { cva, VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const buttonStyles = cva(
  '~px-4/8 ~py-2/3 uppercase rounded-[2.5rem] font-bold ~text-[0.65rem]/[1rem] hover:bg-accent hover:text-white transition-colors duration-300',
  {
    variants: {
      type: {
        outlined: 'border-2 text-white hover:border-accent',
        gradient:
          'bg-gradient-to-r from-accent to-accent-foreground text-background hover:from-accent-accent hover:to-accent transition-all duration-300',
      },
    },
    defaultVariants: {
      type: 'gradient',
    },
  },
)

type ButtonProps = HTMLAttributes<HTMLButtonElement>

export type CustomButtonProps = ButtonProps & VariantProps<typeof buttonStyles>
export const Button = ({
  type,
  className,
  children,
  ...props
}: CustomButtonProps) => (
  <button
    className={cn(buttonStyles({ type }), className)}
    {...props}
  >
    {children}
  </button>
)
