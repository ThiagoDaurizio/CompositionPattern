'use client'

import { Modal } from "@/compositions/Modal"
import { useState } from "react"

export default function Home() {
  const [isOpened, set_isOpened] = useState<boolean>(false)

  const handleConfirm = () => {
    window.alert('confirmed')
    set_isOpened(false)
  }

  return (
    <main className="bg-slate-100 min-h-screen flex justify-center pt-8">
      <button 
        onClick={() => set_isOpened(true)}
        className="bg-slate-600 rounded-md text-slate-100 h-[32px] w-[100px]"
      >Open Modal</button>

      {isOpened && 
        (<Modal.Root backdropClose onClose={() => set_isOpened(false)}>
          <Modal.Header>
            <Modal.Title>
              Modal Title
            </Modal.Title>
          </Modal.Header>
          <Modal.Content>
            Modal Content

          </Modal.Content>
          <Modal.Footer>
            <Modal.Action 
              color={'success'}
              onClick={handleConfirm}
            >OK</Modal.Action>
            <Modal.Action 
              color={'error'}
              onClick={() => set_isOpened(false)}
            >Cancel</Modal.Action>
          </Modal.Footer>
        </Modal.Root>
      )}
    </main>
  )
}
