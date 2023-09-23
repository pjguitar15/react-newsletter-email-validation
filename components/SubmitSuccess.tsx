'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const SubmitSuccess = ({ setSubmitSuccess }: any) => {
  const handleDismiss = () => {
    setSubmitSuccess(false)
  }
  return (
    <div className='bg-white px-9 py-7 rounded-lg max-w-2xl mx-auto text-center'>
      <div className='flex gap-12 h-full'>
        {/* Text Content */}
        <div className='text-gray-900 flex-1 flex justify-center flex-col'>
          <FontAwesomeIcon
            className='text-green-500 text-5xl mb-3'
            icon={faCircleCheck}
          />
          <h1 className='text-4xl font-bold mb-4'>Thanks for Subscribing!</h1>
          <p className='mb-4'>
            A confirmation has been sent to {`<your-email>`}. Please open it and
            click the button inside to confirm your subscription.
          </p>
          <button
            onClick={handleDismiss}
            className='bg-gray-800 text-white font-semibold text-md px-4 py-3 rounded mt-3 w-full'
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubmitSuccess
