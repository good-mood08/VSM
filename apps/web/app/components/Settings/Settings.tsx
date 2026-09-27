'use client'

import { useState } from 'react'
import Backarrow from '@/components/ui/Back_arrow'
import Switch from '@/components/ui/Switch'

export default function Settings() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [areNotificationsEnabled, setAreNotificationsEnabled] = useState(true)
  const [isExaminerRequestOn, setIsExaminerRequestOn] = useState(true)

  return (
    <div className="mx-auto flex w-[min(346px,calc(100%-32px))] min-w-0 flex-col">
      <header className="flex w-[214px] items-center justify-between">
        <Backarrow />
        <h1 className="text-[15px] leading-[normal] font-semibold whitespace-nowrap text-black">Настройки</h1>
      </header>

      <div className="mt-8 flex w-full flex-col gap-10">
        <section className="flex w-full flex-col gap-6">
          <h2 className="text-[20px] leading-[normal] font-semibold text-black">Оформление:</h2>
          <div className="flex w-full items-center justify-between">
            <p className="text-[15px] leading-[normal] font-medium whitespace-nowrap text-black">Тёмная тема</p>
            <Switch label="Тёмная тема" checked={isDarkTheme} onChange={setIsDarkTheme} />
          </div>
        </section>

        <section className="flex w-full flex-col gap-6">
          <h2 className="text-[20px] leading-[normal] font-semibold text-black">Уведомления:</h2>
          <div className="flex w-full items-center justify-between">
            <p className="text-[15px] leading-[normal] font-medium whitespace-nowrap text-black">Уведомления</p>
            <Switch
              label="Уведомления"
              checked={areNotificationsEnabled}
              onChange={setAreNotificationsEnabled}
            />
          </div>
        </section>

        <section className="flex w-full flex-col gap-6">
          <h2 className="text-[20px] leading-[normal] font-semibold text-black">Мои возможности:</h2>
          <div className="flex w-full items-center justify-between">
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <p className="text-[15px] leading-[normal] font-medium text-black">
                Статать экзаменатором
              </p>
              <p className="text-[13px] leading-[normal] font-normal text-[#727272]">
                Подайте заявку чтобы стать экзаменатором. После рассмотрения на почту придёт оповещение
              </p>
            </div>
            <Switch
              label="Статать экзаменатором"
              checked={isExaminerRequestOn}
              onChange={setIsExaminerRequestOn}
            />
          </div>
        </section>
      </div>
    </div>
  )
}