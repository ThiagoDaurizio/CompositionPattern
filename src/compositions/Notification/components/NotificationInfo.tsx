import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const NotificationInfo = ({ children }: IProps) => {
  return (
    <div className='bg--500 flex-1'>
      {children}
    </div>
  )
}

export default NotificationInfo
