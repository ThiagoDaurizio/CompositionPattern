import React from 'react'

import { BsCheckLg } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { GiSaveArrow } from 'react-icons/gi'
import { RxEyeNone } from 'react-icons/rx'

const palletes = {
  success: 'bg-emerald-500 border-emerald-500 hover:bg-emerald-500/90',
  close: 'bg-slate-600 border-emerald-500 hover:bg-slate-500/50',
  save: 'bg-transparent border-slate-400 hover:bg-slate-500/50',
  none: 'bg-transparent'
}

const icons = {
  success: BsCheckLg,
  close: IoMdClose,
  save: GiSaveArrow,
  none: RxEyeNone
}

interface IProps {
  onClick: () => void
  color?: 'success' | 'close' | 'save' | 'none'
}

const NotificationAction = ({
  onClick,
  color = 'none'
}: IProps) => {
  const buttonColor = palletes[color]
  const ButtonIcon = icons[color]

  return (
    <button 
      onClick={onClick}
      className={`p-[2px] border text-slate-200 transition-colors duration-200 rounded-sm ${buttonColor}`}
    >
      <ButtonIcon/>
    </button>
  )
}

export default NotificationAction
