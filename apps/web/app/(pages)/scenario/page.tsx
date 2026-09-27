import NavPanel from '@/components/Links/NavPanel'
import { fetchScenarios } from '@/api/scenarios/scenario'
import ScenarioList from '@/components/Scenario/ScenarioList'

export default async function ScenarioPage() {
  const scenarios = await fetchScenarios()

  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <ScenarioList scenarios={scenarios} />
      <NavPanel />
    </div>
  )
}