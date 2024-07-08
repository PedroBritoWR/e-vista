'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/input'
import { calculatePasswordStrength } from '@/functions/calculate-password-strength'
import { RegisterProps } from '@/types/register-props'
import { registerSchema } from '@/schemas-forms/register-schema'

export default function Login() {
  const [passwordStrength, setPasswordStrength] = useState({
    strength: '',
    message: '',
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    resolver: zodResolver(registerSchema),
  })

  function handleFilterProducts(data: RegisterProps) {
    console.log(data)
  }

  function handlePasswordCalculate(password: string) {
    const { strength, message } = calculatePasswordStrength(password)
    setPasswordStrength({ strength, message })
  }

  function handlePasswordColor() {
    if (passwordStrength.strength === 'fraca') {
      return {
        borderColor: 'w-1/3 bg-red-500',
        textColor: 'text-red-500',
      }
    } else if (passwordStrength.strength === 'média') {
      return {
        borderColor: 'w-1/2 bg-yellow-500',
        textColor: 'text-yellow-500',
      }
    } else if (passwordStrength.strength === 'forte') {
      return {
        borderColor: 'w-full bg-green-500',
        textColor: 'text-green-500',
      }
    }

    return {
      borderColor: '',
      textColor: '',
    }
  }

  return (
    <>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Cadastrar-se</h1>
        <p className="text-balance text-muted-foreground">
          Preencha os dados abaixo para criar sua conta.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleFilterProducts)}
        className="grid gap-4"
      >
        <div className="grid gap-1">
          <Input
            label="Nome completo"
            id="fullName"
            type="text"
            requiredInput
            placeholder="Max Fernandes Exemplo"
            {...register('fullName')}
            error={errors.fullName && errors.fullName.message}
          />
        </div>
        <Input
          label="Email"
          id="email"
          type="email"
          requiredInput
          placeholder="max@gmail.com"
          {...register('email')}
          error={errors.email && errors.email.message}
        />
        <Input
          label="Crie sua senha"
          id="senha"
          type="password"
          requiredInput
          placeholder="*******"
          {...register('password')}
          error={errors.password && errors.password.message}
          onChange={(e) => handlePasswordCalculate(e.target.value)}
        />

        <Input
          label="Confirme sua senha"
          id="confirmar-senha"
          requiredInput
          type="password"
          placeholder="*********"
          {...register('confirmPassword')}
          error={errors.confirmPassword && errors.confirmPassword.message}
        />
        <div className="relative h-2 w-full rounded bg-gray-300">
          <div
            className={`absolute h-full rounded ${
              handlePasswordColor().borderColor
            }`}
          />
        </div>
        <p className={`text-sm ${handlePasswordColor().textColor}`}>
          {passwordStrength.message}
        </p>
        <Button type="submit" className="w-full">
          Criar conta
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        Voltar para{' '}
        <Link href="/" className="underline">
          Autenticação
        </Link>
      </div>
    </>
  )
}
