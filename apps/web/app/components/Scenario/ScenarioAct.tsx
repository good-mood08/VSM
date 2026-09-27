'use client'

import { useState } from 'react'
import Image from 'next/image'
import Backarrow from '@/components/ui/Back_arrow'
import Button from '@/components/ui/Button'

type ActChoice = {
  id: string
  number: string
  text: string
  loyalty?: string
  safety?: string
}

type ScenarioActProps = {
  mode: 'train' | 'exam'
  title: string
  sceneTitle: string
  sceneText: string
  choices: ActChoice[]
  backHref: string
}

export default function ScenarioAct({ mode, title, sceneTitle, sceneText, choices, backHref }: ScenarioActProps) {
  const [selectedChoiceId, setSelectedChoiceId] = useState(choices[0]?.id ?? '')

  return (
    <div className="mx-auto flex w-[min(346px,calc(100%-32px))] min-w-0 flex-col">
      <header className={`relative flex h-[42px] items-center ${mode === 'train' ? 'justify-between' : ''}`}>
        <Backarrow />
        <h1
          className={
            mode === 'train'
              ? 'text-[15px] leading-[18px] font-semibold whitespace-nowrap text-black'
              : 'absolute left-1/2 -translate-x-1/2 text-[15px] leading-[normal] font-semibold whitespace-nowrap text-black'
          }
        >
          {title}
        </h1>
        {mode === 'train' ? (
          <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[90px] bg-[#F7F7F7]">
            <img src="/svg/scenario/message-question.svg" width={24} height={24} alt="" />
          </span>
        ) : null}
      </header>

      <div className="mt-8 flex flex-col gap-[22px]">
        <h2 className="text-[24px] leading-[28px] font-semibold tracking-[-0.24px] text-black">Акт 1. Посадка</h2>
        {mode === 'train' ? <Divider /> : <div className="h-px w-full bg-black" />}
        <div className="flex flex-col gap-2">
          <h3
            className={`text-[15px] font-semibold text-black ${mode === 'exam' ? 'leading-[normal]' : 'leading-[18px]'}`}
          >
            {sceneTitle}
          </h3>
          <p
            className={
              mode === 'exam'
                ? 'text-[13px] leading-[normal] font-normal text-black'
                : 'text-[13px] leading-4 font-normal text-black'
            }
          >
            {sceneText}
          </p>
        </div>

        <div className="flex flex-col gap-2.5" role="radiogroup" aria-label="Варианты ответа">
          {choices.map((choice) => {
            const isSelected = choice.id === selectedChoiceId
            const isExam = mode === 'exam'

            return (
              <button
                key={choice.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelectedChoiceId(choice.id)}
                className={`flex w-full cursor-pointer items-center justify-between rounded-[20px] px-4 py-3.5 text-left ${
                  isSelected ? 'bg-[#EE3524] text-white' : 'border border-[#CBCBCB] bg-white text-black'
                }`}
              >
                <span
                  className={
                    isExam
                      ? 'shrink-0 text-[15px] leading-[normal] font-semibold whitespace-nowrap'
                      : 'shrink-0 text-[15px] leading-[18px] font-semibold whitespace-nowrap'
                  }
                >
                  {choice.number}
                </span>
                <span className="flex min-w-0 max-w-[272px] flex-1 flex-col gap-3">
                  <span
                    className={`text-[13px] ${isSelected ? 'font-semibold' : 'font-medium'} ${
                      isExam ? 'leading-[normal]' : 'leading-4'
                    }`}
                  >
                    {choice.text}
                  </span>
                  {choice.loyalty && choice.safety ? (
                    <span className="flex gap-5 text-[10px] leading-3 font-medium">
                      <span className={scoreClassName(choice.loyalty, isSelected)}>{choice.loyalty}</span>
                      <span className={scoreClassName(choice.safety, isSelected)}>{choice.safety}</span>
                    </span>
                  ) : null}
                </span>
              </button>
            )
          })}
        </div>

        {mode === 'exam' ? (
          <>
            <div className="h-px w-full bg-black" />
            <div className="flex flex-col gap-3">
              <div className="flex w-full items-center justify-between rounded-[16px] border border-[#CBCBCB] bg-white px-[18px] py-4">
                <span className="flex items-center gap-2">
                  <Image src="/svg/scenario/clock.svg" width={16} height={16} alt="" />
                  <span className="text-[13px] leading-[1.2] font-medium tracking-[-0.13px] whitespace-nowrap text-black">
                    Оставшееся время:
                  </span>
                </span>
                <span className="text-[13px] leading-[1.2] font-semibold tracking-[-0.13px] whitespace-nowrap text-black">3 сек.</span>
              </div>
              <div className="flex gap-3">
                <ExamStat label="Лояльность" icon="/svg/scenario/heart.svg" />
                <ExamStat label="Безопасность" icon="/svg/scenario/shield.svg" />
              </div>
            </div>
            <Button variant="start" href="/scenario/result">
              Далее
            </Button>
          </>
        ) : (
          <>
            <Divider />
            <div className="flex flex-col gap-3">
              <Button variant="start" href="/scenario/result">
                Далее
              </Button>
              <Button variant="soft" href={backHref}>
                Вернуться назад
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function Divider() {
  return <img src="/svg/notifications/divider.svg" width={347} height={2} alt="" className="block h-[1.2px] w-full" />
}

function scoreClassName(delta: string, isSelected: boolean) {
  if (isSelected) return 'text-white'
  return delta.includes('-') ? 'text-[#EE3524]' : 'text-[#22C55E]'
}

function ExamStat({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3.5 rounded-[16px] border border-[#CBCBCB] px-[18px] py-4">
      <span className="flex items-center gap-2">
        <Image src={icon} width={16} height={16} alt="" />
        <span className="text-[13px] leading-[1.2] font-medium tracking-[-0.13px] whitespace-nowrap text-black">{label}</span>
      </span>
      <div className="h-2.5 w-full overflow-hidden rounded-[90px] bg-[#FCE3E0]">
        <div className="h-2.5 w-1/2 rounded-[90px] bg-[#EE3524]" />
      </div>
    </div>
  )
}