import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "credentials",
            authorize: async (credentials) => {
                const user = { email: process.env.NEXT_PUBLIC_ADMIN_EMAIL, password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD };
                if (credentials?.email === user.email && credentials?.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.user = user;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (token) {
                session.user = token;
            }
            return session;
        },
    },
});
