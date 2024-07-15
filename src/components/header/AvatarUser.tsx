'use client'

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'
import { DropdownMenuContent } from '../ui/dropdown-menu'
import { User } from 'lucide-react'

export default function AvatarUser() {
  return (
    <div className="sm:flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <User />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="grid w-[170px] cursor-pointer gap-2"
        >
          <DropdownMenuLabel className="p-2">Minha conta</DropdownMenuLabel>
          <DropdownMenuSeparator className="border-t" />
          <div className="grid gap-2 p-2">
            <DropdownMenuItem>Configurações</DropdownMenuItem>
            <DropdownMenuItem>Suporte/Atendimento</DropdownMenuItem>
          </div>
          <DropdownMenuSeparator className="border-b" />
          <DropdownMenuItem className="p-2">Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
