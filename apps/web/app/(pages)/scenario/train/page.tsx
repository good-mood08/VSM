import NavPanel from '@/components/Links/NavPanel'
import ScenarioPrep from '@/components/Scenario/ScenarioPrep'

const trainingExpectations = [
  'Отсутствие ограничений по времени',
  'Можно спокойно обдумать решение',
  'Ветки сценария зависят от ваших действий',
  'После прохождения — разбор решений',
  'Можно повторно изучать сложные ситуации',
]

export default function TrainingPrepPage() {
  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <ScenarioPrep
        title="Тренировка"
        heading="Готовы к тренировке?"
        description="Отработайте ситуацию без давления времени. Принимайте решения, изучайте последствия и развивайте свои навыки."
        expectations={trainingExpectations}
        blockGapClassName="gap-4"
        voiceEnabledByDefault
        startHref="/scenario/train/act"
      />
      <NavPanel />
    </div>
  )
}