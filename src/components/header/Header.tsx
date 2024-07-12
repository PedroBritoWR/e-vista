import {
  Home,
  Package2,
  PanelLeft,
  Users2,
  LogOut,
  UserPlus,
} from 'lucide-react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import Link from 'next/link'
import Breadcrumb from './Breadcrumb'
import AvatarUser from './AvatarUser'

export default function Header() {
  return (
    <header className="sticky top-0 ml-3 flex h-12 items-center justify-between gap-4 border-b pt-2 sm:static sm:h-auto sm:border-0 sm:bg-[#0D1525] sm:px-16">
      <Breadcrumb />
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
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
              Deslogar
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
      <AvatarUser src="/" alt="a" width={32} height={32} />
    </header>
  )
}
