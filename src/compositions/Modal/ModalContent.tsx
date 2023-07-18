import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const ModalContent = ({children}: IProps) => {
  return (
    <div className='p-2 min-h-[200px] flex justify-center items-center' >
      {children}
    </div>
  )
}

export default ModalContent