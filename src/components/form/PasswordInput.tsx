'use client'
import React from 'react'
import { Input } from '../input'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

interface PasswordInputProps {
  showPassword: boolean
  togglePasswordVisibility: () => void
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  showPassword,
  togglePasswordVisibility,
}) => (
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
)

export default PasswordInput
