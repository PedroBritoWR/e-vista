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
import Image from 'next/image'

type AvatarUserProps = {
  src: string
  width: number
  height: number
  alt: string
}
export default function AvatarUser({
  src,
  width,
  height,
  alt,
}: AvatarUserProps) {
  return (
    <div className="sm:flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <Image
              src={src}
              width={width}
              height={height}
              alt={alt}
              className="overflow-hidden rounded-full"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="grid cursor-pointer gap-2">
          <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
          <DropdownMenuSeparator className="border-t" />
          <DropdownMenuItem>Configurações</DropdownMenuItem>
          <DropdownMenuItem>Suporte/Atendimento</DropdownMenuItem>
          <DropdownMenuSeparator className="border-b" />
          <DropdownMenuItem>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
