import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '../../../../../prisma/prisma'

export const options: NextAuthOptions = {

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
            name: 'Credentials',
            credentials: {
                email: { 
                    label: "Email:", 
                    type: "text", 
                    placeholder: "Email" },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Password"
                },
            },
            async authorize(credentials) {
                // retrieve user from db to verify credentials
                // docs: https://next-auth.js.org/configuration/providers/credentials
                await prisma.user.findUnique({ 
                    where: { 
                        email: credentials.email,
                    },
                })

                if (credentials?.email === email && credentials?.password === password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: "/signin", 
    }
}
