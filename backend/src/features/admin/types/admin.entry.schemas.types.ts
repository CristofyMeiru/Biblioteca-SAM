import * as schemas from '@/features/admin/admin.entry.schemas'
import z from 'zod'

export type create = z.infer<typeof schemas.create>