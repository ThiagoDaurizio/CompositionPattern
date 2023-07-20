import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const NotificationInfo = ({ children }: IProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default NotificationInfo
