import React, { ReactNode } from 'react'
import { IoAlertOutline, IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { BsQuestionLg } from 'react-icons/bs'
import { PiAtomLight } from 'react-icons/pi'





const icons = {
  alert: IoAlertOutline,
  question: BsQuestionLg,
  menssage: IoChatbubbleEllipsesOutline,
  general: PiAtomLight,
  none: null
}

interface IProps {
  notificationIcon: 'alert' | 'question' | 'menssage' | 'general' | 'none'
}

const NotificationIcon = ({ 
  notificationIcon = 'none'
}: IProps) => {
  const Icon = icons[notificationIcon]

  return (
    <div>
      {Icon && (<Icon />)}
    </div>
  )
}

export default NotificationIcon
