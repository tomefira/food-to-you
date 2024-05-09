'use client'

import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const SignupForm = () => {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNum, setMobileNum] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [address, setAddress] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, mobileNum, email, password, address }),
      })

      const data = await res.json()
      if (res.ok) {
        router.push('/login')
      } else {
        setError(data.message || 'Something went wrong')
      }
    } catch (err: any) {
      setError('Something went wrong')
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px]">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="firstName">First Name</Label>
        <Input
          className="w-full"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          id="firstName"
          type="text"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          className="w-full"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          id="lastName"
          type="text"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="mobileNum">Mobile Number</Label>
        <Input
          className="w-full"
          required
          value={mobileNum}
          onChange={(e) => setMobileNum(e.target.value)}
          id="mobileNum"
          type="text"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          className="w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          className="w-full"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          id="confirmPassword"
          type="password"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="address">Address</Label>
        <Input
          className="w-full"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          id="address"
          type="text"
        />
      </div>
      {error && <Alert>{error}</Alert>}
      <div className="w-full">
        <Button className="w-full" size="lg">
          Signup
        </Button>
      </div>
    </form>
  )
}
