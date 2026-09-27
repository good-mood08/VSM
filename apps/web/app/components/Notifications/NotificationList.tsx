'use client'

import Link from 'next/link'
import { Fragment, useState } from 'react'
import Backarrow from '@/components/ui/Back_arrow'
import { notifications } from '@/components/Notifications/notifications'

type NotificationFilter = 'all' | 'unread'

const filters: { id: NotificationFilter; label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'unread', label: 'Непрочитанные' },
]

export default function NotificationList() {
  const [filter, setFilter] = useState<NotificationFilter>('all')
  const visibleNotifications =
    filter === 'unread' ? notifications.filter((notification) => notification.isUnread) : notifications

  return (
    <div className="mx-auto flex w-[min(346px,calc(100%-32px))] min-w-0 flex-col">
      <header className="flex w-[224px] items-center justify-between">
        <Backarrow />
        <h1 className="text-[15px] leading-[normal] font-semibold whitespace-nowrap text-black">Уведомления</h1>
      </header>

      <div className="mt-7 flex items-start gap-5" role="tablist" aria-label="Фильтр уведомлений">
        {filters.map((item) => {
          const isSelected = filter === item.id

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setFilter(item.id)}
              className="flex w-fit cursor-pointer flex-col items-stretch gap-1.5 border-0 bg-transparent p-0"
            >
              <span
                className={`text-[15px] leading-[normal] font-semibold whitespace-nowrap ${
                  isSelected ? 'text-black' : 'text-[#727272]'
                }`}
              >
                {item.label}
              </span>
              <span className={`h-0.5 rounded-full ${isSelected ? 'bg-[#E21A1A]' : 'bg-transparent'}`} />
            </button>
          )
        })}
      </div>

      <div className="mt-8 flex flex-col gap-7">
        {visibleNotifications.map((notification) => (
          <Fragment key={notification.id}>
            <Link href={`/notifications/${notification.id}`} className="flex flex-col gap-3 text-left">
              <span className="flex items-center justify-between gap-3 leading-[normal] whitespace-nowrap text-black">
                <span className={`text-[15px] ${notification.isUnread ? 'font-semibold' : 'font-medium'}`}>
                  {notification.title}
                </span>
                <span className={`text-[13px] ${notification.isUnread ? 'font-medium' : 'font-normal'}`}>
                  {notification.time}
                </span>
              </span>
              <span
                className={`text-[13px] leading-[1.25] text-[#727272] ${
                  notification.isUnread ? 'font-medium' : 'font-normal'
                }`}
              >
                {notification.preview}
              </span>
            </Link>
            <img src="/svg/notifications/divider.svg" width={347} height={2} alt="" className="block h-px w-full" />
          </Fragment>
        ))}
      </div>
    </div>
  )
}