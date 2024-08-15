import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { User } from '@/types/user'
import { Separator } from '@/components/ui/separator'
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
          <CardTitle className="group flex items-center gap-2">
            Detalhe do Aluno(a):
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

      <CardContent className="p-6">
        <h2 className="active text-lg">Informações Pessoais</h2>
        <ul className="font-semibold">
          <li className="flex items-center justify-between">
            <h3 className="text-gray-400">Nome:</h3>
            <p className="text-white-400 text-sm">
              {selectedUser.firstName} {selectedUser.lastName}
            </p>
          </li>
          <li className="flex items-center justify-between">
            <h3 className="text-gray-400">Idade:</h3>
            <p className="text-white-400 text-sm"> {selectedUser.age}</p>
          </li>
          <li className="flex items-center justify-between">
            <h3 className="text-gray-400">Gênero:</h3>
            <p className="text-white-400 text-sm">{selectedUser.gender}</p>
          </li>
          <li className="flex items-center justify-between">
            <h3 className="text-gray-400">Email:</h3>
            <p className="text-white-400 text-sm"> {selectedUser.email}</p>
          </li>
          <li className="flex items-center justify-between">
            <h3 className="text-gray-400">Telefone</h3>
            <p className="text-white-400 text-sm">{selectedUser.phone}</p>
          </li>
          <li className="flex items-center justify-between">
            <h3 className="text-gray-400">Data de nascimento:</h3>
            <p className="text-white-400 text-sm">{selectedUser.birthDate}</p>
          </li>
          <li className="flex items-center justify-between">
            <h3 className="text-gray-400">Grupo sanguineo:</h3>
            <p className="text-white-400 text-sm">{selectedUser.bloodGroup}</p>
          </li>
        </ul>
      </CardContent>

      <Separator className="ml-5 w-[542px]" />

      <CardContent className="p-6 text-sm">
        <h2 className="text-lg text-white">Informações de localidade</h2>
        <ul className="font-semibold">
          <li className="flex items-center justify-between">
            <h3 className="text-gray-400">País de origem:</h3>
            <p className="text-white-400 text-sm">
              {selectedUser.address.country}
            </p>
          </li>
          <li className="flex items-center justify-between">
            <h3 className="text-gray-400">Cidade de origem:</h3>
            <p className="text-white-400 text-sm">
              {selectedUser.address.city}
            </p>
          </li>
          <li className="flex items-center justify-between">
            <h3 className="text-gray-400">Estado de origem:</h3>
            <p className="text-white-400 text-sm">
              {selectedUser.address.state}
            </p>
          </li>
        </ul>
      </CardContent>

      <Separator className="ml-5 w-[542px]" />

      <CardContent className="p-6 text-sm">
        <h2 className="text-lg text-white">
          Informações bancarias e financeiras
        </h2>
        <ul>
          <li className="flex items-center justify-between">
            <h3 className="text-gray-400">Tipo do cartão:</h3>
            <p className="text-white-400">{selectedUser.bank.cardType}</p>
          </li>
          <li className="flex items-center justify-between">
            <h3 className="text-gray-400">Número do cartão:</h3>
            <p className="text-white-400">{selectedUser.bank.cardNumber}</p>
          </li>
          <li className="flex items-center justify-between">
            <h3 className="text-gray-400">Expiração do cartão:</h3>
            <p className="text-white-400">{selectedUser.bank.cardExpire}</p>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
