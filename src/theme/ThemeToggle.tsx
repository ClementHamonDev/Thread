'use client'
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes'
import React from 'react'

const ThemeToggle = () => {
    const { setTheme, theme } = useTheme();
    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => {
                setTheme(theme === 'light' ? "dark" : "light")
            }}>
                Jour nuit
        </Button>
    )
}

export default ThemeToggle
