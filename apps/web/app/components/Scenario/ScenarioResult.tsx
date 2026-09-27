import Image from 'next/image'
import Backarrow from '@/components/ui/Back_arrow'

type ScenarioMove = {
  scene: string
  number: string
  text: string
  loyalty: string
  safety: string
}

const moves: ScenarioMove[] = [
  {
    scene: '«Но поезд ещё стоит»',
    number: '1.',
    text: 'Признать проблему, назвать правило, вызовать ответственного.',
    loyalty: 'Лояльность +2',
    safety: 'Безопасность -4',
  },
  {
    scene: '«Очередь заговорила»',
    number: '3.',
    text: 'Пропустить под давлением очереди.',
    loyalty: 'Лояльность +1',
    safety: 'Безопасность -3',
  },
  {
    scene: '«Мне нечем дышать»',
    number: '3.',
    text: 'Сменить приоритет: усадить, вода, начальник, спросить медиков.',
    loyalty: 'Лояльность +2',
    safety: 'Безопасность +3',
  },
  {
    scene: '«Два дела»',
    number: '2.',
    text: 'Тащить оба процесса самому.',
    loyalty: 'Лояльность +0',
    safety: 'Безопасность +2',
  },
]

function scoreClassName(delta: string) {
  return delta.includes('-') ? 'text-[#EE3524]' : 'text-[#22C55E]'
}

export default function ScenarioResult() {
  return (
    <div className="mx-auto flex w-[min(346px,calc(100%-32px))] min-w-0 flex-col">
      <header className="relative flex h-[42px] items-center">
        <Backarrow />
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[15px] leading-[normal] font-semibold whitespace-nowrap text-black">
          Результат
        </h1>
      </header>

      <div className="mt-8 flex flex-col gap-8">
        <section className="relative h-[233px] overflow-hidden rounded-[30px] bg-[#EE3524]">
          <p className="absolute top-[28px] left-[71px] -translate-x-1/2 text-center font-rail text-[60px] leading-[50px] font-normal tracking-[-2.4px] whitespace-nowrap text-white">
            86
          </p>
          <div className="absolute top-[-33px] left-[76px] flex h-[470.099px] w-[397.731px] items-center justify-center">
            <div className="-rotate-[17deg]">
              <div className="relative h-[402px] w-[293px]">
                <Image src="/png/scenario/result-hero.png" alt="" fill sizes="293px" className="object-cover" />
              </div>
            </div>
          </div>
          <div className="absolute top-[95px] left-[34px] flex w-[107px] flex-col gap-2.5 text-white">
            <p className="text-[15px] leading-[normal] font-semibold">Сильный результат</p>
            <p className="text-[13px] leading-[normal] font-medium">
              Вы справились с конфликтом
              <br />
              и сохранили контроль.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-[20px] leading-[normal] font-semibold text-black">Основные показатели:</h2>
          <div className="flex flex-col gap-3">
            <article className="flex flex-col gap-4 rounded-[16px] border border-[#CBCBCB] px-[18px] py-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Image src="/svg/scenario/heart.svg" width={16} height={16} alt="" />
                  <span className="text-[13px] leading-[1.2] font-medium tracking-[-0.13px] text-black">Лояльность</span>
                </span>
                <span className="text-[13px] leading-[1.2] font-medium tracking-[-0.13px] text-black">7/10</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-[90px] bg-[#FCE3E0]">
                <div className="h-2.5 w-[65%] rounded-[90px] bg-[#EE3524]" />
              </div>
              <p className="text-[13px] leading-[normal] font-normal text-black">
                Вы сохранили уважительную коммуникацию, выслушивали пассажиров и решали конфликт без напряжения.
              </p>
            </article>
            <article className="flex flex-col gap-3.5 rounded-[16px] border border-[#CBCBCB] px-[18px] py-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Image src="/svg/scenario/shield.svg" width={16} height={16} alt="" />
                  <span className="text-[13px] leading-[1.2] font-medium tracking-[-0.13px] text-black">Безопасность</span>
                </span>
                <span className="text-[13px] leading-[1.2] font-medium tracking-[-0.13px] text-black">10/10</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-[90px] bg-[#FCE3E0]">
                <div className="h-2.5 w-full rounded-[90px] bg-[#EE3524]" />
              </div>
              <p className="text-[13px] leading-[normal] font-normal text-black">
                Вы действовали последовательно и соблюдали регламент. В сложных ситуациях вы подключали ответственных
                сотрудников.
              </p>
            </article>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-[20px] leading-[normal] font-semibold text-black">Ваши ходы:</h2>
          {moves.map((move) => (
            <article key={move.scene} className="flex flex-col gap-4">
              <h3 className="text-[15px] leading-[normal] font-semibold text-black">{move.scene}</h3>
              <div className="flex items-center justify-between rounded-[20px] border border-[#CBCBCB] px-4 py-3.5">
                <span className="shrink-0 text-[15px] leading-[normal] font-semibold whitespace-nowrap text-black">
                  {move.number}
                </span>
                <span className="flex min-w-0 max-w-[272px] flex-1 flex-col gap-3">
                  <span className="text-[13px] leading-[normal] font-semibold text-black">{move.text}</span>
                  <span className="flex gap-5 text-[10px] leading-[normal] font-medium whitespace-nowrap">
                    <span className={scoreClassName(move.loyalty)}>{move.loyalty}</span>
                    <span className={scoreClassName(move.safety)}>{move.safety}</span>
                  </span>
                </span>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
