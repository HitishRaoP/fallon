import React from 'react'
import { FeedbackForm } from './feedback-form'
import { FeedbackFormBanner } from './feedback-form-banner'

export const HomeMain = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-4'>
      <FeedbackFormBanner />
      <FeedbackForm />
    </div>
  )
}
