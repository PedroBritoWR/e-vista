import { z } from 'zod'
import { userSchema } from '../app/(private)/inicial/aluno/cadastrar/page'

export type FormData = z.infer<typeof userSchema>
