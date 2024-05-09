'use client'

import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const SignupForm = () => {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNum, setMobileNum] = useState('')
  const [email, setEmail] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const address = `${street}, ${city}, ${state}, ${zip}`
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
        router.push('/dashboard/business/')
      } else {
        setError(data.message || 'Something went wrong')
      }
    } catch (err: any) {
      setError('Something went wrong')
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 w-full sm:w-[800px] mx-auto rounded-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-6">
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
        </div>
        <div className="space-y-6">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="street">Street Address</Label>
            <Input
              className="w-full"
              required
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              id="street"
              type="text"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="city">City</Label>
            <Input
              className="w-full"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              id="city"
              type="text"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="state">State</Label>
            <Input
              className="w-full"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
              id="state"
              type="text"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="zip">Postcode</Label>
            <Input
              className="w-full"
              required
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              id="zip"
              type="text"
            />
          </div>
        </div>
      </div>
      <Separator/>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>
      <div className="w-full">
        <Button className="w-full" size="lg">
          Signup
        </Button>
      </div>
      {error && <Alert>{error}</Alert>}
    </form>
  )
}
