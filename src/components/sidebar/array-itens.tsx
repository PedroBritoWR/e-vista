import { Home, Users2 } from 'lucide-react'
import { ItemSidebarProps } from './item-sidebar'

export const itemnsSidebar: ItemSidebarProps[] = [
  {
    href: '/inicial',
    tooltip: 'inicial',
    icon: <Home className="h-5 w-5" />,
    active: true,
  },
  {
    href: '/inicial/aluno',
    tooltip: 'Aluno',
    icon: <Users2 className="h-5 w-5" />,
  },
]
