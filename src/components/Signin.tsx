/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons'
import { useSession } from 'next-auth/react'

export default function Signin() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    signIn('credentials', {
      ...data,
      redirect: true,
      callbackUrl: '/home',
    })

}

  const handleGoogleSignIn = async () => { }
  const handleGithubSignIn = async () => { }

  return (
    <>
      <div>
        <h2 className="mt-6 text-center text-3xl lg:pt-20">Sign in</h2>
      </div>

      <form className="max-w-xl text-bluegrey text-left text-sm p-8 flex flex-col space-y-4 md:mx-auto lg:justify-center" onSubmit={handleSignIn}>

        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <span className="text-lg">
              <label htmlFor="email">Email</label> / <label htmlFor="password">password</label>:
            </span>
            <input
              id="email"
              type="email"
              autoComplete="none"
              required
              className="appearance-none rounded-none relative block w-full p-3 border border-bluegrey rounded-t-md focus:outline-bluegrey focus:ring-none focus:border-bluegrey focus:z-10 sm:text-sm chivo"
              placeholder="Email address"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div>
            <input
              id="password"
              type="password"
              autoComplete="none"
              required
              className="appearance-none rounded-none relative block w-full p-3 border border-bluegrey rounded-b-md focus:outline-bluegrey focus:ring-none focus:border-bluegrey focus:z-10 sm:text-sm chivo"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
        </div>
        
        {/* {hasError === true && <div className="text-intensewhite p-2 bg-fuzzywuzzy border border-intensewhite rounded-sm">Invalid email or password. Please try again.</div>} */}
        <div className="flex items-center justify-between text-lg">
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 rounded" />
            <label className="ml-2 block">Remember me</label>
          </div>

          <div>
            <a href="#">Forgot password?</a>
          </div>
        </div>

        <div>
          <Button type="submit">Sign in</Button>
        </div>

        <div className="separator text-lg">
          Or continue with
        </div>

        <div className="flex space-x-2">
          {/* 3rd party provider buttons */}
          <button
            className="secondary group relative w-full flex justify-center py-2 px-4 border border-transparent text-intensewhite text-2xl rounded-md"

            onClick={handleGoogleSignIn}>
            <FontAwesomeIcon icon={faGoogle} />
          </button>

          <button
            className="secondary group relative w-full flex justify-center py-2 px-4 border border-transparent text-intensewhite text-2xl rounded-md"

            onClick={handleGithubSignIn}>
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>

        <div>
          <h2 className="mt-2 text-left text-lg text-intensewhite">
            Don't have an account? <Link href="/signup">Create one</Link>
          </h2>
        </div>
      </form>
    </>
  )
}