import { Home, Package, ShoppingCart, Users2 } from 'lucide-react'
import { ItemSidebarProps } from './item-sidebar'

export const itemnsSidebar: ItemSidebarProps[] = [
  {
    href: '#',
    tooltip: 'Dashboard',
    icon: <Home className="h-5 w-5" />,
    active: true,
  },
  {
    href: '/pagina-inicial/aluno',
    tooltip: 'Orders',
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    href: '#',
    tooltip: 'Products',
    icon: <Package className="h-5 w-5" />,
  },
  {
    href: '#',
    tooltip: 'Customers',
    icon: <Users2 className="h-5 w-5" />,
  },
]
