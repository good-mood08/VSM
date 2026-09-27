'use client'

import Image from 'next/image'
import { useRef, useState, type AnimationEvent, type MouseEvent, type SyntheticEvent } from 'react'
import Button from '@/components/ui/Button'

const DIALOG_MOTION_MS = 200

export default function LogoutDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeTimerRef = useRef<number | null>(null)
  const [isClosing, setIsClosing] = useState(false)

  function openDialog() {
    setIsClosing(false)
    dialogRef.current?.showModal()
  }

  function finishClose() {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }

    dialogRef.current?.close()
    setIsClosing(false)
  }

  function closeDialog() {
    const dialog = dialogRef.current
    if (!dialog?.open || isClosing) return

    setIsClosing(true)
    closeTimerRef.current = window.setTimeout(finishClose, DIALOG_MOTION_MS)
  }

  function handleAnimationEnd(event: AnimationEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget || event.animationName !== 'dialog-out') return
    finishClose()
  }

  function handleCancel(event: SyntheticEvent<HTMLDialogElement>) {
    event.preventDefault()
    closeDialog()
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const isInsideCard =
      event.clientX >= bounds.left &&
      event.clientX <= bounds.right &&
      event.clientY >= bounds.top &&
      event.clientY <= bounds.bottom

    if (!isInsideCard) {
      closeDialog()
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className="flex w-full cursor-pointer items-center rounded-[20px] border-0 bg-black px-[22px] py-[15px]"
      >
        <span className="flex items-center gap-3">
          <Image src="/svg/profile/logout.svg" width={24} height={24} alt="" />
          <span className="text-[15px] font-medium leading-normal text-white">Выйти</span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="logout-dialog-title"
        onClick={handleBackdropClick}
        onAnimationEnd={handleAnimationEnd}
        onCancel={handleCancel}
        className={`m-auto w-[344px] max-w-[calc(100%-56px)] rounded-[20px] border-0 bg-white p-7 backdrop:bg-black/40 ${
          isClosing
            ? 'animate-dialog-out backdrop:animate-backdrop-out'
            : 'open:animate-dialog-in open:backdrop:animate-backdrop-in'
        }`}
      >
        <div className="flex w-full flex-col gap-8">
          <div className="flex w-full flex-col gap-4">
            <h2 id="logout-dialog-title" className="text-[20px] leading-[normal] font-semibold text-black">
              Выйти из профиля?
            </h2>
            <p className="text-[13px] leading-[normal] font-medium text-[#727272]">
              Вы точно хотите выйти из своего аккаунта? Вы сможете войти снова в любое время.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3">
            <button
              type="button"
              onClick={closeDialog}
              className="flex w-full cursor-pointer items-center justify-center rounded-full border-0 bg-[#EE3524] px-8 py-4 text-[15px] leading-[normal] font-semibold text-white"
            >
              Остаться
            </button>
            <Button variant="soft" type="button">
              Выйти
            </Button>
          </div>
        </div>
      </dialog>
    </>
  )
}