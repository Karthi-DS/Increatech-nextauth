import NextAuth from "next-auth";
import CredentailsProvider from "next-auth/providers/credentials"

const handler = NextAuth ({
    session: {
        strategy:'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        CredentailsProvider({
            credentials: {},
            async authorize(credentials:any,req:any){
                const {name,password} = credentials as {name: any,password:string}
                if(name !=="karthee" || password !=="12345678"){
                    return null
                }
                else{
                console.log("valid credentials")
                return {id:"1",name:credentials.name,password:credentials.password}
                }
            }
        })
    ]
})

export {handler as GET, handler as POST}