import { registerSchema } from '@/schemas-forms/register-schema'
import { z } from 'zod'

export type RegisterProps = z.infer<typeof registerSchema>
