import React from 'react'

import { BsCheckLg } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { GiSaveArrow } from 'react-icons/gi'
import { RxEyeNone } from 'react-icons/rx'

const palletes = {
  success: 'bg-green-500',
  close: 'bg-red-500',
  save: 'bg-yellow-500',
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
      className={` ${buttonColor}`}
    >
      <ButtonIcon/>
    </button>
  )
}

export default NotificationAction
