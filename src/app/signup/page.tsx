import Link from 'next/link'
import { SignupForm } from '@/components/ui/signup-form'
import { Suspense } from 'react'

export default function SignupPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl text-center">Signup</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <SignupForm />
        </Suspense>
        <p className="text-center">
          Already have an account? <Link href="/login" className="text-red-600">Login</Link>
        </p>
      </div>
    </div>
  )
}
