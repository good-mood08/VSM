import Image from 'next/image'
import Link from 'next/link'
import LogoutDialog from '@/components/Profile/LogoutDialog'
import Backarrow from '@/components/ui/Back_arrow'
import NavPanel from '@/components/Links/NavPanel'

const PROFILE_NAME = 'Артур Забрамов'
const PROFILE_EMAIL = 'banoage@gmail.com'

type ProgressRow = {
  title: string
  iconSrc: string
  href?: string
  hasIndicator?: boolean
}

const progressRows: ProgressRow[] = [
  {
    title: 'Статус',
    iconSrc: '/svg/profile/crown.svg',
  },
  {
    title: 'История обучения',
    iconSrc: '/svg/profile/history-clock.svg',
    href: '/profile/history',
  },
  {
    title: 'Достижения',
    iconSrc: '/svg/profile/medal-star.svg',
    href: '/profile/achievments',
    hasIndicator: true,
  },
]

const rowClassName =
  'flex w-full cursor-pointer items-center justify-between rounded-full px-[22px] py-[15px]'

function ProgressRowLink({ title, iconSrc, href, hasIndicator }: ProgressRow) {
  const content = (
    <>
      <span className="flex items-center gap-3">
        {hasIndicator ? <span className="size-2 shrink-0 rounded-full bg-[#EE3524]" aria-hidden /> : null}
        <Image src={iconSrc} width={24} height={24} alt="" />
        <span className="whitespace-nowrap text-[15px] font-medium leading-normal text-black">{title}</span>
      </span>
      <Image src="/svg/shared/arrow-right.svg" width={24} height={24} alt="" />
    </>
  )

  if (href) {
    return (
      <Link href={href} className={rowClassName}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={rowClassName}>
      {content}
    </button>
  )
}

export default function Profile() {
  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <header className="mx-auto flex w-[min(346px,calc(100%-32px))] min-w-0 items-center justify-between">
        <Backarrow />
        <h1 className="text-[15px] font-semibold leading-normal text-black">Профиль</h1>
        <Link href="/settings" aria-label="Настройки" className="shrink-0">
          <Image src="/svg/profile/settings.svg" width={42} height={42} alt="" />
        </Link>
      </header>

      <div className="mx-auto mt-8 flex w-[min(346px,calc(100%-32px))] min-w-0 flex-col items-center gap-8">
        <div className="flex w-[246px] flex-col items-center gap-4">
          <div className="relative size-[106px]">
            <Image
              src="/png/profile/avatar.png"
              width={106}
              height={106}
              alt={PROFILE_NAME}
              className="size-[106px] rounded-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 rounded-full border-4 border-[#FFC800]" />
            <button
              type="button"
              className="absolute top-[72px] left-[72px] flex size-[34px] cursor-pointer items-center justify-center rounded-full border-0 bg-[#F7F7F7] p-[9px]"
              aria-label="Добавить фото"
            >
              <Image src="/svg/shared/plus.svg" width={16} height={16} alt="" />
            </button>
          </div>

          <div className="flex w-full flex-col items-center gap-2.5 text-center text-black">
            <p className="text-[24px] font-semibold leading-[28px] tracking-[-0.01em]">{PROFILE_NAME}</p>
            <p className="text-[13px] font-medium leading-normal tracking-[-0.01em] whitespace-nowrap">
              {PROFILE_EMAIL}
            </p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col gap-6">
            <h2 className="text-[20px] font-semibold leading-normal text-black">Мой прогресс:</h2>
            <div className="flex w-full flex-col gap-3 rounded-[20px] bg-[#F5F5F5] py-2">
              {progressRows.map((row) => (
                <ProgressRowLink key={row.title} {...row} />
              ))}
            </div>
          </div>

          <LogoutDialog />
        </section>
      </div>

      <NavPanel />
    </div>
  )
}