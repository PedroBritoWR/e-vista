import { z } from 'zod'
import { calculateAge } from '@/functions/calculateAge'

export const userSchema = z
  .object({
    firstName: z.string().min(1, 'Nome é obrigatório'),
    lastName: z.string().min(1, 'Sobrenome é obrigatório'),
    email: z.string().email('Email inválido'),
    birthDate: z
      .string()
      .min(1, 'Data de nascimento é obrigatória')
      .refine(
        (value) => {
          const [day, month, year] = value.split('/').map(Number)
          const isValidDay = day >= 1 && day <= 31
          const isValidMonth = month >= 1 && month <= 12
          const currentYear = new Date().getFullYear()
          const isValidYear = year <= currentYear && year >= currentYear - 120
          const isValidDate = !isNaN(day) && !isNaN(month) && !isNaN(year)
          return isValidDate && isValidDay && isValidMonth && isValidYear
        },
        { message: 'Data de nascimento inválida', path: ['birthDate'] },
      )
      .refine(
        (value) => {
          const age = calculateAge(value)
          return age >= 6 && age <= 120
        },
        { message: 'A idade deve estar entre 6 e 120 anos', path: ['age'] },
      ),
    gender: z.string().min(1, 'Gênero é obrigatório'),
    eyeColor: z.string().min(1, 'Cor dos olhos é obrigatória'),
    age: z
      .number()
      .min(6, 'A idade deve ser pelo menos 6 anos')
      .max(120, 'A idade deve ser no máximo 120 anos'),
  })
  .refine(
    (data) => {
      const ageFromBirthDate = calculateAge(data.birthDate)
      return data.age === ageFromBirthDate
    },
    {
      message:
        'A idade deve corresponder à data de nascimento e estar entre 6 e 120 anos.',
      path: ['age'],
    },
  )
