'use client'
import { ChevronLeft, ChevronRight, File, ListFilter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEffect, useState } from 'react'
import { fetchOrders } from '@/app/api/auth/[...nextauth]/searchFilter'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { useToast } from '@/components/ui/use-toast'
import { User } from '../../../types/user'

export default function Dashboard() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState<User[]>([])
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(
    null,
  )

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data: User[] = await fetchOrders()
        if (Array.isArray(data)) {
          setUsers(data)
          setSelectedUserIndex(0)
        } else {
          throw new Error('Invalid data format')
        }
      } catch (err) {
        if (err instanceof Error) {
          toast({
            title: 'Erro ao carregar usuários',
            description: err.message,
            variant: 'destructive',
          })
        }
      } finally {
        setLoading(false)
      }
    }
    loadUsers()
  }, [toast])

  useEffect(() => {
    if (loading) {
      toast({
        title: 'Carregando',
        variant: 'default',
      })
    }
  }, [loading, toast])

  const handleNextUser = () => {
    if (selectedUserIndex !== null && selectedUserIndex < users.length - 1) {
      setSelectedUserIndex(selectedUserIndex + 1)
    }
  }

  const handlePreviousUser = () => {
    if (selectedUserIndex !== null && selectedUserIndex > 0) {
      setSelectedUserIndex(selectedUserIndex - 1)
    }
  }

  const selectedUser =
    selectedUserIndex !== null ? users[selectedUserIndex] : null

  return (
    <div className="mt-0 flex flex-col px-0 sm:gap-4 sm:py-6 sm:pl-16">
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle>Your Orders</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Introducing Our Dynamic Orders Dashboard for Seamless
                  Management and Insightful Analysis.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Create New Order</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>This Week</CardDescription>
                <CardTitle className="text-4xl">$1,329</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  +25% from last week
                </div>
              </CardContent>
              <CardFooter>
                <Progress value={25} aria-label="25% increase" />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>This Month</CardDescription>
                <CardTitle className="text-4xl">$5,329</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  +10% from last month
                </div>
              </CardContent>
              <CardFooter>
                <Progress value={12} aria-label="12% increase" />
              </CardFooter>
            </Card>
          </div>
          <Tabs defaultValue="week">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 gap-1 text-sm"
                    >
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Fulfilled
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Declined
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Refunded
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 gap-1 text-sm"
                >
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Export</span>
                </Button>
              </div>
            </div>
            <TabsContent value="week">
              <Card>
                <CardHeader className="px-7">
                  <CardTitle>Usuários Cadastrados</CardTitle>
                  <CardDescription>
                    Usuários recentes cadastrados.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Idade
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Gênero
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Data de Nascimento
                        </TableHead>
                        <TableHead className="text-right">
                          Cor do Olho
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.length ? (
                        users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>
                              {user.firstName} {user.lastName}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {user.age}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {user.gender}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {user.birthDate}
                            </TableCell>
                            <TableCell className="text-right">
                              {user.eyeColor}
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5}>
                            Nenhum usuário encontrado
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div>
          {selectedUser ? (
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
                    onClick={handlePreviousUser}
                    disabled={selectedUserIndex === 0}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Usuário Anterior</span>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={handleNextUser}
                    disabled={selectedUserIndex === users.length - 1}
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
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Selecione um Aluno</CardTitle>
                <CardDescription>
                  Clique em um aluno na tabela para ver detalhes.
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </div>
      </main>
      <Separator className="my-6 md:hidden" />
    </div>
  )
}
