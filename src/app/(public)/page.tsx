'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/input'
import { SyntheticEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState<string>('kminchelle@gmail.com')
  const [password, setPassword] = useState<string>('0lelplR')

  const router = useRouter()

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()
    console.log(email, password)

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      console.log(result)
      return
    }

    router.replace('/pagina-inicial')
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
          type="text"
          placeholder="emilys"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="grid gap-2">
          <Input
            label="Digite sua senha"
            id="senha"
            type="password"
            placeholder="emilyspass"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link
            href="/recuperar-senha"
            className="ml-auto inline-block w-full text-end text-sm underline"
          >
            Esqueceu sua senha?
          </Link>
        </div>
        <Button type="submit" className="w-full">
          Entrar
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
