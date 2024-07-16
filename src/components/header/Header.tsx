import { PanelLeft } from 'lucide-react'
import Link from 'next/link'
import { itemnsSidebar } from '../sidebar/array-itens'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import AvatarUser from './AvatarUser'
import Breadcrumb from './Breadcrumb'

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-[#0d1525] pt-2 sm:static sm:ml-2 sm:w-full sm:border-0 sm:px-8 sm:pl-[81px]">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="mb-1 ml-[18px] sm:hidden"
            >
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                {itemnsSidebar.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex h-10 items-center justify-start space-x-3 rounded-lg px-3 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-10 w-10 items-center justify-center">
                      {item.icon}
                    </div>
                    <span>{item.tooltip}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </SheetContent>
        </Sheet>
        <Breadcrumb />
      </div>
      <div className="mr-4 sm:mr-0">
        <AvatarUser />
      </div>
    </header>
  )
}
