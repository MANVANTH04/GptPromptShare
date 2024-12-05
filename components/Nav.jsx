"use client";

import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';



const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">

        <Link href="/" className='flex gap-2 flex-center'>
        <Image src="/assests/images/logo.svg>"
        alt = " promptopia logo "
        width = {30}
        height = {30}
        className = "object-contain"
         /> 
            <p className='logo_text'> Promptopia</p>
         </Link>
    </nav>
  )
}

export default Nav