import Image from 'next/image'
import Backarrow from '@/components/ui/Back_arrow'

type Achievement = {
  title: string
  description: string
  iconSrc: string
}

const achievements: Achievement[] = [
  {
    title: 'Здоровье важнее графика',
    description: 'Установите приоритеты при медицинской ситуации во время посадки.',
    iconSrc: '/png/achievements/health.png',
  },
  {
    title: 'Не кормил провокацию',
    description: 'Сохраняйте спокойствие и не поддавайтесь провокациям.',
    iconSrc: '/png/achievements/provocation.png',
  },
  {
    title: 'Лекарство не выдавал',
    description: 'Не давайте личные лекарства пассажиру в сложной ситуации.',
    iconSrc: '/png/achievements/medicine.png',
  },
  {
    title: 'Удержал два фокуса',
    description: 'Контролируйте две ситуации одновременно.',
    iconSrc: '/png/achievements/focus.png',
  },
  {
    title: 'Не раздал кресла',
    description: 'Разрешите спор пассажиров, не принимая сторону одного из них.',
    iconSrc: '/png/achievements/seats.png',
  },
  {
    title: 'Сервис не равен таблетке',
    description: 'Помогите пассажиру, не заменяя медпомощь лекарствами.',
    iconSrc: '/png/achievements/service.png',
  },
  {
    title: 'Не кормил камеру',
    description: 'Контролируйте ситуацию, несмотря на съёмку и внимание.',
    iconSrc: '/png/achievements/camera.png',
  },
  {
    title: 'Двух не бросил',
    description: 'Сосредоточьтесь на двух пассажирах, которым нужна помощь.',
    iconSrc: '/png/achievements/two.png',
  },
  {
    title: 'Проход важнее спора',
    description: 'Восстановите свободный проход во время напряжённой ситуации.',
    iconSrc: '/png/achievements/aisle.png',
  },
  {
    title: 'Чужую таблетку не передал',
    description: 'Не допускайте передачи пассажиру чужого лекарства.',
    iconSrc: '/png/achievements/pill.png',
  },
  {
    title: 'Тихий голос в давке',
    description: 'Сохраняйте спокойствие в вагоне.',
    iconSrc: '/png/achievements/quiet.png',
  },
  {
    title: 'Двух назвал по делу',
    description: 'Передайте начальнику поезда информацию о двух ситуациях.',
    iconSrc: '/png/achievements/report.png',
  },
  {
    title: 'Не пустил проблему.',
    description: 'Не позволяйте проблеме перерасти в конфликт.',
    iconSrc: '/png/achievements/conflict.png',
  },
  {
    title: 'Не стал героем с таблеткой',
    description: 'Не позволяйте проблеме перерасти в конфликт.',
    iconSrc: '/png/achievements/hero.png',
  },
  {
    title: 'Чужой стакан не пустил',
    description: 'Не допускайте вмешательства пассажира.',
    iconSrc: '/png/achievements/glass.png',
  },
  {
    title: 'Замедлился вовремя',
    description: 'Переключитесь с спешки на спокойное принятие решений.',
    iconSrc: '/png/achievements/pace.png',
  },
]

export default function Achievements() {
  return (
    <div className="mx-auto flex w-[min(346px,calc(100%-32px))] min-w-0 flex-col">
      <header className="relative flex h-[42px] items-center">
        <Backarrow />
        <h1 className="absolute left-1/2 w-[96px] -translate-x-1/2 text-center text-[15px] leading-[18px] font-semibold text-black">
          Достижения
        </h1>
      </header>

      <div className="mt-8 flex flex-col gap-6">
        <div className="flex gap-2">
          <div className="flex flex-1 items-start justify-center gap-2.5 rounded-[10px] border border-[#EAEAEA] px-2.5 py-4">
            <Image src="/svg/achievements/flash.svg" width={20} height={20} alt="" className="shrink-0" />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <p className="text-[15px] leading-[normal] font-semibold text-black">12</p>
              <p className="text-[13px] leading-[normal] font-medium text-[#727272]">Сценариев пройдено</p>
            </div>
          </div>
          <div className="flex flex-1 items-start justify-center gap-2.5 rounded-[10px] border border-[#EAEAEA] px-2.5 py-4">
            <Image src="/svg/achievements/medal.svg" width={20} height={20} alt="" className="shrink-0" />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <p className="text-[15px] leading-[normal] font-semibold text-black">3/8</p>
              <p className="text-[13px] leading-[normal] font-medium text-[#727272]">Достижений получено</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {achievements.map((achievement) => (
            <article
              key={achievement.title}
              className="flex items-center gap-6 rounded-[20px] border border-[#EAEAEA] px-4 py-6"
            >
              <Image
                src={achievement.iconSrc}
                width={54}
                height={54}
                alt=""
                className="size-[54px] shrink-0 rounded-full object-cover"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <h2 className="text-[15px] leading-[normal] font-semibold text-black">{achievement.title}</h2>
                <p className="text-[13px] leading-[normal] font-normal text-[#727272]">{achievement.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}