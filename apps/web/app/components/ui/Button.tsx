import type { ButtonHTMLAttributes } from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'filled' | 'outline' | 'start' | 'soft'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  href?: string
}

const variantClassName: Record<ButtonVariant, string> = {
  primary: 'w-full rounded-full bg-accent py-4 text-h6 font-bold text-white transition hover:bg-accent/90',
  filled:
    'rounded-[90px] border-0 bg-[#EE3524] px-8 py-3.5 text-[13px] leading-[normal] font-semibold whitespace-nowrap text-white',
  outline:
    'rounded-[90px] border border-black bg-white px-8 py-3.5 text-[13px] leading-[normal] font-semibold whitespace-nowrap text-black',
  start:
    'w-full rounded-[90px] border-0 bg-[#EE3524] px-8 py-4 text-[15px] leading-[normal] font-semibold whitespace-nowrap text-white',
  soft:
    'w-full rounded-[90px] border-0 bg-[#FCE3E0] px-8 py-4 text-[15px] leading-[normal] font-semibold whitespace-nowrap text-[#EE3524]',
}

export default function Button({
  className = '',
  type = 'button',
  variant = 'primary',
  href,
  children,
  ...props
}: ButtonProps) {
  const controlClassName = `flex cursor-pointer items-center justify-center ${variantClassName[variant]}${className ? ` ${className}` : ''}`

  if (href) {
    return (
      <Link href={href} className={controlClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={controlClassName} {...props}>
      {children}
    </button>
  )
}