import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const ModalTitle = ({
  children
}: IProps) => {

  return (
    <p>{children}</p>
  )
}

export default ModalTitle
