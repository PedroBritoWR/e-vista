import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

export type ItemSidebarProps = {
  href: string
  tooltip: string
  icon: React.ReactNode
  active?: boolean
}

export function ItemSidebar({ href, tooltip, icon, active }: ItemSidebarProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${
              active
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground'
            } transition-colors hover:text-foreground md:mr-2 md:h-8 md:w-8`}
          >
            {icon}
            <span className="sr-only">{tooltip}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
