import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import {connectToDB} from '@utils/database'
export const metadata = {
    title: "promptopia",
    description: "A place to discover & share all your gpt prompts."
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
    <body>
    {/*  wrapping up everything in the provider. */}
        <Provider>
        <div className="main">
            <div className="gradient"/>
        </div>

        <main className='app'>
            <Nav/>
            {children}
        </main>
        </Provider>

    </body>

    </html>
   
  
 )
}

export default RootLayout


