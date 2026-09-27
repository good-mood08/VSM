'use client'

import {usePathname} from 'next/navigation';

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
        <div className="fixed bottom-10 left-1/2 z-10 flex w-content -translate-x-1/2 flex-row justify-between rounded-[90px] bg-white">
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