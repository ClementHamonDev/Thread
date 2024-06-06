import { Button } from '@/components/ui/button'
import React from 'react'

export const Header = async() => {
  return (
    <header className='border-b border-b-accent'>
        <div className='container flex items-center py-2 max-w-lg gap-1'>
            <h2 className='text-2xl font-bold mr-auto'>Thread</h2>
            <Button>Login</Button>
        </div>
    </header>
  )
}
