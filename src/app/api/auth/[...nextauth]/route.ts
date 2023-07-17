import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '../../../../../prisma/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import bcrypt from 'bcryptjs'

const handler = NextAuth(
    {
        adapter: PrismaAdapter(prisma),
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
                    email: {
                        label: "Email:",
                        type: "text",
                        // placeholder: "Email" 
                    },
                    password: {
                        label: "Password:",
                        type: "password",
                        // placeholder: "Password"
                    },
                },
                async authorize(credentials: any) {
                    // retrieve user from db to verify credentials
                    // docs: https://next-auth.js.org/configuration/providers/credentials
                    // check for existing user
                    if (!credentials.email || !credentials.password) {
                        throw new Error("Please enter email and password")
                    }
                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email
                        }
                    })
    
                    // if user not found
                    if (!user || !user?.hashedPassword) {
                        throw new Error("No user found")
                    }
    
                    // check if password matches
                    const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)
                    if (!passwordMatch) {
                        throw new Error("Incorrect password")
                    }
                    // if user found and password matches
                    // Create a session for the authenticated user
                    const session = {
                        user: {
                            id: user.id,
                            email: user.email,
                            // Include any other relevant user data
                        },
                    }
    
                    return session
    
                },
            })
        ],
        secret: process.env.NEXTAUTH_SECRET,
        session: {
            strategy: "database",
        },
        // debug: process.env.NODE_ENV === "development",
        pages: {
            signIn: "/signin",
        },
    
    }
)

export { handler as GET, handler as POST }