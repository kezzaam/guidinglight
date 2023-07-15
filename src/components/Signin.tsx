"use client"

import { useState } from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

// sign-in functionality
const handleSignIn = async () => {}
const handleGoogleSignIn = async () => {}


export default function Signin(): JSX.Element {
  const { data: session, status } = useSession()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

    return (
        <main className="flex min-h-screen items-center flex-col solid">
          {/* <LogoHeader /> */}
          <div className="min-h-full flex-col flex items-center justify-center py-8 px-4 sm:px-4 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-bold">Sign in</h2>
                <p className="mt-2 text-center text-sm">
                  Or <Link href="/signup" className="font-medium">Create an account</Link>
                </p>
              </div>
            </div>
      
            <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <span className="text-sm">
                    <label htmlFor="email">Email address</label> and <label htmlFor="password">password</label>:
                  </span>
                  <input
                    id="email"
                    type="email"
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[--pastelindigo] rounded-t-md focus:outline-[--pastelgrey] focus:ring-none focus:border-[--englishlavender] focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
      
                <div>
                  <input
                    id="password"
                    type="password"
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[--pastelindigo] rounded-b-md focus:outline-[--pastelgrey] focus:ring-none focus:border-[--englishlavender] focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {errorMessage && <div className="text-[--pastelgrey]">{errorMessage}</div>}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 rounded" />
                  <label className="ml-2 block text-sm">Remember me</label>
                </div>
      
                <div className="text-sm">
                  <a href="#" className="font-medium">Forgot password?</a>
                </div>
              </div>
      
              <div>
                <Button type="submit">Sign in</Button>
              </div>
      
              <div className="separator text-sm">
                Or continue with
              </div>
      
              <div className="flex space-x-2">
                <Button onClick={handleGoogleSignIn}>
                  <Image src="/icons/icons8-google-48.svg" alt="Google Icon" width={30} height={30} />
                </Button>
              </div>
            </form>
          </div>

        </main>
    )
}
