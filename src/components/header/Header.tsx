import { PanelLeft } from 'lucide-react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import Breadcrumb from './Breadcrumb'
import AvatarUser from './AvatarUser'
import { Sidebar } from '../sidebar'

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
            <nav className="grid gap-6 text-lg font-medium">
              <Sidebar />
            </nav>
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
