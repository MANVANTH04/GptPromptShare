// setting up google authentication. 

import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'


const handler = NextAuth({
    providers:[GoogleProvider({
        clientId:process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,

    })
],
async session({session}){

},

async signIn({profile}){
    try{
        await connectToDb();
    }
    
  


      
    catch(error){
            console.log(error);
        }
    }
// check weather the user is already exists in the database. 
    // if not then create a new user. 
}
})

// in next.js we can keep both get and post. 

export {handler as GET, handler as POST}

