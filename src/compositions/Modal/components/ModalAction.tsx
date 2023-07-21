'use client'
import React, { ReactNode } from 'react'

export const palletes = {
  success: 'bg-emerald-400 hover:bg-emerald-400/90',
  error: 'bg-red-500 hover:bg-red-500/90',
  warning: 'bg-yellow-500 hover:bg-yellow-500/90',
  info: 'bg-blue-500 hover:bg-blue-500/90',
  none: 'bg-transparent'
}

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  color?: 'error' | 'success' | 'warning' | 'info' | 'none'
  onClick: () => void
  
} 

const ModalAction = ({
  children, 
  color = 'none', 
  onClick
}: IProps) => {
  const colorButton = palletes[color]

  return (
    <button
      onClick={onClick}
      className={`px-1 w-[76px] h-[28px] rounded-md text-slate-100 flex items-center justify-center ${colorButton}`}
    >
      {children}
    </button>
  )
}

export default ModalAction