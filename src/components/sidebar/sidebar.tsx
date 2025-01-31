'use client'
import { Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { itemnsSidebar } from './array-itens'
import { ItemSidebar } from './item-sidebar'

export function Sidebar() {
  const url = usePathname()
  const currentPathName = url
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {itemnsSidebar.map((item) => (
          <ItemSidebar
            key={item.href}
            href={item.href}
            tooltip={item.tooltip}
            icon={item.icon}
            active={currentPathName === item.href}
          />
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <ItemSidebar
          href="#"
          tooltip="Settings"
          icon={<Settings className="h-5 w-5" />}
        />
      </nav>
    </aside>
  )
}
