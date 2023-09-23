'use client'
import { useState } from 'react'
import Newsletter from '@/components/Newsletter'
import SubmitSuccess from '@/components/SubmitSuccess'
export default function Home() {
  const [submitSuccess, setSubmitSuccess] = useState(false)
  return (
    <main className='min-h-screen bg-gray-900'>
      <div className='p-24'>
        {submitSuccess ? (
          <SubmitSuccess setSubmitSuccess={setSubmitSuccess} />
        ) : (
          <Newsletter setSubmitSuccess={setSubmitSuccess} />
        )}
      </div>
    </main>
  )
}
