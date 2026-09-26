'use client'

import Backarrow from "../../components/Back_arrow";
import NavPanel from "../../components/Links/NavPanel";
import AchievmentTotal from "../../components/Profile/Achievments/AchievmentTotal";
import ScenarioTotal from "../../components/Profile/Achievments/ScenarioTotal";
import Card from '../../components/Profile/Card'

import {useState} from 'react'

interface IScenario{
    title: string
    description: string
    maxCount: number
    recieved: number
}

const scenarios: Array<IScenario> = [
    {
        title: "Быстрая реакция",
        description: 'Завершите сценарий быстрее установленного времени',
        maxCount: 3,
        recieved: 2
    },
    {
        title: 'Точный выбор',
        description: 'Получите максимальную оценку за сценарий',
        maxCount: 5,
        recieved: 3
    },
    {
        title: 'Без ошибок',
        description: 'Пройдите сценарий без критических ошибок',
        maxCount: 6,
        recieved: 0
    },
    {
        title: 'Всегда готов',
        description: 'Пройдите сценарии всех доступных типов',
        maxCount: 6,
        recieved: 2
    },
    {
        title: 'Время на счету',
        description: 'Завершите 10 сценариев за установленное время',
        maxCount: 10,
        recieved: 7
    },
    {
        title: 'Молниеносное решение',
        description: 'Примите все решения без превышения таймера',
        maxCount: 10,
        recieved: 6
    }
]

export default function Achievments(){
    const [totalScenario, setTotalScenario] = useState<number>(12);
    const [totalAchievments, setTotalAvievments] = useState<number>(8);
    const [recievedAchievments, setRecievedAchievments] = useState<number>(3);

    return (
        <div className="pt-15.5 flex flex-col gap-8">
            <header className="flex items-center flex-row px-7.5 gap-21">
                <Backarrow />
                <h2 className="font-bold">Достижения</h2>
            </header>
            <main className="px-7.5 pb-30">
                <div className="flex flex-row justify-between gap-2">
                    <ScenarioTotal totalScenario={totalScenario}/>
                    <AchievmentTotal totalAchievments={totalAchievments} recievedAchievments={recievedAchievments}/>
                </div>
                <div className="pt-6 flex flex-col gap-4">
                    {scenarios.map((scena: IScenario, index: number) => (
                        <Card 
                            key={index}
                            title={scena.title}
                            description={scena.description}
                            maxCount={scena.maxCount}
                            recieved={scena.recieved}
                        />
                    ))}
                </div>
            </main>
            <footer>
                <NavPanel />
            </footer>
        </div>
    )
}