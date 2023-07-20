import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const NotificationFooter = ({ children }: IProps) => {
  return (
    <div className='flex justify-end gap-2'>
      {children}
    </div>
  )
}

export default NotificationFooter
