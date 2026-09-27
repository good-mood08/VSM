import NavPanel from '@/components/Links/NavPanel'
import ScenarioList from '@/components/Scenario/ScenarioList'

export default function ScenarioPage() {
  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <ScenarioList />
      <NavPanel />
    </div>
  )
}