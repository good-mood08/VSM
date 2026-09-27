type BulletProps = {
  children: string
}

export default function Bullet({ children }: BulletProps) {
  return (
    <span className="flex items-center gap-2">
      <span className="size-1.5 shrink-0 rounded-full bg-black" aria-hidden />
      <span className="text-[13px] leading-[normal] font-medium whitespace-nowrap text-black">{children}</span>
    </span>
  )
}