'use client'

import Link from "next/link";
import type {ILink} from '@/components/Links/NavPanel'

import {HomeLink, ScenarioLink, RatingLink, ProfileLink} from '@/components/Links/Links'


function isNavItemActive(href: string, pathname: string | undefined) {
    if (!pathname) return false
    if (href === '/' && (pathname === '/' || pathname.startsWith('/notifications'))) return true
    if (href === '/scenario' && pathname.startsWith('/scenario')) return true
    if (
      href === '/profile' &&
      (pathname === '/profile' || pathname.startsWith('/profile/') || pathname.startsWith('/settings'))
    ) {
      return true
    }
    return pathname === href
}

export default function NavigationLink({href, title, index, currentPage}: ILink){
    const isActive = isNavItemActive(href, currentPage)

    return (
        <Link href={href} className={`flex min-w-0 flex-1 flex-col items-center rounded-[90px] px-1.5 py-1.5 ${isActive ? 'bg-gray-3' : ''}`}>
            {index == 0 ? (
                <HomeLink current={isActive}/>
            ) : index == 1 ? (
                <ScenarioLink current={isActive}/>
            ) : index == 2 ? (
                <RatingLink current={isActive}/>
            ) : (
                <ProfileLink current={isActive}/>
            )}
            <span className={`${isActive ? 'text-accent' : 'text-main'} text-center text-[10px] whitespace-nowrap`}>{title}</span>
        </Link>
    )
}