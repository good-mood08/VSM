'use client'

import Link from 'next/link';
import {usePathname} from 'next/navigation';

import {HomeLink, ScenarioLink, RatingLink, ProfileLink} from './Links'

export default function NavPanel(){
    const currentPage = usePathname();

    return (
        <div className='flex flex-row '>
            <Link href='/'><HomeLink current={currentPage === '/'}/>Главная</Link>
            <Link href='/scenario'><ScenarioLink current={currentPage === '/scenario'}/>Сценарии</Link>
            <Link href='/rating'><RatingLink current={currentPage === '/rating'}/>Рейтинг</Link>
            <Link href='/profile'><ProfileLink current={currentPage === '/profile'}/>Профиль</Link>
        </div>
    )
}