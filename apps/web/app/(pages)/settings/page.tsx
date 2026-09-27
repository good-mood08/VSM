import NavPanel from '@/components/Links/NavPanel'
import Settings from '@/components/Settings/Settings'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <Settings />
      <NavPanel />
    </div>
  )
}