import ThemeToggle from '@/src/theme/ThemeToggle'
import React from 'react'
import { LoginButton } from '../auth/LoginButton'

export const Header = async() => {
  return (
    <header className='border-b border-b-accent'>
        <div className='container flex items-center py-2 max-w-lg gap-1'>
            <h2 className='text-2xl font-bold mr-auto'>Thread</h2>
            <ThemeToggle/>
            <LoginButton/>
        </div>
    </header>
  )
}
