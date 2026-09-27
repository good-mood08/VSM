type SwitchProps = {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function Switch({ label, checked, onChange }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-[30px] w-[52px] shrink-0 cursor-pointer rounded-full border-0 p-1.5 transition-colors duration-200 ease-out ${
        checked ? 'bg-[#EE3524]' : 'bg-[#CBCBCB]'
      }`}
    >
      <span
        className={`block size-[18px] rounded-full bg-white transition-transform duration-200 ease-out ${
          checked ? 'translate-x-[22px]' : 'translate-x-0'
        }`}
      />
    </button>
  )
}