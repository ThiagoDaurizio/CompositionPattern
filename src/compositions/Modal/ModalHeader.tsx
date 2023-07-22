import React, { ReactNode } from 'react'


interface IProps {
  children?: ReactNode
}

const ModalHeader = ({children}: IProps) => {
  return (
    <div className='px-2 flex items-center bg-slate-600 h-8' >
      {children}
    </div>
  )
}

export default ModalHeader