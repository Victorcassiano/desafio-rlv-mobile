import { z } from "zod";

export const formSchema = z.object({
    email: z.string().email("Email inválido!"),
});

export type FormData = z.infer<typeof formSchema>
