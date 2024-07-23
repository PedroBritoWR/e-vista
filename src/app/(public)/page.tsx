'use client'
import React, { useState, FormEvent } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/input'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Loader } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

export default function Login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(true)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    setLoading(true)

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      toast({
        title: 'Erro de autenticação',
        description: 'Credenciais inválidas, por favor tente novamente.',
        variant: 'destructive',
        duration: 5000,
      })
      setLoading(false)
      return
    }

    router.replace('/pagina-inicial')

    setLoading(false)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Autenticação</h1>
        <p className="text-balance text-muted-foreground">
          Digite seu e-mail abaixo para fazer login em sua conta
        </p>
      </div>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <Input
          label="Email"
          id="email"
          name="email"
          type="text"
          placeholder="Digite seu email"
          required
        />
        <div className="grid gap-2">
          <Input
            label="Digite sua senha"
            id="senha"
            name="password"
            type={showPassword ? 'password' : 'text'}
            placeholder="Digite sua senha"
            required
            append={
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="outline-none focus:outline-none"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            }
          />
          <Link
            href="/recuperar-senha"
            className="ml-auto inline-block w-full text-end text-sm underline"
          >
            Esqueceu sua senha?
          </Link>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <Loader className="mr-2 inline-block animate-spin" />
          ) : (
            'Entrar'
          )}
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        Ainda não tem uma conta?{' '}
        <Link href="/cadastrar-se" className="underline">
          Cadastre-se
        </Link>
      </div>
    </>
  )
}
