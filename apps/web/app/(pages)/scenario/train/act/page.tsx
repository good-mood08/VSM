import NavPanel from '@/components/Links/NavPanel'
import ScenarioAct from '@/components/Scenario/ScenarioAct'

const trainingChoices = [
  {
    id: 'call-responsible',
    number: '1.',
    text: 'Признать проблему, назвать правило, вызовать ответственного.',
    loyalty: 'Лояльность +2',
    safety: 'Безопасность -4',
  },
  {
    id: 'let-through',
    number: '2.',
    text: 'Пропустить, чтобы не задерживать посадку.',
    loyalty: 'Лояльность +2',
    safety: 'Безопасность -4',
  },
  {
    id: 'refuse',
    number: '3.',
    text: 'Сухо: «Не положено, отойдите».',
    loyalty: 'Лояльность -3',
    safety: 'Безопасность +1',
  },
]

export default function TrainingActPage() {
  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <ScenarioAct
        mode="train"
        title="Тренировка"
        sceneTitle="«Но поезд ещё стоит»"
        sceneText="До отправления 60 секунд. Пассажир показывает недействительный билет: «Пустите, разберёмся внутри». За ним очередь."
        choices={trainingChoices}
        backHref="/scenario/train"
      />
      <NavPanel />
    </div>
  )
}