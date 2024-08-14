import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { User } from '@/types/user'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface UserDetailsProps {
  selectedUser: User | null
  onNextUser: () => void
  onPreviousUser: () => void
  isFirstUser: boolean
  isLastUser: boolean
}

export const UserDetails = ({
  selectedUser,
  onNextUser,
  onPreviousUser,
  isFirstUser,
  isLastUser,
}: UserDetailsProps) => {
  if (!selectedUser) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Selecione um Aluno</CardTitle>
          <CardDescription>
            Clique em um aluno na tabela para ver detalhes.
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Detalhe do Aluno
          </CardTitle>
          <CardDescription>
            {selectedUser.firstName} {selectedUser.lastName}
          </CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={onPreviousUser}
            disabled={isFirstUser}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Usuário Anterior</span>
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={onNextUser}
            disabled={isLastUser}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próximo Usuário</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <ul className="font-semibold">
          <li>
            Nome: {selectedUser.firstName} {selectedUser.lastName}
          </li>
          <li>Idade: {selectedUser.age}</li>
          <li>Gênero: {selectedUser.gender}</li>
          <li>Email: {selectedUser.email}</li>
          <li>Telefone: {selectedUser.phone}</li>
          <li>Data de Nascimento: {selectedUser.birthDate}</li>
          <li>Grupo Sanguíneo: {selectedUser.bloodGroup}</li>
        </ul>
      </CardContent>
    </Card>
  )
}
