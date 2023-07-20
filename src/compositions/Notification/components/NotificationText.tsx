import React, { ReactNode } from 'react'

const tierPallete = {
  title: 'text-slate-200',
  text: 'text-slate-500'
}

interface IProps {
  children: ReactNode
  tier?: 'title' | 'text'
}

const NotificationText = ({ children, tier }: IProps) => {
  return (
    <div className=''>
      {children}
    </div>
  )
}

export default NotificationText
