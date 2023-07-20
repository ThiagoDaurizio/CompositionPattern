'use client'

import React from 'react'
import { Notification } from '@/compositions/Notification'

const NotificationSetup = () => {

const handleSuccess = () => {

}

const handleClose = () => {

}

const handleSave = () => {

}

  return (
    <div className='absolute right-0 top-0 w-[200px] bg-slate-400 gap-1 h-screen p-2'>
      <Notification.Root>
        <Notification.Content>
          <Notification.Icon notificationIcon='question'/>
          <Notification.Info>
            <Notification.Text>
              title note here
            </Notification.Text>
            <Notification.Text>
              info note here
            </Notification.Text>
          </Notification.Info>
        </Notification.Content>
        <Notification.Footer>
          <Notification.Action
            color='success'
            onClick={handleSuccess}
          />
          <Notification.Action
            color='close'
            onClick={handleClose}
          />
        </Notification.Footer>
      </Notification.Root>

      <Notification.Root>
        <Notification.Content>
          <Notification.Icon notificationIcon='general'/>
          <Notification.Info>
            <Notification.Text>
              title note here
            </Notification.Text>
            <Notification.Text>
              info note here
            </Notification.Text>
          </Notification.Info>
        </Notification.Content>
        <Notification.Footer>
          <Notification.Action
            color='success'
            onClick={handleSuccess}
          />
        </Notification.Footer>
      </Notification.Root>
    </div>
  )
}

export default NotificationSetup
