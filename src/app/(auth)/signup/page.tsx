import { SignupForm } from "@/features/auth/signup/signup-form"
import { auth } from "@/utils/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function SignupPage() {

  const session = await  auth.api.getSession({
    headers: await headers()
  })

if(session?.user)
  redirect("/dashboard")
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <SignupForm />
      </div>
    </div>
  )
}
