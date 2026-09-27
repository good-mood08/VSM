import NavPanel from '@/components/Links/NavPanel'
import TrainingHistory from '@/components/History/TrainingHistory'

export default function TrainingHistoryPage() {
  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <TrainingHistory />
      <NavPanel />
    </div>
  )
}