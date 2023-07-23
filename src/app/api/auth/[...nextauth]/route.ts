import NextAuth, { type NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '../../../../../prisma/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import bcrypt from 'bcrypt'

// https://next-auth.js.org/ docs
export const authOptions: NextAuthOptions = {
  // prisma adapter
  adapter: PrismaAdapter(prisma),
  // providers - google, github, email, etc
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // console.cloud.google.com
      // project - guidinglight-client
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email:", type: "text", placeholder: "Email" },
        password: {
          label: "Password:", type: "password", placeholder: "Password"
        },
      },

      async authorize(credentials: any) {
        // console.log("incoming credentials", credentials)
        // check if email and password are valid
        if (!credentials.email || !credentials.password) {
          throw new Error('Please enter your email and password')
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })
        // console.log("user from prisma: ", user)

        if (!user) {
          throw new Error('No user found')
        }

        const passwordsMatch = await bcrypt.compare(credentials.password, user.password)
        // console.log("passwordsMatch", passwordsMatch)
        if (!passwordsMatch) {
          throw new Error('Incorrect password')
                }

        return user
      }
    })
  ],

  // track user session with json web tokens
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",

  pages: {
    signIn: '/signin',
    newUser: '/signup/welcome' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }