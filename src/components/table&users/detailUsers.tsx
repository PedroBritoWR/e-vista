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
          <li>
            <p className="text-sm text-gray-400">
              Nome: {selectedUser.firstName} {selectedUser.lastName}
            </p>
          </li>
          <li>
            <p className="text-sm text-gray-400">Idade: {selectedUser.age}</p>
          </li>
          <li>
            <p className="text-sm text-gray-400">
              Gênero: {selectedUser.gender}
            </p>
          </li>
          <li>
            <p className="text-sm text-gray-400">Email: {selectedUser.email}</p>
          </li>
          <li>
            <p className="text-sm text-gray-400">
              Telefone: {selectedUser.phone}
            </p>
          </li>
          <li>
            <p className="text-sm text-gray-400">
              Data de Nascimento: {selectedUser.birthDate}
            </p>
          </li>
          <li>
            <p className="text-sm text-gray-400">
              Grupo Sanguíneo: {selectedUser.bloodGroup}
            </p>
          </li>
        </ul>
      </CardContent>

      <Separator className="ml-5 w-[542px]" />

      <CardContent className="p-6 text-sm">
        <h2 className="text-lg text-white">
          Informações acadêmicas e localidade
        </h2>
        <ul className="font-semibold">
          <li>
            <p className="text-sm text-gray-400">
              País de origem: {selectedUser.address.country}
            </p>
          </li>
          <li>
            <p className="text-sm text-gray-400">
              Cidade de origem: {selectedUser.address.city}
            </p>
          </li>
          <li>
            <p className="text-sm text-gray-400">
              Estado de origem: {selectedUser.address.state}
            </p>
          </li>
        </ul>
      </CardContent>

      <Separator className="ml-5 w-[542px]" />

      <CardContent className="p-6 text-sm">
        <h2 className="text-lg text-white">
          Informações bancarias e financeiras
        </h2>
        <ul className="font-semibold">
          <li>
            <p className="text-sm text-gray-400">
              Tipo do cartão: {selectedUser.bank.cardType}
            </p>
          </li>
          <li>
            <p className="text-sm text-gray-400">
              Número do cartão: {selectedUser.bank.cardNumber}
            </p>
          </li>
          <li>
            <p className="text-sm text-gray-400">
              Expiração do cartão: {selectedUser.bank.cardExpire}
            </p>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
