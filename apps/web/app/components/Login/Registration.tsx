'use client'

import Image from 'next/image';

interface ILogged{
    onChange: () => void
}

export default function RegPage({onChange}: ILogged){
    return (
        <div>
            <h2>Создайте аккаунт и начните обучение</h2>
            <form>
                <label>Логин</label>
                <input type="text" /> <br />
                <label>Пароль</label>
                <input type="password" /> <br />
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
            <button onClick={onChange} className=''>Уже есть аккаунт?</button>
        </div>
    )
}