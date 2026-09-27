import NavPanel from '@/components/Links/NavPanel'
import Achievements from '@/components/Profile/Achievments/Achievements'

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <Achievements />
      <NavPanel />
    </div>
  )
}