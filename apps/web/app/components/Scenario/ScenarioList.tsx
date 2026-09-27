import Image from 'next/image'
import Bullet from '@/components/Home/Bullet'
import Backarrow from '@/components/ui/Back_arrow'
import Button from '@/components/ui/Button'

type ScenarioListItem = {
  id: string
  title: string
  description: string
  situation: string
  difficulty: string
}

const scenarios: ScenarioListItem[] = [
  {
    id: 'one-shift',
    title: '“Одна смена”',
    description: 'Несколько сложных ситуаций за один рейс',
    situation: 'Многозадачность',
    difficulty: 'Сложная',
  },
  {
    id: 'neighbor-seats',
    title: '“Соседние кресла”',
    description: 'Два пассажира спорят, каждый требует поддержки. Ситуация выходит из-под контроля.',
    situation: 'Конфликт',
    difficulty: 'Сложная',
  },
  {
    id: 'full-car',
    title: '“Полный вагон”',
    description: 'В вагоне мало места. Конфликт и медицинская ситуация требуют действий.',
    situation: 'Давка',
    difficulty: 'Средняя',
  },
]

export default function ScenarioList() {
  return (
    <div className="mx-auto flex w-[min(346px,calc(100%-32px))] min-w-0 flex-col">
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
                src="/png/scenario/super.png"
                width={314}
                height={178}
                alt=""
                className="absolute top-[-9.24%] left-[0.06%] h-[113.45%] w-[99.93%] max-w-none"
              />
            </div>
            <div className="h-px w-full bg-black" />
            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-[15px] leading-[normal] font-semibold text-black">{scenario.title}</h2>
                  <p className="text-[13px] leading-[normal] font-normal text-[#727272]">{scenario.description}</p>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  <div className="flex flex-col gap-2">
                    <p className="text-[13px] leading-[normal] font-medium whitespace-nowrap text-black">Ситуации:</p>
                    <Bullet>{scenario.situation}</Bullet>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[13px] leading-[normal] font-medium whitespace-nowrap text-black">Сложность:</p>
                    <Bullet>{scenario.difficulty}</Bullet>
                  </div>
                </div>
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