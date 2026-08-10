"use client"

import { SignupForm } from "@/features/auth/signup/signup-form"
import { GalleryVerticalEndIcon } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <SignupForm />
      </div>
    </div>
  )
}
