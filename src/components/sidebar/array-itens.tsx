import { Home, UserPlus, Users2 } from 'lucide-react'
import { ItemSidebarProps } from './item-sidebar'

export const itemnsSidebar: ItemSidebarProps[] = [
  {
    href: '/pagina-inicial',
    tooltip: 'Pagina inicial',
    icon: <Home className="h-5 w-5" />,
    active: true,
  },
  {
    href: '/pagina-inicial/aluno',
    tooltip: 'Aluno',
    icon: <Users2 className="h-5 w-5" />,
  },
  {
    href: '/pagina-inicial/aluno/adicionar-aluno',
    tooltip: 'Adicionar Aluno',
    icon: <UserPlus className="h-5 w-5" />,
  },
]
