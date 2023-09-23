'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const LI_CONTENT = [
  `This simple project was built with NextJS`,
  `TypeScript strict types helps a lot!`,
  `This was styled so quickly, thanks to TailwindCSS!`,
]

const Newsletter = ({ setSubmitSuccess }: any) => {
  const [input, setInput] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const validateEmail = () => {
    if (input.includes('@')) {
      const splitAtSymbol = input.split('@')
      const emailName = splitAtSymbol[0]
      const domainName = splitAtSymbol[1]
      const splitDomainName = domainName.split('.')
      const isEmailNameValid = emailName.length > 2
      const isDomainNameValid =
        splitDomainName.length === 2 && splitDomainName[0].length > 2

      if (isEmailNameValid && isDomainNameValid) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!validateEmail()) {
      setErrorMessage('Invalid Email')
    } else {
      setErrorMessage('')
      setSubmitSuccess(true)
      setInput('')
    }
  }

  return (
    <div className='bg-white px-9 py-7 rounded-lg max-w-5xl mx-auto'>
      <div className='flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 h-full'>
        {/* Text Content */}
        <div className='text-gray-900 flex-1 flex justify-center flex-col'>
          <h1 className='text-4xl font-bold mb-4'>Newsletter with React ^^</h1>
          <p className='mb-4 text-gray-500'>
            This project showcases email validation using ReactJS. Built with
            heart and passion by <strong>Philcob Suzuki Josol</strong>.
          </p>
          <ul className='flex flex-col gap-3'>
            {LI_CONTENT.map((item, index) => (
              <li key={index} className='flex gap-3'>
                <FontAwesomeIcon
                  className='text-orange-400 text-2xl'
                  icon={faCircleCheck}
                />
                <p className='font-medium'>{item}</p>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className='py-5'>
            <div>
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder='email@domain.com'
                className={`border border-gray-200 bg-gray-100 px-4 py-2 w-full outline-none focus:border-gray-600`}
                type='text'
              />
            </div>
            <h6 className='text-red-500 font-semibold mt-3 text-sm'>
              {errorMessage && 'Incorrect email format'}
            </h6>
            <div>
              <button className='bg-gray-800 text-white font-semibold text-md px-4 py-3 rounded mt-3 w-full'>
                Subscribe to our Newsletter
              </button>
            </div>
          </form>
        </div>

        <div className='flex-1'>
          <Image
            className='w-full h-72 lg:h-full object-cover'
            src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces'
            alt=''
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

export default Newsletter
