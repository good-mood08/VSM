import NavPanel from '@/components/Links/NavPanel'
import NotificationList from '@/components/Notifications/NotificationList'

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-white pt-[78px] pb-30">
      <NotificationList />
      <NavPanel />
    </div>
  )
}