import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const ModalContent = ({children}: IProps) => {
  return (
    <div className='p-2 flex justify-center items-center' >
      {children}
    </div>
  )
}

export default ModalContent