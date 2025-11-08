import { z } from "zod"

export const UserFormValidation = z.object({
  nombre: z.string()
  .min(2, {message: "El nombre debe tener al menos 2 caracteres.",})
  .max(50, {message: "El nombre no puede exceder los 50 caracteres."}),
  correo: z.string().email({message: "Correo inválido.",}),
  phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone),"Número de teléfono inválido")
})