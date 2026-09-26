'use client'

import Link from 'next/link';
import {usePathname} from 'next/navigation';

import {HomeLink, ScenarioLink, RatingLink, ProfileLink} from './Links'
import NavigationLink from './Link';

interface ILink{
    href: string
    title: string
    index?: number
    currentPage?: string
}

const links: Array<ILink> = [
    {
        href: '/',
        title: 'Главная'
    },
    {
        href: '/scenario',
        title: 'Сценарии'
    },
    {
        href: '/rating',
        title: 'Рейтинг'
    },
    {
        href: '/profile',
        title: 'Профиль'
    }
]



export default function NavPanel(){
    const currentPage = usePathname()

    return (
        <div className='flex flex-row max-w-86.5 w-full mx-7 fixed justify-between bottom-10 bg-white rounded-[90px]'>
            {links.map((link, index) => (
                <NavigationLink 
                    href={link.href}
                    title={link.title}
                    index={index}
                    currentPage={currentPage}
                    key={index}
                />
            ))}
        </div>
    )
}

export type {ILink}