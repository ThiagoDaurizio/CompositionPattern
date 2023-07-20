import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const NotificationFooter = ({ children }: IProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default NotificationFooter
