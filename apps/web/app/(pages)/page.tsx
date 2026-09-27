import Image from 'next/image'
import Link from 'next/link'
import ExamCard from '@/components/Home/ExamCard'
import SuperScenario from '@/components/Home/SuperScenario'
import NavPanel from '@/components/Links/NavPanel'

const upcomingExams = [
  {
    id: 'medical-exam-1',
    title: 'Медицинский инцидент',
    description: 'Первая помощь пассажиру',
    time: 'Сегодня в 14:30',
    role: 'Экзаменатор',
    imageSrc: '/png/scenario/help.png',
  },
  {
    id: 'medical-exam-2',
    title: 'Медицинский инцидент',
    description: 'Первая помощь пассажиру',
    time: 'Сегодня в 14:30',
    role: 'Экзаменатор',
    imageSrc: '/png/scenario/help.png',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-[82px] pb-30">
      <div className="mx-auto flex w-[min(346px,calc(100%-32px))] min-w-0 flex-col">
        <header className="flex items-center justify-between">
          <h1 className="max-w-[204px] min-w-0 font-rail text-[26px] leading-[28px] tracking-[-0.26px] text-[#EE3524]">
            Добрый день,
            <br />
            Артур!
          </h1>
          <Link href="/notifications" aria-label="Уведомления" className="relative size-[30px] shrink-0">
            <Image src="/svg/notifications/empty.svg" width={30} height={30} alt="" />
            <span className="absolute top-0 left-[18px] size-2.5 rounded-full bg-[#EE3524]" />
          </Link>
        </header>

        <div className="mt-10 flex flex-col gap-16">
          <section className="flex flex-col gap-6">
            <h2 className="text-[20px] leading-[normal] font-semibold text-black">Ближайшие экзамен:</h2>
            <div className="flex w-full min-w-0 gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {upcomingExams.map((exam) => (
                <ExamCard key={exam.id} {...exam} />
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-[20px] leading-[normal] font-semibold text-black">Супер сценарий:</h2>
            <SuperScenario />
          </section>
        </div>
      </div>
      <NavPanel />
    </div>
  )
}