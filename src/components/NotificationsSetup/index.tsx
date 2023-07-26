'use client'

import React, { useState } from 'react'
import { Notification } from '@/compositions/Notification'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

const NotificationSetup = () => {
  const [isOpened, set_isOpened] = useState<boolean>(false)

const handleSuccess = () => {

}

const handleClose = () => {

}

const handleSave = () => {

}

  return (
    <div className='absolute top-0 right-0'>
    {!isOpened ? 
      <div onClick={() => set_isOpened(true)}
        className='text-emerald-400 text-[32px] p-2 cursor-pointer'
      >
        <AiOutlineMenu/>
      </div>
      :
      <div
        className='w-[220px] bg-slate-500 h-screen pt-2 cursor-pointer text-slate-200'
      >
        <p className='text-center font-bold text-emerald-500'>Notifications</p>
        <span onClick={() => set_isOpened(false)} 
          className='absolute left-[-10px] bg-slate-500 p-1 rounded-full'>
          <IoMdClose />
        </span>
        <ul className='p-2 flex flex-col gap-3 mt-5'>
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

        <li>
          <Notification.Root>
            <Notification.Content>
              <Notification.Icon notificationIcon='none'/>
              <Notification.Info>
                <Notification.Text textTier='title'>
                  GameX on Steam has ready to updates!
                </Notification.Text>
              </Notification.Info>
            </Notification.Content>
            <Notification.Footer>
              <Notification.Action
                color='success'
                onClick={handleSuccess}
              />
              <Notification.Action
                color='save'
                onClick={handleSave}
              />
            </Notification.Footer>
          </Notification.Root>
        </li>
        </ul>
      </div>
    }
    </div>
  )
}

export default NotificationSetup
