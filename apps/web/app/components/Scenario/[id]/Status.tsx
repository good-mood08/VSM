'use client'
import Image from 'next/image'

interface IStatus{
    title: string
    img: string
    fullfilled: number
}

export default function Status({title, img, fullfilled}: IStatus){
    const percentage = Math.min(Math.max((fullfilled / 100) * 100, 0), 100);

    return (
        <div>
            <div>
                <Image 
                    src={img}
                    width={16}
                    height={16}
                    alt='img'
                />
                <span>{title}</span>
            </div>
            <div className='w-full max-w-32.5'>
                <div></div>
            </div>
        </div>
    )
}