import NavPanel from '@/components/Links/NavPanel'
import ScenarioPrep from '@/components/Scenario/ScenarioPrep'

const examExpectations = [
  'Ограниченное время на каждое решение',
  'Таймаут считается отдельным исходом',
  'Ваши решения влияют на сценарий',
  'Оцениваются лояльность и безопасность',
  'Результат влияет на итоговую оценку',
]

export default function ExamPrepPage() {
  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <ScenarioPrep
        title="Экзамен"
        heading="Готовы к проверке?"
        description="Пройдите сценарий в ограниченное время. Быстро принимайте решения — каждое действие влияет на ситуацию."
        expectations={examExpectations}
        blockGapClassName="gap-5"
        voiceEnabledByDefault={false}
        startHref="/scenario/exam/act"
      />
      <NavPanel />
    </div>
  )
}