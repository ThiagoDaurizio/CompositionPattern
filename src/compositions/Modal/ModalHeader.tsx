import React, { ReactNode } from 'react'


interface IProps {
  children: ReactNode
}

const ModalHeader = ({children}: IProps) => {
  return (
    <div className='p-2 bg-slate-300' >
      {children}
    </div>
  )
}

export default ModalHeader