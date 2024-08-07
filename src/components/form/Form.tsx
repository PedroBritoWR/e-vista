'use client'
import React, { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/input'
import { Loader } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import PasswordInput from './PasswordInput'

const LoginForm: React.FC = () => {
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

    router.replace('/inicial')

    setLoading(false)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <Input
        label="Email"
        id="email"
        name="email"
        type="text"
        placeholder="Digite seu email"
        required
      />
      <PasswordInput
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
      />
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <Loader className="mr-2 inline-block animate-spin" />
        ) : (
          'Entrar'
        )}
      </Button>
    </form>
  )
}

export default LoginForm
