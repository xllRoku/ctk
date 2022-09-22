import { z } from "zod";

export const userSignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  email: z
    .string()
    .min(3, { message: "El email es requerido." })
    .email({ message: "El email es invalido." }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

// Infer the TS type according to the zod schema.
export type UserSignUp = z.infer<typeof userSignUpSchema>;
