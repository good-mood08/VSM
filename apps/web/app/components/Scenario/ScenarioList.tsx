import Image from 'next/image'
import type { ScenarioCard } from '@/api/scenarios/scenario'
import Bullet from '@/components/Home/Bullet'
import Backarrow from '@/components/ui/Back_arrow'
import Button from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'

type ScenarioListProps = {
  scenarios: ScenarioCard[]
}

export default function ScenarioList({ scenarios }: ScenarioListProps) {
  return (
    <div className="mx-auto flex w-content min-w-0 flex-col">
      <header className="relative flex h-[42px] items-center">
        <Backarrow />
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[15px] leading-[normal] font-semibold whitespace-nowrap text-black">
          Сценарии
        </h1>
      </header>

      <div className="mt-8 flex flex-col gap-8">
        {scenarios.map((scenario) => (
          <article
            key={scenario.id}
            className="flex flex-col items-center gap-[18px] rounded-[18px] border border-black bg-white px-4 pt-6 pb-4"
          >
            <div className="relative h-[178px] w-full overflow-hidden">
              <Image
                src={scenario.imageUrl ?? '/png/scenario/super.png'}
                alt=""
                fill
                sizes="346px"
                className="object-cover"
              />
            </div>
            <Divider />
            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-[15px] leading-[normal] font-semibold text-black">{scenario.name}</h2>
                  <p className="text-[13px] leading-[normal] font-normal text-[#727272]">{scenario.description}</p>
                </div>
                {scenario.difficulty ? (
                  <div className="flex flex-col gap-2">
                    <p className="text-[13px] leading-[normal] font-medium whitespace-nowrap text-black">Сложность:</p>
                    <Bullet>{scenario.difficulty}</Bullet>
                  </div>
                ) : null}
              </div>
              <div className="flex items-start gap-2.5">
                <Button variant="filled" href="/scenario/exam" className="min-w-0 flex-1">
                  Экзамен
                </Button>
                <Button variant="outline" href="/scenario/train" className="min-w-0 flex-1">
                  Тренировка
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
