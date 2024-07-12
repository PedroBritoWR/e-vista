import { Home, PanelLeft, Users2, LogOut, UserPlus } from 'lucide-react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import Link from 'next/link'
import Breadcrumb from './Breadcrumb'
import AvatarUser from './AvatarUser'

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background pt-2 sm:static sm:ml-2 sm:w-full sm:border-0 sm:bg-transparent sm:px-8 sm:pl-[81px] sm:pt-0">
      <Breadcrumb />
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="ml-[18px] sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/pagina-inicial"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              Página Inicial
            </Link>
            <Link
              href="/"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <LogOut className="h-5 w-5" />
              Sair
            </Link>
            <Link
              href="/pagina-inicial/aluno"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Users2 className="h-5 w-5" />
              Aluno
            </Link>
            <Link
              href="/pagina-inicial/aluno/adicionar-aluno"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <UserPlus className="h-5 w-5" />
              Adicionar Aluno
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <AvatarUser src="/placeholder-user.jpg" alt="" width={32} height={32} />
    </header>
  )
}
