import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const NotificationContent = ({ children }: IProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default NotificationContent
