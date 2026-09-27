import Image from 'next/image'
import Bullet from '@/components/Home/Bullet'
import Button from '@/components/ui/Button'

const situationRows = [
  ['Первая помощь', 'Безопасность'],
  ['Конфликт', 'Эвакуация', 'Сервис'],
] as const

export default function SuperScenario() {
  return (
    <article className="flex w-full flex-col items-center gap-6 rounded-[18px] border border-black bg-white px-4 pt-6 pb-4">
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
          <div className="flex flex-col gap-2">
            <h3 className="text-[15px] leading-[normal] font-semibold text-black">Готовы к неожиданному?</h3>
            <p className="text-[13px] leading-[normal] font-normal text-[#727272]">
              Сценарий определится случайным образом. Принимайте решения, реагируйте на ситуацию и проверяйте свои
              профессиональные навыки.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <p className="text-[13px] leading-[normal] font-medium whitespace-nowrap text-black">Ситуации:</p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-3">
                  {situationRows[0].map((situation) => (
                    <Bullet key={situation}>{situation}</Bullet>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {situationRows[1].map((situation) => (
                    <Bullet key={situation}>{situation}</Bullet>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[13px] leading-[normal] font-medium whitespace-nowrap text-black">Сложность:</p>
              <Bullet>Максимльная</Bullet>
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
  )
}