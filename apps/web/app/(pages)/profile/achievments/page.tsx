import { fetchAchievements } from '@/api/achievements/achievement'
import NavPanel from '@/components/Links/NavPanel'
import Achievements from '@/components/Profile/Achievments/Achievements'

export default async function AchievementsPage() {
  const board = await fetchAchievements()

  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <Achievements board={board} />
      <NavPanel />
    </div>
  )
}