'use client'

import Image from 'next/image';

interface IScenario{
    totalScenario: number
}

export default function ScenarioTotal({totalScenario}: IScenario){
    return (
        <div className='rounded-[10px] border-2 border-solid border-gray-2 max-w-[170px] w-full py-4 px-2.5 flex flex-row gap-2.5'>
            <div>
                <Image 
                    src={'/svg/flash.svg'}
                    width={20}
                    height={20}
                    alt='flash'
                />
            </div>
            <div className='flex flex-col'>
                <span className='text-bold'>{totalScenario}</span>
                <span className='max-w-[117px] text-gray-2'>Сценариев пройдено</span>
            </div>

        </div>
    )
}