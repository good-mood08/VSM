'use client'
import axios from 'axios';
import Image from 'next/image'
import React, {useState} from 'react'

interface ILogged{
    onChange: () => void
}

export default function LoginPage({onChange}: ILogged){
    const [login, setLoggin] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    async function pushData(ev: React.SubmitEvent){
        ev.preventDefault()

        const response = await axios.post('/api/auth/login', {
            login: login,
            password: password
        })

        if(response.data.exists){
            console.log('Exists')
        } else {
            console.log('Not exists')
        }
    }

    return (
        <div>
            <h2>С возвращением!</h2>
            <form onSubmit={(ev) => pushData(ev)}>
                <label>Логин</label>
                <input type="text" value={login} onChange={ev => setLoggin(ev.target.value)}/> <br />
                <label>Пароль</label>
                <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} /><br />
            </form>
            <button className='flex flex-row justify-between w-full max-w-[334px]'>
                <Image 
                    src={'/svg/rzd-logo.svg'}
                    width={44}
                    height={20}
                    alt={'logo'}
                />
                <span>Продолжить с РЖД</span>
            </button>
            <button onClick={onChange} className=''>Зарегистрироваться?</button>
        </div>
    )
}