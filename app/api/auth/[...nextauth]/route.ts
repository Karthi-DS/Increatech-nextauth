import NextAuth,{NextAuthOptions} from "next-auth";
import CredentailsProvider from "next-auth/providers/credentials"

export const authOptions:NextAuthOptions = {
    session: {
        strategy:'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        CredentailsProvider({
            credentials: {},
            authorize(credentials:any,req:any){
                const {name,password} = credentials as {name: any,password:string}
                if(name !=="karthee" || password !=="12345678"){
                    throw new Error("Invalid Credentials")
                }
                else{
                // console.log(credentials)
                return {id:"1",name:name}
                }
            }
        })
    ],
    callbacks: {
        async signIn() {
            return true;
        },
        async redirect({ url, baseUrl }) {
            // Redirect to the sign-in page after successful login
            return '/task_manager/';
        },
    },
}

const handler = NextAuth (authOptions)

export {handler as GET, handler as POST}