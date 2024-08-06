'use client'
import { useState, FormEvent } from 'react'
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

export default function CadastrarAluno() {
  const { toast } = useToast()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gender: '',
    birthDate: '',
    eyeColor: '',
  })

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

    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      age: parseInt(formData.age, 10),
      gender: formData.gender,
      birthDate: formData.birthDate,
      eyeColor: formData.eyeColor,
    }

    setLoading(true)
    await createUser(user)
  }

  const handleDiscard = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      gender: '',
      birthDate: '',
      eyeColor: '',
    })

    router.push('/pagina-inicial')
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
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="firstName">Nome</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full"
                  placeholder="Nome do Aluno"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
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
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
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
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
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
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
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
                  value={formData.birthDate}
                  onChange={(e) =>
                    setFormData({ ...formData, birthDate: e.target.value })
                  }
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
                  value={formData.eyeColor}
                  onChange={(e) =>
                    setFormData({ ...formData, eyeColor: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex flex-col items-end gap-2 border-t pt-4">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleDiscard}
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
