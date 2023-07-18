import { buttonPalletes } from '@/compositions/colors'
import React, { ReactNode } from 'react'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'error' | 'success' | 'warning' | 'info' | 'none'
} 

const ModalAction = ({
  children, className, color = 'none', onClick, ...rest
}: IProps) => {
  const colorButton = buttonPalletes[color]

  return (
    <button
      {...rest}
      onClick={onClick}
      className={`p-1 w-[76px] rounded-md text-slate-100 flex items-center justify-center ${className} ${colorButton}`}
    >
      {children}
    </button>
  )
}

export default ModalAction