import Image from 'next/image'

interface IToppy{
    name: string
    points: number
    img: string
    position?: number
}

export default function Toppy({name, points, img, position}: IToppy){
    return (
        <div className="flex flex-row justify-between font-semibold border border-gray-4 py-3 px-4 rounded-[20px]">
            <div className="flex flex-row items-center">
                <span>{position}</span>
                <Image 
                    src={img}
                    width={36}
                    height={36}
                    alt='img-profile'
                />
                <span>{name}</span>
            </div>
            <div className='flex flex-row items-center gap-3 justify-between w-15'>
                <Image 
                    src={'/svg/star.svg'}
                    width={20}
                    height={20}
                    alt="star"
                />
                <span>{points}</span>
            </div>
        </div>
    )
}