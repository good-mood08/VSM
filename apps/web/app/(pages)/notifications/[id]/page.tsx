import { notFound } from 'next/navigation'
import NavPanel from '@/components/Links/NavPanel'
import NotificationView from '@/components/Notifications/NotificationView'
import { findNotification } from '@/components/Notifications/notifications'

type NotificationPageProps = {
  params: Promise<{ id: string }>
}

export default async function NotificationPage({ params }: NotificationPageProps) {
  const { id } = await params
  const notification = findNotification(id)

  if (!notification) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <NotificationView notification={notification} />
      <NavPanel />
    </div>
  )
}