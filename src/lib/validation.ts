import { z } from 'zod'
// import { File } from 'node:buffer'
const isClient = typeof window !== 'undefined'

export const formSchema = z.object({
  fullName: 
    z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email(),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
    file: z
    .array(
      isClient 
        ? z.instanceof(File).refine((file) => file.size < 2 * 1024 * 1024, 'File size must be less than 2MB')
        : z.any() // No servidor, ignora a validação do File
    )
    .min(1, 'At least 1 file is required'),
})