import { z } from 'zod'

export const registerSchema = z
  .object({
    fullName: z.string({ message: 'Nome é obrigatório' }),
    email: z
      .string({ message: 'e-mail é obrigatório' })
      .email('Endereço de e-mail inválido'),
    password: z
      .string({ message: 'Senha é obrigatório' })
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
      .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
      .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
      .regex(
        /[^A-Za-z0-9]/,
        'A senha deve conter pelo menos um caractere especial',
      ),
    confirmPassword: z.string({ message: 'Confirme senha é obrigatório' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })
