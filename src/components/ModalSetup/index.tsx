'use client'
import React, { useState } from 'react'
import { Modal } from '@/compositions/Modal'


const ModalSetup = () => {
  const [isOpenedClassic, set_isOpenedClassic] = useState<boolean>(false)
  const [isOpenedAdvise, set_isOpenedAdvise] = useState<boolean>(false)
  const [isOpenedDecision, set_isOpenedDecision] = useState<boolean>(false)


  const handleConfirm = () => {
    window.alert('confirmed')
    set_isOpenedClassic(false)
    set_isOpenedDecision(false)
  }

  return (
    <>
      <ul className="flex gap-2">
        <li>
          <button 
            onClick={() => set_isOpenedClassic(true)}
            className="bg-slate-600 rounded-md text-slate-100 h-[32px] w-[175px]"
          >
            Open Modal Classic
          </button>
        </li>

        <li>
          <button 
            onClick={() => set_isOpenedAdvise(true)}
            className="bg-slate-600 rounded-md text-slate-100 h-[32px] w-[175px]"
          >
            Open Modal Advise
          </button>
        </li>

        <li>
          <button 
            onClick={() => set_isOpenedDecision(true)}
            className="bg-slate-600 rounded-md text-slate-100 h-[32px] w-[175px]"
          >
            Open Modal Decline
          </button>
        </li>
      </ul>

    {isOpenedClassic && 
      (<Modal.Root>
        <Modal.Header>
          <Modal.Title>
            Modal Classic Title
          </Modal.Title>
        </Modal.Header>

        <Modal.Content>
          Modal content here
        </Modal.Content>

        <Modal.Footer>
          <Modal.Action color="success" onClick={handleConfirm}>
            OK
          </Modal.Action>
          <Modal.Action color='error' onClick={() => set_isOpenedClassic(false)}>
            Cancel
          </Modal.Action>
        </Modal.Footer>
      </Modal.Root>
    )}

    {isOpenedAdvise && 
      (<Modal.Root>
        <Modal.Header/>

        <Modal.Content>
          Modal advise here
        </Modal.Content>

        <Modal.Footer>
          <Modal.Action color='info' onClick={() => set_isOpenedAdvise(false)}>
            Ok
          </Modal.Action>
        </Modal.Footer>
      </Modal.Root>
    )}

    {isOpenedDecision && 
      (<Modal.Root>
        <Modal.Header/>

        <Modal.Content>
          You is alright of this?
        </Modal.Content>

        <Modal.Footer>
          <Modal.Action color='success' onClick={handleConfirm}>
            YES
          </Modal.Action>
          <Modal.Action color='error' onClick={() => set_isOpenedDecision(false)}>
            NO
          </Modal.Action>
        </Modal.Footer>
      </Modal.Root>
      )}
    </>
  )
}

export default ModalSetup
