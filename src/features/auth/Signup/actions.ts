import z, { success } from "zod"
import { signupFormSchema } from "../schemas/signup.schema"
import { auth } from "@/utils/auth"
import prisma from "@/lib/prisma"

export async function signup  (formData : FormData)  {

    const values = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword")
    }

    const result = signupFormSchema.safeParse(values)

    if(!result.success)
    {
        return {
            success: false,
            errors: z.treeifyError(result.error),
        }
    }
    
   const data = await auth.api.signUpEmail({
        body: {
            email: values.email as string,
            name: values.fullName as string,
            password: values.password as string,
        }
    })
    

    
}