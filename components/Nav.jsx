"use client";

import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';



const Nav = () => {

  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(true);
  // grasp this 
  useEffect(()=>{
    const setProviders = async ()=>{
      const response = await getProviders();
      setProviders(response);
    }
  })

  return (
    <nav className="flex-between w-full mb-16 pt-3">

        <Link href="/" className='flex gap-2 flex-center'>
        <Image src="../public/assets/images/logo-text.svg"
        alt = " promptopia logo "
        width = {30}
        height = {30}
        className = "object-contain"
         /> 
            <p className='logo_text'> Promptopia</p>
         </Link>

         
         <div className="sm:flex hidden">
            {
              isUserLoggedIn?(
                <div className='flex gap-3 md:gap-5' > 
                <Link href="/create-prompt"
                className='black_btn'
                >

                Create Prompt

                </Link>
              
                <button type="button" onClick={signOut}
                className='outline_btn'>
                  SignOut
                </button>
      
                <Link href="/profile">
                  <Image 
                  src = "../public/assets/images/user.svg"
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt='profile'/>
                </Link>
                </div>
              ):( 
                <>
                {/* grasp this */}
                {
                  providers && Object.values(providers).map((providers)=>{
                    <button
                    type="button"
                    key={providers.name}
                    onClick={()=>{signIn(provider.id)}}
                    className='black_btn'
                    >
                    Sign In
                    </button>
                  })
                }

                </>
              )
            }

            {/* mobile navigation */}
            <div className="lg:hidden flex realtive">
              {isUserLoggedIn?(
                <div className="flex">
                  <Image 
                  src="../public/assets/images/logo.svg"
                  width = {37}
                  height={37}
                  className='rounded-full'
                  alt='profile'
                  onClick={()=> setToggleDropdown((prev)=> !prev) }/>

                  {toggleDropdown && (
                    <div className="dropdown">
                      <Link
                      href="/profile"
                      className="dropdown_link"
                      onClick={()=>setToggleDropdown(false)}>
                        My Profile
                      </Link>

                      <Link
                      href="/create-prompt"
                      className="dropdown_link"
                      onClick={()=>setToggleDropdown(false)}>
                        Create Prompt
                      </Link>

                      <button type="button"
                      onClick = {()=>{
                        signOut();
                        setToggleDropdown(false);
                      }}
                      className = "mt-5 w-full black_btn">
                      signOut
                      </button>
                    </div>
                  )}
                </div>
              ):(
                <>
                {/* grasp this */}
                {
                  providers && Object.values(providers).map((providers)=>{
                    <button
                    type="button"
                    key={providers.name}
                    onClick={()=>{signIn(provider.id)}}
                    className='black_btn'
                    >
                    Sign In
                    </button>
                  })
                }

                </>
              )}
            </div>

         </div>
    </nav>
  )
}

export default Nav