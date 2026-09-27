'use client'

import Image from 'next/image';

interface ITop{
    name: string
    points: number
    img: string
    position?: number
}

export default function Top({top}: {top: Array<ITop>}){
    return (
        <div className="flex flex-col font-semibold">
            <div className="self-center">
                <div className='flex flex-col items-center'>
                    <div className='pb-2'>
                        <Image 
                            src={'/svg/crown.svg'}
                            width={30}
                            height={30}
                            alt='crown'
                        />
                    </div>
                    <div className='relative'>
                        <Image 
                            src={top[0]!.img}
                            width={108}
                            height={108}
                            alt='1st'
                            className={`border-2 border-accent-2 rounded-full object-cover`}
                        />
                        <div className='bg-accent-2 rounded-full self-center w-7 h-7 z-1 text-white absolute bottom-0 left-10 flex items-center justify-center'>
                            <p>1</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-semibold'>{top[0]!.name}</h3>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <Image 
                            src={'/svg/star.svg'}
                            height={20}
                            width={20}
                            alt='star'
                        />
                        <span className='text-semibold'>{top[0]!.points}</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between -translate-y-20">
                <div className="self-start">
                    <div className='relative flex flex-col items-center'>
                        <Image 
                            src={top[1]!.img}
                            width={88}
                            height={88}
                            alt='2nd'
                            className={`border-2 border-gray-2 rounded-full object-cover`}
                        />
                        <div className='bg-gray-2 rounded-full self-center w-7 h-7 z-1 text-white absolute bottom-12 left-8 flex items-center justify-center'>
                            <p>2</p>
                        </div>
                        <div>
                            <h3>{top[1]!.name}</h3>
                        </div>
                        <div className='flex flex-row gap-1'>
                        <Image 
                            src={'/svg/star.svg'}
                            height={20}
                            width={20}
                            alt='star'
                        />
                        <span className='text-semibold'>{top[1]!.points}</span>
                    </div>
                    </div>
                </div>
                <div className="self-end">
                    <div className='relative flex flex-col items-center'>
                        <Image 
                            src={top[2]!.img}
                            width={88}
                            height={88}
                            alt='1st'
                            className={`border-2 border-accent-3 rounded-full object-cover`}
                        />
                        <div className='bg-accent-3 rounded-full self-center w-7 h-7 z-1 text-white absolute bottom-12 left-8 flex items-center justify-center'>
                            <p>3</p>
                        </div>
                        <div>
                            <h3>{top[2]!.name}</h3>
                        </div>
                        <div className='flex flex-row gap-1'>
                        <Image 
                            src={'/svg/star.svg'}
                            height={20}
                            width={20}
                            alt='star'
                        />
                        <span className='text-semibold'>{top[2]!.points}</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}