import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const ModalRoot = ({children}: IProps) => {
  return (
    <div className='min-h-screen w-screen bg-slate-800/70 absolute top-0 left-0 z-40'>
      <div className='w-[360px] bg-slate-200 rounded-md overflow-hidden drop-shadow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        {children}
        <button className='absolute top-0 right-2'>
        
        </button>
      </div>
    </div>
  )
}

export default ModalRoot
