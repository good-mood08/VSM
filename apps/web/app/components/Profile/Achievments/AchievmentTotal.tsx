'use client'

import Image from 'next/image';

interface IAchievment{
    totalAchievments: number
    recievedAchievments: number
}

export default function AchievmentTotal({totalAchievments, recievedAchievments}: IAchievment){
    return (
        <div className='rounded-[10px] border-2 border-solid border-gray-2 max-w-[170px] w-full py-4 px-2.5 flex flex-row gap-2.5'>
            <div>
                <Image 
                    src={'/svg/medal.svg'}
                    width={20}
                    height={20}
                    alt='medal'
                />
            </div>
            <div className='flex flex-col'>
                <span className='text-bold'>{recievedAchievments}/{totalAchievments}</span>
                <span className='max-w-[117px] text-gray-2'>Достижений получено</span>
            </div>
        </div>
    )
}