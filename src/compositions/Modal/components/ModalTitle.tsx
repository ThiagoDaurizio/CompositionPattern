import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const ModalTitle = ({
  children
}: IProps) => {

  return (
    <p className='font-semibold text-lg text-slate-700'>{children}</p>
  )
}

export default ModalTitle
