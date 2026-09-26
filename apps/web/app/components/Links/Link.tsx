'use client'

import Link from "next/link";
import type {ILink} from '../Links/NavPanel'

import {HomeLink, ScenarioLink, RatingLink, ProfileLink} from '../Links/Links'


export default function NavigationLink({href, title, index, currentPage}: ILink){
    console.log(currentPage)
    return (
        <Link href={href} className={`flex flex-col items-center py-1.5 px-4 m-1 rounded-[90px] ${currentPage === href ? 'bg-gray-3' : ''}`}>
            {index == 0 ? (
                <HomeLink current={currentPage === '/'}/>
            ) : index == 1 ? (
                <ScenarioLink current={currentPage === '/scenario'}/>
            ) : index == 2 ? (
                <RatingLink current={currentPage === '/rating'}/>
            ) : (
                <ProfileLink current={currentPage === '/profile'}/>
            )}
            <span className={`${currentPage === href ? 'text-accent' : 'text-main'} text-[10px]`}>{title}</span>
        </Link>
    )
}