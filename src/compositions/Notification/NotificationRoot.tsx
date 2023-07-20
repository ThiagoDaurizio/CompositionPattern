import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const NotificationRoot = ({ children }: IProps) => {
  return (
    <div className='bg-slate-600 border border-slate-700/50 p-2 rounded flex flex-col gap-2'>
      {children}
    </div>
  )
}

export default NotificationRoot
