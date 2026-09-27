import Backarrow from "../components/Back_arrow";
import NavPanel from "../components/Links/NavPanel";
import Top from "../components/Rating/Top";

interface IToppy{
    name: string
    points: number
    img: string
}

const Top1: Array<IToppy> = [
        {
        name: 'Артур',
        points: 5.00,
        img: '/png/Artur.png'
    },
    {
        name: 'Александр',
        points: 4.96,
        img: '/png/Alex.png'
    },
    {
        name: 'Мария',
        points: 4.85,
        img: '/png/Maria.png'
    }
]

const Toppy: Array<IToppy> = [
    {
        name: 'Екатерина',
        points: 4.82,
        img: '/png/Kate.png'
    },
    {
        name: 'Олег',
        points: 4.8,
        img: '/png/Kate.png'
    },
    {
        name: 'Дмитрий',
        points: 4.74,
        img: '/png/Dmitriy.png'
    },
    {
        name: 'Арина',
        points: 4.64,
        img: '/png/Arina.png'
    },
    {
        name: 'Ирина',
        points: 4.4,
        img: '/png/Irina.png'
    }
]

export default function Rating(){
    return (
        <div className="pt-8">
            <div className="px-7.5">
                <header className="flex flex-row items-center gap-25">
                    <Backarrow />
                    <h2 className="font-semibold text-15px ">Рейтинг</h2>
                </header>
                <main>
                    <div>
                        {Top1.map((top: IToppy, index: number) => (
                            <Top 
                                name={top.name}
                                points={top.points}
                                img={top.img}
                                position={index}
                            />
                        ))}
                        {/* {Toppy.map((toppy: IToppy, index: number) => (
                            <Toppy />
                        ))} */}
                    </div>
                    
                </main>
            </div>
            <NavPanel />
        </div>
    )
}