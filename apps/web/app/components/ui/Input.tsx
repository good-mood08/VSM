import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-full border border-border bg-transparent px-7 py-4 text-h6 text-main outline-none placeholder:text-addition focus:border-accent${className ? ` ${className}` : ''}`}
      {...props}
    />
  )
}