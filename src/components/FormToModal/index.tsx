import React from 'react'

const FormToModal = () => {
  return (
    <form className='flex flex-col items-center gap-3 w-full mb-2'>
      <label className='flex flex-col items-center w-full'>
        <p className='w-[75%] px-4'>Nickname</p>
        <input
          className='bg-slate-600 w-[75%] rounded-full p-[2px] px-3 
          border border-slate-300 focus:border-emerald-500
          text-emerald-500'
        />
      </label>
      <label className='flex flex-col items-center w-full'>
        <p className='w-[75%] px-4'>Access Key</p>
        <input
          className='bg-slate-600 w-[75%] rounded-full p-[2px] px-3 
          border border-slate-300 focus:border-emerald-500
          text-emerald-500'
          type={'password'}
        />
      </label>
    </form>
  )
}

export default FormToModal
