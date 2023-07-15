import React, { useState, useEffect, useContext } from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

// Component for user sign-up functionality.

export default function Signup(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authUser, setAuthUser] = useState(null)
  const [name, setName] = useState('')

  // Handle create account form submission
  const handleCreateAccount = () => {}

  // Listen for authentication state changes
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    return () => {
      listen()
    }
  }, [])

  // Redirect to goal page if user is authenticated
  useEffect(() => {
    if (authUser) {
      router.push('signup/goal')
    }
  }, [authUser, router])

  // Handle Google sign-up
  const handleGoogleSignUp = () => {}

  // Handle Twitter sign-up
  const handleTwitterSignUp = () => {}

  // Handle Facebook sign-up
  const handleFacebookSignUp = () => {}

  return (
    <main className="flex min-h-screen min-w-screen items-center flex-col solid py-8">
      <LogoHeader />
      <div className="min-h-full flex-col flex items-center justify-center py-8 px-4 sm:px-4 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold">Create account</h2>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleCreateAccount}>
          <div className="rounded-md shadow-sm">
            <div>
              <label className="text-sm" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-[--pastelindigo] focus:outline-[--pastelgrey] focus:ring-none focus:border-[--englishlavender] focus:z-10 sm:text-sm"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm" htmlFor="email">
                Email address:
              </label>
              <input
                type="email"
                autoComplete="none"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-[--pastelindigo] focus:outline-[--pastelgrey] focus:ring-none focus:border-[--englishlavender] focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                autoComplete="none"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-[--pastelindigo] focus:outline-[--pastelgrey] focus:ring-none focus:border-[--englishlavender] focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

          </div>

          <div className="flex items-center">
            {/* Terms and conditions */}
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 rounded" />
              <label className="ml-2 block text-sm">
                I accept the
                <a href="#" className="font-medium">
                  Terms & Conditions
                </a>
              </label>
            </div>
          </div>

          <div>
            {/* Create account button */}
            <Button type="submit">Create account</Button>
          </div>

          <div className="separator text-sm">Or sign up with</div>

          <div className="flex space-x-2">
            {/* 3rd party sign-up buttons */}
            <ButtonReverse onClick={handleGoogleSignUp}>
              <Image src="/images/icons8-google-48.svg" alt="Google Icon" width={30} height={30} />
            </ButtonReverse>

            <ButtonReverse onClick={handleTwitterSignUp}>
              <Image src="/images/icons8-twitter-48.svg" alt="Twitter Icon" width={30} height={30} />
            </ButtonReverse>

            <ButtonReverse onClick={handleFacebookSignUp}>
              <Image src="/images/icons8-facebook-48.svg" alt="Facebook Icon" width={30} height={30} />
            </ButtonReverse>
          </div>

          <div>
            <p className="mt-2 text-center text-sm">
              Already have an account? <Link href="/signin">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  )
}
