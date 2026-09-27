import NavPanel from '@/components/Links/NavPanel'
import RatingBoard from '@/components/Rating/RatingBoard'

export default function RatingPage() {
  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <RatingBoard />
      <NavPanel />
    </div>
  )
}