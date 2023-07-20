import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const NotificationRoot = ({ children }: IProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default NotificationRoot
