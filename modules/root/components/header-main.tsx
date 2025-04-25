import React from 'react'
import { ThemeToggle } from './theme-toggle'
import { Button } from '@/components/ui/button'

export const HeaderMain = () => {
  return (
    <header className='flex items-center justify-between border bg-card rounded-2xl p-8 mb-6'>
      <ThemeToggle />
      <Button variant={"outline"}>
        Switch to admin
      </Button>
    </header>
  )
}
