import NextAuth from "next-auth";
import githubProvider from 'next-auth/providers/github';

const authOptions = {
    providers:[
        githubProvider({
            clientId:"Iv23liusWMiJTIbpU8DT",
            clientSecret:"fd0e7367538cd0da4c3013ebd37ef3aac80a8592"

        })
    ],
    callbacks: {
        async session({session, token, user}){
            session.user.username = session?.user?.name.split(" ").join("").toLocaleLowerCase();

            session.user.uid = token.sub
            return session
        }
    },
    secret:"default_secret_key",

}

const handler = NextAuth(authOptions);

export {handler as GET,handler as POST}