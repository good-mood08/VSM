import Image from 'next/image'

interface IImg{
    src: string
    alt: string
}

interface IData{
    img_info: IImg
    text_data: string
}

export default function ScenarioInfo(info: IData){
    return (
        <div className="flex flex-row gap-1.5 items-center">
            <Image 
                src={info.img_info.src}
                width={16}
                height={16}
                alt={info.img_info.alt}
            />
            <span className='text-addition text-[13px]'>{info.text_data}</span>
        </div>
    )
}