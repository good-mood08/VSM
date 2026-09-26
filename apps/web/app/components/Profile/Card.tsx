'use client'

interface ICard{
    title: string
    description: string
    maxCount: number
    recieved: number
}

export default function Card(data: ICard){
    const percentage = data.maxCount > 0 ? Math.min(Math.max((data.recieved / data.maxCount) * 100, 0), 100) : 0;

    return (
        <div className="flex flex-row items-center gap-6 px-5 py-7.5 border-gray-2 border rounded-[20px]">
            <div className="h-15 w-full max-w-15 rounded-[90px] bg-black"></div>
            <div className="flex flex-col w-full">
                <h3 className="text-[15px] ">{data.title}</h3>
                <h4 className="text-[13px] text-gray-1">{data.description}</h4>
                <div className="flex flex-row items-center justify-between">
                    <div className="w-[180px] h-[12px] bg-gray-2 rounded-[90px] flex flex-row overflow-hidden">
                        <div className={`h-full bg-accent-1`} style={{width: `${percentage}%`}}></div>
                    </div>
                    <p className="text-gray-1">
                        <span className="text-accent-1">{data.recieved}</span>/{data.maxCount}
                    </p>
                    
                </div>
            </div>
        </div>
    )
}