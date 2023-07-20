import React, { ReactNode } from 'react'

const tierPallete = {
  title: 'text-slate-200',
  text: 'text-slate-500'
}

interface IProps {
  children: ReactNode
  textTier: 'title' | 'subtitle'
}

const NotificationText = ({ children, textTier }: IProps) => {
  return (
    <div className=''>
      {textTier === 'title' ? 
        <p className='text-emerald-400 font-semibold text-sm'>
          {children}
        </p>
        :
        <p className='text-slate-300 font-normal text-xs'>
          {children}
        </p>
      }
    </div>
  )
}

export default NotificationText
