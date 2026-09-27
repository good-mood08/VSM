'use client'

import { useState } from 'react'
import Backarrow from '@/components/ui/Back_arrow'
import Button from '@/components/ui/Button'
import Switch from '@/components/ui/Switch'

type ScenarioPrepProps = {
  title: string
  heading: string
  description: string
  expectations: string[]
  blockGapClassName: 'gap-4' | 'gap-5'
  voiceEnabledByDefault: boolean
  startHref: string
}

export default function ScenarioPrep({
  title,
  heading,
  description,
  expectations,
  blockGapClassName,
  voiceEnabledByDefault,
  startHref,
}: ScenarioPrepProps) {
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(voiceEnabledByDefault)

  return (
    <div className="mx-auto flex w-content min-w-0 flex-col">
      <header className="relative flex h-[42px] items-center">
        <Backarrow />
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[15px] leading-[normal] font-semibold whitespace-nowrap text-black">
          {title}
        </h1>
      </header>

      <div className="mt-8 flex flex-col gap-10">
        <div className={`flex flex-col ${blockGapClassName}`}>
          <h2 className="text-[24px] leading-[28px] font-semibold tracking-[-0.24px] text-black">{heading}</h2>
          <p className="text-[13px] leading-[1.2] font-medium tracking-[-0.13px] text-[#727272]">{description}</p>
        </div>

        <div className={`flex flex-col ${blockGapClassName}`}>
          <h3 className="text-[15px] leading-[1.2] font-semibold tracking-[-0.15px] text-black">Что вас ждёт:</h3>
          <ul className="flex flex-col gap-3">
            {expectations.map((expectation) => (
              <li key={expectation} className="flex items-center gap-2">
                <span className="size-1 shrink-0 rounded-full bg-black" aria-hidden />
                <span className="text-[15px] leading-[1.2] font-medium tracking-[-0.15px] text-black">
                  {expectation}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <section className="flex flex-col gap-6">
          <h3 className="text-[20px] leading-[normal] font-semibold text-black">Голосовой режим</h3>
          <div className="flex items-center justify-between">
            <p className="text-[15px] leading-[normal] font-medium whitespace-nowrap text-black">Голосовые решения</p>
            <Switch label="Голосовые решения" checked={isVoiceEnabled} onChange={setIsVoiceEnabled} />
          </div>
        </section>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <Button variant="start" href={startHref}>
          Начать
        </Button>
        <Button variant="soft" href="/">
          Выйти
        </Button>
      </div>
    </div>
  )
}