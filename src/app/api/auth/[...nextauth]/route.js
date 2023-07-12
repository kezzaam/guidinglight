import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // console.cloud.google.com
            // project - guidinglight-client
        }),
    ],
    async session({ session }) {

    },

    async signIn({ profile }) {
        try {
            // serverless Lambda function only gets called when required
            await connectToDatabase()

            // check if a user already exists
            const user = await User.findOne({ email: profile.email })

            // if not, create new user and save to database

            return true
            
        } catch (err) {
            console.log(err)
            return false
        }

    }
})

export { handler as GET, handler as POST }