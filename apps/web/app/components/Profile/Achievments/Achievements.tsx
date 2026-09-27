import Image from 'next/image'
import type { AchievementBoard } from '@/api/achievements/achievement'
import Backarrow from '@/components/ui/Back_arrow'

const achievementIcon: Record<string, string> = {
  'Здоровье важнее графика': '/png/achievements/health.png',
  'Не кормил провокацию': '/png/achievements/provocation.png',
  'Лекарство не выдавал': '/png/achievements/medicine.png',
  'Удержал два фокуса': '/png/achievements/focus.png',
  'Не раздал кресла': '/png/achievements/seats.png',
  'Сервис не равен таблетке': '/png/achievements/service.png',
  'Не кормил камеру': '/png/achievements/camera.png',
  'Двух не бросил': '/png/achievements/two.png',
  'Проход важнее спора': '/png/achievements/aisle.png',
  'Чужую таблетку не передал': '/png/achievements/pill.png',
  'Тихий голос в давке': '/png/achievements/quiet.png',
  'Двух назвал по делу': '/png/achievements/report.png',
  'Не пустил проблему.': '/png/achievements/conflict.png',
  'Не стал героем с таблеткой': '/png/achievements/hero.png',
  'Чужой стакан не пустил': '/png/achievements/glass.png',
  'Замедлился вовремя': '/png/achievements/pace.png',
}

type AchievementsProps = {
  board: AchievementBoard
}

export default function Achievements({ board }: AchievementsProps) {
  return (
    <div className="mx-auto flex w-content min-w-0 flex-col">
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
              <p className="text-[15px] leading-[normal] font-semibold text-black">{board.completedScenarios}</p>
              <p className="text-[13px] leading-[normal] font-medium text-[#727272]">Сценариев пройдено</p>
            </div>
          </div>
          <div className="flex flex-1 items-start justify-center gap-2.5 rounded-[10px] border border-[#EAEAEA] px-2.5 py-4">
            <Image src="/svg/achievements/medal.svg" width={20} height={20} alt="" className="shrink-0" />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <p className="text-[15px] leading-[normal] font-semibold text-black">
                {board.earnedCount}/{board.totalCount}
              </p>
              <p className="text-[13px] leading-[normal] font-medium text-[#727272]">Достижений получено</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {board.achievements.map((achievement) => (
            <article
              key={achievement.id}
              className="flex items-center gap-6 rounded-[20px] border border-[#EAEAEA] px-4 py-6"
            >
              <Image
                src={achievementIcon[achievement.name] ?? '/svg/achievements/medal.svg'}
                width={54}
                height={54}
                alt=""
                className="size-[54px] shrink-0 rounded-full object-cover"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <h2 className="text-[15px] leading-[normal] font-semibold text-black">{achievement.name}</h2>
                <p className="text-[13px] leading-[normal] font-normal text-[#727272]">{achievement.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
