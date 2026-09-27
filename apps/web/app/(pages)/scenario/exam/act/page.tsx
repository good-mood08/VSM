import NavPanel from '@/components/Links/NavPanel'
import ScenarioAct from '@/components/Scenario/ScenarioAct'

const examChoices = [
  {
    id: 'call-responsible',
    number: '1.',
    text: 'Признать проблему, назвать правило, вызвать ответственного.',
  },
  {
    id: 'let-through',
    number: '2.',
    text: 'Пропустить, чтобы не задерживать посадку.',
  },
  {
    id: 'refuse',
    number: '3.',
    text: 'Сухо: «Не положено, отойдите».',
  },
]

export default function ExamActPage() {
  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <ScenarioAct
        mode="exam"
        title="Экзамен"
        sceneTitle="«Но поезд ещё стоит»"
        sceneText="До отправления 60 секунд. Пассажир показывает недействительный билет: «Пустите, разберёмся внутри». За ним очередь."
        choices={examChoices}
        backHref="/scenario/exam"
      />
      <NavPanel />
    </div>
  )
}