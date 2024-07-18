import NextAuth, { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

const nextAuthOption: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',

      credentials: {
        email: {label : 'email', type: 'text'},
        password: {label : 'password', type: 'password'}
    },

    async authorize(credentials, req) {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email:credentials?.email,
          password: credentials?.password
        })
      })

      const user = await response.json()
      if(user && response.ok){
        return user
      }
        return null
    )
    }
    )
  ]
}


const handler = NextAuth()

export { handler as GET, handler as POST }