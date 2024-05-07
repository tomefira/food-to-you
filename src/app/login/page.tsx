import Link from 'next/link'
import { LoginForm } from '@/components/ui/login-form'
import { Suspense } from 'react'

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl text-center">Login</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
        <p className="text-center">
          Need to create an account? <Link href="/signup" className="text-red-600">Sign up</Link>
        </p>
      </div>
    </div>
  )
}
