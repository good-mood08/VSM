'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import Backarrow from '@/components/ui/Back_arrow'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const CODE_LENGTH = 4
const EMAIL = 'banoage@gmail.com'

export default function CodeLogin() {
  const searchParams = useSearchParams()
  const [code, setCode] = useState('')
  const email = searchParams.get('email') || EMAIL

  function handleCodeChange(value: string) {
    setCode(value.replace(/\D/g, '').slice(0, CODE_LENGTH))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="mx-auto flex w-full max-w-[334px] flex-col">
      <div className="flex h-[42px] w-[235px] shrink-0 items-center gap-[57px]">
        <div className="shrink-0">
          <Backarrow />
        </div>
        <p className="w-[136px] shrink-0 whitespace-nowrap text-center text-[15px] font-semibold leading-[18px] tracking-[-0.01em] text-black">
          Создание аккаунта
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 flex w-full flex-col gap-10">
        <div className="flex w-full flex-col gap-8">
          <div className="flex h-[230px] w-full flex-col items-center gap-8">
            <div className="flex h-[146px] w-[246px] flex-col items-center justify-center gap-3">
              <Image src="/svg/shared/sms-tracking.svg" width={60} height={60} alt="" />
              <div className="flex h-[74px] w-[246px] flex-col items-center gap-2.5 text-center">
                <h1 className="h-[28px] w-[246px] text-[24px] font-semibold leading-[28px] tracking-[-0.01em] text-black">
                  Подтвердите Email
                </h1>
                <p className="flex h-[36px] w-[246px] flex-col items-center text-center text-[13px] leading-[18px] tracking-[-0.01em] text-[#727272]">
                  <span className="font-medium">Мы отправили код на вашу почту</span>
                  <span className="font-semibold text-black">{email}</span>
                </p>
              </div>
            </div>

            <Input
              id="code"
              name="code"
              value={code}
              onChange={(event) => handleCodeChange(event.target.value)}
              inputMode="numeric"
              autoComplete="one-time-code"
              aria-label="Код из письма"
              className="text-center"
            />
          </div>

          <div className="flex h-[42px] w-full flex-col items-center justify-center gap-2.5 text-center">
            <p className="h-4 w-[115px] whitespace-nowrap text-[13px] font-semibold leading-4 tracking-[-0.01em] text-[#727272]">
              Не получили код?
            </p>
            <button
              type="button"
              className="flex h-4 w-[133px] items-center justify-center whitespace-nowrap p-0 text-center text-[13px] font-semibold leading-none tracking-[-0.01em] text-[#EE3524]"
            >
              Отправить повторно
            </button>
          </div>
        </div>

        <Button type="submit">Войти</Button>
      </form>
    </div>
  )
}