import Image from 'next/image'
import Backarrow from '@/components/ui/Back_arrow'

type TrainingSession = {
  title: string
  description: string
  score: string
  iconSrc: string
}

type TrainingDay = {
  date: string
  sessions: TrainingSession[]
}

const trainingDays: TrainingDay[] = [
  {
    date: 'Воскресенье, 4 сентября',
    sessions: [
      {
        title: 'Медицинский инцидент',
        description: 'Первая помощь пассажиру',
        score: '5.00',
        iconSrc: '/svg/history/hospital.svg',
      },
    ],
  },
  {
    date: 'Понедельник, 10 августа',
    sessions: [
      {
        title: 'Конфликт с пассажиром',
        description: 'Работа с конфликтной ситуацией',
        score: '5.00',
        iconSrc: '/svg/history/messages.svg',
      },
      {
        title: 'Нештатная ситуация',
        description: 'Действия при угрозе безопасности...',
        score: '5.00',
        iconSrc: '/svg/history/danger.svg',
      },
    ],
  },
  {
    date: 'Четверг, 16 июля',
    sessions: [
      {
        title: 'Медицинский инцидент',
        description: 'Первая помощь пассажиру',
        score: '3.50',
        iconSrc: '/svg/history/hospital.svg',
      },
      {
        title: 'Действия при эвакуации',
        description: 'Организация безопасной эвакуации...',
        score: '4.50',
        iconSrc: '/svg/history/people.svg',
      },
      {
        title: 'Нарушение порядка',
        description: 'Агрессивное поведение пассажира',
        score: '4.00',
        iconSrc: '/svg/history/shield.svg',
      },
    ],
  },
]

function SessionScore({ score }: { score: string }) {
  return (
    <span className="flex shrink-0 items-center gap-1.5">
      <Image src="/svg/shared/star.svg" width={20} height={20} alt="" />
      <span className="h-4 w-[34px] text-[15px] leading-[normal] font-semibold text-black">{score}</span>
    </span>
  )
}

export default function TrainingHistory() {
  return (
    <div className="mx-auto flex w-[min(346px,calc(100%-32px))] min-w-0 flex-col">
      <header className="relative flex h-[42px] items-center">
        <Backarrow />
        <h1 className="absolute left-1/2 w-[140px] -translate-x-1/2 text-center text-[15px] leading-[18px] font-semibold text-black">
          История обучения
        </h1>
      </header>

      <div className="mt-8 flex flex-col gap-8">
        {trainingDays.map((day) => (
          <section key={day.date} className="flex flex-col gap-4">
            <h2 className="text-[15px] leading-[normal] font-medium text-black">{day.date}</h2>
            <div className="flex flex-col gap-2">
              {day.sessions.map((session) => (
                <article
                  key={`${day.date}-${session.title}`}
                  className="flex items-center justify-between rounded-[10px] bg-[#F5F5F5] px-3.5 py-4"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <Image src={session.iconSrc} width={22} height={22} alt="" className="shrink-0" />
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <p className="text-[13px] leading-[normal] font-semibold text-black">{session.title}</p>
                      <p className="text-[10px] leading-[normal] font-medium text-[#727272]">{session.description}</p>
                    </div>
                  </div>
                  <SessionScore score={session.score} />
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}