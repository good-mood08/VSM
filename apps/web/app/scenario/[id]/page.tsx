'use client'

import NavPanel from '../../components/Links/NavPanel';
import Backarrow from '../../components/Back_arrow';
import NotFound from 'next/dist/client/components/builtin/not-found';

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createReactServerPrerenderResultFromRender } from 'next/dist/server/app-render/app-render-prerender-utils';


const variants = [
    {
        title: 'Признать проблему, назвать правило, вызвать ответственного.'
    },
    {
        title: 'Пропустить, чтобы не задерживать посадку.'
    },
    {
        title: 'Сухо: "Не положено, отойдите".'
    }
]

export default function Testpage(){
    const id = useParams()!.id as string;
    const [seconds, setSeconds] = useState<number>(60);

    useEffect(() => {
        setSeconds(60);

        const interval = setInterval(() => {
            setSeconds((prev) => {
                if(prev <= 1){
                    clearInterval(interval);
                    alert("Time is out")
                    return 0;
                }
                return prev - 1;
            })
        }, 1000);

        return () => clearInterval(interval)
    }, [id])

    return (
        <div>
            <main className='flex flex-col pt-15.5 px-7.5 gap-8'>
                <header className='flex flex-row items-center gap-24'>
                    <Backarrow />
                    <h1>Экзамен</h1>
                </header>
                <div>
                    <h2>Акт 1. Посадка</h2>
                    <hr />
                    <div className='flex flex-col gap-6'>
                        <h3>"Но поезд еще стоит"</h3>
                        <p>"До отправления 60 секунд. Пассажир показывает недействительный билет: «Пустите, разберёмся внутри». За ним очередь."</p>
                        {variants.map((variant, index: number) => (
                            <button className='flex flex-row items-start hover:bg-accent-1 active:bg-accent-1'>
                                <span>{index + 1}.</span>
                                <span>{variant.title}</span>
                            </button>
                        ))}
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row gap-4'>
                            <Image 
                                src={'/svg/clock.svg'}
                                width={16}
                                height={16}
                                alt='clock'
                            />
                            <span>Оставшееся время: </span>
                        </div>
                        <span>{seconds}</span>
                    </div>
                    <div className='flex flex-row'>
                        
                    </div>
                </div>
            </main>
            <footer>
                <NavPanel />
            </footer>
        </div>
    )
}