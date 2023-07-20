'use client'

import ModalSetup from "@/components/ModalSetup"
import NotificationSetup from "@/components/NotificationsSetup"

export default function Home() {
  return (
    <main className="bg-slate-100 min-h-screen flex flex-col items-center gap-8 pt-8">
      <ModalSetup />
      <hr/>
      <NotificationSetup />
    </main>
  )
}
