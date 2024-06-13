import ThemeToggle from '@/src/theme/ThemeToggle'
import React from 'react'
import { LoginButton } from '../auth/LoginButton'
import { getAuthSession } from '@/lib/auth'
import { UserProfile } from '../auth/UserProfile'

export const Header = async() => {
  const session = await getAuthSession();
  return (
    <header className='border-b border-b-accent'>
        <div className='container flex items-center py-2 max-w-lg gap-1'>
            <h2 className='text-2xl font-bold mr-auto'>Thread</h2>
            <ThemeToggle/>
          {session?.user.name ? 
              <UserProfile/>
           : 
            <LoginButton/>}
        </div>
    </header>
  )
}