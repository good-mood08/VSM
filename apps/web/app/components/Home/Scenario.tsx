import Image from 'next/image'
import ScenarioInfo from './ScenarioInfo';

interface IScenario{
    title: string
    description: string
    date: string
    role: string
}

export default function Scenario(data: IScenario){
    return (
        <div className="border border-main flex flex-col gap-4.25 max-w-71.5 w-full py-6 px-4 rounded-[18px] shrink-0">
            <Image
                src={'/png/help.png'}
                width={252}
                height={180}
                alt='help'
            />
            <hr className='h-1'/>
            <section>
                <h3 className='text-main font-semibold'>{data.title}</h3>
                <p className='text-addition text-[13px]'>{data.description}</p>
            </section>
            
            <section>
                <ScenarioInfo 
                    img_info={{
                        src: "/svg/clock.svg",
                        alt: "clock"
                    }}
                    text_data={data.date}
                />
                <ScenarioInfo 
                    img_info={{
                        src: "/svg/user.svg",
                        alt: "user"
                    }}
                    text_data={data.role}
                />
            </section>
            
        </div>
    )
}