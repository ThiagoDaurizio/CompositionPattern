import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const ModalFooter = ({children}: IProps) => {
  return (
    <div className='p-2 flex justify-end gap-2'>
      {children}
    </div>
  )
}

export default ModalFooter