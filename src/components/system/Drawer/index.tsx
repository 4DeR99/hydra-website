import { cn } from '@/lib/utils'

interface DrawerProps {
  open: boolean
  children?: React.ReactNode
  className?: string
}

export const Drawer = ({ open, children, className }: DrawerProps) => {
  return (
    <div
      className={cn(
        'absolute -top-4 right-0 z-50 flex h-screen w-screen transition-transform',
        open ? 'translate-x-0' : 'translate-x-full',
        className,
      )}
    >
      {children}
    </div>
  )
}
