import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'

export const FeedbackFormBanner = () => {
  return (
    <Card className='bg-gradient-to-tl from-emerald-950 to-emerald-600 text-background rounded-4xl'>
      <CardHeader className='space-y-6'>
        <CardTitle className='text-3xl md:text-4xl font-normal'>
          Share your feedback with our team
        </CardTitle>
        <CardDescription className='text-white/80 text-base md:text-lg max-w-md'>
          Your thoughts help us build better experiences. Whether it's a suggestion, bug report, or kind words — we’d love to hear from you.
        </CardDescription>
      </CardHeader>
      <CardFooter className='h-full rounded-xl p-6 bg-white dark:bg-emerald-950 text-black dark:text-white/60  sm:p-8 md:p-10  sm:mt-40'>
        <p className='text-base md:text-lg italic'>
          “This feedback form makes sharing ideas effortless. We feel heard.”
        </p>
      </CardFooter>
    </Card>
  )
}
