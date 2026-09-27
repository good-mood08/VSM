import Link from 'next/link'
import Backarrow from '@/components/ui/Back_arrow'
import type { NotificationItem } from '@/components/Notifications/notifications'

type NotificationViewProps = {
  notification: NotificationItem
}

export default function NotificationView({ notification }: NotificationViewProps) {
  return (
    <div className="mx-auto flex w-[min(346px,calc(100%-32px))] min-w-0 flex-col">
      <header className="flex w-[227px] items-center justify-between">
        <Backarrow />
        <h1 className="w-[108px] text-center text-[15px] leading-[normal] font-semibold text-black">Уведомление:</h1>
      </header>

      <div className="mt-8 flex w-full flex-col items-start gap-8">
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-4 leading-[normal] whitespace-nowrap text-black">
            <p className="text-[13px] font-medium">{notification.time}</p>
            <h2 className="text-[15px] font-semibold">{notification.title}</h2>
          </div>
          <p className="text-[15px] leading-[1.25] font-normal text-[#727272]">{notification.body}</p>
        </div>
        <Link
          href="/scenario"
          className="flex cursor-pointer items-center justify-center rounded-full bg-[#EE3524] px-10 py-3.5 text-[13px] leading-[normal] font-semibold whitespace-nowrap text-white"
        >
          Перейти
        </Link>
      </div>
    </div>
  )
}