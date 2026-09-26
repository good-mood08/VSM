'use client'

import { useState } from "react";
import Image from 'next/image'

import LoginPage from '../components/Login/Login'
import RegPage from '../components/Login/Registration'

export default function Login(){
    const [isLogged, setIsLogged] = useState<boolean>(true);

    function handleChange(){
        setIsLogged(!isLogged)
    }

    return (
        <section className="pt-35 flex flex-col items-center">
            <Image 
                src={'/svg/rzd-logo.svg'}
                width={90}
                height={40}
                alt="logo-rzd"
            />
            {isLogged ? <LoginPage onChange={handleChange}/> : <RegPage onChange={handleChange} />}
        </section>
    )
}