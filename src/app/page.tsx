'use client'

import { Modal } from "@/compositions/Modal"
import { useState } from "react"

export default function Home() {
  const [isOpened, set_isOpened] = useState<boolean>(true)

  return (
    <main className="bg-slate-100 min-h-screen">
      <p>HOME</p>

      {isOpened && 
        (<Modal.Root>
          <Modal.Header>
            <Modal.Title>
              Modal Title
            </Modal.Title>
          </Modal.Header>
          <Modal.Content>
            Modal Content

          </Modal.Content>
          <Modal.Footer>
            <Modal.Action color={'success'}>Accept</Modal.Action>
            <Modal.Action color={'error'}>Decline</Modal.Action>
          </Modal.Footer>
        </Modal.Root>
      )}
    </main>
  )
}
