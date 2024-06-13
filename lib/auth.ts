import GithubProvider from "next-auth/providers/github"
import { env } from "./env"
import { prisma } from "./prisma"
import { AuthOptions, getServerSession } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
      profile(profile){
        console.log(profile.login)
        return{
          id: profile.id.toString(),
          username: profile.login,
          name: profile.login,
          image: profile.avatar_url,
          email: profile.email,
          tag: profile.login
        }
      }
    })
  ],
  callbacks: {
    session( {session, user}) {
      console.log(session.user)
      if (session?.user) return session
      session.user.id = user.id;
      return session;
    }
  },

}

export const getAuthSession = async() => {
  const session = await getServerSession(authOptions);
  return session;
}
