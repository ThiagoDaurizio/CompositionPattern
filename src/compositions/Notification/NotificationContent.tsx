import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const NotificationContent = ({ children }: IProps) => {
  return (
    <div className='flex justify-between gap-2'>
      {children}
    </div>
  )
}

export default NotificationContent
