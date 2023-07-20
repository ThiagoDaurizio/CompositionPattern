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
    <ul className='absolute right-0 top-0 w-[220px] bg-slate-500 h-screen p-2 flex flex-col gap-3'>
      <li>
        <Notification.Root>
          <Notification.Content>
            <Notification.Icon notificationIcon='question'/>
            <Notification.Info>
              <Notification.Text textTier='title'>
                An decision note
              </Notification.Text>
              <Notification.Text textTier='subtitle'>
                Save site cookies?
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
      </li>

      <li>
        <Notification.Root>
          <Notification.Content>
            <Notification.Icon notificationIcon='general'/>
            <Notification.Info>
              <Notification.Text textTier='title'>
                Advise note here
              </Notification.Text>
              <Notification.Text textTier='subtitle'>
                Drink water today!
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
      </li>

      <li>
        <Notification.Root>
          <Notification.Content>
            <Notification.Icon notificationIcon='menssage'/>
            <Notification.Info>
              <Notification.Text textTier='subtitle'>
                This doc is used to studdy Composition Pattern :)
              </Notification.Text>
            </Notification.Info>
          </Notification.Content>
          <Notification.Footer>
            <Notification.Action
              color='save'
              onClick={handleSave}
            />
            <Notification.Action
              color='close'
              onClick={handleClose}
            />
          </Notification.Footer>
        </Notification.Root>
      </li>
    </ul>
  )
}

export default NotificationSetup
