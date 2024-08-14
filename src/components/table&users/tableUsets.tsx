import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { User } from '@/types/user'

interface UserTableProps {
  users: User[]
  selectedUserIndex: number | null
  onRowClick: (index: number) => void
}

export const UserTable = ({
  users,
  selectedUserIndex,
  onRowClick,
}: UserTableProps) => {
  return (
    <Table className="rounded-md bg-[#020711] p-3">
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead className="hidden sm:table-cell">Idade</TableHead>
          <TableHead className="hidden sm:table-cell">Gênero</TableHead>
          <TableHead className="hidden md:table-cell">
            Data de Nascimento
          </TableHead>
          <TableHead className="text-right">Cor do Olho</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.length ? (
          users.map((user, index) => (
            <TableRow
              key={user.id}
              onClick={() => onRowClick(index)}
              className={`cursor-pointer ${selectedUserIndex === index ? 'bg-muted/30' : ''}`}
            >
              <TableCell>
                {user.firstName} {user.lastName}
              </TableCell>
              <TableCell className="hidden sm:table-cell">{user.age}</TableCell>
              <TableCell className="hidden sm:table-cell">
                {user.gender}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {user.birthDate}
              </TableCell>
              <TableCell className="text-right">{user.eyeColor}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5}>Nenhum usuário encontrado</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
