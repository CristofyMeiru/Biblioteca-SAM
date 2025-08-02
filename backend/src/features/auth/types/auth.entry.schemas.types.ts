import * as schemas from '@/features/auth/auth.entry.schemas'
import z from 'zod'

export type auth_me = z.infer<typeof schemas.auth_me>