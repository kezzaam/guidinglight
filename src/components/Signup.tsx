"use client"

import React, { useState, useEffect, useContext } from 'react'
import Button from '@/components/Button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'

// Component for user sign-up functionality.

export default function Signup(): JSX.Element {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  // Handle create account form submission
  const handleCreateAccount = async (e) => {
    e.preventDefault()
    axios.post('/api/users', data)
      .then(() => alert('Account created successfully!'))
      .catch((err) => alert(err))
  }

  // Handle Google sign-up
  const handleGoogleSignUp = () => { }

  // Handle Github sign-up
  const handleGithubSignUp = () => { }


  return (
    <>
      <div>
        <h2 className="mt-6 text-3xl text-center">Create account</h2>
      </div>


      <form className="text-bluegrey text-left text-sm p-8 flex flex-col space-y-4 lg:max-w-[40%] lg:mx-auto" onSubmit={handleCreateAccount}>

        <div>
          <label className="text-lg" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            autoComplete="none"
            required
            className="appearance-none rounded-md relative block w-full p-3 border border-bluegrey focus:outline-[--bluegrey] focus:ring-none focus:border-[--fuzzywuzzy] focus:z-10 sm:text-sm chivo"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        <div>
          <label className="text-lg" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            autoComplete="none"
            required
            className="appearance-none rounded-md relative block w-full p-3 border border-bluegrey focus:outline-[--bluegrey] focus:ring-none focus:border-[--fuzzywuzzy] focus:z-10 sm:text-sm chivo"
            placeholder="Email address"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div>
          <label className="text-lg" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            autoComplete="none"
            required
            className="appearance-none rounded-md relative block w-full p-3 border border-bluegrey focus:outline-[--bluegrey] focus:ring-none focus:border-[--fuzzywuzzy] focus:z-10 sm:text-sm chivo"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        {/* Terms and conditions */}
        <div className="flex items-center">
          <input type="checkbox" className="h-4 w-4 rounded focus:outline-bluegrey" />
          <label className="ml-2 block text-lg">
            I accept the{" "}
            <a href="#">
              Terms & Conditions
            </a>
          </label>
        </div>


        <div>
          {/* Create account button */}
          <Button type="submit">Create account</Button>
        </div>

        <div className="separator text-lg">Or sign up with</div>

        <div className="flex space-x-2">
          {/* 3rd party sign-up buttons */}
          <button
            className="secondary group relative w-full flex justify-center py-2 px-4 border border-transparent text-intensewhite text-2xl rounded-md"
            onClick={handleGoogleSignUp}>
            <FontAwesomeIcon icon={faGoogle} />
          </button>

          <button
            className="secondary group relative w-full flex justify-center py-2 px-4 border border-transparent text-intensewhite text-2xl rounded-md"
            onClick={handleGithubSignUp}>
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>

        <div>
          <h2 className="mt-2 text-left text-lg text-intensewhite">
            Already have an account? <Link href="/signin">Sign in</Link>
          </h2>
        </div>
      </form>
    </>
  )
}
