'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const calculateAge = (birthDate: string): number => {
  const today = new Date()
  const birthDateObj = new Date(birthDate)
  let age = today.getFullYear() - birthDateObj.getFullYear()
  const monthDiff = today.getMonth() - birthDateObj.getMonth()
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--
  }
  return age
}

const userSchema = z
  .object({
    firstName: z.string().min(1, 'Nome é obrigatório'),
    lastName: z.string().min(1, 'Sobrenome é obrigatório'),
    email: z.string().email('Email inválido'),
    age: z
      .number()
      .min(6, 'A idade deve ser pelo menos 6 anos')
      .max(120, 'A idade deve ser no máximo 120 anos'),
    birthDate: z.string().min(1, 'Data de nascimento é obrigatória'),
  })
  .refine(
    (data) => {
      const ageFromBirthDate = calculateAge(data.birthDate)
      return data.age === ageFromBirthDate
    },
    {
      message: 'A idade deve corresponder à data de nascimento.',
      path: ['age'],
    },
  )

type FormData = z.infer<typeof userSchema>

export default function CadastrarAluno() {
  const { toast } = useToast()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
  })

  const createUser = async (user: FormData) => {
    try {
      const response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      if (!response.ok) {
        throw new Error('Erro ao adicionar o usuário')
      }

      const data = await response.json()
      toast({
        title: 'Sucesso',
        description: 'Aluno cadastrado com sucesso!',
        variant: 'default',
        duration: 5000,
      })
      console.log('Usuário criado com sucesso:', data)
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível cadastrar o aluno. Tente novamente.',
        variant: 'destructive',
        duration: 5000,
      })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    await createUser(data)
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="w-full max-w-4xl p-4 sm:ml-12 md:ml-12">
        <div className="mb-6 flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => router.back()}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h1 className="flex-1 text-xl font-semibold tracking-tight">
            Cadastro de Aluno
          </h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Detalhes do Aluno</CardTitle>
            <CardDescription>
              Preencha os detalhes do novo aluno
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="firstName">Nome</Label>
                <Input
                  id="firstName"
                  type="text"
                  className="w-full"
                  placeholder="Nome do Aluno"
                  {...register('firstName')}
                />
                {errors.firstName && (
                  <p className="text-red-600">{errors.firstName.message}</p>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input
                  id="lastName"
                  type="text"
                  className="w-full"
                  placeholder="Sobrenome do Aluno"
                  {...register('lastName')}
                />
                {errors.lastName && (
                  <p className="text-red-600">{errors.lastName.message}</p>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="off"
                  className="w-full"
                  placeholder="jose@hotmail.com"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="age">Idade</Label>
                <Input
                  id="age"
                  type="number"
                  className="w-full"
                  placeholder="Idade do Aluno"
                  {...register('age', { valueAsNumber: true })}
                />
                {errors.age && (
                  <p className="text-red-600">{errors.age.message}</p>
                )}
              </div>
              <div className="flex justify-around">
                <div className="grid gap-3">
                  <Select>
                    <SelectTrigger className="w-[350px]">
                      <SelectValue placeholder="Selcione o Gênero" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Gênero</SelectLabel>
                        <SelectItem value="masculino">Masculino</SelectItem>
                        <SelectItem value="feminino">Feminino</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Select>
                    <SelectTrigger className="w-[350px]">
                      <SelectValue placeholder="Cor dos olhos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="castanho">Castanho</SelectItem>
                        <SelectItem value="azul">Azul</SelectItem>
                        <SelectItem value="verde">Verde</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="birthDate">Data de Nascimento</Label>
                <Input
                  id="birthDate"
                  type="date"
                  className="w-full"
                  placeholder="Data de Nascimento do Aluno"
                  lang="pt-BR"
                  {...register('birthDate')}
                />
                {errors.birthDate && (
                  <p className="text-red-600">{errors.birthDate.message}</p>
                )}
              </div>
              <div className="flex flex-col items-end gap-2 border-t pt-4">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => reset()}
                  >
                    Descartar
                  </Button>
                  <Button type="submit" size="sm" disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar'}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
