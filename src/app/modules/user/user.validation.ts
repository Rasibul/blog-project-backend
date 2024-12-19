import { z } from "zod";

const userValidaitionSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().max(20, { message: 'Password can not be more than 20 characters' })
    })
})

const loginValidationSchema = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string({ required_error: 'Password is required' }),
    }),
});


export const userValidation = {
    userValidaitionSchema,
    loginValidationSchema
}