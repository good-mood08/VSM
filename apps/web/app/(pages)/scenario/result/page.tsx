import NavPanel from '@/components/Links/NavPanel'
import ScenarioResult from '@/components/Scenario/ScenarioResult'

export default function ScenarioResultPage() {
  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <ScenarioResult />
      <NavPanel />
    </div>
  )
}