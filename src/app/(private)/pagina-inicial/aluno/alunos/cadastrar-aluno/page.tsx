'use client'
import { useState, FormEvent } from 'react'
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

export default function CadastrarAluno() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const createUser = async (user: {
    firstName: string
    lastName: string
    email: string
    age: number
    gender: string
    birthDate: string
    eyeColor: string
  }) => {
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const user = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      age: parseInt(formData.get('age') as string, 10),
      gender: formData.get('gender') as string,
      birthDate: formData.get('birthDate') as string,
      eyeColor: formData.get('eyeColor') as string,
    }

    setLoading(true)
    await createUser(user)
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="w-full max-w-4xl p-4">
        <div className="mb-6 flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-7 w-7">
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
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="firstName">Nome</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full"
                  placeholder="Nome do Aluno"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="w-full"
                  placeholder="Sobrenome do Aluno"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full"
                  placeholder="Email do Aluno"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="age">Idade</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  className="w-full"
                  placeholder="Idade do Aluno"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="gender">Gênero</Label>
                <Input
                  id="gender"
                  name="gender"
                  type="text"
                  className="w-full"
                  placeholder="Gênero do Aluno"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="birthDate">Data de Nascimento</Label>
                <Input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  className="w-full"
                  placeholder="Data de Nascimento do Aluno"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="eyeColor">Cor dos Olhos</Label>
                <Input
                  id="eyeColor"
                  name="eyeColor"
                  type="text"
                  className="w-full"
                  placeholder="Cor dos Olhos do Aluno"
                  required
                />
              </div>
              <div className="flex items-center justify-end gap-2 border-t p-4">
                <Button type="button" variant="outline" size="sm">
                  Descartar
                </Button>
                <Button type="submit" size="sm" disabled={loading}>
                  {loading ? 'Salvando...' : 'Salvar'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
