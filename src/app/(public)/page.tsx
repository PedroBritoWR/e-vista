import Link from 'next/link'
import LoginForm from '@/components/form/Form'

export default function Login() {
  return (
    <>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Autenticação</h1>
        <p className="text-balance text-muted-foreground">
          Digite seu e-mail abaixo para fazer login em sua conta
        </p>
      </div>
      <LoginForm />
      <div className="mt-4 text-center text-sm">
        Ainda não tem uma conta?{' '}
        <Link href="/cadastrar-se" className="underline">
          Cadastre-se
        </Link>
      </div>
    </>
  )
}
