'use client'
import { buttonPalletes } from '@/compositions/colors'
import React, { ReactNode } from 'react'

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
  const colorButton = buttonPalletes[color]

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