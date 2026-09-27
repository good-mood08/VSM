import Image from 'next/image'
import Bullet from '@/components/Home/Bullet'
import Button from '@/components/ui/Button'

type ExamCardProps = {
  title: string
  description: string
  time: string
  role: string
  imageSrc: string
}

export default function ExamCard({ title, description, time, role, imageSrc }: ExamCardProps) {
  return (
    <article className="flex w-[min(300px,calc(100%-46px))] shrink-0 flex-col items-center gap-6 rounded-[18px] border border-black bg-white p-6">
      <Image src={imageSrc} width={252} height={178} alt="" className="h-[178px] w-full object-cover" />
      <div className="h-px w-full bg-black" />
      <div className="flex w-full flex-col gap-6">
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-[15px] leading-[normal] font-semibold text-black">{title}</h3>
            <p className="text-[13px] leading-[normal] font-medium text-[#727272]">{description}</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <div className="flex flex-col gap-2">
              <p className="text-[13px] leading-[normal] font-medium whitespace-nowrap text-black">Время:</p>
              <Bullet>{time}</Bullet>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[13px] leading-[normal] font-medium whitespace-nowrap text-black">Роль:</p>
              <Bullet>{role}</Bullet>
            </div>
          </div>
        </div>
        <Button variant="filled" href="/scenario/exam" className="w-full">
          Экзамен
        </Button>
      </div>
    </article>
  )
}